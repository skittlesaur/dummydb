import {
    getBlank,
    getBoolean,
    getColor,
    getDateTime,
    getEncryptedText,
    getHexColor, getInteger, getMongoDbObjectId,
    getNumber, getPassword, getTimestamp
} from "./BasicController.js";
import {
    getCompanyName,
    getCorporateDepartment,
    getCreditCardNumber,
    getCreditCardType,
    getCurrency, getCurrencyCode
} from "./BusinessController.js";

const getValue = (type) => {
    switch (type.toLowerCase()) {
        case "blank":
            return getBlank();
        case "boolean":
            return getBoolean();
        case "color":
            return getColor();
        case "datetime":
            return getDateTime();
        case "encrypted text":
            return getEncryptedText();
        case "hex color":
            return getHexColor();
        case "integer":
            return getInteger();
        case "mongodb objectid":
            return getMongoDbObjectId();
        case "number":
            return getNumber();
        case "password":
            return getPassword();
        case "time":
            return getTimestamp();

        case "company name":
            return getCompanyName();
        case "corporate department":
            return getCorporateDepartment();
        case "credit card number":
            return getCreditCardNumber();
        case "credit card type":
            return getCreditCardType();
        case "currency":
            return getCurrency();
        case "currency code":
            return getCurrencyCode();
    }
}

export default getValue;