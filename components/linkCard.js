import {Button, Center, Text} from "@chakra-ui/react";
import Link from "next/link";

const LinkCard = ({link}) => {
    return (
        <>
            <Link href={link.url} key={link.name} target='_blank' rel='noopener noreferrer'>
                <Button w={'full'} leftIcon={link.icon}>
                    <Center>
                        <Text>{link.name}</Text>
                    </Center>
                </Button>
            </Link>
        </>
    )
}

export default LinkCard;