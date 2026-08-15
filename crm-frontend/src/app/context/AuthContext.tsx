import React, {
    createContext,
    useEffect,
    useState
} from "react";

interface AuthContextType {
    token: string | null;
    id: string | null;
    role: string | null;
    login: (
        token: string,
        id: string,
        role: string
    ) => void;
    logout: () => void;
}

export const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider: React.FC<{
    children: React.ReactNode
}> = ({ children }) => {

    const [token, setToken] = useState<string | null>(
        localStorage.getItem("token")
    );

    const [id, setId] = useState<string | null>(
        localStorage.getItem("id")
    );

    const [role, setRole] = useState<string | null>(
        localStorage.getItem("role")
    );


    useEffect(() => {

        if (token) {
            localStorage.setItem("token", token);
        } else {
            localStorage.removeItem("token");
        }

        if (id) {
            localStorage.setItem("id", id);
        } else {
            localStorage.removeItem("id");
        }

        if (role) {
            localStorage.setItem("role", role);
        } else {
            localStorage.removeItem("role");
        }

    }, [token, id, role]);


    const login = (
        newToken: string,
        userId: string,
        userRole: string
    ) => {

        setToken(newToken);
        setId(userId);
        setRole(userRole);

    };


    const logout = () => {

        setToken(null);
        setId(null);
        setRole(null);

    };


    return (
        <AuthContext.Provider
            value={{
                token,
                id,
                role,
                login,
                logout
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};