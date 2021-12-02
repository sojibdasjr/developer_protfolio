import React from 'react';
import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faForward, faLowVision} from '@fortawesome/free-solid-svg-icons'
import img1 from '../../../img/Protfolio_projects/House MED/1st.png'
import img2 from '../../../img/Protfolio_projects/House MED/2nd.png'
import img4 from '../../../img/Protfolio_projects/House MED/3rd.png'
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const handleClickVisti = () => {
    window.open("https://house-medical-project.web.app/");
  };
  
  const handleClickGitHubClint = () => {
    window.open("https://github.com/sojibdasjr/house_med");
  };
 

const HouseMed = () => {
    return (
        <div className='container'>
            <h2 className='simba_title'>House Medical Project Details</h2>
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
                        <h2 className='mt-2'>House Medical</h2>
                        
                        <button onClick={handleClickVisti}><FontAwesomeIcon icon={faLowVision} />  Visit</button>
                        <button onClick={handleClickGitHubClint}><FontAwesomeIcon icon={faGithub} /> GitHub Client</button>
                        <h2 className='mt-4'>OverView Project</h2>
                        <h3> <FontAwesomeIcon icon={faForward} /> Medical and dental terminology</h3>
                        <h3><FontAwesomeIcon icon={faForward} /> Patient Confidentiality</h3>
                        <h3><FontAwesomeIcon icon={faForward} /> Sign in is required to request order for to view client dashboard with services status</h3>

                    </div>
                </div>
                
            </div>
            <Link  to ='/project'><button className='mt-5'>Back </button></Link>
            
        </div>
    );
};

export default HouseMed;