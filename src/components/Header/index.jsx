import { Box, Text } from "@chakra-ui/react"
import styles from './Header.module.css'
import HomeDrawer from "../HomeDrawer"
import { Link } from "react-router-dom";    

const Header = () => {
    return (
        <Box className={styles.HeaderBody}>
            <HomeDrawer as='button'/>
            <Link to='/'className={styles.HeaderLink}>Home</Link>
            <Link to='/register' className={styles.HeaderLink}>Build Avatar</Link>
        </Box>
    )
}

export default Header;