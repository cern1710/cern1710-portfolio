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
        <Text align="center">
            Oops! We can&apos;t find what you are looking for.
        </Text>
        <Divider my={6} />
        <Box my={6} align="center">
            <Button as={NextLink} href="/" colorScheme="teal">
                Return to home
            </Button>
        </Box>
    </Container>
)

export default NotFound