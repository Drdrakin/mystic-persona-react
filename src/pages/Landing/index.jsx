import React from "react";
import { Box, Heading, Text, Button, Flex, Image, VStack } from "@chakra-ui/react";
import styles from "./LandingPage.module.css";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <Box className={styles.landingPage}>
      <Flex className={styles.header}>
        <VStack align="start" spacing={5} maxW="600px">
          <Heading as="h1" size="2xl" className={styles.title}>
            Mystica {" "}
            <Image src="images/icons8-crystal-ball-100.png" className={styles.navIcon} />
          </Heading>
          <Text className={styles.subheading}>
            Create dynamic and modular avatars and unlock endless possibilities!
          </Text>
        </VStack>
      </Flex>

      <Box className={styles.stepSection}>
        <Heading as="h2" size="lg" textAlign="center" mb={10}>
          How It Works
        </Heading>
        <Flex className={styles.stepFlow}>
          <Box className={styles.step}>
            <Image src="images/tutorial-step1.png" alt="Step 1" className={styles.stepImage} />
            <Heading as="h3" size="md">Choose a Base</Heading>
            <Text>Head to the creation tab and choose a base for your Avatar</Text>
          </Box>
          <Box className={styles.step}>
            <Image src="images/tutorial-step2.png" alt="Step 2" className={styles.stepImage} />
            <Heading as="h3" size="md">Customize</Heading>
            <Text>In the creation tab, select between the available options and save the result</Text>
          </Box>
          <Box className={styles.step}>
            <Image src="images/tutorial-step3.png" alt="Step 3" className={styles.stepImage} />
            <Heading as="h3" size="md">Export</Heading>
            <Text>View your Avatar in the Closet and download it</Text>
          </Box>
        </Flex>
      </Box>
      <Box className={styles.secondarySection}>
        <Link to={'/login'}>
          <Button className={styles.ctaButton}>
              Get Started
          </Button>
        </Link>
      </Box>
    </Box>
  );
};

export default LandingPage;
