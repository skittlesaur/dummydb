import {getBoolean, getNumber} from "./BasicController.js";

const getValue = (type) => {
    switch (type.toLowerCase()) {
        case "boolean":
            return getBoolean();
        case "number":
            return getNumber();
    }
}

export default getValue;