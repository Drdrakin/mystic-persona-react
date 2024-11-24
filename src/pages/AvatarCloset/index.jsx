import React from "react";
import NavBar from "../../components/NavBar";
import Header from "../../components/Header";
import { Box, Flex, Text, Button, Select, Image } from "@chakra-ui/react";
import styles from "./AvatarCloset.module.css";

const AvatarCloset = () => {
  return (
    <Flex>
      <NavBar />

      <Box className={styles.mainContent}>
        <Header />
        <Box className={styles.creationArea}>
          <Text className={styles.pageTitle}>Your Saved Avatars</Text>

          <Flex className={styles.closetSections}>

          </Flex>


        </Box>
      </Box>
    </Flex>
  );
};

export default AvatarCloset;
