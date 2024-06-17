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
                        id="llm_attacks"
                        title="Adversarial Attacks on Aligned Large Language Models"
                    >
                        Understanding AI alignment and how aligned Large Language Models can be attacked, given at LUHack
                    </ProjectGridItem>
                    <Divider my={4} />
                    <ProjectGridItem
                        category="volunteering"
                        id="rl"
                        title="Mario Learns Reinforcement Learning"
                    >
                        An Introduction to RL given at LU CompSoc
                    </ProjectGridItem>
                    <Divider my={4} />
                    <ProjectGridItem
                        category="volunteering"
                        id="intro-parallel"
                        title="An Introduction to Parallelism"
                    >
                        Introducing the concepts of parallel computing at BSides Leeds
                    </ProjectGridItem>
                </Section>
            </SimpleGrid>
        </Container>
    </Layout>
)

export default Volunteering