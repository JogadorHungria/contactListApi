import { TUserRequest, TUserResponse } from "../../interfaces/user.interfaces";
import userSchemas from "../../schemas/user.schemas";
import repositories from "../../utils/repositories";

const createUser = async (data: TUserRequest) => {

  const newUser = repositories.user.create(data);

  await repositories.user.save(newUser);

  const userResponse: TUserResponse = userSchemas.response.parse(newUser);
  return userResponse;
};

export default createUser;
