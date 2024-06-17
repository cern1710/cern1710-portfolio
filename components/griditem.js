import NextLink from 'next/link'
import Image from 'next/image'
import { Box, Text, LinkBox, LinkOverlay } from '@chakra-ui/react'
import { Global } from '@emotion/react'

export const GridItem = ({ children, href, title, thumbnail }) => (
    <Box w="100%" align="center">
        <LinkBox cursor="pointer">
            <Image src={thumbnail}
                alt={title}
                className="grid-item-thumbnail"
                placeholder="blur"
                loading="lazy"
                blurDataURL="defaultBlurDataURL"
                />
                <LinkOverlay href={href} target="_blank">
                    <Text mt={2}>
                        {title}
                    </Text>
                </LinkOverlay>
                <Text fontSize={14}>
                    {children}
                </Text>
        </LinkBox>
    </Box>
)

export const ProjectGridItem = ({ children, category='projects', id, title, thumbnail }) => (
    <Box w="100%" textAlign="center">
        <LinkBox
            as={NextLink}
            href={`/${category}/${id}`}
            scroll={false}
            cursor="pointer"
        >
            <Image
                src={thumbnail}
                // alt={title}
                className="grid-item-thumbnail"
                placeholder="blur"
                blurDataURL="defaultBlurDataURL"
            />
            <LinkOverlay
                as="div"
                href={`/${category}/${id}`}
            >
                <Text mt={0} fontSize={20}>
                    {title}
                </Text>
            </LinkOverlay>
            <Text
                fontSize={14}>{children}
            </Text>
        </LinkBox>
    </Box>
)

export const GridItemStyle = () => (
    <Global
        styles={`
            .grid-item-thumbnail {
                border-radius: 12px;
            }
        `}
    />
)