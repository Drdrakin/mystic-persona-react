import React from "react";
import { Box, Image, Heading, Text, Button, Icon } from "@chakra-ui/react";
import { AiFillEdit } from "react-icons/ai"; // Importing an edit icon
import styles from "./Card.module.css";

// To many props,
const Card = ({ 
  image, 
  title, 
  description, 
  buttonText, 
  icon,
  downloadHandler, 
  deleteHandler, 
  editHandler
}) => {
  return (
    <Box className={styles.card}>
      <Box className={styles.cardHeader}>
        {icon && (
          <Box className={styles.cardIcon} onClick={deleteHandler}>
            <Icon as={icon} />
          </Box>
        )}
        {editHandler && ( 
          <Box className={styles.cardEditIcon} onClick={editHandler}>
            <Icon as={AiFillEdit} />
          </Box>
        )}
      </Box>
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
