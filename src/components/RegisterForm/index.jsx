import { Box, FormControl, FormLabel, Input, Button, Text } from "@chakra-ui/react";
import styles from './RegisterForm.module.css';

const LoginForm = () => {
    return (
        <Box className={styles.formContainer}>
            <form>
                <FormControl className={styles.formControl}>
                    <FormLabel htmlFor="text" className={styles.formLabel}>User name</FormLabel>
                    <Input id="text" type="text" className={styles.inputField} />
                </FormControl>

                <FormControl className={styles.formControl}>
                    <FormLabel htmlFor="email" className={styles.formLabel}>Email</FormLabel>
                    <Input id="email" type="email" className={styles.inputField} />
                </FormControl>

                <FormControl className={styles.formControl}>
                    <FormLabel htmlFor="password" className={styles.formLabel}>Password</FormLabel>
                    <Input id="password" type="password" className={styles.inputField} />
                </FormControl>

                <FormControl className={styles.formControl}>
                    <FormLabel htmlFor="repassword" className={styles.formLabel}>Password Again</FormLabel>
                    <Input id="repassword" type="repassword" className={styles.inputField} />
                </FormControl>

                <Button type="submit" className={styles.submitButton}>
                    Register
                </Button>
            </form>
        </Box>
    );
};

export default LoginForm;
