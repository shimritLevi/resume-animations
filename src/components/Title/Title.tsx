import './Title.css';
import { motion } from "framer-motion";

export const Title: React.FC = () => {
    const titleContainerVariants = {
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
                delay: 0.5,
            }
        }
    };

    return (
        <motion.header
            variants={titleContainerVariants}>
            <motion.div
                className="p-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1 }}
            >
                <h1>Shimrit Haimovich</h1>
                <h2>Software Developer</h2>

            </motion.div>
        </motion.header >
    )
}