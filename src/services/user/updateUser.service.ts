import { User } from "../../entities";
import { TUserResponse } from "../../interfaces/user.interfaces";
import userSchemas from "../../schemas/user.schemas";
import repositories from "../../utils/repositories";

const updateUser = async (
  data: any,
  userId: number
): Promise<TUserResponse> => {
  const user: User | null = await repositories.user.findOneBy({
    id: userId,
  });

  const userNewData = {
    ...user,
    ...data,
  };

  const userPatched: User = await repositories.user.save(userNewData);
  const userResponse: TUserResponse = userSchemas.response.parse(userPatched);

  return userResponse;
};

export default updateUser;
