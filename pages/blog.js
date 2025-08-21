import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import { BlogGridItem } from '../components/griditem'
import Section from '../components/section'
import Layout from '../components/layouts/article'

const Blog = () => (
    <Layout title="Blog">
        <Container>
            <Heading as="h3" fontSize={30} mb={4} >
                Blog
            </Heading>
            <SimpleGrid columns={[1, 1, 1]} gap={6}>
                <Section delay={0.1}>
                    {/* <BlogGridItem
                        id="hutchinson_trace"
                        title="The Hutchinson Trace Estimator"
                        date="(Aug 2025)"
                    >
                    </BlogGridItem>
                    <Divider my={4} /> */}
                    <BlogGridItem
                        id="ai_sprint_paris_2025"
                        title="The Unsubmitted 2nd-Place LLM Inference Solution"
                        date="(Aug 2025)"
                    >
                    </BlogGridItem>
                </Section>
            </SimpleGrid>
        </Container>
    </Layout>
)

export default Blog
