import { Container, Box, Heading } from '@chakra-ui/react'

const Page = () => {
    return (
        <Container>
            <Box borderRadius="lg" bg="red" p={3} mb={6} align="center">
                I&apos;m a student at Lancaster University
            </Box>

            <Box display={{ md: 'flex' }}>
                <Box flexGrow={1}>
                    <Heading as="h2" variant="page-title">
                        Samuel Wu
                    </Heading>
                    <p>Computer Scientist / Avid film lover</p>
                </Box>
            </Box>
        </Container>
    )
}

export default Page