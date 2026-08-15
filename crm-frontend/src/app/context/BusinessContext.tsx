import React, {
    createContext,
    useEffect,
    useState
} from "react";

interface BusinessContextType {
    businessId: string | null;
    setBusiness: (businessId: string) => void;
    clearBusiness: () => void;
}

export const BusinessContext =
    createContext<BusinessContextType | null>(null);

export const BusinessProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {

    const [businessId, setBusinessId] = useState<string | null>(localStorage.getItem("businessId"));

    useEffect(() => {

        if (businessId) {
            localStorage.setItem("businessId", businessId);
        } else {
            localStorage.removeItem("businessId");
        }

    }, [businessId]);


    const setBusiness = (id: string) => {
        setBusinessId(id);

        localStorage.setItem("businessId", id)
    };


    const clearBusiness = () => {
        setBusinessId(null);
    };


    return (
        <BusinessContext.Provider
            value={{
                businessId,
                setBusiness,
                clearBusiness
            }}
        >
            {children}
        </BusinessContext.Provider>
    );
};