import {
    Link,
    Container,
    Heading,
    Badge
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { Title } from '../../components/project'
import P from '../../components/paragraph'

const Project = () => (
    <Layout title="AMD AI Sprint Hackathon">
        <Container>
            <Title>
                Building a 2nd-Place LLM Inference Solution and the
                Submission that Never Happened  <Badge>Jul 2025</Badge>
            </Title>
            <P>
                Coming soon :)
            </P>
        </Container>
    </Layout>
)

export default Project