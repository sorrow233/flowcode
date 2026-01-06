import { useLocation, useOutlet } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'

const AnimatedOutlet = () => {
    const location = useLocation()
    const element = useOutlet()

    return (
        <AnimatePresence mode="wait" initial={false}>
            <motion.div
                key={location.pathname}
                initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                exit={{ opacity: 0, y: -20, filter: 'blur(10px)' }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                style={{ width: '100%', height: '100%' }}
            >
                {element}
            </motion.div>
        </AnimatePresence>
    )
}

export default AnimatedOutlet
