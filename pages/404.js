import NextLink from 'next/link'
import {
    Box,
    Heading,
    Text,
    Container,
    Divider,
    Button
} from '@chakra-ui/react'

const NotFound = () => (
    <Container>
        <br/>
        <Heading as="h1" align="center">
            404
        </Heading>
        <Text align="center" mt={5} fontStyle="italic">
            The eternal dark has claimed this page...or perhaps it was never meant to be.
        </Text>
        <Divider my={6} />
        <Box my={6} align="center">
            <Button as={NextLink} href="/" colorScheme="teal">
                Escape to the corporeal plane
            </Button>
        </Box>
    </Container>
)

export default NotFound