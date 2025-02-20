import './ResizablePanel.css';
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface IResizablePanel {
    children: JSX.Element;
}
export const ResizablePanel = ({ children }: IResizablePanel) => {

    const [isExpanded, setIsExpanded] = useState(false);

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (isExpanded && !(e.target as HTMLElement).closest(".resizable-panel.expanded")) {
                setIsExpanded(false);
            }
        };

        document.addEventListener("click", handleClickOutside);
        return () => document.removeEventListener("click", handleClickOutside);
    }, [isExpanded]);

    const handleClick = () => {
        if (document.querySelectorAll('.expanded').length === 0) {
            setIsExpanded(true);
        }
    }

    return (
        <motion.div
            className={`resizable-panel cursor-pointer ${isExpanded ? 'expanded' : ''}`}
            style={isExpanded ? { top: "10%", right: "10%", left: "10%", transform: "translate(-50%, -50%)" } : {}}
            initial={{ scale: 1 }}
            animate={{ scale: isExpanded ? 1.2 : 1 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            // whileHover={isExpanded ? {} : { scale: 1.02 }}
            onClick={() => handleClick()}
        >
            {children}
        </motion.div>
    );
}

