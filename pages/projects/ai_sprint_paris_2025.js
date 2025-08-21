import {
    NextLink,
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
            <Title>
                AMD AI Sprint Hackathon <Badge colorScheme="teal" mr="2">Jul 2025</Badge>
            </Title>
            <Paragraph>
                Related article: <Link as={NextLink} href="/blog/unsubmitted_llm" passHref scroll={false}>
                    The Unsubmitted 2nd-Place LLM Inference Solution
                </Link>
            </Paragraph>
        </Container>
    </Layout>
)

export default Project