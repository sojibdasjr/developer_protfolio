import React from 'react';
import Typewriter from 'typewriter-effect';
import './Contact.css'


const Contact = () => {
    return (
        <div className='container mt-5'>
            <div className='row gs-5'>
                <div className='col-12 col-lg-6'>
                    <img className="img-fluid" src="https://i.ibb.co/BsZyRKY/login.png" alt="" />
                </div>

                <div className='col-12 col-lg-6'>
                <div className="col__2">
                    <div className="contact__box">
                        <div className="contact__meta">
                            <h1 className="hire__text">Hire Me.</h1>
                            <p className="hire__text white  text-white">
                            <Typewriter
                                        options={{
                                                strings: ['I am available for freelance work. Connect with me via phone:'],
                                                autoStart: true,
                                                loop: true,
                                            }}
                                                />
                                </p>
                           <p className="hire__text white text-white"><strong>+88 016 83 06 16 86 </strong> <br /> or email <strong>developer.sojibdas@example.com</strong></p>
                        </div>
                        <div className="input__box">
                           <input type="text" className="contact name" placeholder="Your name *" />
                           <input type="text" className="contact email" placeholder="Your Email *" />
                           <input type="text" className="contact subject" placeholder="Write a Subject" />
                           <textarea name="message" id="message" placeholder="Write Your message"></textarea>
                           <button className="btn contact pointer text-white" type="submit">Submit</button>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;