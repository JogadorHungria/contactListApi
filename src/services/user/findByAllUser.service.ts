import { TUserResponse } from "../../interfaces/user.interfaces";
import userSchemas from "../../schemas/user.schemas";
import repositories from "../../utils/repositories";

const listAllUser = async (): Promise<TUserResponse[]> => {
  const users = await repositories.user.find({ relations: ["contacts"] });

  return userSchemas.responseArray.parse(users);
};

export default listAllUser;
