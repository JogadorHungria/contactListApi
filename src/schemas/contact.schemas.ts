import { z } from "zod";
import userSchemas from "./user.schemas";

const contact = z.object({
  id: z.number(),
  completName: z.string(),
  email: z.string().email(),
  contactPhone: z.string(),
  createdAt: z.string(),
  user: userSchemas.user,
});

const request = contact.omit({
  id: true,
  createdAt: true,
  user: true,
});

const contactResponse = contact.omit({ user: true });

const requestPartial = request.partial();

const responseArray = contact.array();

const contactSchemas = {
  contact,
  request,
  requestPartial,
  responseArray,
  contactResponse,
};

export default contactSchemas;
