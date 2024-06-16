import { AnimatePresence, motion } from 'framer-motion'
import { IconButton, useColorMode, useColorModeValue } from '@chakra-ui/react'
import { SunIcon, MoonIcon } from '@chakra-ui/icons'

const ToggleButton = () => {
    const { toggleColorMode } = useColorMode()
    const currentMode = useColorModeValue('light', 'dark')
    const icon = useColorModeValue(<MoonIcon />, <SunIcon />)
    const colorScheme = useColorModeValue('purple', 'orange')

    return (
        <AnimatePresence mode='wait' initial={false}>
            <motion.div
                style={{ display: 'inline-block' }}
                key={currentMode}
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 10, opacity: 0 }}
                transition={{ duration: 0.25 }}
            >
                <IconButton
                    aria-label="Toggle theme"
                    colorScheme={colorScheme}
                    icon={icon}
                    onClick={toggleColorMode}
                />
            </motion.div>
        </AnimatePresence>
    );
};

export default ToggleButton;