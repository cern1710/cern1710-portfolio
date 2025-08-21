import {
    Link,
    Container,
    Heading,
    Badge
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { Title } from '../../components/project'
import Paragraph from '../../components/paragraph'

const Blog = () => (
    <Layout title="AMD AI Sprint Hackathon">
        <Container>
            <Title category='blog'>
                Building a 2nd-Place LLM Inference Solution and the
                Submission that Never Happened  <Badge colorScheme="teal" mr="2">Aug 2025</Badge>
            </Title>
            <Paragraph>
                Coming soon :)
            </Paragraph>
            <br />
            <Paragraph>
                Placeholder
            </Paragraph>
        </Container>
    </Layout>
)

export default Blog