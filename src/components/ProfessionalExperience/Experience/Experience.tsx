import { Section } from '../../Section/Section';
import { motion } from "framer-motion";

interface IExperience { title: string, date: string, list: JSX.Element[], iconName: string };
export const Experience = ({ title, date, list, iconName }: IExperience) => {

    const icon = (<i className={`fa fa-${iconName}`} />);

    const titleSection = (
        <>
            <h4 className="section-header">{title}</h4>
            <h5 className="date">{date}</h5>
        </>
    );

    const content = (
        <ul>
            {list.map((item: JSX.Element, index) => {
                return <motion.li
                    className='dot'
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1, }}>
                    {item}
                </motion.li>;
            })}
        </ul>
    );

    return (
        <Section title={titleSection} content={content} icon={icon} />
    )
}