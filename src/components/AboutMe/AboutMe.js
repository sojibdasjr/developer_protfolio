import React from 'react';
import aboutImg from '../../img/about.jpg'
import './Aboutme.css'

const AboutMe = () => {

    return (
        <>
           <div className ='container mt-5 pt-5 '>
                <div className='row d-flex align-items-center '>
                    <div className='col-12 col-lg-6'>
                      <img className='img-fluid' src={aboutImg} alt="" />
                    </div>
                    <div className='col-12 col-lg-6'>
                      <h1 className="aboutme">About Me</h1>
                      <p className='text-white text-start'> I am a ambitious individual passionalte Web Developer. I'm also an innovative thiker working towards developing techonological solution taht will be impactful. <br />
                      I stay updated on all the latest trends and developments associated with this inducstry and i have the knowledge to apply this information where appropriate. I also hav the ability to adhere to all standards, rules, and codding standards set forth by management. <br />
                      I take my work as a web developer seriously and this means i always ensuere my skills are kept up to data within the rapidly changing industyr.
                        </p>
                        <div className='d-flex justify-content-around w-50 p-3'>
                        
                        <a href="https://drive.google.com/file/d/1jd1s3Kp5oLdXj7NG6YnV-QOVt5uijJhN/view?usp=sharing" target='_blank'><button >Download CV</button></a>
                        <button >HIRE ME</button>
                    </div>
                        
                    </div>
                    
                </div>
            </div> 
        </>
    );
};

export default AboutMe;