import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import { ProjectGridItem } from '../components/griditem'
import Section from '../components/section'
import Layout from '../components/layouts/article'

const Volunteering = () => (
    <Layout title="Volunteering">
        <Container>
            <Heading as="h3" fontSize={30} mb={4}>
                Volunteering work
            </Heading>

            <SimpleGrid columns={[1, 1, 2]} gap={6}>
                <Section>
                    <ProjectGridItem
                        id="advection"
                        title="Under construction"
                    >
                        Under construction
                    </ProjectGridItem>
                </Section>
            </SimpleGrid>
        </Container>
    </Layout>
)

export default Volunteering