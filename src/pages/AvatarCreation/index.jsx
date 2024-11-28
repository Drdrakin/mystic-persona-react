import { useState, useEffect } from "react";
import api from "../../api.js";
import NavBar from "../../components/NavBar";
import Header from "../../components/Header";
import { Box, Flex, Text, Button, Select, Image } from "@chakra-ui/react";
import styles from "./AvatarCreation.module.css";

const AvatarCreation = () => {
  const [head, setHead] = useState("");
  const [eyes, setEyes] = useState("");
  const [mouth, setMouth] = useState("");
  const [previewImage, setPreviewImage] = useState("");
  const [avatarParts, setAvatarParts] = useState([]);

  useEffect(() => {
    fetchAvatarParts();
  }, []);

  const fetchAvatarParts = async () => {
    try {
      const response = await api.get("/avatar/");
      setAvatarParts(response.data);
    } catch (error) {
      console.error("Error fetching avatar parts:", error);
    }
  };
  
  const handleSaveAvatar = async () => {
    try {
      const userId = 1;
      const avatarParts = [head, eyes, mouth].filter(Boolean);
  
      const response = await api.post("/avatar/user-avatar", {
        userId,
        avatarParts,
      });
  
      console.log(response.data.link);
      setPreviewImage(response.data.link)
    } catch (error) {
      console.error("Error saving avatar:", error);
      alert("Failed to save avatar. Please try again.");
    }
  };
  

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
                  <Select
                    placeholder="Select Head"
                    value={head}
                    onChange={(e) => setHead(e.target.value)}
                  >
                    {avatarParts
                      .filter((part) => part.type === "head")
                      .map((part) => (
                        <option key={part._id} value={part._id}>
                          {part.name}
                        </option>
                      ))}
                  </Select>
                </Box>
                <Box className={styles.partSelector}>
                  <Text className={styles.partLabel}>Eyes</Text>
                  <Select
                    placeholder="Select Eyes"
                    value={eyes}
                    onChange={(e) => setEyes(e.target.value)}
                  >
                    {avatarParts
                      .filter((part) => part.type === "eyes")
                      .map((part) => (
                        <option key={part._id} value={part._id}>
                          {part.name}
                        </option>
                      ))}
                  </Select>
                </Box>
                <Box className={styles.partSelector}>
                  <Text className={styles.partLabel}>Mouth</Text>
                  <Select
                    placeholder="Select Mouth"
                    value={mouth}
                    onChange={(e) => setMouth(e.target.value)}
                  >
                    {avatarParts
                      .filter((part) => part.type === "mouth")
                      .map((part) => (
                        <option key={part._id} value={part._id}>
                          {part.name}
                        </option>
                      ))}
                  </Select>
                </Box>
              </Flex>
            </Box>
            <Box className={styles.previewSection}>
              <Text className={styles.sectionTitle}>Avatar Preview</Text>
              <Box className={styles.avatarPreview}>
                <Image
                  src={previewImage}
                  alt="Avatar Preview"
                  className={styles.avatarImage}
                />
              </Box>
            </Box>
          </Flex>
          <Button className={styles.saveButton} onClick={handleSaveAvatar}>
            Save to Closet
          </Button>
        </Box>
      </Box>
    </Flex>
  );
};

export default AvatarCreation;
