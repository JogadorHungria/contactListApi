import { TContatcUpdate } from "../../interfaces/contact.interfaces";

import repositories from "../../utils/repositories";

const deleteContact = async (contactId: number): Promise<void> => {
  await repositories.contact.delete({ id: contactId });
  return;
};

export default deleteContact;
