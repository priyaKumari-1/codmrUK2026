import './FirstSection.css';
import DotBtn from "../../utils/Dotbtn/Dotbtn";
import about from '../../assets/imgs/cta-15/About.png';
import icon2 from '../../assets/imgs/features-2/bg-img-favicon.png';

import cyberEssentialsimg from '../../assets/imgs/cta-15/cyber-essentials-logo.png';
import gearsetlogo from '../../assets/imgs/cta-15/gearset-logo.png';
import googlecloudlogo from '../../assets/imgs/cta-15/googlecloud-logo.png';
import salesforcelogo from '../../assets/imgs/cta-15/saleforce-logo.png';
import isologo from '../../assets/imgs/cta-15/isologo.png';

const FirstSection = () => {
    return (
        <div className='aboutContainerbg p-md-5 p-1'>
            <div className="about_first_section container position-relative">
                <div>

                    <div className='d-lg-flex gap-5 justify-content-center align-items-center'>
                        <div className='col-lg-4 col-sm-12 col-md-5 img-center d-flex justify-content-center align-items-center'>
                            <img src={about} className='rounded-5 col-lg-12' alt="" width={"100%"} />
                        </div>

                        <div className='aboutFirstSection mt-3'>
                            {/* <div className="rotating-img-bg"> 
                                <img src={icon2} alt="background decoration"/>
                            </div> */}
                            <div className='z-0 rotating-img position-relative'>
                                <img className="rotationdiv" src={icon2} alt="background decoration" />
                            </div>

                            <div className="pb-3 d-flex justify-content-center justify-content-md-start">
                                <DotBtn text="ABOUT US" />
                            </div>

                            {/* <h3 className='mb-4'>Who We Are</h3> */}

                            <p> CODM Software Limited, incorporated December 7, 2023, is a rapidly expanding technology consulting and software development company headquartered in London with offices in Birmingham, United Kingdom. We specialize in delivering comprehensive, enterprise-scale Salesforce CRM solutions combined with cutting-edge custom development and AI-powered technologies.</p>

                            <p>With a focus on quality, innovation, and measurable business impact, we help organizations across diverse industries Financial Services, Healthcare, Manufacturing, Education, Retail, and Technology transform their operations, enhance customer experiences, and accelerate growth through intelligent automation and strategic technology implementation.</p>

                            <p>Our comprehensive service portfolio spans the entire Salesforce ecosystem (Sales Cloud, Service Cloud, Experience Cloud, Marketing Cloud, Data Cloud, Commerce Cloud, CPQ, Agentforce), combined with expertise in modern application development (.NET, Python, React.js), AI and Machine Learning solutions, data integration and migration, and technical support services.</p>

                            <div className='gap-md-3 d-flex align-items-center aboutLogoContainer'>
                                <img src={cyberEssentialsimg} alt="" width={"10%"}/>
                                <img src={salesforcelogo} alt="" width={"20%"} />
                                <img src={gearsetlogo} alt="" width={"15%"} />
                                <img src={isologo} alt="iso logo" width={"18%"} />
                                <img src={googlecloudlogo} alt="" width={"18%"} />  
                            </div>
                        </div>

                    </div>
                </div>



            </div>
        </div>
    );
};
export default FirstSection;




// import './FirstSection.css';


// import { Link } from 'react-router-dom';
// import star1 from '../../assets/imgs/cta-15/star-1.svg';
// import star2 from '../../assets/imgs/cta-15/star-2.svg';
// import DotBtn from "../../utils/Dotbtn/Dotbtn";

// import img1 from '../../assets/imgs/cta-15/img-1.png';
// import img2 from '../../assets/imgs/cta-15/img-2.png';
// import img3 from '../../assets/imgs/cta-15/img-3.png';
// import img4 from '../../assets/imgs/cta-15/img-4.png';
// import img5 from '../../assets/imgs/cta-15/img-5.png';

// // icons
// import { CiLinkedin } from "react-icons/ci";
// import { FaSquareXTwitter } from "react-icons/fa6";
// import { FaYoutube } from "react-icons/fa6";

// const FirstSection = () => {
//     return (
//         <div className="about_first_section container container">
//             <div>
//                 <div className="d-flex align-items-center justify-content-center position-relative flex-wrap">
//                     <DotBtn text="ABOUT US" />
//                 </div>
//                 <h3 className="about_heading mt-3 mb-3">
//                     Driven by <span className="fw-bold">Passion</span> powered by <br />
//                     <span className="fw-bold">Innovation</span>
//                 </h3>

//                 <div className="img-container d-flex align-items-center justify-content-center">
//                     <img src={img1} alt="" width={'15%'} />
//                     <img src={img2} alt="" width={'20%'} />
//                     <img src={img3} alt="" width={'35%'} />
//                     <img src={img4} alt="" width={'20%'} />
//                     <img src={img5} alt="" width={'15%'} />
//                 </div>

//                 <div>
//                     <div className="text-center mt-5">
//                         <div className="socials bg-white px-3 shadow-1 py-2 border rounded-pill d-inline-flex align-items-center">
//                             <p className="text-900 mb-0 me-2">Follow us:  </p>
//                             <ul className='list-unstyled d-flex mb-0 gap-2'>
//                                 <a href='https://www.linkedin.com/company/codm-software-limited/' target="_blank" rel="noreferrer"><CiLinkedin size={'1.6rem'} color="gray" /></a>
//                                 <a href='' target="_blank" rel="noreferrer"><FaSquareXTwitter size={'1.6rem'} color="gray" /></a>
//                                 <a href='https://www.youtube.com/@CodMSoftwareLimited' target="_blank" rel="noreferrer"><FaYoutube size={'1.6rem'} color="gray" /></a>
//                             </ul>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             <div className='first_section_bgImgs'>
//                 <div className="rotate-center ellipse-rotate-success position-absolute z-0"></div>
//                 <div className="rotate-center-rev ellipse-rotate-primary position-absolute z-0"></div>
//             </div>
//         </div >
//     );
// };

// export default FirstSection;
