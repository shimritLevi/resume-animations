import { motion } from 'framer-motion';
import './ArrowDown.css';

export const ArrowDown: React.FC = () => {
    const arrowContainerVariants = {
        hidden: {
            opacity: 0,
            y: 100,
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "tween",
                duration: 1,
                delay: 1,
            }
        }
    };

    return (
        <motion.div className="arrows-container h-[11vh]"
            variants={arrowContainerVariants}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 }}>
            <motion.div className="arrows"
            />
        </motion.div>
    )
}