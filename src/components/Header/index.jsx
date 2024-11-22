import React from "react";
import { Flex, Box, Text, Button } from "@chakra-ui/react";
import styles from "./Header.module.css";
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <Flex as="header" className={styles.header}>
      <Link to="/home" >
        <Text className={styles.logo}>Mystica</Text>
      </Link>
      <Flex className={styles.navLinks}>
        <Link to="/creation">
          <Button variant="link" _activeLink={'/creation'}>Create Avatar</Button>
        </Link>
      <Link to="/closet">
        <Button variant="link">My Closet</Button>
      </Link>
      <Link to="/home">
        <Button variant="link">Home</Button>
      </Link>
      </Flex>
    </Flex>
  );
};

export default Header;
