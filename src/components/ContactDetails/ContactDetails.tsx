import './ContactDetails.css';
import { motion } from 'framer-motion';

export const ContactDetails: React.FC = () => {
    const contactContainerVariants = {
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
        <motion.div className="contact-details"
            variants={contactContainerVariants}
            initial="hidden"
            animate="visible">
            <div className="contact-details-content">
                <i className="fa fa-envelope-o "></i>
                <div>shimrit11101@gmail.com</div>
            </div>
            <div className="contact-details-content">
                <i className="fa fa-phone"></i>
                <div>050-572-2901</div>
            </div>
            <div className="contact-details-content">
                <i className="fa fa-linkedin-square"></i>
                <div>linkedin.com/in/shimrit-haimovich-60217914a</div>
            </div>
        </motion.div>
    )
}