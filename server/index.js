import express from "express";
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import generate from "./routes/generate.js";

const index = express();
dotenv.config();

index.use(bodyParser.json({extended: true}));
index.use(bodyParser.urlencoded({extended: true}));
index.use(cors());

index.use('/generate', generate);

index.get('/', (req, res) => {
    res.json({
        title: "Dummy Database API",
        version: process.env.npm_package_version
    })
});

const PORT = process.env.PORT;
index.listen(PORT, () => console.log(`Server listening on port ${PORT}`))