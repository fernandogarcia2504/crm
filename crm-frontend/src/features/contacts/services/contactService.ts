import type { Contact, CreateContactData, UpdateContactData, GetContactResponse, GetContactsResponse, UpdateContactResponse, CreateContactResponse, GetAllContactsResponse } from "../types/contact.types";

const API_URL = "http://localhost:3000/api";

export const getAllContacts = async(): Promise<Contact[]> => {
    const response = await fetch(`${API_URL}/contacts/`)

    if(!response.ok) {
        throw new Error (
            "Error al obtener todos los contactos de todas las empresas"
        )
    }

    const data: GetAllContactsResponse = await response.json()

    return data.contacts
}

export const getContacts = async(companyId: string): Promise<Contact[]> => {
    const response = await fetch(`${API_URL}/contacts/${companyId}`)

    if(!response.ok) {
        throw new Error (
            "Error al obtener todos los contactos de todas las empresas"
        )
    }

    const data: GetContactsResponse = await response.json()

    return data.contacts
}

export const getContact = async (contactId: string, companyId: string): Promise<Contact> => {

    const response = await fetch(`${API_URL}/contacts/${companyId}/contacts/${contactId}`)

    if (!response.ok) {
        throw new Error(
            "Error al obtener la empresa"
        );
    }

    const data: GetContactResponse = await response.json();

    return data.contact;

}

export const createContact = async (companyId: string, contactData: CreateContactData): Promise<Contact> => {

    const response = await fetch(`${API_URL}/${companyId}`, {
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },

        body: JSON.stringify(contactData)
    })

    const data: CreateContactResponse = await response.json();

    if (!response.ok) {
        throw new Error(
            data.message || "Error al crear la empresa"
        );
    }

    return data.contact;
}

export const updateContact = async (companyId: string, contactId: string, contactData: UpdateContactData ): Promise<Contact> => {

    const response = await fetch( `${API_URL}/${companyId}/contacts/${contactId}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify(contactData)
        }
    );

    const data: UpdateContactResponse = await response.json();

    if (!response.ok) {
        throw new Error(
            data.message || "Error al actualizar la empresa"
        );
    }

    return data.contact;
};



