import { useEffect, useState } from 'react'
import NextLink from 'next/link'
import {
    Box,
    Heading,
    Text,
    Container,
    Divider,
    Button
} from '@chakra-ui/react'

const messages = [
    "The eternal dark claimed this page — or it was never meant to be.",
    "A corner turned — an emptiness, pale as linen, stark as moonlight.",
    "Sought by the shadow — a page never to be writ — yet other paths remain.",
    "A thought makes its little order — and then, gently, lets it go."
]

const NotFound = () => {
    // Deterministic initial value for SSR, then randomise on client
    const [message, setMessage] = useState(messages[0])

    useEffect(() => {
        const m = messages[Math.floor(Math.random() * messages.length)]
        setMessage(m)
    }, [])

    return (
        <Container>
            <br/>
            <Heading as="h1" align="center">
                404
            </Heading>
            <Text align="center" mt={5} fontStyle="italic">
                {message}
            </Text>
            <Divider my={6} />
            <Box my={6} align="center">
                <Button as={NextLink} href="/" colorScheme="teal">
                    Break the Stillness — go home
                </Button>
            </Box>
        </Container>
    )
}

export default NotFound