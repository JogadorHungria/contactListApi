import express, { json } from "express";
import "reflect-metadata";
import "express-async-errors";

import { handleError } from "./erros";
import routes from "./routers";

const app = express();
app.use(json());

app.use("/users", routes.users);
app.use("/contacts", routes.contacts);

app.use(handleError);

export default app;
