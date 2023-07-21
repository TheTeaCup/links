import {
    Avatar,
    Center,
    Divider,
    Heading,
    SimpleGrid,
    Tab,
    TabList,
    TabPanel, TabPanels,
    Tabs,
    Text,
    VStack
} from "@chakra-ui/react";
import Layout from "@/components/layout";
import Link from "next/link";
import links from "@/data/links";
import LinkCard from "@/components/linkCard";


export default function Home() {
  return (
    <>
        <Layout>
            <Center>
                <Avatar size={'xl'}/>
            </Center>
            <br/>
            <VStack>
                <Heading as="h1" size="2xl">Hunter Wilson</Heading>
                <Text fontSize="xl">A list of links to my social media and other websites.</Text>
            </VStack>
            <br/>


                <Tabs align={'center'} variant='soft-rounded' colorScheme='blue'>
                    <TabList>
                        <Tab>All</Tab>
                        <Tab>Socials</Tab>
                        <Tab>Websites</Tab>
                    </TabList>

                    <TabPanels>
                        {/* All */}
                        <TabPanel>
                            <SimpleGrid columns={1} spacing={5}>
                                {links.map((link) => {
                                    return <LinkCard key={link.name} link={link}/>
                                })}
                            </SimpleGrid>
                        </TabPanel>

                        {/* Socials */}
                        <TabPanel>
                            <SimpleGrid columns={1} spacing={5}>
                                {links.filter(link => link.type === 'social').map((link) => {
                                    return <LinkCard key={link.name} link={link}/>
                                })}
                            </SimpleGrid>
                        </TabPanel>

                        {/* Websites */}
                        <TabPanel>
                            <SimpleGrid columns={1} spacing={5}>
                                {links.filter(link => link.type === 'website').map((link) => {
                                    return <LinkCard key={link.name} link={link}/>
                                })}
                            </SimpleGrid>
                        </TabPanel>
                    </TabPanels>
                </Tabs>

        </Layout>
    </>
  )
}
