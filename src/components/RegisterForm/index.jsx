import { Box, FormControl, FormLabel, Input, Button, Text, useToast } from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import styles from './RegisterForm.module.css';
import api from "../../api";

const RegisterForm = () => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordRe, setPasswordRe] = useState('');
    const toast = useToast();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (password !== passwordRe) {
            toast({
                title: 'Error',
                description: 'Passwords are NOT the same!',
                status: 'error',
                duration: 5000,
                isClosable: true,
            });
            return;
        }

        try {
            const requestData = {
                firstName: firstName,
                lastName: lastName,
                birthday: "00/00/0000",
                email: email,
                password: password
            };

            const response = await api.post('/users/register', requestData);

            if (response.status === 201) {
                toast({
                    title: 'Successfully Registered! Now log in.',
                    status: 'success',
                    duration: 15000,
                    isClosable: true,
                });
            }
            navigate('/login');
        } catch (error) {
            const errorMessage = error.response?.data?.message || "Error during registration.";
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
                    <FormLabel htmlFor="text" className={styles.formLabel}>First Name</FormLabel>
                    <Input
                        id="text"
                        type="text"
                        className={styles.inputField}
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                    />
                </FormControl>

                <FormControl className={styles.formControl}>
                    <FormLabel htmlFor="text" className={styles.formLabel}>Last Name</FormLabel>
                    <Input
                        id="text"
                        type="text"
                        className={styles.inputField}
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                    />
                </FormControl>

                <FormControl className={styles.formControl}>
                    <FormLabel htmlFor="email" className={styles.formLabel}>Email</FormLabel>
                    <Input
                        id="email"
                        type="email"
                        className={styles.inputField}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </FormControl>

                <FormControl className={styles.formControl}>
                    <FormLabel htmlFor="password" className={styles.formLabel}>Password</FormLabel>
                    <Input
                        id="password"
                        type="password"
                        className={styles.inputField}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </FormControl>

                <FormControl className={styles.formControl}>
                    <FormLabel htmlFor="repassword" className={styles.formLabel}>Password Again</FormLabel>
                    <Input
                        id="repassword"
                        type="password"
                        className={styles.inputField}
                        value={passwordRe}
                        onChange={(e) => setPasswordRe(e.target.value)}
                    />
                </FormControl>

                <Button
                    type="submit"
                    className={styles.submitButton}
                    onClick={handleSubmit}
                >
                    Register
                </Button>
                <Text className={styles.account}>Already Registered?</Text>
                <Link to="/login">
                    <Text className={styles.register}>Log-in here</Text>
                </Link>
            </form>
        </Box>
    );
};

export default RegisterForm;
