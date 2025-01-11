import express from "express"
import { getMethod, postMethod } from "../controllers/controllers"

const router = express.Router();

router.route("/").get(getMethod).post(postMethod);

export default router;