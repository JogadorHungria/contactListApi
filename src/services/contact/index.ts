import createContact from "./createContact.service";
import deleteContact from "./deleteContact.service";
import readAllContacts from "./readContact.service";
import updateContact from "./updateContact.service";

const contactService = {
  createContact,
  readAllContacts,
  updateContact,
  deleteContact,
};
export default contactService;
