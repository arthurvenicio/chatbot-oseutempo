import { Router } from "express";

import { getWeather } from "../controller/weather.controller";

export const routes = Router();

routes.post("/getWeather", getWeather);
