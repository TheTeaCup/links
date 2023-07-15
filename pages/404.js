import SEO from "@/components/seo";
import Wave from "react-wavify";
import {Box, Button, Container, Flex, Heading, Stack, Text} from "@chakra-ui/react";
import Link from "next/link";


export default function Home() {
    return (
        <>
            <SEO title={'Page Not Found'}/>

            <Flex
                minH={'70vh'}
                align={'center'}
                justify={'center'}>
                <Container maxW={'3xl'}>
                    <Stack
                        as={Box}
                        textAlign={'center'}>
                        <Heading
                            fontWeight={600}
                            fontSize={{base: '2xl', sm: '3xl', md: '4xl'}}
                            lineHeight={'110%'}>
                            Page Not Found
                        </Heading>
                        <Text color={'gray.500'}>
                            It seems that the page you are looking for does not exist.
                        </Text>
                        <center>
                            <Button alignContent={'center'} w="fit-content" as={Link} href={'/'}>
                                Go Home
                            </Button>
                        </center>
                    </Stack>

                </Container>

            </Flex>
            <Box
                bottom={'0'}
                position={'fixed'}
                width={'-moz-available'}
            >
                <Wave
                    style={{zIndex: -1}}
                    width={'100%'}
                    fill="#203647"
                    paused={false}
                    options={{
                        height: 20,
                        amplitude: 45,
                        speed: 0.15,
                        points: 4,
                    }}
                />
            </Box>

        </>
    )
}