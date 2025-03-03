import { motion } from "framer-motion";
import { Section } from '../Section/Section';
import { LiInsert } from "../ILiInsert/LiInsert";

export const Education: React.FC = () => {


    const icon1 = (<i className="fa fa-laptop" />);

    const title1 = (
        <>
            <h4 className="section-header">B.Sc. in Computer Science & Mathematics - Ariel University</h4>
            <h5 className="date">2015-2018</h5>
        </>
    );

    const content1 = (
        <motion.ul
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}>
            <LiInsert
                item={(<span>Final Project: Development interface, an IS for a team of Bioinformatic
                    experts on purpose to optimize anti-cancer drugs using java and SQL.</span>)}
                index={0} />
            <LiInsert
                item={(<span>Leading the entire project process from analysis and characterization to development.</span>)}
                index={1} />
        </motion.ul>
    );


    const icon2 = (<i className="fa fa-hashtag" />);

    const title2 = (
        <>

            <h4 className="section-header">Angular Development Course</h4>
            <h5 className="date">2020</h5>
        </>
    );

    const content2 = (
        <motion.ul>
            <LiInsert
                item={(<span>
                    Certified, 'Yaniv Arad'.</span>)}
                index={0} />
        </motion.ul>
    );

    return (
        <>
            <motion.h3 className="top-section-header duration-[1s]"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{
                    duration: 2.4,
                    scale: { type: "tween", visualDuration: 0.4, bounce: 0.5 },
                }}>
                - Education -
            </motion.h3>
            <Section title={title1} content={content1} icon={icon1} />
            <Section title={title2} content={content2} icon={icon2} />
        </>
    )
}