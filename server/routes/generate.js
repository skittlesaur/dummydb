import express from "express";
import {getCategories, getType} from "../controller/Generate.js";

const router = express.Router();

router.get('/types', getCategories);
router.get('/types/:type', getType);

export default router;