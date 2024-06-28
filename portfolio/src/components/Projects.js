// Create your Projects component here
import Project from '../assets/start-up.png';
import data from '../data/projects.json';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Projects = () => {
    const settings = {
        dots: true,
        infinite: false,
        initialSlide: 0,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
          {
            breakpoint: 600,
            settings: {
                infinite: false,
                slidesToShow: 1,
                slidesToScroll: 1,
                initialSlide: 0
            }
          }
        ] 
    };
    return (
        <div className="projects" id="projects">
            <div className="projects-header">
                <h1>WORKS</h1>
            </div>
            <div className="projects-container">
                <Slider {...settings}>
                {
                data.map((project,key) => {
                    return (
                        <div key={key} className="project">
                            <div className="content">
                                <img src={Project} alt="Project" />
                                <h2 className="project-title">{project.name}</h2>
                                {
                                    project.description.length >130
                                    ? <p className="description-min">{project.description}</p>
                                    : <p className="description">{project.description}</p>
                                }
                                <div>
                                    <a
                                    className='project-button'
                                    target='_blank'
                                    href={project.link}
                                    rel="noreferrer"
                                    >Github
                                    </a>
                                </div>
                            </div>
                        </div>

                    )
                })      

                }
                </Slider>
            </div>
        </div>
    )
}

export default Projects;
         