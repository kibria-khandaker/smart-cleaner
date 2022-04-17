import React from 'react';
import golamKibria from '../../img/golam-kibria.jpg';

const About = () => {
    return (
        <div className='container py-5'>
            <div className="row mb-5">
                <div className="col-md-10 mx-auto">
                    <div className="row d-flex align-items-center">
                        <div className='col-md-5 mt-5'>
                            {/* this image from google Drive  */}
                            <img className='w-100 mx-auto text-center' src={golamKibria} alt="golamKibria" />
                        </div>
                        <div className='col-md-7 mt-5 d-flex  flex-column align-items-center'>
                            <h3 className='pb-3'> About Me </h3>
                            <p>
                                My name is <span className=' text-info'>Golam kibria</span>,
                                I want to be a full stack developer and I want to build my career in the developing sector.
                            </p>
                            <p>
                                if i got any opportunity to build my career with this, i will take it without any confusion. because i love it and it's my target and I will achieve at any cost.
                            </p>
                            <p>
                                want to learn a all top programming languages like JavaScript python, I also want to learn Web, Android, IOS and all types of application development.
                            </p>
                            <p>
                                i like develop and for learning for this, I am also trying and even I am trying so hard every time, I am doing practice from online internet on others resource, if I got any resource which helps me I try with this
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
