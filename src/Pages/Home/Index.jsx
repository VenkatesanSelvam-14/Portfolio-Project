
import React from 'react';
import './Styles.scss';
import { useNavigate } from 'react-router-dom'
import { Animate } from 'react-simple-animate'
import { FaGithub,FaLinkedin } from 'react-icons/fa'; // GitHub icon
import { SiReact } from 'react-icons/si';  // React icon
import { Link } from 'react-router-dom'; 

const Home = () => {

    const navigate = useNavigate();

    const handleNavigateToContactMePage = () => {
        navigate('/contact')
    }
    return (
        // <div>

        // </div>
        <section id='home' className='home'>
            <div className='home__text-wrapper'>
                <h1>
                    Hello, I'm Venkatesan Selvam
                    <br />
                    Web Developer
                </h1>

            </div>
            <Animate
            play
            duration={1.5}
            delay={1}
            start={{
                transform : 'translateY(550px)'
            }}
            end={{
                transform : 'translateX(0px)'
            }}
            >
                <div className='home__contact-me'>
                    <div> <button onClick={handleNavigateToContactMePage}>Hire Me</button>
                    </div>
                    {/* <div className='home__contact-me__icons'>
                        <div>
                    <Link to="https://github.com/VenkatesanSelvam-14" className="home__gitIcon">
                    <FaGithub size={30} />
                </Link>
                </div>
                <div>
                <Link to="https://www.linkedin.com/in/venkatesan-s-0974b6276" className="home__linkedInIcon">
                    <FaLinkedin size={30} />
                </Link>
                </div>
                    </div> */}
                     <div className='home__contact-me__icons'>
                        <div>
                            <a
                                href="https://github.com/VenkatesanSelvam-14"
                                className="home__gitIcon"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaGithub size={30} />
                            </a>
                        </div>
                        <div>
                            <a
                                href="https://www.linkedin.com/in/venkatesan-s-0974b6276"
                                className="home__linkedInIcon"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaLinkedin size={30} />
                            </a>
                        </div>
                    </div>
                    
                </div>
            </Animate>

        </section>
    )
}

export default Home