import e, { Request, Response, NextFunction } from "express";
import repositories from "../utils/repositories";
import { verify } from "jsonwebtoken";

const verifyUserIdExists = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void | Response> => {
  let userId = Number(req.params.id);

  if (!userId) {
    userId = Number(res.locals.userId);
  }

  const userFind = await repositories.user.findOneBy({
    id: userId,
  });

  if (!userFind)
    return res.status(404).json({ message: "User does not exist" });

  next();
};

const verifyEmailExistsRegister = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void | Response> => {
  const email = req.body.email;

  if (email) {
    const user = await repositories.user.findOneBy({
      email: email,
    });

    if (user) return res.status(409).json({ message: "Email already in use" });
  }

  next();
};

const verifyEmailExists = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void | Response> => {
  const email = req.body.email;

  if (email) {
    const user = await repositories.user.findOneBy({
      email: email,
    });

    if (user) return res.status(409).json({ message: "Email already in use" });
  }

  next();
};

const verifyToken = (
  req: Request,
  res: Response,
  next: NextFunction
): Response | void => {
  const authorization: string | null | undefined = req.headers.authorization;

  if (!authorization)
    return res.status(401).json({ message: "Missing bearer token" });

  const [_bearer, token] = authorization.split(" ");

  verify(token, String(process.env.SECRET_KEY), (err: any, decode: any) => {
    if (err) return res.status(401).json({ message: err.message });

    const userId: string = decode.sub;
    res.locals.userId = userId;
  });

  return next();
};

const userMiddlewares = {
  verifyEmailExists,
  verifyEmailExistsRegister,
  verifyUserIdExists,
  verifyToken,
};

export default userMiddlewares;
