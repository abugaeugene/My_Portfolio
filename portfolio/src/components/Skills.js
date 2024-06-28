// Create your Skills component here
import { FaJs, FaHtml5, FaCss3, FaReact, FaGithub } from "react-icons/fa";

const Skills = () => {
    const skillsArr = [
        {
            "name": "HTML",
            "icon": FaHtml5
        },
        {
            "name": "CSS",
            "icon": FaCss3
        },
        {
            "name": "JavaScript",
            "icon": FaJs
        },
        {
            "name": "Reactjs",
            "icon": FaReact
        },
        {
            "name": "Github",
            "icon": FaGithub
        }

    ];
    return (
        <div id="skills" className="skills">
            <h2 className="title">Skills</h2>
            <div className="skills-holder">
                {
                    skillsArr.map((skill,index) => {
                        const Icon=skill.icon;
                        return(
                            <i key={index} className="skill-cards">
                                <Icon className="skill-icon"/>
                                <p
                                className="skill"
                                >{skill.name}</p>
                                </i>

                        )

                    })
                }

            </div>
        </div>

    )
}

export default Skills;