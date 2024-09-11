import { Box, Text } from "@chakra-ui/react"
import styles from './Header.module.css'
import HomeDrawer from "../HomeDrawer"

const Header = () => {
    return (
        <Box className={styles.HeaderBody}>
            <HomeDrawer as='button'/>
            <Text as="h2">Home</Text>
            <Text as="h2">Build Avatar</Text>
            <Text as="h2"></Text>
        </Box>
    )
}

export default Header;