import { Contact, User } from "../../entities";
import {
  TContactRequest,
  TContactResponse,
} from "../../interfaces/contact.interfaces";
import contactSchemas from "../../schemas/contact.schemas";
import repositories from "../../utils/repositories";

const createContact = async (
  contactBody: TContactRequest,
  userId: number
): Promise<TContactResponse> => {
  const user: User | null = await repositories.user.findOneBy({
    id: userId,
  });

  const contactFullBody = {
    ...contactBody,
    user: user!,
  };

  const contactData: Contact = repositories.contact.create(contactFullBody);
  await repositories.contact.save(contactData);

  return contactSchemas.contactResponse.parse(contactData);
};

export default createContact;
