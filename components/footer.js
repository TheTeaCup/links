import {chakra, Flex, Heading, Link, Spacer, Text,} from '@chakra-ui/react';

export default function Footer() {
    return (
        <chakra.footer mt={10}>
            <Flex
                direction={['column', 'column', 'row']}
                pos="fixed"
                bottom={0}
                w="full"
                px={6}
                py={1}
                align="center"
            >
                <Heading size="sm"><Link isExternal href={'https://github.com/TheTeaCup/links'}>Source
                    Code</Link></Heading>
                <Spacer/>
                <Text fontSize="sm">
                    Copyright &copy; {new Date().getFullYear()}{' '}
                    <Link isExternal href={"https://hunterwilson.dev"}>
                        Hunter Wilson
                    </Link>
                </Text>
            </Flex>
        </chakra.footer>
    );
}