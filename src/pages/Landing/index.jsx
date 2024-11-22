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
            Mystica 🔮
          </Heading>
          <Text className={styles.subheading}>
            Create dynamic, modular avatars and unlock endless possibilities!
          </Text>
          <Link to={'/home'}>
            <Button className={styles.ctaButton}>
              Get Started
            </Button>
          </Link>
        </VStack>
        <Image src="faltando.png" alt="Hero" className={styles.heroImage} />
      </Flex>

      <Box className={styles.stepSection}>
        <Heading as="h2" size="lg" textAlign="center" mb={10}>
          How It Works
        </Heading>
        <Flex className={styles.stepFlow}>
          <Box className={styles.step}>
            <Image src="faltando.png" alt="Step 1" className={styles.stepImage} />
            <Heading as="h3" size="md">Choose a Base</Heading>
            <Text>Create your avatar starting from a diverse set of bases.</Text>
          </Box>
          <Box className={styles.step}>
            <Image src="faltando.png" alt="Step 2" className={styles.stepImage} />
            <Heading as="h3" size="md">Customize</Heading>
            <Text>Select outfits, accessories, and features to personalize.</Text>
          </Box>
          <Box className={styles.step}>
            <Image src="faltando.png" alt="Step 3" className={styles.stepImage} />
            <Heading as="h3" size="md">Export</Heading>
            <Text>Download your avatar for profiles, banners, and more.</Text>
          </Box>
        </Flex>
      </Box>

      <Flex className={styles.benefitsSection}>
        <Image src="faltando.png" alt="Benefits" className={styles.benefitsImage} />
        <VStack align="start" spacing={4} className={styles.benefitsContent}>
          <Heading as="h2" size="lg">Why Choose Mystica?</Heading>
          <Text>
            Mystica offers privacy-friendly avatar creation with limitless customization,
            perfect for both fun and professional use cases.
          </Text>
          <Button className={styles.secondaryButton} onClick={() => alert("Learn More")}>
            Learn More
          </Button>
        </VStack>
      </Flex>
    </Box>
  );
};

export default LandingPage;
