import Header from "../../components/Header";
import RegisterForm from "../../components/RegisterForm";
import { Text } from "@chakra-ui/react";
import styles from './Login.module.css'

const index = () => {
  return (
    <>
        <Header />
        <RegisterForm />
    </>
  )
}

export default index;