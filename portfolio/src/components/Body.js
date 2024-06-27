import{FaGithub, FaLinkedin} from 'react-icons/fa';
import Avatar from '../assets/image.png';

const Body = () => {
    return (
        <div id="body" className='body'>
            <div className="body-container">
                <div className="body-profile">
                    <img className="body-img" src={Avatar} alt="Avatar" />

                    <div className='body-content'>
                        <div className="body-headline">Eugene Mogeni</div>
                        <div className="body-text">Software Engineer</div>
                    </div>

                    <div className="body-icons">
                        <a href="https://github.com/abugaeugene"                       target="_blank" rel='noreferrer'  className="icon-link"><i><FaGithub/></i></a>
                        <a href="https://www.linkedin.com/in/eugene-mogeni-27199a1a6/" target="_blank" rel='noreferrer'   className="icon-link"><i><FaLinkedin/></i></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Body;

            