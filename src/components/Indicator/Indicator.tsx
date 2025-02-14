import { motion } from 'framer-motion';
import './Indicator.css';

export const Indicator: React.FC = () => {


    return (
        <motion.div
            className='indicator text-red-600 text-xs'>
            Click here
        </motion.div>
    )
}