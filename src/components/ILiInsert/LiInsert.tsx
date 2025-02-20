import { motion } from "framer-motion"

interface ILiInsert {item: JSX.Element, index: number};

export const LiInsert = ({item, index}: ILiInsert) => {
    return (
        <motion.li
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1, }}>
            {item}
        </motion.li>
    )

}