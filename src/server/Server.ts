import "dotenv/config";
import express from "express";
import { router } from "./routes";
import "./shared/services/Translations";

const server = express();

server.use(express.json());

server.use(router);

export { server };
