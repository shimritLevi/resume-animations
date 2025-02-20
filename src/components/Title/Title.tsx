import { useRef } from 'react';
import { ArrowDown } from '../ArrowDown/ArrowDown';
import { ContactDetails } from '../ContactDetails/ContactDetails';
import './Title.css';
import { motion, useScroll, useTransform } from "framer-motion";

export const Title: React.FC = () => {

    const ref = useRef(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start center", "end center"],
    })
    const opacity = useTransform(
        scrollYProgress,
        [0, 0.5, 1],
        [0, 1, 0],
    )

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
        <motion.div ref={ref} style={{
            opacity: opacity,
        }}>
            <motion.header
                className='h-[85vh]'
                variants={titleContainerVariants}>
                <motion.div
                    className="p-6 h-[100%] flex flex-col items-center justify-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 1 }}
                >
                    <h1 className='text-[25px]'>Shimrit Haimovich</h1>
                    <h2 className='text-[35px]'>Software Developer</h2>

                </motion.div>
            </motion.header >
            <ContactDetails />
            <ArrowDown />
        </motion.div>
    )
}