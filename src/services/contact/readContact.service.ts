import { Contact } from "../../entities";
import repositories from "../../utils/repositories";

const readAllContacts = async (): Promise<Contact[] | null> => {
  const contactsData = await repositories.contact.find();

  return contactsData;
};

export default readAllContacts;
