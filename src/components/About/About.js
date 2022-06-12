import React from 'react';
import golamKibria from '../../img/golam-kibria.jpg';

const About = () => {
    return (
        <div className='container py-5'>
            <div className="row mb-5">
                <div className="col-md-10 mx-auto">
                    <div className="row d-flex align-items-center">
                        <div className='col-md-5 mt-4'>
                            {/* this image from google Drive  */}
                            <img className='w-100 mx-auto text-center' src={golamKibria} alt="golamKibria" />
                        </div>
                        <div className='col-md-7 mt-6 d-flex  flex-column align-items-center'>
                            <h3 className='pb-3'> About Me </h3>
                            <p>
                                My name is <span className=' text-info'>Golam kibria</span>,
                                a Front-End Developer | MERN Stack Developer based in javaScript, React, Node.js, Express.js, MongoDB
                            </p>
                            <p>
                                I am a hard-working web developer having an urge for creating elegant solutions within the least possible time. I am able to work in both self-starting and collaborative environments being focused on achieving proven results under strict deadlines. I am passionate to take a challenging position at a prestigious company that will expand my learning and building skills.
                            </p>
                            <p>
                                My Skills:
                                <ul class="list-group">
                                    <li class="list-group-item"> Frontend: React-js, JavaScript(ES-6), TailwindCSS, Bootstrap, milligram, CSS3, </li>
                                    <li class="list-group-item"> Backend: node Js, express Js, firebase-authentication , JWT, REST API, </li>
                                    <li class="list-group-item"> Tools: Git, github, Heroku , Netlify, npm, yarn, photoshop CS6, firebase, illustrator , sketch, figma </li>
                                    <li class="list-group-item"> Familiar : Typescript , React Native, Next JS, SASS </li>
                                    <li class="list-group-item"> CMS: WordPress (development, customization and theme-builders) </li>
                                </ul>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
