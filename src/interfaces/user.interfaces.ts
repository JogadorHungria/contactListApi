import { z } from "zod";
import userSchemas from "../schemas/user.schemas";
import { DeepPartial } from "typeorm";

type TUser = z.infer<typeof userSchemas.user>;
type TUserRequest = z.infer<typeof userSchemas.request>;
type TUserResponse = z.infer<typeof userSchemas.response>;

type TUserUpdate = DeepPartial<TUserRequest>;

export { TUser, TUserRequest, TUserResponse, TUserUpdate };
