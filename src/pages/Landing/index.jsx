import React from "react";
import { Box, Heading, Text, Button, Flex, Image, Link } from "@chakra-ui/react";
import styles from "./LandingPage.module.css";

const LandingPage = () => {
  return (
    <Box className={styles.landingPage}>
      <Box className={styles.header}>
        <Heading as="h1">Mystica 🔮</Heading>
        <Text>Create dynamic, modular avatars for any purpose!</Text>
        <Button
          className={styles.ctaButton}
          onClick={() => alert("Get Started")}
        >
          Get Started
        </Button>
      </Box>

      <Flex className={styles.section}>
        <Image
          src="logo_small.png"
          alt="Inspiration"
          className={styles.image}
        />
        <Box className="text-container">
          <Heading as="h2">Inspiration</Heading>
          <Text>
            Mystica draws inspiration from character creation systems in Dress
            Up Princess games, aiming to provide users with endless
            possibilities for modular avatar customization.
          </Text>
        </Box>
      </Flex>

      <Flex className={`${styles.section} ${styles.alternate}`}>
        <Image
          src=""
          alt="Modularization"
          className={styles.image}
        />
        <Box className="text-container">
          <Heading as="h2">Modularization</Heading>
          <Text>
            Combine various options to create unique avatars. Each new part adds
            countless possibilities, ensuring endless customization
            opportunities!
          </Text>
        </Box>
      </Flex>

      <Box className={styles.why}>
        <Heading as="h2">Why Mystica</Heading>
        <Text>
          Mystica is a personal project to deepen skills in image rendering,
          manipulation, and NoSQL databases. The perfect blend of learning and
          creativity!
        </Text>
      </Box>
    </Box>
  );
};

export default LandingPage;
