import express from "express";
import {generateData, getCategories, getOutputFormats, getType} from "../controller/Generate.js";

const router = express.Router();

router.get('/types', getCategories);
router.get('/types/:type', getType);
router.get('/output', getOutputFormats);
router.post('', generateData);

export default router;