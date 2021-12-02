import React from 'react';
import { faDownload, faAddressCard } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import aboutImg from '../../img/about.jpg'
import resume from '../../Sojib_Resume/Sojib Das.pdf'
import './Aboutme.css'
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

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
                      <p className='text-white text-start'> I am a ambitious Hi, My name is Sojib Das, I am an ambitious individual passionate Web Developer. I’m also an innovative thinker working toward developing technological solutions that will be impactful.  <br />
                      I stay updated on all the latest trends and developments associated with this industry and I have the knowledge to apply this information where appropriate. I also have the ability to adhere to all standards, rules, and coding standards set forth by management. <br />
                      I take my work as a web developer seriously and this means I always ensure my skills are kept up to date within this rapidly changing industry.
                        </p>
                        <div className='d-flex justify-content-around w-50 p-3'>
                        
                        <a href={resume} download><Button className='btn-warning'> <FontAwesomeIcon icon={faDownload}/> RESUME</Button></a>
                        <Link to='/contact'><Button className='btn-warning'> <FontAwesomeIcon icon={faAddressCard}/> HIRE ME</Button></Link>
                    </div>
                        
                    </div>
                    
                </div>
            </div> 
        </>
    );
};

export default AboutMe;