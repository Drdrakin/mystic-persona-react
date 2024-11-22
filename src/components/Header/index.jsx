import React from "react";
import { Flex, Box, Text, Button } from "@chakra-ui/react";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <Flex as="header" className={styles.header}>
      <Text className={styles.logo}>Mystica</Text>
      <Flex className={styles.navLinks}>
        <Button variant="link" onClick={() => alert("Go to Home")}>Home</Button>
        <Button variant="link" onClick={() => alert("Go to Closet")}>Closet</Button>
        <Button variant="link" onClick={() => alert("Go to Create")}>Create</Button>
      </Flex>
    </Flex>
  );
};

export default Header;
