import React from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import NavBar from "../../components/NavBar";
import Header from "../../components/Header";
import Card from "../../components/Card";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <Flex className={styles.homePage}>
      <NavBar />

      <Box className={styles.contentArea}>
        <Header />

        <Text className={styles.pageTitle}>Explore your Options</Text>
        
        <Box className={styles.mainSection}>

          <Card
            image="/avatar-preview1.png"
            title="Avatar Preview"
            description="View and customize your avatar in real time!"
            buttonText="Try Now"
            onClick={() => alert("Go to Avatar Preview")}
          />
          <Card
            image="/avatar-preview2.png"
            title="Outfits Closet"
            description="Browse through a collection of outfits and accessories."
            buttonText="Explore Closet"
            onClick={() => alert("Go to Closet")}
          />
          <Card
            image="/avatar-preview3.png"
            title="Create Avatar"
            description="Start from scratch and build your dream avatar!"
            buttonText="Start Creating"
            onClick={() => alert("Go to Create")}
          />
        </Box>
      </Box>
    </Flex>
  );
};

export default Home;
