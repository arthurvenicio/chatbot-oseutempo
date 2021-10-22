import { NextFunction, Request, Response } from "express";

import { City } from "../types/api.types";
import { RequestDialog } from "../types/dialogflow.types";
import { getCityId, getWeatherPrevision } from "../utils/api";

export async function getWeather(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const body: RequestDialog = req.body;
  const city = body.queryResult.parameters.city;

  const cityId = (await getCityId(city)) as string;

  if (cityId == "false") {
    return res.status(200).send({
      followupEventInput: {
        name: "erroIdCity",
        languageCode: "pt-BR",
        parameters: {
          error: "error",
        },
      },
    });
  }

  const weatherPrevision = await getWeatherPrevision(cityId);

  const { cidade }: City = weatherPrevision;

  const { nome, atualizacao, previsao } = cidade;

  const newDate = new Date(atualizacao).toLocaleDateString("en-GB");

  const previsionList = previsao.map((doc) => {
    const newDate = new Date(doc.dia).toLocaleDateString("en-GB");
    return `\r\nData: ${newDate} \r\nMaxima: ${doc.maxima}ºC ${
      doc.maxima <= "20" ? "🥶" : "🥵"
    }  \r\nMinima: ${doc.minima}ºC ${
      doc.minima <= "20" ? "🥶" : "🥵"
    } \r\nUmidade relativa do ar: ${doc.iuv}% \r\n`;
  });

  const str = await previsionList.toString().replace(/,/g, "");

  return res.status(200).send({
    followupEventInput: {
      name: "findCity",
      languageCode: "pt-BR",
      parameters: {
        nameCity: nome,
        lastUpdate: newDate,
        previsoes: str,
      },
    },
  });

  next();
}
