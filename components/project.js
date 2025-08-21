import NextLink from 'next/link'
import { Heading, Box, Image, Link, Badge } from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'

export const Title = ({ children, category = 'projects', categoryTitle }) => {
    const href = `/${category}`
    const displayTitle = categoryTitle || category.charAt(0).toUpperCase() + category.slice(1)

    return (
        <Box>
            <Link as={NextLink} href={href}>
                {displayTitle}
            </Link>
            <span>
                {' '}
                <ChevronRightIcon />{' '}
            </span>
            <Heading display="inline-block" as="h3" fontSize={20} mb={4}>
                {children}
            </Heading>
        </Box>
    )
}

export const ProjectImage = ({ src, alt }) => {
    <Image borderRadius="lg" w="full" src={src} alt={alt} mb={4} />
}

export const Meta = ({ children }) => (
    <Badge colorScheme="green" mr={2}>
        {children}
    </Badge>
  )