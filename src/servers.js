import express from "express";
import morgan from "morgan";
import form from "../routes/form.route.js";


const app = express();

//app.use(cors());
app.use(morgan("short"));
app.use(express.json());
app.use("/api/form", form);
app.use("*", (req, res) => res.status(404).json({ error: "Not Found" }));

export default app;
