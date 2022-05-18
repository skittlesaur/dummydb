import {random, randomN} from "../GetRandom.js";
import companyNames from "../../data/business/company-names.js";
import corporateDepartments from "../../data/business/corporate-departments.js";
import creditCardTypes from "../../data/business/credit-card-types.js";
import currencies from "../../data/business/currencies.js";
import currencyCodes from "../../data/business/currency-codes.js";

export const getCompanyName = () => {
    return random(companyNames);
}

export const getCorporateDepartment = () => {
    return random(corporateDepartments);
}

export const getCreditCardNumber = () => {
    const characters = "0123456789"
    return randomN(16, characters);
}

export const getCreditCardType = () => {
    return random(creditCardTypes);
}

export const getCurrency = () => {
    return random(currencies);
}

export const getCurrencyCode = () => {
    return random(currencyCodes);
}