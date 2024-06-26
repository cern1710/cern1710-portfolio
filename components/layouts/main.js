import Head from 'next/head'
import NavBar from '../navbar'
import { Box, Container } from '@chakra-ui/react'

const Main = ({children, router}) => {
    return (
        <Box as="main" pb={8}>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="description" content="Samuel's portfolio website - Welcome!" />
                <meta name="author" content="Samuel Wu" />
                <link rel="icon" href="/favicon.ico" sizes="any" />
                <title>Samuel Wu</title>
            </Head>

            <NavBar path={router.asPath}/>

            <Container maxW={{
                    base: "100%",
                    sm: "600px",
                    md: "700px",
                    lg: "900px",
                    xl: "1200px"
                }}
                pt={20}
            >
                {children}
            </Container>
        </Box>
    )
}

export default Main