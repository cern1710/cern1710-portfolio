import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import { ProjectGridItem } from '../components/griditem'
import Section from '../components/section'
import Layout from '../components/layouts/article'

const Projects = () => (
    <Layout title="Projects">
        <Container>
            <Heading as="h3" fontSize={30} mb={4} >
                Projects
            </Heading>
            <SimpleGrid columns={[1, 1, 1]} gap={6}>
                <Section>
                    <ProjectGridItem
                        id="sdn"
                        title="SDN Controller"
                        date="(Feb-Mar 2024)"
                    >
                        Ryu-based OpenFlow static routing controller with firewalling
                    </ProjectGridItem>
                    <Divider my={4} />
                    <ProjectGridItem
                        id="genetic"
                        title="Path Planning for Autonomous Robots"
                        date="(Nov-Dec 2023)"
                    >
                        Genetic algorithm-based path planning optimisation with simulated annealing
                    </ProjectGridItem>
                    <Divider my={4} />
                    <ProjectGridItem
                        id="advection"
                        title="Parallel 9-Point Stencil Solver"
                        date="(Mar-Jun 2023)"
                    >
                        2D advection solver using MPI, OpenMP and CUDA written in C
                    </ProjectGridItem>
                    <Divider my={4} />
                    <ProjectGridItem
                        id="domain_adaptation"
                        title="Domain Adaptation for Deep Learning"
                        date="(Apr 2023)"
                    >
                        Deep CNN model for domain adaptation on the DomainNet dataset in Pytorch
                    </ProjectGridItem>
                    <Divider my={4} />
                    <ProjectGridItem
                        id="uni_life_sucks"
                        title="Uni Life Sucks"
                        date="(Sep-Nov 2022)"
                    >
                        Android marketplace application with fuzzy search and Firebase integration
                    </ProjectGridItem>
                </Section>
            </SimpleGrid>
        </Container>
    </Layout>
)

export default Projects