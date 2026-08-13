import express from "express"

import { createContact, getContact, getContacts, updateContact, deleteContact } from "../controllers/contacts.controller"

const router = express.Router()

router.post("/:companyId/contacts", createContact);

router.get("/:companyId/contacts", getContacts);

router.get("/:companyId/contacts/:contactId", getContact);

router.put("/:companyId/contacts/:contactId", updateContact);

router.delete("/:companyId/contacts/:contactId", deleteContact);

export default router;