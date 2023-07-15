import {Avatar, Box, Center, Container, Heading, Stack, Text} from "@chakra-ui/react";
import Layout from "@/components/layout";
import SEO from "@/components/seo";


export default function Home() {
    return (
        <>
            <SEO title={'Links'}/>
            <Layout>
                <Container maxW={'3xl'}>
                    <Stack
                        as={Box}
                        textAlign={'center'}>
                        <Center>
                            <Avatar size={'xl'} src={'/me.png'}/>
                        </Center>
                        <Heading
                            fontWeight={600}
                            fontSize={{base: '2xl', sm: '3xl', md: '4xl'}}
                            lineHeight={'110%'}>
                            Hi, I&apos;m Hunter.
                        </Heading>
                        <Text color={'gray.500'}>
                            Welcome to my little list of socials I use and more.
                        </Text>
                    </Stack>

                    {/* Social Links */}
                    <Stack as={Box}
                           textAlign={'center'}>

                    </Stack>
                </Container>
            </Layout>
        </>
    )
}
