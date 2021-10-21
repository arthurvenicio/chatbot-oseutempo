import { NextFunction, Request, Response } from "express";
import { parse } from "fast-xml-parser";

import { apiCptec } from "../config/apiCPTEC";
import { City } from "../types/api.types";
import { RequestDialog } from "../types/dialogflow.types";

export async function getWeather(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const body: RequestDialog = req.body;
  const city = body.queryResult.parameters.city;

  async function getCityId(city: string) {
    const data = apiCptec.get(`/listaCidades?city=${city}`).then((doc) => {
      return doc;
    });
    const xml = (await (await data).data) as string;

    const json = await parse(xml);

    const id = json.cidades.cidade.id;
    return id;
  }

  async function getWeatherPrevision(id: string) {
    const data = apiCptec
      .get(`/cidade/7dias/${id}/previsao.xml`)
      .then((doc) => {
        return doc;
      });

    const xml = (await (await data).data) as string;
    const json = await parse(xml);

    return json;
  }

  const cityId = (await getCityId(city)) as string;
  const weatherPrevision = await getWeatherPrevision(cityId);

  const { cidade }: City = weatherPrevision;

  const { nome, atualizacao, previsao } = cidade;

  return res.status(200).send({
    followupEventInput: {
      name: "findCity",
      languageCode: "pt-BR",
      parameters: {
        nameCity: nome,
        lastUpdate: atualizacao,
        previsoes: previsao,
      },
    },
  });
}
