import React from 'react';
import { Container } from 'react-bootstrap';
import Typewriter from 'typewriter-effect';
import './Services.css'

const Services = () => {
    return (
        <Container >
            <h2 className='my_service text-center'>My Awesome Service</h2>
            <p className='text-white text-center pragraph'>
            <Typewriter
                        options={{
                          strings: [`There are many variations of  passages of Lorem Ipsum available,<br/> but the majority have suffered alteration.`],
                          autoStart: true,
                          loop: true,
                        }}
                      />
                </p>

            <div className="container px-4">
  <div className="row gx-5 text-center">
    <div className="col-12 col-md-6 col-lg-4">
     <div className="p-5  my_services servics_box">
        <h2 style={{fontSize:'28px'}}>Website Development</h2>
        <p>I throw myself down among the tall grass by the stream as i lie close to the eart</p>
        <button>HIRE ME</button>
     </div>
    </div>
    <div className="col-12 col-md-6 col-lg-4">
     <div className="p-5 my_services  servics_box">
        <h2 style={{fontSize:'28px'}}>Website Development</h2>
        <p>I throw myself down among the tall grass by the stream as i lie close to the eart</p>
        <button>HIRE ME</button> 
     </div>
    </div>
    <div className="col-12 col-md-6 col-lg-4">
     <div className="p-5 my_services servics_box">
        <h2 style={{fontSize:'28px'}}>Website Development</h2>
        <p>I throw myself down among the tall grass by the stream as i lie close to the eart</p>
        <button>HIRE ME</button> 
     </div>
    </div>
    <div className="col-12 col-md-6 col-lg-4">
     <div className="p-5 my_services servics_box">
        <h2 style={{fontSize:'28px'}}>Website Development</h2>
        <p>I throw myself down among the tall grass by the stream as i lie close to the eart</p>
        <button>HIRE ME</button> 
     </div>
    </div>
    <div className="col-12 col-md-6 col-lg-4">
     <div className="p-5 my_services servics_box">
        <h2 style={{fontSize:'28px'}}>Website Development</h2>
        <p>I throw myself down among the tall grass by the stream as i lie close to the eart</p>
        <button>HIRE ME</button> 
     </div>
    </div>
    <div className="col-12 col-md-6 col-lg-4">
     <div className="p-5 my_services servics_box">
        <h2 style={{fontSize:'28px'}}>Website Development</h2>
        <p>I throw myself down among the tall grass by the stream as i lie close to the eart</p>
        <button>HIRE ME</button> 
     </div>
    </div>
    
  </div>
</div>
 
        </Container>
    );
};

export default Services;