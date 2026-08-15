import { useEffect, useState } from "react";

import { getAllContacts } from "../services/contactService";

import type { Contact } from "../types/contact.types";


export function useAllContacts() {

    const [contacts, setContacts] = useState<Contact[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);


    useEffect(() => {

        const fetchContacts = async () => {

            try {

                setLoading(true);
                setError(null);

                const data = await getAllContacts();

                setContacts(data);

                console.log(data);

            } catch (error) {

                console.error(error);

                setError(
                    error instanceof Error
                        ? error.message
                        : "Error al obtener los contactos"
                );

            } finally {

                setLoading(false);

            }
        };

        fetchContacts();

    }, []);


    return {
        contacts,
        loading,
        error
    };
}