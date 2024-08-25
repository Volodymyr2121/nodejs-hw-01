import { createFakeContact } from "../utils/createFakeContact.js";
import { getAllContacts } from "./getAllContacts.js";
import updateContacts from './updateContacts.js';

const generateContacts = async (number) => {

    const contactList = await getAllContacts();
    const newcontactList = Array(number).fill(0).map(() => createFakeContact());
    const result = [...contactList, ...newcontactList];

    await updateContacts(result);
};

generateContacts(5);
