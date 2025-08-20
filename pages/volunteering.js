import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import { ProjectGridItem } from '../components/griditem'
import Section from '../components/section'
import Layout from '../components/layouts/article'
import BubsyLoader from '../components/loader'

const Volunteering = () => (
    <Layout title="Volunteering">
        <BubsyLoader />
        <Container>
            <Heading as="h3" fontSize={30} mb={4}>
                Volunteer Experience
            </Heading>

            <SimpleGrid columns={[1, 1, 1]} gap={6}>
                <Section>
                    <ProjectGridItem
                        category="volunteering"
                        id="hpc_kube"
                        title="Why Not Both? Bringing HPC and Kubernetes Together"
                        date="(Jun 2024)"
                    >
                        Lightning talk on HPC and AI workloads in Kubernetes, given at Yorkshire DevOps
                    </ProjectGridItem>
                    <Divider my={4} />
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
                        id="mario_rl"
                        title="Mario Learns Reinforcement Learning"
                        date="(Feb 2024)"
                    >
                        An Introduction to reinforcement learning given at LU CompSoc, covering
                        Markov Decision Processes and Q-Learning
                    </ProjectGridItem>
                    <Divider my={4} />
                    <ProjectGridItem
                        category="volunteering"
                        id="anu_course_rep"
                        title="Course Representative"
                        date="(Feb-Jul 2023)"
                    >
                        Acted as a liason for classmates, communicating their feedback to convenors
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
                    <Divider my={4} />
                    <ProjectGridItem
                        category="volunteering"
                        id="scan_editor"
                        title="Deputy Editor at SCAN"
                        date="(Jan-Jun 2022)"
                    >
                        Responsible for editing film articles in Lancaster University's student newspaper
                    </ProjectGridItem>
                </Section>
            </SimpleGrid>
        </Container>
    </Layout>
)

export default Volunteering