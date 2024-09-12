import Header from "../../components/Header";
import RegisterForm from "../../components/RegisterForm";
import { Text, Box } from "@chakra-ui/react";
import styles from './Register.module.css'

const index = () => {
  return (
    <>
      <Box className={styles.registerContainer}>
        <Header />
        <RegisterForm />
      </Box>
    </>
  )
}

export default index;