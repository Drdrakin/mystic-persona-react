import { Box, FormControl, FormLabel, Input, Button, Text, useToast } from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import api from "../../api";
import styles from './LoginForm.module.css';

const LoginForm = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const toast = useToast();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const requestData = {
                email: email,
                password: password
            };

            const response = await api.post('/users/login', requestData);

            if (response.status === 200) {
                toast({
                    title: 'Successfully Logged In',
                    status: 'success',
                    duration: 5000,
                    isClosable: true,
                });
            }
            navigate('/');
        } catch (error) {
            const errorMessage = error.response?.data?.message || "Internal Server Error";
            toast({
                title: 'Error!',
                description: errorMessage,
                status: 'error',
                duration: 5000,
                isClosable: true,
            });
        }
    };

    return (
        <Box className={styles.formContainer}>
            <form>
                <FormControl className={styles.formControl}>
                    <FormLabel htmlFor="email" className={styles.formLabel}>
                        Email
                    </FormLabel>
                    <Input
                        id="email"
                        type="email"
                        className={styles.inputField}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </FormControl>

                <FormControl className={styles.formControl}>
                    <FormLabel htmlFor="password" className={styles.formLabel}>
                        Password
                    </FormLabel>
                    <Input
                        id="password"
                        type="password"
                        className={styles.inputField}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </FormControl>

                <Button
                    type="submit"
                    className={styles.submitButton}
                    onClick={handleSubmit}
                >
                    Login
                </Button>
                <Text className={styles.account}>Don't have an account yet?</Text>
                <Link to="/register">
                    <Text className={styles.register}>Create here</Text>
                </Link>
            </form>
        </Box>
    );
};

export default LoginForm;