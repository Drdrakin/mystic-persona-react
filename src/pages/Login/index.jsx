import React from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import NavBar from "../../components/NavBar";
import Header from "../../components/Header";
import styles from "./Login.module.css";
import LoginForm from "../../components/LoginForm"

const Login = () => {
  return (
    <Flex className={styles.homePage}>
      <NavBar />

      <Box className={styles.contentArea}>
        <Header />

        <Text className={styles.pageTitle}>Login to your Account</Text>
        
        <Box className={styles.mainSection}>
  
          <LoginForm/>        
        </Box>
      </Box>
    </Flex>
  );
};

export default Login;
