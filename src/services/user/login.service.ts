import { sign } from "jsonwebtoken";
import repositories from "../../utils/repositories";
import { AppError } from "../../erros";
import { User } from "../../entities";
import { compareSync } from "bcryptjs";

const login = async (data: any) => {
  const userData = data;

  const user: User | null = await repositories.user.findOneBy({
    email: userData.email,
  });

  if (!user) {
    throw new AppError("Invalid credentials", 403);
  }

  const userPassword: string = user!.password;
  const userRequestPassword: string = userData.password;

  const validatePassword: boolean = compareSync(
    userRequestPassword,
    userPassword
  );

  if (!validatePassword) throw new AppError("Invalid credentials", 403);

  const token = sign({}, String(process.env.SECRET_KEY), {
    expiresIn: "24h",
    subject: String(user.id),
  });

  const tokenObject: { token: string } = {
    token: token,
  };

  return tokenObject;
};

export default login;
