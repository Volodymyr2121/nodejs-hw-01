import { getAllContacts } from "./getAllContacts.js";
import updateContacts from "./updateContacts.js";


export const removeLastContact = async () => {

    const listContacts = await getAllContacts();
    listContacts.pop();
    await updateContacts(listContacts);
};

removeLastContact();
