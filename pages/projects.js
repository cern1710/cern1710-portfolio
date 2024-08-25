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
                        id="transformers"
                        title="Transformers From Scratch"
                        date="(Aug 2024)"
                    >
                        Built the Transformer architecture from scratch, and extended it to the Vision Transformer (ViT) model
                    </ProjectGridItem>
                    <Divider my={4} />
                    <ProjectGridItem
                        id="fda_surfaces"
                        title="FDASurfaces.jl"
                        date="(Aug 2023 - Jul 2024)"
                    >
                        Core contributor of a CUDA-powered Julia package, used for functional data analysis on smooth manifolds
                    </ProjectGridItem>
                    <Divider my={4} />
                    <ProjectGridItem
                        id="sdn"
                        title="SDN Controller"
                        date="(Feb-Mar 2024)"
                    >
                        Ryu-based OpenFlow routing controller with firewalling and pre-installed flow mods
                    </ProjectGridItem>
                    <Divider my={4} />
                    <ProjectGridItem
                        id="genetic_algorithm"
                        title="Path Planning for Autonomous Robots"
                        date="(Nov-Dec 2023)"
                    >
                        Genetic algorithm-based path planning optimisation with simulated annealing
                    </ProjectGridItem>
                    <Divider my={4} />
                    <ProjectGridItem
                        id="raycaster"
                        title="micro:bit Raycaster"
                        date="(Dec 2023)"
                    >
                        Textured raycaster on the NRF52833 SoC supporting collision detection and sprites
                    </ProjectGridItem>
                    <Divider my={4} />
                    <ProjectGridItem
                        id="mapreduce"
                        title="Parallel MapReduce"
                        date="(Jul-Sep 2023)"
                    >
                        pthreads-based MapReduce application for big data processing
                    </ProjectGridItem>
                    <Divider my={4} />
                    <ProjectGridItem
                        id="mojo"
                        title="Mojo Compiler"
                        date="(Feb-Jun 2023)"
                    >
                        Fully functioning compiler for an object-oriented language; written in Java
                    </ProjectGridItem>
                    <Divider my={4} />
                    <ProjectGridItem
                        id="advection"
                        title="Nine-Point Stencil Solver"
                        date="(Mar-May 2023)"
                    >
                        Parallelised 2D advection solver using MPI, OpenMP and CUDA; written in C
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
