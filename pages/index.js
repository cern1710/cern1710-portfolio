import {
    Link,
    Container,
    Box,
    Badge,
    Text,
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
                    <div> HPC | Machine Learning | Avid Film Buff | Public Speaker</div>
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
                    I recently finished my master's in High Performance Computing (HPC) with
                    Data Science at the University of
                    Edinburgh. <Link as={NextLink} href="/projects/deeppcr" passHref scroll={false}>
                        My master's dissertation
                    </Link> focused on replicating and extending DeepPCR,
                    an algorithm from a recent NeurIPS paper that applies parallel tridiagonal solvers to neural networks.
                    I hold a bachelor's degree with honours in Computer Science from Lancaster University,
                    with a full exchange year at the Australian National University.
                </Paragraph>
                <br />
                <Paragraph>
                    I am interested in HPC
                    in general and, in particular, leveraging accelerators for
                    machine learning (ML) applications. Currently, I am focused
                    on numerical methods for ML and generative models (normalising flows, flow-matching).
                </Paragraph>
                <br />
                <Paragraph>
                    Outside of my academic pursuits, I enjoy reading
                    and <Link href="https://letterboxd.com/cern1710" isExternal>
                        watching films</Link>. I am also actively involved
                    in the community, having given talks at <Link as={NextLink} href="/volunteering/hpc_kube"
                    passHref scroll={false}>Yorkshire DevOps
                        </Link> and <Link as={NextLink}
                        href="/volunteering/intro_parallel"
                        passHref
                        scroll={false}>BSides Leeds</Link>.
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

            <Section delay={0.2}>
                <Heading as="h3" variant="section-title">
                    Updates
                </Heading>
                <Box>
                    <Text>
                        <Badge colorScheme="teal" mr={2}>Aug 2025</Badge>
                        Article: <Link as={NextLink} href="/blog/ai_sprint_paris_2025" passHref scroll={false}>
                            The Unsubmitted 2nd-Place LLM Inference Solution
                        </Link>
                    </Text>
                </Box>
                <Box>
                    <Text>
                        <Badge colorScheme="teal" mr={2}>Aug 2025</Badge>
                        I have completed my MSc dissertation! <Link as={NextLink} href="/projects/deeppcr" passHref scroll={false}>
                            [View abstract]
                        </Link>
                    </Text>
                </Box>
            </Section>

            <Section delay={0.3}>
                <Heading as="h3" variant="section-title">
                    Education
                </Heading>
                <BioSection>
                    <BioYear>Sep 2024 - Aug 2025</BioYear>
                    MSc in High Performance Computing with Data Science
                    at the University of Edinburgh
                </BioSection>
                <BioSection>
                    <BioYear>Oct 2021 - Jul 2024</BioYear>
                    BSc Hons in Computer Science at Lancaster University
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