import { getAllContacts } from "./getAllContacts.js";

export const countContacts = async () => {

    const result = await getAllContacts();
    return result.length;
};

console.log(await countContacts());
