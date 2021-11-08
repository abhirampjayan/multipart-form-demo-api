import FormController from "../middleware/formController.js";
import express from "express";
const router = express.Router();

router.route("/").get(FormController.formMulti);

export default router;
