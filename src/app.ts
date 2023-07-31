import express, { json } from "express";
import "reflect-metadata";
import "express-async-errors";

import { handleError } from "./erros";
import routes from "./routers";
import cors from "cors";

const app = express();
app.use(json());
app.use(cors());

app.use("/users", routes.users);
app.use("/contacts", routes.contacts);

app.use(handleError);

export default app;
