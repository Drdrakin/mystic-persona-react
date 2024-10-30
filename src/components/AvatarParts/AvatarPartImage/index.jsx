import { Box, Image, Text } from "@chakra-ui/react";
import PropTypes from "prop-types";

const AvatarPartImage = ({ part }) => {

    console.log(part.imageUrl)

    return (
        <Box textAlign="center">
            <Text margin="0 auto">{part.name}</Text>
            <Image src={part.imageUrl} alt={part.name}/>
        </Box>
    );
};

AvatarPartImage.propTypes = {
    part: PropTypes.shape({
        name: PropTypes.string.isRequired,
        imageUrl: PropTypes.string.isRequired
    }).isRequired
};

export default AvatarPartImage;
