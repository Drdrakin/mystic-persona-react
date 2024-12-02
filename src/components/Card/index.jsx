import React from "react";
import { Box, Image, Heading, Text, Button, Icon } from "@chakra-ui/react";
import styles from "./Card.module.css";

const Card = ({ image, title, description, buttonText, onClick, icon, downloadHandler }) => {
  return (
    <Box className={styles.card}>
      {icon && (
        <Box className={styles.cardIcon}>
          <Icon as={icon} />
        </Box>
      )}
      <Image src={image} alt={title} className={styles.cardImage} />
      <Heading as="h3" size="md" className={styles.cardTitle}>
        {title}
      </Heading>
      <Text className={styles.cardDescription}>{description}</Text>
      <Button className={styles.cardButton} onClick={downloadHandler}>
        {buttonText}
      </Button>
    </Box>
  );
};

export default Card;
