import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

// import blog1 from "../../assets/imgs/blogs/integrationframework.png";

// import blog2 from "../../assets/imgs/blogs/triggerframework.png";
// import blog3 from "../../assets/imgs/blogs/revenuecloud.png";

import blog1 from "../../assets/imgs/blogs/automation_apexTrigger.webp";
import blog2 from '../../assets/imgs/services-details-2/triggerframework/img-1.png';
import blog3 from "../../assets/imgs/services-details-2/Revenue-Cloud/img-3.jpg";
import blog4 from "../../assets/imgs/services-details-2/EinsteinAI/img-1.png";

import DotBtn from "../../utils/Dotbtn/Dotbtn";
import { Link } from "react-router-dom";
import "./BlogSection.css";

const blogData = [
  {
    image: blog1,
    category: "Integration Framework",
    title: "Building a Scalable Integration Framework in Salesforce",
    description:
      "Learn how to design reusable, scalable integration patterns in Salesforce using REST, Apex, and external services.",
    link: "/integrationframework.html",
  },
  {
    image: blog2,
    category: "Architecture",
    title: "Mastering the Trigger Framework in Salesforce",
    description:
      "A deep dive into building a trigger framework to ensure scalability, maintainability, and best practices in Apex development.",
    link: "/triggerframework.html",
  },
  {
    image: blog3,
    category: "Revenue Ops",
    title: "From Salesforce CPQ to Revenue Cloud - The Journey",
    description:
      "Explore how Salesforce CPQ connects seamlessly with Revenue Cloud to enable full-cycle revenue operations and automation.",
    link: "/revenueCloud.html",
  }, 
  {
    image: blog4,
    category: "EinsteinAI",
    title: "Salesforce Einstein + AI Synergy",
    description:
      "Elevate your Salesforce CRM with the power of embedded Artificial Intelligence. ",
    link: "/blog/Salesforce-Einstein",
  },
];

function BlogSection() {
  return (
    <section className="blog_section blog_sectionContainer">
      <div className="container">

        {/* HEADER */}
        <div className="row align-items-end mb-4">
          <div className="col-12 col-md-6 me-auto">
            <div className="btnStay_Updated">
              <DotBtn text="From Blog" />
            </div>

            <h1 className="blog_section_heading ds-3 mt-3 mb-3">
              Our Latest <br /> Articles
            </h1>

            <span className="fs-5 fw-medium">
              Explore the insights and trends shaping our industry
            </span>
          </div>

          <div className="col-12 col-md-6 mt-3 mt-md-0 text-md-end">
            <Link
              to="/blogs"
              className="fw-bold text-decoration-none"
              style={{ color: "#8065f4" }}
            >
              See all articles →
            </Link>
          </div>
        </div>

        {/* ✅ SWIPER SLIDER */}
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          slidesPerView={3}
          spaceBetween={25}
          loop={true}
          navigation={{
            nextEl: ".swiper-btn-next",
            prevEl: ".swiper-btn-prev",
          }}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            0: { slidesPerView: 1 },
            520: { slidesPerView: 2 },
            950: { slidesPerView: 3 },
          }}
          className="slide-content"
        >
          {blogData.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="blogHomeContainer bg-white rounded-3 p-3 position-relative">
               <div className="blogHomeContainerImg">
                <img
                  src={item.image}
                  alt={item.title}
                  width="100%"
                  className="rounded-3"
                />
               </div>
                <div className="card-body p-0">
                  <p className="blagCards_btn tag-spacing text-linear-2 text-uppercase mt-3">
                    {item.category}
                  </p>

                  <div className="blogContentSection m-2">
                    <h5 className="my-3">{item.title}</h5>
                    <p>{item.description}</p>
                  </div>
                </div>

                {/* Whole card clickable */}
                <a className="position-absolute bottom-0 start-0 end-0 top-0 z-0" href={item.link}></a>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* ✅ Navigation Buttons */}
        <div className="swiper-btn-prev swiper-navBtn"></div>
        <div className="swiper-btn-next swiper-navBtn"></div>

      </div>
    </section>
  );
}

export default BlogSection;


// import dotsImg from "../../assets/imgs/features-1/dots.png";
// import blog1 from "../../assets/imgs/blogs/integrationframework.png";
// import blog2 from "../../assets/imgs/blogs/triggerframework.png";
// import blog3 from "../../assets/imgs/blogs/revenuecloud.png";
// import DotBtn from "../../utils/Dotbtn/Dotbtn";
// import { Link } from "react-router-dom";
// import './BlogSection.css';

// function BlogSection() {
//   return (
//     <section className="blog_section blog_sectionContainer">
//       <div className="container">
//         {/* Header Row */}
//         <div className="row align-items-end">
//           <div className=" col-12 col-md-6 me-auto">
//             <div className="btnStay_Updated">
//                 <DotBtn text="From Blog"/>
//             </div>
          
//             <h1
//               className="blog_section_heading ds-3 mt-3 mb-3 aos-init aos-animate"
//               data-aos="fade-zoom-in"
//               data-aos-delay="100"
//             >
//               Our Latest <br/> Articles
//             </h1>
//             <span
//               className="fs-5 fw-medium aos-init aos-animate"
//               data-aos="fade-zoom-in"
//               data-aos-delay="200"
//             >
//             Explore the insights and trends shaping our industry
//             </span>
//           </div>

//           <div className="col-12 col-md-6 mt-3 mt-md-0">
//             <Link className="ms-md-5 fw-bold text-decoration-none d-flex align-items-center justify-content-md-end" style={{color:"#8065f4"}}>
//               See all articles
//               <svg
//                 className="ms-2"
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="24"
//                 height="14"
//                 viewBox="0 0 24 14"
//                 fill="none"
//               >
//                 <path
//                   className="fill-dark"
//                   d="M17.4177 0.417969L16.3487 1.48705L21.1059 6.24429H0V7.75621H21.1059L16.3487 12.5134L17.4177 13.5825L24 7.0002L17.4177 0.417969Z"
//                   fill="black"
//                 />
//               </svg>
//             </Link>
//           </div>
//         </div>

//         {/* Blog Cards Row */}
//         <div className="blagCards_container row">
//           {/* Blog 1 */}
//           <div className="blog_cards col-lg-4 text-start">
//             <div
//               className="border-0 rounded-3 mt-8 position-relative aos-init blogHomeContainer"
//               data-aos="fade-zoom-in"
//               data-aos-delay="100"
//             >
//               <img className="rounded-3" src={blog1} alt="Codm" width={'100%'}/>
//               <div className="card-body p-0">
//                 <Link
//                   className="text-decoration-none"
//                   href="/integrationframework.html"
//                 >
//                   <p className="blagCards_btn tag-spacing text-linear-2 text-uppercase">
//                     Integration
//                   </p>
//                 </Link>
//                 <div className="blogContentSection m-2">
//                 <h5 className="my-3">
//                   Building a Scalable Integration Framework in Salesforce
//                 </h5>
//                 <p>
//                   Learn how to design reusable, scalable integration patterns in
//                   Salesforce using REST, Apex, and external services.
//                 </p>
//                 </div>

               
//               </div>
//               <a
//                 className="position-absolute bottom-0 start-0 end-0 top-0 z-0"
//                 href="/integrationframework.html"
//               ></a>
//             </div>
//           </div>

//           {/* Blog 2 */}
//           <div className="col-lg-4 text-start">
//             <div
//               className="border-0 rounded-3 mt-8 position-relative aos-init"
//               data-aos="fade-zoom-in"
//               data-aos-delay="200"
//             >
//               <img className="rounded-3" src={blog2} alt="Codm" width={'100%'}/>
//               <div className="card-body p-0">
//                  <Link
//                   className="text-decoration-none"
//                   href="/integrationframework.html"
//                 >
//                   <p className="blagCards_btn tag-spacing text-linear-2 text-uppercase">
//                     Architecture
//                   </p>
//                 </Link>
//                 <div className="blogContentSection m-2">
//                  <h5 className="my-3">
//                   Mastering the Trigger Framework in Salesforce
//                 </h5>
//                 <p>
//                   A deep dive into building a trigger framework to ensure
//                   scalability, maintainability, and best practices in Apex
//                   development.
//                 </p>
//                 </div>
//               </div>
//               <a
//                 className="position-absolute bottom-0 start-0 end-0 top-0 z-0"
//                 href="/triggerframework.html"
//               ></a>
//             </div>
//           </div>

//           {/* Blog 3 */}
//           <div className="col-lg-4 text-start">
//             <div
//               className="border-0 rounded-3 mt-8 position-relative aos-init"
//               data-aos="fade-zoom-in"
//               data-aos-delay="300"
//             >
//               <img className="rounded-3" src={blog3} alt="Codm" width={'100%'}/>
//               <div className="card-body p-0">
//                  <Link
//                   className="text-decoration-none"
//                   href="/integrationframework.html"
//                 >
//                   <p className="blagCards_btn tag-spacing text-linear-2 text-uppercase">
//                     Revenue Ops
//                   </p>
//                 </Link>
//                 <div className="blogContentSection m-2">
//                 <h5 className="my-3">
//                   From Salesforce CPQ to Revenue Cloud - The Journey
//                 </h5>
//                 <p>
//                   Explore how Salesforce CPQ connects seamlessly with Revenue
//                   Cloud to enable full-cycle revenue operations and automation.
//                 </p>
//                 </div>
                
//               </div>
//               <a
//                 className="position-absolute bottom-0 start-0 end-0 top-0 z-0"
//                 href="/revenueCloud.html"
//               ></a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
// export default BlogSection;