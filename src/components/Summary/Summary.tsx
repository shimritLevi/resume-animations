import { Indicator } from '../Indicator/Indicator';
import { ResizablePanel } from '../ResizablePanel/ResizablePanel';
import './Summary.css';
import { motion } from "framer-motion";

export const Summary: React.FC = () => {
    return (
        <ResizablePanel>
            <div className="summary-section">
                <h3 className="summary-header section-header typing-animation">Summary</h3>
                <Indicator></Indicator>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}>
                    Highly skilled software developer <b>with 5 years expertise in
                        client-side programming, </b>specializing in <b>Angular and
                            React</b>. Proven track record of successful project
                    collaboration and leadership, with deep knowledge of modern web
                    standards and best practices in front-end architecture, from UI/UX
                    design to efficient state management.
                    <b>Self-taught</b> in multiple programming languages and frameworks,
                    <b>loves the field</b>, passionate about learning,
                    responsible and team player.
                    Seeking new opportunities to contribute to innovative
                    software development projects.
                </motion.p>
            </div>
        </ResizablePanel>
    );
}