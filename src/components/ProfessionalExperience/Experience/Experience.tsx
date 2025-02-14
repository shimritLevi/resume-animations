import { Indicator } from '../../Indicator/Indicator';
import { ResizablePanel } from '../../ResizablePanel/ResizablePanel';
import './Experience.css';
import { motion } from "framer-motion";

interface IExperience { title: string, date: string, list: JSX.Element[] };
export const Experience = ({ title, date, list }: IExperience) => {
    return (
        <ResizablePanel>
            <div className="sub-section">
                <h4 className="sub-title typing-animation">{title}</h4>
                <Indicator></Indicator>
                <h5 className="date typing-animation">{date}</h5>
                <ul>
                    {list.map((item: JSX.Element, index) => {
                        return <motion.li
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}>
                            {item}
                        </motion.li>;
                    })}
                </ul>
            </div>
        </ResizablePanel>
    )
}