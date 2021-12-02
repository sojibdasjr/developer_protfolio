import React from 'react';
import img_1 from '../../img/projects/simba_store.png'
import img_2 from '../../img/projects/tourism.png'
import img_3 from '../../img/projects/house_med.png'
import img_4 from '../../img/projects/book_libray.png'
import img_5 from '../../img/projects/bangladesh.png'
import img_6 from '../../img/projects/honda_cbr.png'
import './Protfolio.css'
import { Link } from 'react-router-dom';

const Protfolio = () => {
    return (
        <div>
            <h1 className='Latest_Projects'>My Latest Projects</h1>
            <p className='prargraph'>There are many variations of passages of Lorem Ipsum alalivale <br />but the majority hav suffecred altertin</p>

            <div className='container'>
                    <div className='row gx-5'>
                    <div className="col-12  col-lg-6">
                        <div className="p-5">
                            <img style={{width:'100%'}} src={img_1} alt="" />
                            <Link to ='/simba'><button>DETAILS</button></Link>
                        </div>
                    </div>
                    <div className="col-12  col-lg-6">
                        <div className="p-5 ">
                        <img style={{width:'100%'}} src={img_2} alt="" />
                        <Link to ='/holiday'><button>DETAILS</button></Link>
                        
                        </div>
                    </div>
                    <div className="col-12  col-lg-6">
                        <div className="p-5">
                        <img style={{width:'100%'}} src={img_3} alt="" />
                        <Link to ='/housemed'><button>DETAILS</button></Link>
                        </div>
                    </div>
                    <div className="col-12  col-lg-6">
                        <div className="p-5 ">
                        <img style={{width:'100%'}} src={img_4} alt="" />
                            <button>DETAILS</button>
                        </div>
                    </div>
                    <div className="col-12  col-lg-6">
                        <div className="p-5 ">
                        <img style={{width:'100%'}} src={img_5} alt="" />
                            <button>DETAILS</button>
                        </div>
                    </div>
                    <div className="col-12 col-lg-6">
                        <div className="p-5 ">
                        <img style={{width:'100%'}} src={img_6} alt="" />
                            <button>DETAILS</button>
                        </div>
                    </div>
                    </div>
            </div>
        </div>
    );
};

export default Protfolio;