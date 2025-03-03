import './Section.css';
import { ResizablePanel } from '../ResizablePanel/ResizablePanel';
import { motion } from 'framer-motion';
import { Separator } from '../Separator/Separator';

interface ISection { title: JSX.Element, content: JSX.Element, icon: JSX.Element };

export const Section = ({ title, content, icon }: ISection) => {

    return (
        <>
            <ResizablePanel>
                <motion.div className="section-container justify-space-between">
                    <motion.div className='icon duration-[1s]'
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{
                            duration: 0.4,
                            scale: { type: "tween", visualDuration: 0.4, bounce: 0.5 },
                        }}>
                        {icon}
                    </motion.div>
                    <motion.div className='title duration-[1s]'
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0 }}>
                        {title}
                    </motion.div>
                    <div className="content duration-[1s]">
                        {content}
                    </div>
                </motion.div>
            </ResizablePanel>
            <Separator />
        </>
    )
}