import { Request, Response, NextFunction } from "express";
import repositories from "../utils/repositories";
import { Contact } from "../entities";

const verifyContactExists = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void | Response> => {
  let contactId = Number(req.params.id);

  const userFind = await repositories.contact.findOneBy({
    id: contactId,
  });

  console.log(userFind);

  if (!userFind) {
    return res.json({ message: "Contact does not exist" }).status(404);
  }

  next();
};

const verifyUserAndOwner = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void | Response> => {
  let contactId = Number(req.params.id);
  let userId = Number(res.locals.userId);

  const contact: Contact | null = await repositories.contact.findOne({
    where: { id: contactId },
    relations: ["user"],
  });

  if (contact?.user.id != userId)
    return res
      .status(404)
      .json({ message: "you need to be the owner to be able to edit" });

  next();
};

const contactMiddlewares = {
  verifyContactExists,
  verifyUserAndOwner,
};

export default contactMiddlewares;
