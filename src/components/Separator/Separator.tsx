import './Separator.css';
import { motion } from "framer-motion"

export const Separator: React.FC = () => {

    return (
        <motion.div
            className="separator h-[2px] w-[100%]"
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
                duration: 1.4,
                scale: { type: "tween", visualDuration: 0.4, bounce: 0.5 },
            }}
        />
    )
}