import { createAction } from "@reduxjs/toolkit";

export const addContacts = createAction("contacts/add");
// console.log("addContacts", addContacts.toString());

export const deleteContact = createAction("contacts/delete");
// console.log("deleteContact", deleteContact);
