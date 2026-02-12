import './Hero1.css';

function Hero1() {
    return (
        <>
            <section className="py-5 bg-light">
                <div className="container">
                    <div className="row align-items-center g-4">
                        {/* Left Side: CRM Content */}
                        <div className="col-12 col-md-6">
                            <h3 className="mb-3 fs-sm-2 text-center text-sm-start Heading3">What is CRM?</h3>
                            <p className="text-gray-600 text-center text-sm-start">
                                CRM (Customer Relationship Management) is a system that helps
                                businesses manage customer data, interactions, and relationships
                                throughout the entire customer lifecycle. It enables companies
                                to improve customer satisfaction, increase sales, and build
                                long-term relationships.
                             </p>
                            <p className="text-gray-600">
                                A CRM works by collecting customer information from multiple
                                channels such as websites, emails, calls, and social media, and
                                storing it in one centralized platform that teams can easily
                                access.
                            </p>
                            {/* <ul className="text-muted">
                                <li>Centralized customer data</li>
                                <li>Sales and lead tracking</li>
                                <li>Better customer support</li>
                                <li>Automated reporting and follow-ups</li>
                            </ul> */}
                        </div>


                        {/* Right Side: Video */}
                        <div className="col-12 col-md-6">
                            <div className="ratio ratio-16x9 shadow rounded overflow-hidden">
                                <iframe
                                    src="https://www.youtube.com/embed/SlhESAKF1Tk?si=fH1xomNovAMu9DyM"
                                    title="CRM Explained"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowFullScreen
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Hero1

// import './Hero1.css';
// import Dotbtn from '../../utils/Dotbtn/Dotbtn';
// import dotImg from "../../assets/imgs/features-1/dots.png";
// import img1 from "../../assets/imgs/features-1/img-1.png";
// import img2 from "../../assets/imgs/features-1/img-2.png";
// import bgEllipse from "../../assets/imgs/features-1/bg-ellipse.png";
// import starLg from "../../assets/imgs/features-1/star-lg.png";
// import starMd from "../../assets/imgs/features-1/star-md.png";

// function Hero1() {
//     return (
//         <>
//             {/* first section */}
//             {/* <section> */}
//             <div className="container feature-section hero2_featureSection">
//                 <div className="row">
//                     {/* Left Column */}
//                     <div className="col-lg-4">
//                         <div className='IndustriesBtn'>
//                             <Dotbtn />
//                         </div>


//                         <h1 className="feature-title mt-4" data-aos="fade-up">
//                             The Innovation Behind the Experience
//                             <span
//                                 className="text-primary fst-italic"
//                                 data-aos="fade-zoom-in"
//                                 data-aos-delay="400"
//                             ></span>
//                         </h1>
//                     </div>

//                     {/* Right Column */}
//                     <div className="right_container col-lg-8 position-relative">
//                         <div className="right_Column d-flex flex-md-row flex-column align-items-center position-relative ps-lg-8 pt-lg-0 pt-10">

//                             <div
//                                 className="right_containerImg pe-md-3 pb-3 pb-md-0 position-relative z-1"
//                                 data-aos="fade-zoom-in"
//                                 data-aos-delay="100"
//                             >
//                                 <img
//                                     className="rounded-3 border border-3 border-white"
//                                     src={img1}
//                                     alt="Feature 1"
//                                 />
//                             </div>

//                             <div
//                                 className="right_Column pe-md-3 pb-3 pb-md-0 position-relative z-1"
//                                 data-aos="fade-zoom-in"
//                                 data-aos-delay="200"
//                             >
//                                 <img
//                                     className="rounded-3 border border-3 border-white"
//                                     src={img2}
//                                     alt="Feature 2"
//                                 />
//                             </div>

//                             <div
//                                 className="right_Column pe-md-3 pb-3 pb-md-0 position-relative z-1"
//                                 data-aos="fade-zoom-in"
//                                 data-aos-delay="300"
//                             >
//                                 <iframe
//                                     src="https://www.youtube.com/embed/SlhESAKF1Tk?si=JauOCasltRDH_xDP"
//                                     title="YouTube video player"
//                                     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
//                                     referrerPolicy="strict-origin-when-cross-origin"
//                                     allowFullScreen
//                                     className="feature-video rounded-3 border border-3 border-white w-100"
//                                 ></iframe>
//                             </div>

//                             {/* Background Elements */}
//                             <img
//                                 className="bg-ellipse position-absolute top-50 start-0 translate-middle-y z-0"
//                                 src={bgEllipse}
//                                 alt="Background Ellipse"
//                             />
//                             <img
//                                 className="position-absolute z-0 star-lg"
//                                 src={starLg}
//                                 alt="Star Large"
//                             />
//                             <img
//                                 className="position-absolute z-2 star-md"
//                                 src={starMd}
//                                 alt="Star Medium"
//                             />
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </>
//     )
// }
// export default Hero1;