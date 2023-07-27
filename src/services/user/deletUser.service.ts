import repositories from "../../utils/repositories";

const deleteUser = async (userId: number): Promise<void> => {
  await repositories.user.delete({ id: userId });
  return;
};

export default deleteUser;
