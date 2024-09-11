import { Card, CardBody, Image, Stack, Heading, Text, CardFooter, Button } from "@chakra-ui/react"

const HomeCard = ({ cardImage, cardTitle, cardText, cardBtn, btnColor, btnMargin, btnSize, btnFontSize,...props }) => {
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
                    <Button variant='solid' bg={btnColor} color={'#fff'} margin={btnMargin} w={btnSize} h={btnSize / 6} fontSize={btnFontSize}>
                        {cardBtn}
                    </Button>
                </CardFooter>
            </Stack>
        </Card>
    )
}

export default HomeCard;
