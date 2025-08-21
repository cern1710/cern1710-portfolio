import { forwardRef } from 'react'
import Logo from './logo'
import NextLink from 'next/link'
import {
    Container,
    Box,
    Link,
    Stack,
    Heading,
    Flex,
    Menu,
    MenuItem,
    MenuList,
    MenuButton,
    IconButton,
    useColorModeValue
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import ToggleButton from './toggle.js'

const LinkItem = ({ href, path, target, children, ...props }) => {
    const active = href === '/' ? path === href : path.startsWith(href)
    const inactiveColor = useColorModeValue('gray200', 'whiteAlpha.900')
    const activeColor = useColorModeValue("#202023", "white")
    return (
        <Link
            as={NextLink}
            href={href}
            scroll={false}
            p={2}
            bg={active ? 'glassTeal' : undefined}
            color={active ? activeColor : inactiveColor}
            target={target}
            borderRadius="full" py={2} px={5}
            {...props}
        >
            {children}
        </Link>
    )
}

const MenuLink = forwardRef((props, ref) => (
    <Link ref={ref} as={NextLink} {...props} />
))

// Component to handle active state in mobile menu
// This fixes the issue where the first box (About) is always greyed out
const ActiveMenuItem = ({ href, path, children, ...props }) => {
    const active = href === '/' ? path === href : path.startsWith(href)
    const activeColor = useColorModeValue('#202023', 'inherit')
    const activeBg = useColorModeValue('glassTeal', 'glassTeal')
    return (
        <MenuItem
            as={MenuLink}
            href={href}
            bg={active ? activeBg : undefined}
            color={active ? activeColor : undefined}
            fontWeight={active ? 'semibold' : 'normal'}
            {...props}
        >
            {children}
        </MenuItem>
    )
}

const NavBar = props => {
    const { path } = props
    return (
        <Box
            position="fixed"
            as="nav"
            w="100%"
            bg={useColorModeValue('#ffffff40', "#20202390")}
            style={{ backdropFilter: 'blur(10px)' }}
            zIndex={2}
            {...props}
        >

        <Container
            display="flex"
            p={2}
            maxW={{ base: "100%", sm: "600px", md: "700px", lg: "900px", xl: "1200px" }}
            wrap="wrap"
            align="center"
            justify="space-between"
        >
            <Flex align="center" mr={5}>
                <Heading as="h1" size="lg" letterSpacing={'tighter'}>
                    <Logo/>
                </Heading>
            </Flex>

            <Stack
                direction={{base: 'column', md: 'row'}}
                display={{base: 'none', md: 'flex'}}
                width={{base: 'full', md: 'auto'}}
                alignItems="center"
                flexGrow={1}
                mt={{base: 4, nmd: 0}}
            >
                <LinkItem href="/projects" path={path}>
                    Projects
                </LinkItem>
                <LinkItem href="/volunteering" path={path}>
                    Volunteering
                </LinkItem>
                <LinkItem href="/blog" path={path}>
                    Blog
                </LinkItem>
                <LinkItem href="/cv.pdf" path={path} target="_blank">
                    CV
                </LinkItem>
                <LinkItem
                    href="https://github.com/cern1710"
                    path={path}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Box as={FaGithub} size="20px" />
                </LinkItem>
                <LinkItem
                    href="https://www.linkedin.com/in/wcl-samuel/"
                    path={path}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Box as={FaLinkedin} size="20px" />
                </LinkItem>
            </Stack>

            <Box flex={1} align="right">
                <ToggleButton />
                <Box ml={2} display={{base: 'inline-block', md: 'none'}}>
                    <Menu isLazy id="navbar-menu" autoSelect={false}>
                        <MenuButton
                            as={IconButton}
                            icon={<HamburgerIcon />}
                            variant="outline"
                            aria-label="Options"
                        />
                        <MenuList>
                            <ActiveMenuItem href="/" path={path}>
                                About
                            </ActiveMenuItem>
                            <ActiveMenuItem href="/projects" path={path}>
                                Projects
                            </ActiveMenuItem>
                            <ActiveMenuItem href="/volunteering" path={path}>
                                Volunteering
                            </ActiveMenuItem>
                            <ActiveMenuItem href="/blog" path={path}>
                                Blog
                            </ActiveMenuItem>
                            <MenuItem as={MenuLink} href="/cv.pdf" target="_blank">
                                CV
                            </MenuItem>
                            <MenuItem
                                as={Link}
                                href="https://github.com/cern1710"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                GitHub
                            </MenuItem>
                            <MenuItem
                                as={Link}
                                href="https://www.linkedin.com/in/wcl-samuel/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                LinkedIn
                            </MenuItem>
                        </MenuList>
                    </Menu>
                </Box>
            </Box>
        </Container>
    </Box>
    )
}

export default NavBar