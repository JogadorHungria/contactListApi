import { Request, Response } from "express";
import contactService from "../services/contact";
import { TContactRequest } from "../interfaces/contact.interfaces";

const contactCreation = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const userId = res.locals.userId;
  const contactBody: TContactRequest = req.body;
  const newContact = await contactService.createContact(contactBody, userId);
  return res.json(newContact);
};

const contactRead = async (req: Request, res: Response): Promise<Response> => {
  const contacts = await contactService.readAllContacts();

  return res.json(contacts);
};

const contactUpdate = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const contactId = Number(req.params.id);
  const data = req.body;
  const contactActualizated = await contactService.updateContact(
    contactId,
    data
  );
  return res.json(contactActualizated);
};

const contactDelete = (req: Request, res: Response): Response => {
  const contactId = Number(req.params.id);
  contactService.deleteContact(contactId);
  return res.sendStatus(204);
};

const contactsControler = {
  contactCreation,
  contactRead,
  contactUpdate,
  contactDelete,
};

export default contactsControler;
