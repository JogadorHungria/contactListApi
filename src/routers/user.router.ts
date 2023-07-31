import { Router } from "express";

import validateSchema from "../middlewares/validateSchema.middlewares";
import userSchemas from "../schemas/user.schemas";
import userMiddlewares from "../middlewares/user.middlewares";
import usersControler from "../controller/user.controller";

const users = Router();

users.post(
  "/login",
  validateSchema(userSchemas.login),
  usersControler.userLogin
);

users.post(
  "",
  validateSchema(userSchemas.request),
  userMiddlewares.verifyEmailExistsRegister,
  usersControler.userCreation
);

users.use(userMiddlewares.verifyToken);

users.get("", usersControler.userReadAll);
users.get("/profile", usersControler.userReadProfile);
users.get("/:id", userMiddlewares.verifyUserIdExists, usersControler.userRead);

users.patch(
  "",
  validateSchema(userSchemas.requestPartial),
  userMiddlewares.verifyEmailExists,
  userMiddlewares.verifyUserIdExists,
  usersControler.userUpdate
);

users.delete("", userMiddlewares.verifyUserIdExists, usersControler.userDelete);

export default users;
