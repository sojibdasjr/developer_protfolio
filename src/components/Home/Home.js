import React from 'react';
import AboutMe from '../AboutMe/AboutMe';
import Typewriter from 'typewriter-effect';
import './Home.css'

const Home = () => {
    return (
        <div>
            <div className="row d-flex bg_img ">
                <div className="col-12 col-lg-8 "> 
                  <div className='developer_text'>
                  <h4>WELCOME TO MY WORLD</h4>
                  <h1 className="developer_name">Hi, I’m SOJiB DAS</h1>
                  <h2 className="mern_stack" style={{color:'rgb(249, 0, 77)'}}> 
                  <Typewriter
                        options={{
                          strings: ['JR. MERN Stack Developer.'],
                          autoStart: true,
                          loop: true,
                        }}
                      />
                  </h2>
                  <h1>based in BD.</h1>
                  </div>
                </div>
            </div>

            {/* about me section  */}
                <AboutMe></AboutMe>   
          
        </div>
       
    );
};

export default Home;