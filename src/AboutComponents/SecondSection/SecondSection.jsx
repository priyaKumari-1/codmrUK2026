import img1 from '../../assets/imgs/About/Our mission.png';
import img2 from '../../assets/imgs/About/vision.png';
import './SecondSection.css';

function SecondSection() {
  return (
    <div className='aboutContainer2 p-1 p-md-5'>
      <div className='container'>
        <h3 className='text-center aboutHeading mb-md-5'>Our Mission & Vision</h3>
        <div className='d-lg-flex d-inline'>  
          <div className='col-lg-6 pt-4 text-center text-md-start'>
            <h3 className='pb-md-4'><b>Our Mission</b></h3>
            <p>
              To empower businesses globally with transformative Salesforce solutions that drive efficiency, innovation, and sustainable growth. We are committed to delivering exceptional value through our expertise in CRM implementation, customization, and strategic consulting.

              Our focus extends beyond technology implementation we prioritize training and continuous support to ensure your team leverages the full potential of Salesforce, creating lasting impact and measurable ROI for your organization.
            </p>
          </div>
          <div>
            <img src={img1} alt="our mission" width={'100%'}/>
          </div>
        </div>

        {/* vision */}


        <div className='d-lg-flex d-inline gap-lg-3'>
          <div className=''>
            <img src={img2} alt="our mission" width={'100%'}/>
          </div>
          <div className='col-lg-6 pt-4 text-center text-md-start'>
            <h3 className='pb-4'><b>Our Vision</b></h3>
            <p>
             To be the most trusted and innovative Salesforce consulting partner globally, recognized for our unwavering commitment to client success and technological excellence. We envision a future where businesses of all sizes can seamlessly harness the power of cloud technology to transform their operations and customer relationships. 
            </p>
          </div>
        </div>

      </div>



      {/* next div
       */}
    </div>
  )
}

export default SecondSection


// import { Link } from "react-router-dom";
// import aboutImg from "../../assets/imgs/cta-15/Aboutus.jpg";
// import './SecondSection.css';

// const SecondSection = () => {
//   return (
//     <section className="section-about py-5">
//       <div className="container">
//         <div className="row align-items-center">
//           {/* Left Image Column */}
//           {/* <div className="col-md-6 mb-4 mb-md-0">
//             <img
//               src={aboutImg}
//               alt="About CodM"
//               className="img-fluid rounded shadow"
//             />
//           </div> */}

//           {/* Right Content Column */}
//           <div className="SecondSection_RightContainer col-md-6">
//             <h2 className="text-center text-md-start fs-1">
//               Your Trusted Technology Consulting Partner Since 2021
//             </h2>

//             <p className="text-muted mb-3 text-center text-md-start">
//               Founded in 2021, CodM is a global technology consulting and
//               implementation company with offices in India and the UK. We
//               deliver end-to-end digital solutions across Salesforce CRM and a
//               broad spectrum of modern technologies including .NET, Python,
//               AI/ML, and Large Language Models (LLMs).
//             </p>

//             <p className="text-muted mb-3 text-centertext-md-start">
//               Our team of certified architects, developers, and consultants has
//               delivered scalable, secure, and innovative solutions across
//               industries such as healthcare, finance, insurance, education, and
//               retail.
//             </p>

//             <h5 className=" fw-bold text-dark mt-4 mb-2 text-center text-md-start">
//               Our Core Service Offerings:
//             </h5>

//             <ul className="list-unstyled text-muted text-center text-md-start">
//               <li>
//                 <span className="fw-bold text-dark">
//                   Salesforce Consulting &amp; Implementation
//                 </span>
//                 <p>Sales, Service, Experience Cloud, CPQ, Marketing, and Education Cloud</p>
//               </li>

//               <li>
//                 <span className="fw-bold text-dark">
//                   Custom Web &amp; Mobile Development
//                 </span>
//                 <p>.NET, JavaScript, React, Node.js, and Python</p>
//               </li>

//               <li>
//                 <span className="fw-bold text-dark">
//                   AI and Machine Learning Solutions
//                 </span>
//                 <p>LLM-based applications, chatbots, and intelligent automation</p>
//               </li>

//               <li>
//                 <span className="fw-bold text-dark">
//                   API Integrations &amp; Cloud Services
//                 </span>
//                 <p>REST/SOAP APIs, Azure, AWS, Salesforce, and third-party platforms</p>
//               </li>

//               <li>
//                 <span className="fw-bold text-dark">
//                   Data Analytics &amp; Visualization
//                 </span>
//                 <p>Dashboarding, reporting, and predictive insights</p>
//               </li>
//             </ul>

//             <p className="text-muted mt-3 text-center text-md-start">
//               CodM has proudly been a Salesforce Consulting Partner since 2021
//               and continues to uphold the highest standards of security,
//               scalability, and industry best practices.
//             </p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default SecondSection;
