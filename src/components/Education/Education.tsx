import { Indicator } from '../Indicator/Indicator';
import { ResizablePanel } from '../ResizablePanel/ResizablePanel';
import './Education.css';
import { motion } from "framer-motion";

export const Education: React.FC = () => {
    return (
        <ResizablePanel>
            <>
                <h3 className="section-header typing-animation">Education</h3>
                <Indicator></Indicator>
                <div className="section-content">
                    <div className="sub-section">
                        <h4 className="sub-title typing-animation">B.Sc. in Computer Science & Mathematics - Ariel University</h4>
                        <h5 className="date">2015-2018</h5>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}>
                            Final Project: Development interface, an IS for a team of Bioinformatic experts on purpose to optimize anti-cancer
                            drugs using java and SQL. Leading the entire project process from analysis and characterization to development.

                        </motion.p>
                    </div>
                    <div className="sub-section">
                        <h4 className="sub-title">Angular Development Course</h4>
                        <h5 className="date">2020</h5>
                        <motion.p>Certified, 'Yaniv Arad'.</motion.p>
                    </div>
                </div>
            </>
        </ResizablePanel>
    )
}