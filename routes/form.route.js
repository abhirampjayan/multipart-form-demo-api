import FormController from "../middleware/formController.js";
import express from "express";
import multer from "multer";

const router = express.Router();
const upload = multer({ dest: "uploads/" });
router.route("/").post(FormController.formMulti);
router
  .route("/upload")
  .post(upload.single("document"), function (req, res, next) {
    console.log(req.file);
    const header = req.headers;
    if (!header.authorization) {
      res.status(404).json({
        error: {
          statusCode: 404,
          message: "authorization is required",
        },
      });
    } else if (!req.file) {
      res.status(404).json({
        error: {
          statusCode: 404,
          message: "document is required",
        },
      });
    } else {
      res.json({
        document: {
          id: req.file.filename,
        },
      });
    }
  });

export default router;
