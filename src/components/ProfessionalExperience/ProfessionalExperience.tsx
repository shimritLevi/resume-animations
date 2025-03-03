import { motion } from 'framer-motion';
import { Experience } from './Experience/Experience';

export const ProfessionalExperience: React.FC = () => {

    const list1 = [
        (
            <div>
                Developed client-side applications using <b>Angular</b> and <b>React</b> for various projects.
            </div>
        ),
        (
            <div>
                Contributed to the development and maintenance of <b>multiple systems</b>.
            </div>
        ),
        (
            <div>
                Collaborated with team members to <b>analyze requirements</b>, <b>design solutions</b>, and
                <b>implement software features</b>.
            </div>
        ),
        (
            <div>
                <b>Led and mentored</b> a group of junior developers in a project for the Ministry of Education,
                providing guidance on coding best practices, problem-solving strategies, and project management.
                Collaborated closely with the team to ensure successful delivery of the project while fostering
                a supportive learning environment.
            </div>
        ),
        (
            <div>
                Worked with WordPress to customize themes, develop plugins, implement <b>SEO</b> strategies, and manage content,
                gaining experience in <b>content management systems (CMS)</b> and <b>web development</b>.
            </div>
        )
    ];

    const list2 = [
        (
            <div>
                Development and maintenance of company’s systems such as ERP,
                inventory management systems, POS and other management systems
                based on <b>JAVA</b>, <b>JavaScript</b> and <b>Angular</b>.
            </div>
        ),
        (
            <div>
                Developed <b>internal tools</b> for the system team to automate
                the installation and update processes for the company’s
                applications, utilizing <b>JAVA Web Start</b> and other tools.
            </div>
        ),
        (
            <div>
                Contributed to small-scale projects and bug fixes using <b>Ruby on Rails</b> and <b>SQL</b>,
                gaining familiarity with the framework for web application development.
            </div>
        ),
        (
            <div>
                Leading development projects – Analysis, characterization and programming.
            </div>
        ),
        (
            <div>
                Improved the user experience (UX) and visual design of the ERP application,
                increasing user satisfaction and operational efficiency.
            </div>
        ),
        (
            <div>
                Provided technical assistance and user instruction.
            </div>
        )
    ];

    const list3 = [
        (
            <div>
                Development and maintenance of systems
                developed for the purpose of the Ministry of
                Education.
            </div>
        ),
        (
            <div>
                Technical assistance and responsible for user
                training.
            </div>
        )
    ];

    const list4 = [
        (
            <div>
                Preparation of students for matriculation exams
                in grades 10 through 12 for 5 levels.
            </div>
        )
    ];

    return (
        <>
            <motion.h3 className="top-section-header duration-[1s]"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{
                    duration: 2.4,
                    scale: { type: "tween", visualDuration: 0.4, bounce: 0.5 },
                }}>
                - Professional Experience -
            </motion.h3>
            <Experience title="MSBit - Software Developer" date="2021-2024" list={list1} iconName='window-restore' />
            <Experience title="Cav Systems – Software developer" date="2019-2021" list={list2} iconName='gear' />
            <Experience title="Tutor for mathematics matriculation" date="2014-2019" list={list4} iconName='subscript' />
            <Experience title="John Bryce MATRIX - Embedding software, Student" date="2016" list={list3} iconName='graduation-cap' />
        </>
    )
}