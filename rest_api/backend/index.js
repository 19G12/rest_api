import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import Route from "./Routes/router.js";

const app = express();    

// Configure our .env file
dotenv.config();

app.use(cors({origin: '*'}));
app.use(express.json());

app.use("/trains",Route)

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
})