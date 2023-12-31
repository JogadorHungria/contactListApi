import { z } from "zod";

import { DeepPartial } from "typeorm";
import contactSchemas from "../schemas/contact.schemas";

type TContact = z.infer<typeof contactSchemas.contact>;
type TContactRequest = z.infer<typeof contactSchemas.request>;
type TContactResponse = z.infer<typeof contactSchemas.contactResponse>;
type TContatcUpdate = z.infer<typeof contactSchemas.requestPartial>;

export { TContact, TContactRequest, TContatcUpdate, TContactResponse };
