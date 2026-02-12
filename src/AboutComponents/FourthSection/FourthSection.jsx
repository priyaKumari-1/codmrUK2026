
import img1 from '../../assets/imgs/Certifications/Admin.png';
import img2 from '../../assets/imgs/Certifications/ApplicationArchitect.png';
import img3 from '../../assets/imgs/Certifications/Certified-Agentforce.png';
import img4 from '../../assets/imgs/Certifications/SFBA.png'; 
import img5 from '../../assets/imgs/Certifications/CPQ.png';
import img6 from '../../assets/imgs/Certifications/DataArchitect.png';
import img7 from '../../assets/imgs/Certifications/OmniStudioConsultant.jpeg';
import img8 from '../../assets/imgs/Certifications/OmniStudioDeveloper.png';
import img9 from '../../assets/imgs/Certifications/PlatformAppBuilder.png';
import img10 from '../../assets/imgs/Certifications/PD1.png';
import img11 from '../../assets/imgs/Certifications/PD2.png';
import img12 from '../../assets/imgs/Certifications/ServiceCloudConsultant.png';

import teamMember1 from '../../assets/imgs/team-4/vinod.png';
import teamMember2 from '../../assets/imgs/team-4/aman.png';
import teamMember3 from '../../assets/imgs/team-4/anjali.png';

import Dotbtn from '../../utils/Dotbtn/Dotbtn.jsx'; 
import './fourthSection.css';
import { Link } from 'react-router-dom';
import EventsGallery from '../EventsGallery/EventsGallery.jsx';

const certificateImages = [
  { src: img1, alt: "Admin" },
  { src: img2, alt: "ApplicationArchitect" },
  { src: img3, alt: "B2C-Solution-Architect" },
  { src: img4, alt: "SFBA" },
  { src: img5, alt: "CPQ" },
  { src: img6, alt: "DataArchitect" },
  { src: img7, alt: "OmniStudioConsultant" },
  { src: img8, alt: "OmniStudioDeveloper" },
  { src: img9, alt: "PlatformAppBuilder" },
  { src: img10, alt: "PD1" },
  { src: img11, alt: "PD2" },
  { src: img12, alt: "ServiceCloudConsultant"},
];

// const teamMembers = [
//   {
//     name: "Vinod Kumar",
//     title: "Chief Technology officer",
//     img: teamMember1,
//     link: "https://www.linkedin.com/in/vinod-kumar-a1477954/",
//   },
//   {
//     name: "Amanpreet Singh",
//     title: "Director",
//     img: teamMember2,
//     link: "https://www.linkedin.com/in/aman-singh0123/",
//   },
//   {
//     name: "Anjali Chauhan",
//     title: "CEO",
//     img: teamMember3,
//     link: "https://www.linkedin.com/in/anjali-chauhan-312a33162/",
//   },
// ];

const FourthSection = () => { 
  return (
    <section className="section-team-4 position-relative overflow-hidden pt-5">
      <div className="container">
        {/* Header */}
        <div className="fourthSection_Header text-center">
          <div className='d-flex justify-content-center'>
            <Dotbtn text="OUR EXCELLENCE" data-aos="zoom-in" data-aos-delay="100"/>
          </div>
          <h3 className="ds-3 my-3">Our Certificates</h3>
          <p className="fs-5">
            Our certifications validate expertise in cutting-edge technologies,
            <br />
            showcasing professional skills and industry readiness.
          </p>
        </div>

        {/* Certificates grid */}
        <div className="FourthSection_certificates row mt-8 mb-lg-8 m-0">
          {certificateImages.map((item, i) => (
            <div className="CertificatesCards col-lg-2 col-md-4 mb-lg-4 mb-4 text-center" key={i}>
              <div className="position-relative d-inline-block z-1">
                <div className="CertificatesCards_Img zoom-img rounded-3">
                  <img
            className={`img-fluid ${
              i === 11 ? "img-12-custom" : "img-normal"
            }`}
            src={item.src}
            alt={item.alt}
          />
                  {/* <img className="img-fluid w-100" width={"40%"} src={item.src} alt={item.alt}/> */}
                </div>
              </div>
            </div>
          ))}
        </div> 
        {/* event section  */}
        
        {/* <EventsGallery/> */}

        {/* Team Section */}
        {/* <div className="FourthSection_terms row mt-lg-10 mb-4">
          {teamMembers.map((member, i) => (
            <div className="col-lg-4 col-md-6 mb-lg-4 mb-8 text-center" key={i}>
              <div className="position-relative d-inline-block z-1">
                <div className="zoom-img rounded-3">
                  <img className="img-fluid w-100 py-5" src={member.img} alt={member.title} />
                </div>
                <div className="FourthSection_termsContent hover-up">
                  <a
                    className="card-team text-decoration-none text-start rounded-3 position-absolute top-100 translate-middle-y start-0 end-0 w-100 z-1 backdrop-filter w-auto p-4 mx-4 shadow-1"
                    href={member.link}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <h6>{member.name}</h6>
                    <span className="d-flex justify-content-between">
                      <span className="fs-6 text-600 me-auto">{member.title}</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="14"
                        viewBox="0 0 24 14"
                        fill="#007BFF"
                      >
                        <path
                          d="M17.4177 0.417969L16.3487 1.48705L21.1059 6.24429H0V7.75621H21.1059L16.3487 12.5134L17.4177 13.5825L24 7.0002L17.4177 0.417969Z"
                          fill="#6d4df2"
                        ></path>
                      </svg>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div> */}
      </div>
    </section>
  );
};

export default FourthSection;