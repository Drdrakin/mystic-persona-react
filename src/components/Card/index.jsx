import { Card, CardBody, Image, Stack, Heading, Text, CardFooter, Button } from "@chakra-ui/react"
import { Link } from "react-router-dom";
import styles from './Card.module.css'

const HomeCard = ({ cardImage, cardTitle, cardText, cardBtn, btnColor, btnMargin, btnSize, btnFontSize, pageLink, ...props }) => {
    return(
        <Card
            direction={{ base: 'column', sm: 'column' }}
            overflow='hidden'
            variant='outline'
            {...props}
        >
            <Image
                objectFit='cover'
                maxW={{ base: '100%', sm: '200px' }}
                src={cardImage} 
                alt={cardTitle}
                title={cardTitle}
                borderRadius={7}
            />

            <Stack>
                { cardTitle & cardText &&(
                    <CardBody>
                            <Heading size='md'>{cardTitle}</Heading>

                            <Text py='2'>
                                {cardText}
                            </Text>
                    </CardBody>
                )}
                <CardFooter>
                    {/* Renderizar condicionalmente, leitura: se pageLink for true(tem conteudo) carrega isso 
                    se não(:) carrega isso*/}
                    {  pageLink ?
                        <Link to={pageLink} className={styles.buttonLink}>
                            <Button variant='solid' bg={btnColor} color={'#fff'} margin={btnMargin} w={btnSize} h={btnSize / 6} fontSize={btnFontSize}>
                                {cardBtn}
                            </Button>
                        </Link>
                        :
                        <Button variant='solid' bg={btnColor} color={'#fff'} margin={btnMargin} w={btnSize} h={btnSize / 6} fontSize={btnFontSize}>
                        </Button> 
                    }
                </CardFooter>
            </Stack>
        </Card>
    )
}

export default HomeCard;
