import { Contact, User } from "../../entities";
import { TContact, TContactRequest } from "../../interfaces/contact.interfaces";
import repositories from "../../utils/repositories";

const createContact = async (
  contactBody: TContactRequest,
  userId: number
): Promise<Contact> => {
  const user: User | null = await repositories.user.findOneBy({
    id: userId,
  });

  const contactFullBody = {
    ...contactBody,
    user: user!,
  };

  const contactData: Contact = repositories.contact.create(contactFullBody);
  await repositories.contact.save(contactData);

  return contactData;
};

export default createContact;
