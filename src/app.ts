import express from "express";
import cors from "cors";
import tasksRouter from "./routers/task-router.js";
const server = express();
server.use(express.json());
server.use(cors());

server.use(tasksRouter);
server.listen(5000, () => console.log("to rodando"));
