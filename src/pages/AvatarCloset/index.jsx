import { useState, useEffect } from "react";
import NavBar from "../../components/NavBar";
import Header from "../../components/Header";
import { Box, Flex, Text, Spinner } from "@chakra-ui/react";
import styles from "./AvatarCloset.module.css";
import { jwtDecode } from "jwt-decode";
import Card from "../../components/Card";
import api from "../../api";

const AvatarCloset = () => {
  const [avatars, setAvatars] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const decoded = jwtDecode(token);
      const userId = decoded.id;

      const fetchAvatar = async () => {
        try {
          const response = await api.get("/avatar/user-avatar", { params: { userId } });
          setAvatars(response.data);
          setLoading(false); 
        } catch (error) {
          console.error("Error fetching user avatars:", error);
          setLoading(false);
        }
      };

      fetchAvatar();
    }
  }, []);

  return (
    <Flex>
      <NavBar />

      <Box className={styles.mainContent}>
        <Header />
        <Box className={styles.creationArea}>
          <Text className={styles.pageTitle}>Your Saved Avatars</Text>

          <Flex className={styles.closetSections}>
            {loading ? (
              <Spinner size="xl" />
            ) : (
              avatars.map((avatar) => (
                <Card
                  key={avatar._id}
                  image={avatar.imageUrl} // For now, the temp signedurl
                  title="Avatar" // Static string for now also
                  description={avatar.email}
                  buttonText="Edit Avatar *WIP"
                />
              ))
            )}
          </Flex>
        </Box>
      </Box>
    </Flex>
  );
};

export default AvatarCloset;
