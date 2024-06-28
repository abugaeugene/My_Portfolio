// Create your About component here
import Avatar from '../assets/image.png';
const About = () => {   
    return (
        <div id="about" className="about">
            <h1 className="about-heading">About Me</h1>
            <div className="about-info">
                <p className="about-description">Hello! I'm Eugene Mogeni Abuga, a passionate and dedicated software engineer specializing in web development. With expertise in HTML, CSS, JavaScript, and React, I strive to create engaging and functional websites. My goal is to continuously learn and enhance my skills, not only in web development but also in the exciting fields of machine learning and AI.
                                                Beyond coding, I have a deep love for music and enjoy singing. This creative outlet complements my professional endeavors, allowing me to bring a unique and artistic perspective to my work.
                                                Welcome to my portfolio, where professionalism meets creativity. Explore my projects and see how I can bring your ideas to life.</p>
                <div className="about-img">
                    <div className="about-img-wrapper">
                    <img src={Avatar} alt="Avatar" />

                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;