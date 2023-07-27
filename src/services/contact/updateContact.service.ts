import { Contact } from "../../entities";
import {
  TContact,
  TContactRequest,
  TContatcUpdate,
} from "../../interfaces/contact.interfaces";

import repositories from "../../utils/repositories";

const updateContact = async (
  contactId: number,
  contactData: TContatcUpdate
): Promise<TContact> => {
  const contact: Contact | null = await repositories.contact.findOneBy({
    id: contactId,
  });

  const newContact = Object.assign(contact!, contactData);

  await repositories.contact.save(newContact);

  return newContact;
};

export default updateContact;
