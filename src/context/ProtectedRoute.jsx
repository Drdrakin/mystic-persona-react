import { Navigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';
import { useToast } from '@chakra-ui/react';

const ProtectedRoute = ({ element }) => {
    const token = localStorage.getItem('token');
    const toast = useToast();

    const isTokenExpired = (token) => {
        try {
            const decodedToken = jwtDecode(token);
            const currentTime = Date.now() / 1000; // ms to seconds
            return decodedToken.exp < currentTime;
        } catch (error) {
            console.error("Error decoding token: ", error);
            return true;
        }
    };

    if (!token || isTokenExpired(token)) {
         // Fixes duplicate toast
        const id = 'login-toast';
        if (!toast.isActive(id)) { 
            toast({
                id,
                title: "Log in to access main features",
                status: 'warning',
                description: "Or create one",
                duration: 3000,
            });
        }

        return <Navigate to="/login" />;
    }

    return element;
};

export default ProtectedRoute;
