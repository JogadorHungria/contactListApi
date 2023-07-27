import { parse } from "path";
import { User } from "../../entities";
import { TUserResponse } from "../../interfaces/user.interfaces";
import userSchemas from "../../schemas/user.schemas";
import repositories from "../../utils/repositories";

const listUser = async (userId: number): Promise<TUserResponse> => {
  const user: User | null = await repositories.user.findOne({
    where: { id: userId },
    relations: ["contacts"],
  });

  return userSchemas.response.parse(user);
};

export default listUser;
