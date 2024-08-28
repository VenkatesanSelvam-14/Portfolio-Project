import React from 'react'
import { BsInfoCircleFill } from 'react-icons/bs'
import PageHeaderContent from '../../Components/PageHeaderContainer/Index'
import { Animate } from 'react-simple-animate'
import './Styles.scss';
import { DiApple, DiAndroid, DiNodejs, DiJavascript1 } from 'react-icons/di';
import { FaDev, FaDatabase, FaReact } from 'react-icons/fa';


const About = () => {

    const personalDetails = [
        {
            label: 'Name',
            value: 'Venkatesan Selvam'
        },
        {
            label: 'Email',
            value: 'venkatesanselvam14@gmail.com'
        },
        {
            label: 'Phone',
            value: '9626486707'
        }
    ]
    return (
        <session id="about" className='about'>
            <PageHeaderContent
                headerText={"About Me"}
                icon={<BsInfoCircleFill size={40} />}
            />
            <div className='about__content'>
                <div className='about__content__personalwrapper'>
                    <Animate
                        play
                        duration={1.5}
                        delay={1}
                        start={{
                            transform: 'translateX(-900px)'
                        }}
                        end={{
                            transform: 'translateX(0px)'
                        }}
                    >


                        <h3>
                            Web Developer
                        </h3>
                        <p>
                            I am an aspiring web developer with a solid foundation in JavaScript, Node.js, React, and MySQL, acquired through hands-on internships. With a degree in Computer Technology from Hindusthan College of Arts and Science, I am passionate about leveraging my skills to build innovative web applications and drive business success.
                            {/* <br /><br />

                            At YOTTA Web Service, I made significant contributions by developing scalable web applications using Node.js and React.js. I was responsible for creating dynamic, user-friendly interfaces and integrating RESTful APIs with MySQL databases. My experience includes designing secure authentication systems and ensuring seamless data management. My commitment to responsive and efficient design has enhanced my ability to deliver impactful and high-quality software solutions. */}
                        </p>

                    </Animate>

                    <Animate
                        play
                        duration={1.5}
                        delay={1}
                        start={{
                            transform: 'translateX(500px)'
                        }}
                        end={{
                            transform: 'translateX(0px)'
                        }}
                    >

                        <h3 className='personalInformationHeaderText'>
                            Personal Information
                        </h3>
                        <ul>
                            {
                                personalDetails.map((item, i) => (
                                    <li key={i}>
                                        <span className='title'>{item.label}</span>
                                        <span className='value'>{item.value}</span>

                                    </li>
                                ))
                            }
                        </ul>
                    </Animate>
                </div>
                <div className='about__content__serviceswrapper'>
                    <Animate
                        play
                        duration={1.5}
                        delay={1}
                        start={{
                            transform: 'translateX(600px)'
                        }}
                        end={{
                            transform: 'translateX(0px)'
                        }}
                    >
                        <div className='about__content__serviceswrapper__innerContent'>
                            <div>
                                <FaReact size={60} color="var( --yellow-theme-main-color)" />
                            </div>
                            <div>
                                <DiJavascript1 size={60} color="var( --yellow-theme-main-color)" />
                            </div>
                            <div>
                                <FaDatabase size={60} color="var( --yellow-theme-main-color)" />
                            </div>
                            <div>
                                <DiNodejs size={60} color="var( --yellow-theme-main-color)" />
                            </div>
                        </div>
                    </Animate>



                </div>


            </div>
        </session>
    )
}

export default About
