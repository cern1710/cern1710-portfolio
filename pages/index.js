import {
    Link,
    Container,
    Box,
    Button,
    Heading,
    useColorModeValue
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Image from 'next/image'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import NextLink from 'next/link'

const Page = () => (
    <Layout>
        <Container>
            {/* <Box
                borderRadius="lg"
                bg={useColorModeValue('whiteAlpha.600', 'whiteAlpha.200')}
                p={3}
                mb={6}
                textAlign="center"
                css={{ backdropFilter: 'blur(10px)', fontStyle: 'italic' }}
            >
                My God! What have I done?
            </Box> */}

            <Box display={{ md: 'flex' }}>
                <Box flexGrow={1}>
                    <Heading as="h2" variant="page-title">
                        Samuel Wu <span style={{ fontWeight: 'normal', fontSize: '0.8em' }}>(he/they)</span>
                    </Heading>
                    <div> HPC | Machine Learning | Public Speaker | Avid film buff</div>
                </Box>

                <Box
                    flexShrink={0}
                    mt={{ base: 4, md: 0 }}
                    ml={{ md: 6 }}
                    textAlign="center"
                >
                    <Box
                        borderColor="whiteAlpha.800"
                        borderWidth={2}
                        borderStyle="solid"
                        w="100px"
                        h="100px"
                        display="inline-block"
                        borderRadius="full"
                        overflow="hidden"
                    >
                        <Image
                            src="/profile.jpeg"
                            alt="Profile"
                            width="100"
                            height="100"
                        />
                    </Box>
                </Box>
            </Box>

            <Section delay={0.1}>
                <Heading as="h3" variant="section-title">
                    About me
                </Heading>
                <Paragraph>
                    I am a final year student at Lancaster University,
                    UK, in the School of Computing and Communications.
                    My undergraduate dissertation is on accelerating symbol-level
                    GRAND, supervised by Ioannis Chatzigeorgiou.
                    I also did a full exchange year at the Australian
                    National University.
                </Paragraph>
                <br />
                <Paragraph>
                    I am interested in high-performance computing (HPC)
                    in general and, in particular, leveraging HPC in
                    machine learning applications.
                </Paragraph>
                <br />
                <Paragraph>
                    Outside of my academic pursuits, I enjoy reading
                    and <Link href="https://letterboxd.com/cern1710">
                        watching films</Link>. I am also actively involved
                    in Lancaster University's Computer Science society,
                    having given talks on <Link as={NextLink}
                        href="/volunteering/rl" passHref scroll={false}>
                        reinforcement learning</Link> and
                    <Link as={NextLink}
                        href="/volunteering/llm_attacks"
                        passHref
                        scroll={false}> adversarial attacks on LLMs</Link>.
                </Paragraph>

                <Box align="center" my={6}>
                    <Button
                        as={NextLink}
                        href="/projects"
                        scroll={false}
                        rightIcon={<ChevronRightIcon />}
                        colorScheme="teal"
                        variant='outline'
                    >
                        My portfolio
                    </Button>
                </Box>
            </Section>

            <Section delay={0.3}>
                <Heading as="h3" variant="section-title">
                    Education
                </Heading>
                <BioSection>
                    <BioYear>Starting: Sep 2024</BioYear>
                    MSc in High Performance Computing with Data Science
                    at the University of Edinburgh
                </BioSection>
                <BioSection>
                    <BioYear>Oct 2021 - Present</BioYear>
                    BSc in Computer Science at Lancaster University
                </BioSection>
                <BioSection>
                    <BioYear>Jul 2022 - Jun 2023</BioYear>
                    Year abroad at the Australian National University
                </BioSection>
            </Section>

            <Section delay={0.5}>
                <Heading as="h3" variant="section-title">
                    Experience
                </Heading>
                <BioSection>
                    <BioYear>Oct 2023 - Mar 2024</BioYear>
                    Teaching assistant in OS and Computer Networks
                </BioSection>
                <BioSection>
                    <BioYear>Oct 2023 - Dec 2023</BioYear>
                    Back-end developer at ISS
                </BioSection>
            </Section>
        </Container>
    </Layout>
)

export default Page