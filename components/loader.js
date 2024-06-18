import { forwardRef } from 'react'
import { Box, Spinner } from '@chakra-ui/react'
import dynamic from 'next/dynamic'

export const BubsyContainer = forwardRef(({ children }, ref) => (
	<Box
		ref={ref}
		className="voxel-bubsy"
		m="auto"
		display="flex"
		alignItems="center"
		justifyContent="center"
		mt={['-20px', '-60px', '-180px']}
		mb={['-40px', '-140px', '-210px']}
		w={[280, 480, 640]}
		h={[280, 480, 640]}
		position="relative"
		role="progressbar"
	>
		{children}
	</Box>
))

const LazyVoxelBubsy = dynamic(() => import('../components/bubsy'), {
    ssr: false,
    loading: () => <Spinner size="xl" color="red.500" />
})

const Loader = () => {
	return (
		<BubsyContainer>
			<LazyVoxelBubsy />
		</BubsyContainer>
	)
}

export default Loader