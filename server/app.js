import express from "express";
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import generate from "./routes/generate.js";

const app = express();
dotenv.config();

app.use(bodyParser.json({extended: true}));
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());

app.use('/generate', generate);

app.get('/', (req, res) => {
    res.json({
        title: "Dummy Database API",
        version: process.env.npm_package_version
    })
});

const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`))