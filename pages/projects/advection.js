import { Container, Badge } from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { Title } from '../../components/project'
import P from '../../components/paragraph'

const Project = () => (
    <Layout title="Parallelised 2D Advection Solver">
        <Container>
            <Title>
                2D Advection Solver <Badge>2023-</Badge>
            </Title>
            <P>
                It is fast.
            </P>
        </Container>
    </Layout>
)

export default Project