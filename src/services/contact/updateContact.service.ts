import { Contact } from "../../entities";
import {
  TContact,
  TContactResponse,
  TContatcUpdate,
} from "../../interfaces/contact.interfaces";

import repositories from "../../utils/repositories";

const updateContact = async (
  contactId: number,
  contactData: TContatcUpdate
): Promise<TContactResponse> => {
  console.log("###########################");
  console.log(contactData);
  console.log("###########################");

  const contact = await repositories.contact.findOneBy({
    id: contactId,
  });

  const newContact = Object.assign(contact!, contactData);

  await repositories.contact.save(newContact);

  return newContact;
};

export default updateContact;
