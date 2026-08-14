import express from "express"

import { createContact, getContact, getContacts, getAllContacts , updateContact, deleteContact } from "../controllers/contacts.controller.js"

const router = express.Router()

router.post("/:companyId", createContact);

router.get("/:companyId", getContacts);

router.get("/", getAllContacts)

router.get("/:companyId/contacts/:contactId", getContact);

router.put("/:companyId/contacts/:contactId", updateContact);

router.delete("/:companyId/contacts/:contactId", deleteContact);

export default router;