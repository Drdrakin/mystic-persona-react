import { Box, Button, Grid, GridItem } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import api from "../../api";
import AvatarPartImage from "./AvatarPartImage";
import styles from './AvatarParts.module.css';

const AvatarComponents = () => {
    const [selectedCategory, setSelectedCategory] = useState('Hat');
    const [components, setComponents] = useState([]);
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        // Fetch categories
        const fetchCategories = async () => {
            try {
                const response = await api.get('/avatar/categories');
                setCategories(response.data);
            } catch (err) {
                console.error(err);
            }
        };

        fetchCategories();
    }, []);

    useEffect(() => {
        // Fetch components of a single category
        const fetchComponents = async () => {
            try {
                const response = await api.get(`/avatar/components?category=${selectedCategory}`);
                setComponents(response.data);
            } catch (err) {
                console.error(err);
            }
        };

        fetchComponents();
    }, [selectedCategory]);

    return (
        <Box className={styles.componentContainer}>
            <Box className={styles.categoryButtons}>
                {categories.map(category => (
                    <Button
                        key={category}
                        onClick={() => setSelectedCategory(category)}
                        className={selectedCategory === category ? styles.activeButton : styles.inactiveButton}
                    >
                        {category}
                    </Button>
                ))}
            </Box>
            <Grid templateColumns="repeat(3, 1fr)" gap={6} className={styles.componentGrid}>
                {components.map((component, index) => (
                    <GridItem key={index} className={styles.componentItem}>
                        <AvatarPartImage part={component} />
                    </GridItem>
                ))}
            </Grid>
        </Box>
    );
};

export default AvatarComponents;
