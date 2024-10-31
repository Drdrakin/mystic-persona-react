import { Box, Image, Text, Popover, Button, PopoverTrigger, PopoverContent, PopoverArrow, PopoverHeader, PopoverBody, PopoverCloseButton, useDisclosure} from "@chakra-ui/react";
import styles from './AvatarPartImage.module.css'
import PropTypes from "prop-types";

const AvatarPartImage = ({ part }) => {

    return (
        <Box textAlign="center">
            <Text className={styles.text}>{part.name}</Text>

            <Popover>
                <PopoverTrigger>
                    <Image src={part.imageUrl} alt={part.name}/>
                </PopoverTrigger>

                <PopoverContent>
                <PopoverArrow />
                <PopoverHeader><b>{part.type} -  {part.name}</b></PopoverHeader>
                <PopoverBody>
                    Aqui estará o corpo desse componente

                    Bla
                    Bla 
                    bla
                </PopoverBody>

                <Box className={styles.buttonsImage}>
                    <Button>
                        Delete
                    </Button>
                    <Button>
                        Change
                    </Button>
                </Box>

                <PopoverCloseButton />
                </PopoverContent>
            </Popover>

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
