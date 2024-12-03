import React from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import NavBar from "../../components/NavBar";
import Header from "../../components/Header";
import Card from "../../components/Card";
import styles from "./Home.module.css";
import { useNavigate } from "react-router-dom";

const Home = () => {

  const navigate = useNavigate();

  return (
    <Flex className={styles.homePage}>
      <NavBar />

      <Box className={styles.contentArea}>
        <Header />

        <Text className={styles.pageTitle}>Explore your Options</Text>
        
        <Box className={styles.cardSection}>
          <Card
            image="images/icons8-create-100.png"
            title="Avatar Creation"
            description="Create new Avatars so you can use however you like"
            buttonText="Try Now"
            onClick={() => navigate('/creation')}
          />
          <Card
            image="images/icons8-hanger-100.png"
            title="Outfits Closet"
            description="Browse through your collection of saved Avatars"
            buttonText="Explore Closet"
            onClick={() => navigate('/closet')}
          />
        </Box>
      </Box>
    </Flex>
  );
};

export default Home;
