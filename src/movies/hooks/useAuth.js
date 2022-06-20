import { createContext, useContext, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLocalStorage } from './useLocalStorage';
import { apiLogin } from '../services/login';

const AuthContext = createContext();

export const AuthProvider  = ({ children }) => {
    const [user, setUser] = useLocalStorage('user_movies', null);
    const navigate = useNavigate();

    const login = async (data) => {
        const tokenUser = apiLogin.loginUser(data);
        // lay token trong login - luu vao localStorage
        setUser(tokenUser);
        // quay vao trang nao do
        navigate("/up-coming", { replace: true});
    }
    const logout = () => {
        // xoa bo token trong localStorage
        setUser(null);
        // quay ve lai trang login
        navigate("/login", { replace: true});
    }

    const value = useMemo(() => ({
        user,
        login,
        logout
    }), [user]);

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export const useAuth = () => {
    // lay gia tri tu thang AuthProvider
    return useContext(AuthContext)
}