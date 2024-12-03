import { Box, VStack, Text, Image, Link } from "@chakra-ui/react";
import styles from "./NavBar.module.css";
import { jwtDecode } from "jwt-decode";

const NavBar = () => {
  const token = localStorage.getItem("token");

  // Decode the token and extract the username if it exists
  let userName = "";
  if (token) {
    try {
      const decoded = jwtDecode(token);
      userName = decoded.firstName + ' ' + decoded.lastName || "Not logged";
    } catch (error) {
      console.error("Error decoding token", error);
      userName = "Not logged";
    }
  }

  return (
    <Box className={styles.navBar}>
      <Text className={styles.logo}>
        Mystica{" "}
        <Image src="images/icons8-crystal-ball-100.png" className={styles.navIcon} />
      </Text>
      <VStack spacing={4} align="start" mt={10}>
        <Text className={styles.placeholder}>{userName}</Text>
        <Link href="https://github.com/Drdrakin/mystica-api/blob/main/README.md" target="_blank" className={styles.navItem}>
          Documentation
        </Link>
        <Link href="https://github.com/Drdrakin/mystica/blob/main/README.md" target="_blank" className={styles.navItem}>
          Idea and Inspiration
        </Link>
        <Link href="https://github.com/Drdrakin" target="_blank" className={styles.navItem}>
          About the Creator
        </Link>
      </VStack>
    </Box>
  );
};

export default NavBar;
