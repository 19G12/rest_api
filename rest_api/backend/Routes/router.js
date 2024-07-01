import express from "express";
import { getAllTrains, getOneTrain, redirectTrains } from "../Controller/dataController.js";

const Route = express();

Route.route("/").get(getAllTrains);
Route.route("/train/:train").get(getOneTrain);
Route.route("/train").get(redirectTrains);

export default Route;