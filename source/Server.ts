import express from "express";
import { Request, Response } from "express";
import BaseRouter from "./routes/Main";

// Init express
const app = express();

app.use("/", BaseRouter);

export default app;
