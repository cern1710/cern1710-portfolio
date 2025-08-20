import {
    Link,
    Container,
    Heading,
    Badge
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { Title } from '../../components/project'
import Paragraph from '../../components/paragraph'

const Project = () => (
    <Layout title="AMD AI Sprint Hackathon">
        <Container>
            <Title >
                Building a 2nd-Place LLM Inference Solution and the
                Submission that Never Happened  <Badge colorScheme="teal" mr="2">Jul 2025</Badge>
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

export default Project