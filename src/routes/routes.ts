import express from "express"
import { getMethod } from "../controllers/controllers"

const router = express.Router();

router.route("/").get(getMethod);

export default router;