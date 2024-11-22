import { Box, VStack, Text } from "@chakra-ui/react";
import styles from "./NavBar.module.css";

const NavBar = () => {
  return (
    <Box className={styles.navBar}>
      <Text className={styles.logo}>Mystica 🔮</Text>
      <VStack spacing={4} align="start" mt={10}>
        <Text className={styles.placeholder}>[User Info Placeholder]</Text>
        <Text className={styles.placeholder}>[Recent Visits Placeholder]</Text>
        <Text className={styles.navItem}>Documentation</Text>
        <Text className={styles.navItem}>FAQs</Text>
        <Text className={styles.navItem}>About</Text>
      </VStack>
    </Box>
  );
};

export default NavBar;
