import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { Contact, User } from "../entities";

const user: Repository<User> = AppDataSource.getRepository(User);

const contact: Repository<Contact> = AppDataSource.getRepository(Contact);

const repositories = {
  user,
  contact,
};

export default repositories;
