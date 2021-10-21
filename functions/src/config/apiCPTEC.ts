import axios from "axios";

export const apiCptec = axios.create({
  baseURL: "http://servicos.cptec.inpe.br/XML",
});
