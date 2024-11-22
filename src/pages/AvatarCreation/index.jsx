import React from "react";
import NavBar from "../../components/NavBar";
import Header from "../../components/Header";
import { Box, Flex, Text, Button, Select, Image } from "@chakra-ui/react";
import styles from "./AvatarCreation.module.css";

const AvatarCreation = () => {
  return (
    <Flex>
      <NavBar />

      <Box className={styles.mainContent}>
        <Header />
        <Box className={styles.creationArea}>
          <Text className={styles.pageTitle}>Create Your Avatar</Text>

          <Flex className={styles.creationSections}>
            <Box className={styles.selectorSection}>
              <Flex className={styles.selectorContainer}>
                <Box className={styles.partSelector}>
                  <Text className={styles.partLabel}>Head</Text>
                  <Select placeholder="Select Head">
                    <option value="round">Round</option>
                    <option value="square">Square</option>
                    <option value="oval">Oval</option>
                  </Select>
                </Box>
                <Box className={styles.partSelector}>
                  <Text className={styles.partLabel}>Eyes</Text>
                  <Select placeholder="Select Eyes">
                    <option value="round">Round</option>
                    <option value="oval">Oval</option>
                    <option value="cat">Cat</option>
                  </Select>
                </Box>
                <Box className={styles.partSelector}>
                  <Text className={styles.partLabel}>Mouth</Text>
                  <Select placeholder="Select Mouth">
                    <option value="smile">Smile</option>
                    <option value="frown">Frown</option>
                    <option value="neutral">Neutral</option>
                  </Select>
                </Box>
              </Flex>
            </Box>

            <Box className={styles.previewSection}>
              <Text className={styles.sectionTitle}>Avatar Preview</Text>
              <Box className={styles.avatarPreview}>
                <Image
                  src="/placeholder-avatar.png"
                  alt="Avatar Preview"
                  className={styles.avatarImage}
                />
              </Box>
            </Box>
          </Flex>

          <Button className={styles.saveButton}>
            Save to Closet
          </Button>
        </Box>
      </Box>
    </Flex>
  );
};

export default AvatarCreation;
