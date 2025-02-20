import { LiInsert } from '../ILiInsert/LiInsert';
import { Section } from '../Section/Section';
import { motion } from "framer-motion";

export const Summary: React.FC = () => {

    const icon = (<i className="fa fa-asterisk" />);

    const title = (<h3 className="summary-header section-header">Summary</h3>);

    const content = (
        <motion.ul
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}>
            <LiInsert item={(<span>Highly skilled software developer <b>with 5 years expertise in
                client-side programming, </b>specializing in <b>Angular and
                    React</b>.</span>)} index={0} />
            <LiInsert item={(<span>Proven track record of successful project collaboration and leadership,
                with deep knowledge of modern web standards and best practices in front-end
                architecture, from UI/UX design to efficient state management.</span>)} index={1} />
            <LiInsert item={(<span><b>Self-taught</b> in multiple programming languages and frameworks,
                <b>loves the field</b>, passionate about learning,
                responsible and team player.</span>)} index={2} />
            <LiInsert item={(<span>
                Seeking new opportunities to contribute to innovative
                software development projects.</span>)} index={0} />
        </motion.ul>
    )

    return (
        <Section title={title} content={content} icon={icon} />
    );
}