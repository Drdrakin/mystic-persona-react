import { useState, useEffect } from "react";
import api from "../../api.js";
import NavBar from "../../components/NavBar";
import Header from "../../components/Header";
import { Box, Flex, Text, Button, Select, Image, useToast } from "@chakra-ui/react";
import styles from "./AvatarCreation.module.css";
import {jwtDecode} from "jwt-decode";
import { useParams } from "react-router-dom";

const AvatarCreation = () => {
  const { avatarId } = useParams(); // react-router-dom hook for accessing the ID 
  const [head, setHead] = useState("");
  const [eyes, setEyes] = useState("");
  const [mouth, setMouth] = useState("");
  const [previewImage, setPreviewImage] = useState("");
  const [avatarParts, setAvatarParts] = useState([]);

  const toast = useToast();

  const fetchAvatarParts = async () => {
    try {
      const response = await api.get("/avatar/");
      setAvatarParts(response.data);
    } catch (error) {
      console.error("Error fetching avatar parts:", error);
    }
  };

  // Define initial states so user knows the parts used
  const fetchAvatarDetails = async () => {
    try {

      const response = await api.get(`/avatar/user-avatar/${avatarId}`);
      const avatar = response.data;
  
      // Verifique os valores de avatarParts e avatar.avatarParts
      console.log("avatarParts:", avatarParts);  // Logs dos avatarParts disponíveis
      console.log("avatar.avatarParts:", avatar.avatarParts);  // Logs dos avatarParts retornados
  
      // Verifique o tipo de dado de _id
      console.log("Tipo de _id da primeira parte:", typeof avatar.avatarParts[0]?._id);
      
      const headPart = avatarParts.find(part => part._id === avatar.avatarParts[0]?._id);
      const eyesPart = avatarParts.find(part => part._id === avatar.avatarParts[1]?._id);
      const mouthPart = avatarParts.find(part => part._id === avatar.avatarParts[2]?._id);
  
      // Log para verificar se as partes foram encontradas corretamente
      console.log("headPart:", headPart);
      console.log("eyesPart:", eyesPart);
      console.log("mouthPart:", mouthPart);
  
      // Atualize o estado com os IDs das partes
      setHead(headPart?._id || "");
      setEyes(eyesPart?._id || "");
      setMouth(mouthPart?._id || "");
      setPreviewImage(avatar.imageUrl);
    } catch (error) {
      console.error("Error fetching avatar details:", error);
    }
  };
  
  
  const handleSaveAvatar = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        alert("No token found. Please log in.");
        return;
      }

      const decoded = jwtDecode(token);
      const userId = decoded.id;

      // Indication that the process started
      toast({
        status: 'loading',
        title: 'Processing',
        duration: 1500
      })
      if (avatarId) {
        // For editing
        const response = await api.put(`/avatar/user-avatar/${avatarId}`, {
          userId,
          avatarParts: [head, eyes, mouth],
        });
        setPreviewImage(response.data.link)
        toast({
          status: 'success',
          title: "Avatar Updated",
          description: "You can download the new version in your closet",
          duration: 2000
        })
      } 
      else {
        // For creating
        const response = await api.post("/avatar/user-avatar", {
          userId,
          avatarParts: [head, eyes, mouth],
        });
        setPreviewImage(response.data.link);
        toast({
          status: 'success',
          title: "Avatar Created",
          description: "You can download it in your closet",
          duration: 2000
        })
      }
    } catch (error) {
      console.error("Error saving avatar:", error);
      toast({
        status: 'error',
        title: "Failed to create",
        description: error.response?.data?.message || "Something went wrong",
      })
    }
  };

  useEffect(() => {
    fetchAvatarParts();

    // If page is in edit mode
    if (avatarId) {
      fetchAvatarDetails();
    }
  }, [avatarId]);

  return (
    <Flex>
      <NavBar />
      <Box className={styles.mainContent}>
        <Header />
        <Box className={styles.creationArea}>
          <Text className={styles.pageTitle}>
            {avatarId ? "Edit Your Avatar" : "Create Your Avatar"}
          </Text>
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
            {avatarId ? "Update Avatar" : "Save to Closet"}
          </Button>
        </Box>
      </Box>
    </Flex>
  );
};

export default AvatarCreation;
