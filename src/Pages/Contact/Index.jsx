
import React ,{useState}from 'react'
import PageHeaderContent from '../../Components/PageHeaderContainer/Index'
import { BsInfoCircleFill } from 'react-icons/bs'
import { Animate } from 'react-simple-animate'
import './Styles.scss'
import emailjs from 'emailjs-com';

const Contact = () => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        description: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(e);

        // Replace with your EmailJS user ID, service ID, and template ID
        const serviceID = 'service_5prh6fs';
        const templateID = 'template_tcp9006';
        const userID = 'njnYHlosOEVrSmwMw';

        if (formData.name.trim() !== '' || formData.email.trim() !== '' || formData.description.trim() !== '') {
    
            emailjs.send(serviceID, templateID, formData, userID)
            .then((response) => {
                console.log('Email sent successfully:', response.status, response.text);
                alert('Email sent successfully!');
            })
            .catch((error) => {
                console.error('Error sending email:', error);
                alert('Failed to send email.');
            });

        } else {
            alert("Ensure all fields in the form are filled out.");
        }
        
    };

    return (
        <section id="contact" className='contact'>
            <PageHeaderContent
                headerText={"My Contact"}
                icon={<BsInfoCircleFill size={40} />}
            />
            <div className='contact__content'>
                <Animate
                    play
                    duration={1}
                    delay={0}
                    start={{
                        transform: "translateX(-200px)"
                    }}
                    end={{
                        transform: "translateX(0px)"
                    }}>

                    <h3 className='contact__content__header-text'> Let's Talk</h3>

                </Animate>

                <Animate
                    play
                    duration={1}
                    delay={0}
                    start={{
                        transform: "translateX(200px)"
                    }}
                    end={{
                        transform: "translateX(0px)"
                    }}>

                    <div className='contact__content__form'>
                        <div className='contact__content__form__controlswrapper'>
                            <div className='nameWrapper'>
                                <input type="text" name='name' className='inputName'required  value={formData.name}
                        onChange={handleChange}/>
                                <label htmlFor='name' className='nameLabel' >Name</label>
                            </div>
                            <div className='emailWrapper'>
                            <input type="email" name='email' className='inputEmail' required  value={formData.email}
                        onChange={handleChange}/>
                            <label htmlFor='email' className='emailLabel' >Email</label>
                            </div>
                            <div className='descriptionWrapper'>
                            <textarea rows={5} type="text" name='description' className='inputDescription' required  value={formData.description}
                        onChange={handleChange}/>
                            <label htmlFor='description' className='descriptionLabel' >Description</label>
                            </div>
                        </div>
                        <button onClick={handleSubmit} >Submit</button>

                    </div>

{/* <div className='contact__content__form'>
            <form onSubmit={handleSubmit} className='contact__content__form__controlswrapper'>
                <div className='nameWrapper'>
                    <input
                        type="text"
                        name='name'
                        className='inputName'
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                    <label htmlFor='name' className='nameLabel'>Name</label>
                </div>
                <div className='emailWrapper'>
                    <input
                        type="email"
                        name='email'
                        className='inputEmail'
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                    <label htmlFor='email' className='emailLabel'>Email</label>
                </div>
                <div className='descriptionWrapper'>
                    <textarea
                        rows={5}
                        type="text"
                        name='description'
                        className='inputDescription'
                        value={formData.description}
                        onChange={handleChange}
                        required
                    />
                    <label htmlFor='description' className='descriptionLabel'>Description</label>
                </div>
                <button type="submit">Submit</button>
            </form>
        </div> */}

                </Animate>
            </div>
        </section>
    )
}

export default Contact

// import React, { useState } from 'react';
// import PageHeaderContent from '../../Components/PageHeaderContainer/Index';
// import { BsInfoCircleFill } from 'react-icons/bs';
// import { Animate } from 'react-simple-animate';
// import './Styles.scss';
// import emailjs from 'emailjs-com';

// const Contact = () => {
//     const [formData, setFormData] = useState({
//         name: '',
//         email: '',
//         description: '',
//     });

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData({
//             ...formData,
//             [name]: value,
//         });
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();

//         const serviceID = 'service_5prh6fs';
//         const templateID = 'template_kyb5k0u';
//         const userID = 'njnYHlosOEVrSmwMw';

//         emailjs.send(serviceID, templateID, formData, userID)
//             .then((response) => {
//                 console.log('Email sent successfully:', response.status, response.text);
//                 alert('Email sent successfully!');
//             })
//             .catch((error) => {
//                 console.error('Error sending email:', error);
//                 alert('Failed to send email.');
//             });
//     };

//     return (
//         <section id="contact" className='skills'>
//             <PageHeaderContent
//                 headerText={"My Contact"}
//                 icon={<BsInfoCircleFill size={40} />}
//             />
//             <div className='contact__content'>
//                 <Animate
//                     play
//                     duration={1}
//                     delay={0}
//                     start={{
//                         transform: "translateX(-200px)"
//                     }}
//                     end={{
//                         transform: "translateX(0px)"
//                     }}>
//                     <h3 className='contact__content__header-text'>Let's Talk</h3>
//                 </Animate>

//                 <Animate
//                     play
//                     duration={1}
//                     delay={0}
//                     start={{
//                         transform: "translateX(200px)"
//                     }}
//                     end={{
//                         transform: "translateX(0px)"
//                     }}>
//                     <div className='contact__content__form'>
//                         <form onSubmit={handleSubmit} className='contact__content__form__controlswrapper'>
//                             <div className='nameWrapper'>
//                                 <input
//                                     type="text"
//                                     name='name'
//                                     className='inputName'
//                                     value={formData.name}
//                                     onChange={handleChange}
//                                     required
//                                 />
//                                 <label htmlFor='name' className='nameLabel'>Name</label>
//                             </div>
//                             <div className='emailWrapper'>
//                                 <input
//                                     type="email"
//                                     name='email'
//                                     className='inputEmail'
//                                     value={formData.email}
//                                     onChange={handleChange}
//                                     required
//                                 />
//                                 <label htmlFor='email' className='emailLabel'>Email</label>
//                             </div>
//                             <div className='descriptionWrapper'>
//                                 <textarea
//                                     rows={5}
//                                     name='description'
//                                     className='inputDescription'
//                                     value={formData.description}
//                                     onChange={handleChange}
//                                     required
//                                 />
//                                 <label htmlFor='description' className='descriptionLabel'>Description</label>
//                             </div>
//                             <button type="submit">Submit</button>
//                         </form>
//                     </div>
//                 </Animate>
//             </div>
//         </section>
//     );
// }

// export default Contact;
