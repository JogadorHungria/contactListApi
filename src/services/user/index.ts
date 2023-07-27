import createUser from "./createUser.service";
import deleteUser from "./deletUser.service";
import listAllUser from "./findByAllUser.service";

const userServices = {
  createUser,
  deleteUser,
  listAllUser,
};

export default userServices;
