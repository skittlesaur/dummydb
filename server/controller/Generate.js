import Categories from "../data/types/categories.js";
import basic from "../data/types/basic.js";

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