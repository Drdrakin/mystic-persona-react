import React from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import NavBar from "../../components/NavBar";
import Header from "../../components/Header";
import styles from "./Register.module.css";
import RegisterForm from "../../components/RegisterForm"

const Register = () => {
  return (
    <Flex className={styles.homePage}>
      <NavBar />

      <Box className={styles.contentArea}>
        <Header />

        <Text className={styles.pageTitle}>Register your Account</Text>
        
        <Box className={styles.mainSection}>
  
          <RegisterForm/>        
        </Box>
      </Box>
    </Flex>
  );
};

export default Register;