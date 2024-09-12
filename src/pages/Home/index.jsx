import { Box, Image, Text } from "@chakra-ui/react"
import Header from "../../components/Header"
import Card from "../../components/Card"
import styles from "./Home.module.css"

const Home = () => {

    return(
        <Box className={styles.homeContainer}>
            <Header />


            <Box>
                <Text as="h3">Welcome to Mystica</Text>
                <Text as="p">Create your own Avatar and build your Image</Text>
            </Box>
            <Box className={styles.cardContainer}>
                <Card
                    m={0}
                    p={3}
                    btnMargin={'0 auto'}
                    btnSize={400}
                    btnFontSize={40}
                    cardTitle={'Mystica logo'}
                    btnColor={'#805AD5'}
                    cardImage='/logo_small.png'
                    cardBtn='Create'
                    pageLink='/register'
                />
            </Box>
        </Box>
    )
}

export default Home;