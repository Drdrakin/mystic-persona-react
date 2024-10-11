import Header from "../../components/Header";
import LoginForm from "../../components/LoginForm";
import { Text, Box } from "@chakra-ui/react";
import styles from './Login.module.css'

const index = () => {
  return (
    <>
      <Box className={styles.registerContainer}>
        <Header />
        <Text as="h2">Log-in your Account</Text>
        <LoginForm />

      </Box>
    </>
  )
}

export default index;