import { Section } from '../Section/Section';
import './TechnicalSkills.css';
import { motion } from "framer-motion";

export const TechnicalSkills: React.FC = () => {

    const listVariants = {
        initial: {
            x: -15,
            opacity: 0
        },
        animate: {
            x: 0,
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                duration: 0.5,
                ease: 'linear',
                repeat: Infinity,
                repeatDelay: 5.5
            },
        }
    }

    const icon = (<i className="fa fa-microchip" />);

    const title = (<h3 className="section-header">Technical Skills</h3>);

    const content = (
        <motion.div className="skills"
            variants={listVariants}
            initial="initial"
            animate="animate">
            <motion.div className="skill" variants={listVariants}>Angular</motion.div>
            <motion.div className="skill" variants={listVariants}>React</motion.div>
            <motion.div className="skill" variants={listVariants}>JavaScript</motion.div>
            <motion.div className="skill" variants={listVariants}>TypeScript</motion.div>
            <motion.div className="skill" variants={listVariants}>Java</motion.div>
            <motion.div className="skill" variants={listVariants}>CSS</motion.div>
            <motion.div className="skill" variants={listVariants}>HTML</motion.div>
            <motion.div className="skill" variants={listVariants}>Java Web Start</motion.div>
            <motion.div className="skill" variants={listVariants}>WordPress</motion.div>
            <motion.div className="skill" variants={listVariants}>Jira</motion.div>
            <motion.div className="skill" variants={listVariants}>GitHub</motion.div>
            <motion.div className="skill" variants={listVariants}>Bitbucket</motion.div>
            <motion.div className="skill" variants={listVariants}>SQL</motion.div>
            <motion.div className="skill" variants={listVariants}>Ruby on Rails</motion.div>
            <motion.div className="skill" variants={listVariants}>Monday</motion.div>
            <motion.div className="skill" variants={listVariants}>OPP</motion.div>
            <motion.div className="skill" variants={listVariants}>Project Management</motion.div>
            <motion.div className="skill" variants={listVariants}>Analysis and Design</motion.div>
            <motion.div className="skill" variants={listVariants}>Technical Support</motion.div>
            <motion.div className="skill" variants={listVariants}>Team Collaboration</motion.div>
        </motion.div>
    );

    return (
        <Section title={title} content={content} icon={icon} />
    )
}