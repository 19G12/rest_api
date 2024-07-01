import express from "express";
import { getNumbers } from "../Components/component.js";

const Route = express();

Route.route("/numbers").get(getNumbers);

export default Route;