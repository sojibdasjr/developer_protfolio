import React from 'react';
import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faForward, faLowVision} from '@fortawesome/free-solid-svg-icons'
import img1 from '../../../img/Protfolio_projects/Holiday Wanders/1st.png'
import img2 from '../../../img/Protfolio_projects/Holiday Wanders/2nd.png'
import img4 from '../../../img/Protfolio_projects/Holiday Wanders/4th.png'
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const handleClickVisti = () => {
    window.open("https://tourism-development-7ab8d.firebaseapp.com/");
  };
  
  const handleClickGitHubClint = () => {
    window.open("https://github.com/sojibdasjr/toursim-client-site");
  };
  const handleClickGitHubServer = () => {
    window.open("https://github.com/sojibdasjr/tourism-website");
  };

const Holiday = () => {
    return (
        <div className='container'>
            <h2 className='simba_title'>Holiday Wanders Project Details</h2>
            <div className = 'row gx-5 mt-5'>
                <div className= 'col-12 col-lg-6'>
                <Carousel fade>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={img1}
      alt="First slide"
    />
  </Carousel.Item>

  <Carousel.Item>
    <img
      className="d-block w-100"
      src={img2}
      alt="Second slide"
    />

    
  </Carousel.Item>

  <Carousel.Item>
    <img
      className="d-block w-100"
      src={img4}
      alt="Third slide"
    />

  </Carousel.Item>

</Carousel>
                </div>
                <div className= 'col-12 col-lg-6'>
                    <div className='project-details'>
                        <h2 className='mt-2'>  Holiday Wanders</h2>
                        
                        <button onClick={handleClickVisti}><FontAwesomeIcon icon={faLowVision} />  Visit</button>
                        <button onClick={handleClickGitHubClint}><FontAwesomeIcon icon={faGithub} /> GitHub Client</button>
                        <button onClick={handleClickGitHubServer}><FontAwesomeIcon icon={faGithub} /> GitHub Server</button>
                        <h2 className='mt-4'>OverView Project</h2>
                        <h3> <FontAwesomeIcon icon={faForward} /> A responsive Travel booking service web application tourists</h3>
                        <h3><FontAwesomeIcon icon={faForward} /> A User can be able to booking a service and remove his booking.</h3>
                        <h3><FontAwesomeIcon icon={faForward} />Option for adding more service to the home page</h3>

                    </div>
                </div>
                
            </div>
            <Link  to ='/services'><button className='mt-5'>Back </button></Link>
            
        </div>
    );
};

export default Holiday;