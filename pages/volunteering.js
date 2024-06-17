import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import { ProjectGridItem } from '../components/griditem'
import Section from '../components/section'
import Layout from '../components/layouts/article'

const Volunteering = () => (
    <Layout title="Volunteering">
        <Container>
            <Heading as="h3" fontSize={30} mb={4}>
                Volunteering work
            </Heading>

            <SimpleGrid columns={[1, 1, 1]} gap={6}>
                <Section>
                    <ProjectGridItem
                        category="volunteering"
                        id="intro_parallel"
                        title="An Introduction to Parallelism"
                        date="(Jun 2024)"
                    >
                        Introducing the concepts of parallel computing, given at BSides Leeds
                    </ProjectGridItem>
                    <Divider my={4} />
                    <ProjectGridItem
                        category="volunteering"
                        id="llm_attacks"
                        title="Adversarial Attacks on Aligned LLMs"
                        date="(Mar 2024)"
                    >
                        Understanding how aligned Large Language Models can be attacked, given at LUHack
                    </ProjectGridItem>
                    <Divider my={4} />
                    <ProjectGridItem
                        category="volunteering"
                        id="rl"
                        title="Mario Learns Reinforcement Learning"
                        date="(Feb 2024)"
                    >
                        An Introduction to RL given at LU CompSoc
                    </ProjectGridItem>
                    <Divider my={4} />
                    <ProjectGridItem
                        category="volunteering"
                        id="newpipe"
                        title="Feature Contribution to NewPipe"
                        date="(Nov 2022)"
                    >
                        Introduced two special toggles for accessibility, written in Kotlin
                    </ProjectGridItem>
                </Section>
            </SimpleGrid>
        </Container>
    </Layout>
)

export default Volunteering