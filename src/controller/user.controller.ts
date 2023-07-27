import { Request, Response } from "express";
import { TUserResponse } from "../interfaces/user.interfaces";
import userServices from "../services/user";

const userLogin = async (req: Request, res: Response): Promise<Response> => {
  const body = req.body;
  const token = await userServices.login(body);
  return res.json(token);
};

const userCreation = async (req: Request, res: Response): Promise<Response> => {
  const body = req.body;
  const newUser: TUserResponse = await userServices.createUser(body);
  return res.json(newUser).status(201);
};

const userRead = async (req: Request, res: Response): Promise<Response> => {
  const userId = Number(req.params.id);
  const user: TUserResponse = await userServices.listUser(userId);
  return res.json(user);
};

const userReadProfile = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const userId = Number(res.locals.userId);

  const user: TUserResponse = await userServices.listUser(userId);
  return res.json(user);
};

const userReadAll = async (req: Request, res: Response) => {
  const usersList = await userServices.listAllUser();
  return res.json(usersList);
};

const userUpdate = async (req: Request, res: Response): Promise<Response> => {
  const dataUser = req.body;
  const userId = Number(res.locals.userId);
  const newData = await userServices.updateUser(dataUser, userId);
  return res.json(newData);
};

const userDelete = (req: Request, res: Response): Response => {
  const userId = Number(res.locals.userId);
  userServices.deleteUser(userId);
  return res.sendStatus(204);
};

const usersControler = {};

export default usersControler;
