import express from "express";
import Route from "./Router/router.js";

const app = express();

app.use("/", Route);

app.listen("3300", () => {
    console.log("port running on 3300");
})