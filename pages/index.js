import { Container, Box, Heading, useColorModeValue } from '@chakra-ui/react'

const Page = () => {
    const boxBgColor = useColorModeValue('red.50', 'red.700');

    return (
        <Container>
            <Box
                borderRadius="lg"
                bg={boxBgColor}
                p={3}
                mb={6}
                align="center"
                css={{ backdropFilter: 'blur(10px)' }}
            >
                I&apos;m a student at Lancaster University
            </Box>

            <Box display={{ md: 'flex' }}>
                <Box flexGrow={1}>
                    <Heading as="h2" variant="page-title">
                        Samuel Wu
                    </Heading>
                    <div> Parallel Computing | Machine Learning | Public Speaker | Avid film buff</div>
                </Box>
            </Box>
        </Container>
    )
}

export default Page