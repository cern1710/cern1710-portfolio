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
                <Section delay={0.1}>
                    <Heading as="h4" fontSize={24} mb={4} textAlign="center" variant="section-title">
                        Highlights
                    </Heading>
                    <ProjectGridItem
                        id="deeppcr"
                        title="Parallel Tridiagonal Solvers for Neural Networks"
                        date="(Jun-Aug 2025)"
                    >
                        First reproducibility study of DeepPCR with cross-platform extensions
                        and custom Triton kernels to validate performance claims and establish computational boundaries
                    </ProjectGridItem>
                    <Divider my={4} />
                    <ProjectGridItem
                        id="ai_sprint_paris_2025"
                        title="AMD AI Sprint Hackathon"
                        date="(Jul 2025)"
                    >
                        High performance Mixtral-8x7B serving: vLLM v1 optimisation on AMD MI300x
                    </ProjectGridItem>
                    <Divider my={4} />
                    <ProjectGridItem
                        id="vit_era5"
                        title="ViT for ERA5 Weather Classification"
                        date="(Jan-Mar 2025)"
                    >
                        Vision Transformer (ViT) implementation with PyTorch Distributed
                        for weather classification across multiple NVIDIA V100s
                    </ProjectGridItem>
                    <Divider my={4} />
                    <ProjectGridItem
                        id="distributed_brain"
                        title="Distributed Brain Simulation"
                        date="(Feb-Mar 2025)"
                    >
                        C++ brain simulation using event-based coordination with MPI, featuring a custom type-safe
                        coordination framework with handler-based dispatching and batch processing
                    </ProjectGridItem>
                    <Divider my={4} />
                    <ProjectGridItem
                        id="raycaster"
                        title="micro:bit Raycaster"
                        date="(Dec 2023)"
                    >
                        Textured raycaster on the NRF52833 SoC supporting collision detection and sprites
                    </ProjectGridItem>
                </Section>
                <Section delay={0.3}>
                    <Heading as="h4" fontSize={24} mb={4} textAlign="center" variant="section-title">
                        Other Cool Projects
                    </Heading>
                    <ProjectGridItem
                        id="sac_highway"
                        title="SAC Agent Implementation"
                        date="(Mar 2025)"
                    >
                        Soft Actor-Critic (SAC) agent for continuous control in highway
                        driving scenarios using the HighwayEnv environment
                    </ProjectGridItem>
                    <Divider my={4} />
                    <ProjectGridItem
                        id="ct_slices"
                        title="Deep Learning for Predicting CT Slice Locations"
                        date="(Oct-Nov 2024)"
                    >
                        From-scratch implementation of Gaussian Processes and Deep Neural Networks for predicting relative CT slice positions on the axial axis
                    </ProjectGridItem>
                    <Divider my={4} />
                    <ProjectGridItem
                        id="inland_empire"
                        title="Inland Empire"
                        date="(Aug 2024 - Nov 2024)"
                    >
                        Movie recommendation system based on scraped Letterboxd user data
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
                        Software-defined networking (SDN) controller using Ryu and OpenFlow
                        with firewalling and pre-installed flow mods
                    </ProjectGridItem>
                    <Divider my={4} />
                    {/* <ProjectGridItem
                        id="mapreduce"
                        title="Parallel MapReduce"
                        date="(Jul-Sep 2023)"
                    >
                        pthreads-based MapReduce application for big data processing
                    </ProjectGridItem>
                    <Divider my={4} /> */}
                    <ProjectGridItem
                        id="genetic_algorithm"
                        title="Path Planning for Autonomous Robots"
                        date="(Nov-Dec 2023)"
                    >
                        Genetic algorithm-based path planning optimisation with simulated annealing
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
                        title="Convolutional Neural Networks for Domain Adaptation"
                        date="(Apr 2023)"
                    >
                        Fine-tuned ResNet-18 for domain adaptation on the DomainNet dataset in Pytorch
                    </ProjectGridItem>
                    {/* <Divider my={4} />
                    <ProjectGridItem
                        id="uni_life_sucks"
                        title="Uni Life Sucks"
                        date="(Sep-Nov 2022)"
                    >
                        Android marketplace application with fuzzy search and Firebase integration
                    </ProjectGridItem> */}
                </Section>
            </SimpleGrid>
        </Container>
    </Layout>
)

export default Projects
