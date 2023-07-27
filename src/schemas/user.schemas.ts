import { z } from "zod";

const login = z.object({
  password: z.string(),
  email: z.string().email(),
});

const user = z.object({
  id: z.number(),
  completName: z.string(),
  email: z.string().email(),
  contactPhone: z.string(),
  createdAt: z.string(),
  password: z.string(),
  contacts: z.any(),
});

const request = user.omit({
  id: true,
  createdAt: true,
});

const requestPartial = request.partial();

const response = user.omit({
  password: true,
});

const responseArray = response.array();

const userSchemas = {
  login,
  user,
  request,
  response,
  requestPartial,
  responseArray,
};

export default userSchemas;
