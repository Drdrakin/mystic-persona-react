import { Box, Text } from "@chakra-ui/react";
import Header from "../../components/Header";
import AvatarComponents from "../../components/AvatarParts";
import styles from "./AvatarCreation.module.css";

const Avatar = () => {
  return (
    <Box className={styles.homeContainer}>
      <Header />
      <Box>
        <Text as="h3">Customize your own Avatar</Text>
      </Box>
      <Box className={styles.mainContent}>
        <Box className={styles.avatarCreationBox}>
          <Text as="h4">Avatar Creation Area (Coming Soon)</Text>
        </Box>
        <AvatarComponents />
      </Box>
    </Box>
  );
}

export default Avatar;