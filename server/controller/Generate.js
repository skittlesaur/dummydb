import Categories from "../data/types/categories.js";
import basic from "../data/types/basic.js";
import ValueParser from "./types/ValueParser.js";
import CSVFormatter from "./formatter/CSVFormatter.js";
import JSONFormatter from "./formatter/JSONFormatter.js";
import output from "../data/output.js";

export const getCategories = async (req, res) => {
    res.status(200).json({
        categories: Categories
    });
}

export const getType = async (req, res) => {
    const {type} = req.params;

    const dataArr = () => {
        switch (type?.toUpperCase()) {
            case "BASIC":
                return basic;
            default:
                return [...basic];
        }
    };

    res.status(200).json({
        data: dataArr()
    });
}

export const getOutputFormats = async (req, res) => {
    res.status(200).json(output);
}

export const generateData = async (req, res) => {
    try {
        const {type, data} = req.body;
        const n = parseInt(req.query.n) || 10;

        const records = generateRecords(data, n);
        const result = convertArray(type, records);
        res.status(200).json({
            headers: records[0],
            json: JSONFormatter(records),
            raw: result
        })
    } catch (e) {
        console.log(e);
        res.status(400).json({message: e.message});
    }
}

const generateRecords = (fields, n) => {
    const table = [];
    for (let i = 0; i <= n; i++) {
        table.push([]);
    }

    for (let i = 0; i < fields.length; i++) {
        const field = fields[i];
        table[0][i] = field.field;

        for (let j = 0; j < n; j++) {
            table[j + 1][i] = ValueParser(field.type);
        }
    }

    return table;
}

const convertArray = (type, records) => {
    switch (type.toUpperCase()) {
        case "JSON":
            return JSON.stringify(JSONFormatter(records));
        case "CSV":
            return CSVFormatter(records);
    }
}