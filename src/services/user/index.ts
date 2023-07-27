import createUser from "./createUser.service";
import deleteUser from "./deletUser.service";
import listAllUser from "./findByAllUser.service";
import listUser from "./findByUser.service";
import login from "./login.service";
import updateUser from "./updateUser.service";

const userServices = {
  createUser,
  deleteUser,
  listAllUser,
  updateUser,
  login,
  listUser,
};

export default userServices;
