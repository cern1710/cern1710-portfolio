import {
    Link,
    Container,
    Heading,
    Badge
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { Title } from '../../components/project'
import Paragraph from '../../components/paragraph'
import { BlockMath, InlineMath } from 'react-katex'
import 'katex/dist/katex.min.css'

const Project = () => (
    <Layout title="MSc Dissertation">
        <Container>
            <Title>
                MSc Dissertation: Parallel Tridiagonal Solvers for Neural Networks <Badge>Jun-Aug 2025</Badge>
            </Title>
            <Heading as="h3" variant="section-title">
                Abstract
            </Heading>
            <Paragraph>
                Training deep neural networks carries increasing
                computational costs and environmental impact,
                which are worsened by traditional
                layer-by-layer execution as model depth
                increases. <Link href="https://machinelearning.apple.com/research/deeppcr" isExternal>DeepPCR</Link>,
                an algorithm based on Parallel Cyclic Reduction (PCR),
                addresses this bottleneck by parallelising sequential operations into a
                system of equations solved via PCR.
                This dissertation presents the first reproducibility study of DeepPCR,
                reimplementing and extending its original single-device
                parallelisation with
                targeted optimisations and cross-platform analysis.
                Performance is assessed using roofline-guided profiling,
                solver microbenchmarks, parameter sweeps,
                and machine learning applications across NVIDIA V100 and AMD Instinct MI300X GPUs.
                The results confirm speedups consistent with the original authors'
                findings, while also
                delineating the regime where width dominates depth and costs rise sharply.
                This work strengthens the empirical foundations of DeepPCR,
                provides a clearer understanding of its performance boundaries,
                and highlights potential directions for optimising its applicability
                to deep, large-scale architectures.
            </Paragraph>
        </Container>
    </Layout>
)

export default Project