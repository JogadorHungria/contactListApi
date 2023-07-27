import { Router } from "express";
import contactsControler from "../controller/contacts.controller";
import userMiddlewares from "../middlewares/user.middlewares";
import contactSchemas from "../schemas/contact.schemas";
import validateSchema from "../middlewares/validateSchema.middlewares";
import contactMiddlewares from "../middlewares/contact.middlewares";

const contacts = Router();

contacts.use(userMiddlewares.verifyToken);

contacts.post(
  "",
  validateSchema(contactSchemas.request),
  contactsControler.contactCreation
);

contacts.get("", contactsControler.contactRead);

contacts.patch(
  "/:id",
  validateSchema(contactSchemas.requestPartial),
  contactMiddlewares.verifyContactExists,
  contactMiddlewares.verifyUserAndOwner,
  contactsControler.contactUpdate
);

contacts.delete(
  "/:id",
  contactMiddlewares.verifyContactExists,
  contactsControler.contactDelete
);

export default contacts;
