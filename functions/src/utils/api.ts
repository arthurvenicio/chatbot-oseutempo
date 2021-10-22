import { parse } from "fast-xml-parser";
import { apiCptec } from "../config/apiCPTEC";

export async function getCityId(city: string) {
  const data = apiCptec.get(`/listaCidades?city=${city}`).then((doc) => {
    return doc;
  });
  const xml = (await (await data).data) as string;

  const json = await parse(xml);

  if (!json.cidades.cidade) {
    return "false";
  }
  const id = json.cidades.cidade[0].id;
  return id;
}

export async function getWeatherPrevision(id: string) {
  const data = apiCptec.get(`/cidade/7dias/${id}/previsao.xml`).then((doc) => {
    return doc;
  });

  const xml = (await (await data).data) as string;
  const json = await parse(xml);

  return json;
}
