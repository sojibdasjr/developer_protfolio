import React from 'react';
import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faForward, faLowVision} from '@fortawesome/free-solid-svg-icons'
import img1 from '../../../img/Protfolio_projects/Simba/1st.png'
import img2 from '../../../img/Protfolio_projects/Simba/3rd.png'
import img4 from '../../../img/Protfolio_projects/Simba/4rd.png'
import img5 from '../../../img/Protfolio_projects/Simba/5th.png'
import './SimbaStore.css'
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const SimbaStore = () => {
    return (
        <div className='container'>
            <h2 className='simba_title'>Simba Store Project Details</h2>
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

  <Carousel.Item>
    <img
      className="d-block w-100"
      src={img5}
      alt="Third slide"
    />

  </Carousel.Item>

</Carousel>
                </div>
                <div className= 'col-12 col-lg-6'>
                    <div className='project-details'>
                        <h2 className='mt-2'>  Simba Store</h2>

                        <a href="https://simba-store-3af0e.web.app/" target='_blank'><button><FontAwesomeIcon icon={faLowVision} />  Visit</button></a>
                        <a href="https://github.com/sojibdasjr/simba_store_client" target='_blank'><button><FontAwesomeIcon icon={faGithub} /> GitHub Client</button></a>
                        <a href="https://github.com/sojibdasjr/simba_store_server" target='_blank'><button><FontAwesomeIcon icon={faGithub} /> GitHub Server</button></a>
                        <h2 className='mt-4'>OverView Project</h2>
                        <h3> <FontAwesomeIcon icon={faForward} /> Users are able to add a review and that review appears on the home page.</h3>
                        <h3><FontAwesomeIcon icon={faForward} /> A User can be able to buy a product and remove his order.</h3>
                        <h3><FontAwesomeIcon icon={faForward} /> An Admin is able to manage all orders, make another admin, add more products on the
                        products page.</h3>

                    </div>
                </div>
                
            </div>
            <Link  to ='/protfolio'><button className='mt-5'>Back </button></Link>
            
        </div>
    );
};

export default SimbaStore;