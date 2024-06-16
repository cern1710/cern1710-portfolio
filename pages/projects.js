import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import { ProjectGridItem } from '../components/griditem'
import Section from '../components/section'
import Layout from '../components/layouts/article'

const Projects = () => (
    <Layout title="Projects">
        <Container>
            <Heading as="h3" fontSize={30} mb={4}>
                Projects
            </Heading>

            <SimpleGrid columns={[1, 1, 2]} gap={6}>
                <Section>
                    <ProjectGridItem
                        id="advection"
                        title="Advection solver"
                    >
                        Parallel project
                    </ProjectGridItem>
                </Section>
            </SimpleGrid>
        </Container>
    </Layout>
)

export default Projects