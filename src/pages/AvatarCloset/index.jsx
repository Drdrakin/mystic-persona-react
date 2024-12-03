import { useState, useEffect } from "react";
import NavBar from "../../components/NavBar";
import Header from "../../components/Header";
import { Box, Flex, Text, Spinner, useToast } from "@chakra-ui/react";
import styles from "./AvatarCloset.module.css";
import { jwtDecode } from "jwt-decode";
import Card from "../../components/Card";
import api from "../../api";
import { AiFillDelete } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const AvatarCloset = () => {
  const [avatars, setAvatars] = useState([]);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();
  const toast = useToast();

  // Gets the jwt from localstorage again and fetches the saved useravatars using userId
  // decoded by the library
  // Maybe setting token const as global is better.  
  //
  // todo: set 'token' as global const so to use less code  
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
          toast({
            duration: 2000,
            status: 'error' ,
            title: 'Failed to download',
            description: error.data.message
          })
          setLoading(false);
        }
      };

      fetchAvatar();
    }
  }, []);

  // Fetches image as a blob in memory, converts to usable format,
  // then creates a html <a> tag with the download attribute, downloads and discards
  const downloadHandler = async (imageUrl) => {
    try {
      const response = await fetch(imageUrl);
      if (!response.ok) {
        toast({
          duration: 2000,
          status: 'error',
          title: 'Failed to fetch',
          description: response.statusText,
        });
        return;
      }
  
      const blob = await response.blob();
      const img = new Image();
      const url = URL.createObjectURL(blob);
  
      img.onload = () => {

        // Creates canva element
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        canvas.width = img.width;
        canvas.height = img.height;
        ctx.drawImage(img, 0, 0);
  
        // Converts and downloads
        canvas.toBlob((webpBlob) => {
          const webpUrl = URL.createObjectURL(webpBlob);
  
          const a = document.createElement('a');
          a.style.display = 'none';
          a.href = webpUrl;
          a.download = 'downloaded-image.webp';
  
          document.body.appendChild(a);
          a.click();
  
          // Removes the link from dom to free memorfy
          document.body.removeChild(a);
          URL.revokeObjectURL(webpUrl);
        }, 'image/webp');
      };
  
      img.src = url;
    } catch (error) {
      console.error('Error downloading the image:', error);
      toast({
        duration: 2000,
        status: 'error',
        title: 'Failed to download image',
        description: error.response?.data?.message || "Something went wrong"
      });
    }
  };

  const deleteHandler = async (avatarId) => {
    try {
      const response = await api.delete(`/avatar/user-avatar/${avatarId}`);

      if (response.status == 200){
        toast({
          title: "Deleted Successfully",
          description: "The avatar was successfully deleted.",
          status: "success",
          duration: 3000,
        });
      }
      
      // Removes dinamically from the state without reloading the data
      setAvatars((prevAvatars) => prevAvatars.filter((avatar) => avatar._id !== avatarId));  
    } catch (error) {
      console.error("Error deleting avatar:", error);
      toast({
        title: "Failed to delete avatar",
        description: error.response?.data?.message || "Something went wrong",
        status: "error",
        duration: 3000,
      });
    }
  };
  
  const editHandler = (avatarId) => {
    navigate(`/creation/${avatarId}`);
  };
  
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

                  // Anonymous function is necessary, because without it, it is called on the go, meaning that
                  // the props receives the result of the funciton, not the function itself
                  // another way to do it would be to pass the function without params, as pass the params as props
                  // this way it is easier and simpler and more readable.                   
                  onClick={() => downloadHandler(avatar.imageUrl)}
                  deleteHandler={() => deleteHandler(avatar._id)}
                  editHandler={() => editHandler(avatar._id)}
                  buttonText="Download Avatar"
                  icon={AiFillDelete}
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