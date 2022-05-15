import express from "express";
import {generateData, getCategories, getType} from "../controller/Generate.js";

const router = express.Router();

router.get('/types', getCategories);
router.get('/types/:type', getType);
router.post('', generateData);

export default router;