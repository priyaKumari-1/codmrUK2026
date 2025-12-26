import robotImg from "../../assets/imgs/hero-1/img-agent-1.webp";
import bgImg from "../../assets/imgs/hero-1/background.png";

import { heroSection } from "../../data";
import ContactUsBtn from "../../utils/ContactUsBtn/ContactUsBtn";
import AnimatedPill from "./AnimatedPill";
// import RightSideHeroSection from "./RightSideHeroSection";

import { Link } from "react-router-dom";

import "./Hero.css";

function Hero() {
  return (
    <section className="hero-Section hero">
      <div className="container heroContainer">
        <div className="row align-items-center">
          {/* Left Content */}
          <div className="col-12 col-md-6 mb-5 mb-md-0">
            <span className="agentBtn d-inline-flex align-items-center border border-2 border-white rounded-pill px-3 mt-5 py-1">
              AgentForce
            </span>

            <h1 className="text-3xl text-md-5xl fw-bold mt-4 leading-tight">
              {heroSection.HEADING}
            </h1>

            <p className="text-gray-600 mt-4">
              We deliver enterprise-scale AI solutions with futuristic thinking,
              helping businesses modernize, streamline, and scale with confidence
              using cutting-edge cloud and CRM technologies. Our development
              approach is grounded in SOLID principles, ensuring clean,
              maintainable, and scalable architecture from day one.
            </p>

            <div className="py-4 d-flex gap-3 flex-wrap">
              <Link
                to="/service"
                className="explorebtn btn-gradient text-decoration-none"
              >
                Explore Now
                <svg
                  className="ms-2"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M17.25 15.25V6.75H8.75"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M17 7L6.75 17.25"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>

              <ContactUsBtn />
            </div>
          </div>

          {/* Right Content */}
          <div className="col-12 col-md-6">
            {/* <RightSideHeroSection /> */}

            <div className="rightsidePillSection">
              <div className="animatedPillsContainer">
                <div className="animatedPills1">
                  <AnimatedPill text="CRM" />
                </div>
                <div className="animatedPills2">
                  <AnimatedPill text="LLM" />
                </div>
                <div className="animatedPills3">
                  <AnimatedPill text="EINSTEIN" />
                </div>
                <div className="animatedPills4">
                  <AnimatedPill text="AI" />
                </div>
                <div className="animatedPills5">
                  <AnimatedPill text="AgentForce" />
                </div>
                <div className="animatedPills6">
                  <AnimatedPill text="Salesforce" />
                </div>
              </div>

              <div
                className="robot_Container d-flex justify-content-center align-items-center"
                style={{
                  backgroundImage: `url(${bgImg})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  height: "360px",
                }}
              >
                <img
                  src={robotImg}
                  alt="Robot"
                  className="hero-img img-fluid"
                  style={{ maxWidth: "400px" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;


// import robotImg from "../../assets/imgs/hero-1/img-agent-1.webp";
// import { heroSection } from "../../data";
// import ContactUsBtn from "../../utils/ContactUsBtn/ContactUsBtn";
// import './Hero.css';
// import bgImg from '../../assets/imgs/hero-1/background.png';
// import { Link } from 'react-router-dom';
// import AnimatedPill from "./AnimatedPill";
// import RightSideHeroSection from "./RightSideHeroSection";

// function Hero() {
//   return (
//     <section className="hero-Section hero">
//       <div className="container heroContainer">
//         <div className="row align-items-center">

//           {/* Left Content */}
//           <div className="col-12 col-md-6 mb-5 mb-md-0">
//             <span className="agentBtn d-inline-flex align-items-center border border-2 border-white rounded-pill px-3 mt-5 py-1">
//               AgentForce
//             </span>

//             {/* <h1 className="text-3xl text-md-5xl fw-bold mt-4 leading-tight" data-aos="fade-up" data-aos-delay="100"> */}
//             <h1 className="text-3xl text-md-5xl fw-bold mt-4 leading-tight">
//               {heroSection.HEADING}
//             </h1>

//             {/* <p className="text-gray-600 mt-4" data-aos="fade-up" data-aos-delay="100"> */}
//             <p className="text-gray-600 mt-4">
//               We deliver enterprise-scale ai solutions with futuristic thinking
//               helping businesses modernize, streamline, and scale with confidence
//               using cutting-edge cloud and CRM technologies. Our development
//               approach is grounded in SOLID principles, ensuring clean,
//               maintainable, and scalable architecture from day one.
//             </p>

//             <div className="py-4 d-flex gap-3 flex-wrap">
//               <Link className="explorebtn btn-gradient text-decoration-none" to="/service">
//                 Explore Now
//                 <svg className="ms-2" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
//                   viewBox="0 0 24 24" fill="none">
//                   <path d="M17.25 15.25V6.75H8.75" stroke="white" strokeWidth="1.5"
//                     strokeLinecap="round" strokeLinejoin="round" />
//                   <path d="M17 7L6.75 17.25" stroke="white" strokeWidth="1.5"
//                     strokeLinecap="round" strokeLinejoin="round" />
//                 </svg>
//               </Link>
//               <ContactUsBtn />
//             </div>
//           </div>

//           {/* Right Image */}

//           <div className="col-12 col-md-6">
//             {/* <RightSideHeroSection/> */}

//             <div className='rightsidePillSection'>
//               <div className='animatedPillsContainer'>
//                 <div className='animatedPills1'>
//                   <AnimatedPill text="CRM" />
//                 </div>
//                 <div className='animatedPills2'>
//                   <AnimatedPill text="LLM" />
//                 </div>
//                 <div className='animatedPills3'>
//                   <AnimatedPill text="EINSTEIN" />
//                 </div>
//                 <div className='animatedPills4'>
//                   <AnimatedPill text="AI" />
//                 </div>
//                 <div className='animatedPills5'>
//                   <AnimatedPill text="AgentForce" />
//                 </div>
//                 <div className='animatedPills6'>
//                   <AnimatedPill text="Salesforce" />
//                 </div>
//               </div>

//               <div className="robot_Container d-flex justify-content-center align-items-center"
//                 style={{
//                   backgroundImage: `url(${bgImg})`,
//                   backgroundSize: "cover",
//                   backgroundPosition: "center",
//                   backgroundRepeat: "no-repeat",
//                   height: "360px",
//                 }}>
//                 <img
//                   src={robotImg}
//                   alt="Robot"
//                   className="hero-img img-fluid"
//                   style={{ maxWidth: "400px" }}
//                 />
//               </div>
//             </div>
//           </div>


//         </div>
//       </div>
//     </section>
//   );
// }
// export default Hero;
