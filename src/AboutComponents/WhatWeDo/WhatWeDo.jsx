// // const servicesData = [
// //     {
// //         id: 1,
// //         img: "https://www.salesforce.com/news/wp-content/uploads/sites/3/2021/05/Salesforce-logo.jpg",
// //         title: "Salesforce Consulting & Implementation",    
// //     },
// //     {
// //         id: 2,
// //         img: "https://www.salesforce.com/news/wp-content/uploads/sites/3/2021/05/Salesforce-logo.jpg",
// //         title: "Custom Web & Mobile Development",
// //     },
// //     {
// //         id: 3,
// //         img: "https://www.salesforce.com/news/wp-content/uploads/sites/3/2021/05/Salesforce-logo.jpg",
// //         title: "AI & Innovation",
// //     },
// //     {
// //         id: 4,
// //         img: "https://www.salesforce.com/news/wp-content/uploads/sites/3/2021/05/Salesforce-logo.jpg",
// //         title: "Development & Cloud",
// //     },
// //      {
// //         id: 5,
// //         img: "https://www.salesforce.com/news/wp-content/uploads/sites/3/2021/05/Salesforce-logo.jpg",
// //         title: "Secure & Scalable Solutions",
// //     },
// // ];


// const servicesData = [
//   {
//     id: 1,
//     img: "https://www.salesforce.com/news/wp-content/uploads/sites/3/2021/05/Salesforce-logo.jpg",
//     title: "Salesforce Consulting & Implementation",
//   },
//   {
//     id: 2,
//     img: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d",
//     title: "Custom Web & Mobile Development",
//   },
//   {
//     id: 3,
//     img: "https://images.unsplash.com/photo-1677442136019-21780ecad995",
//     title: "AI & Innovation",
//   },
//   {
//     id: 4,
//     img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa",
//     title: "Development & Cloud",
//   },
//   {
//     id: 5,
//     img: "https://images.unsplash.com/photo-1563986768609-322da13575f3",
//     title: "Secure & Scalable Solutions",
//   },
// ];


// function WhatWeDo() {
//     return (
//         <>
//             <div>
//                 <div className="container pt-4">
//                     <h2 className="text-center pt-4">What We Do</h2>

//                     <div className="container py-4">
//                         <div className="row g-4">
//                             {servicesData.map((service) => (
//                                 <div key={service.id} className="col-lg-3 col-md-4 col-sm-6">
//                                     <div className="border border-2 rounded-3 h-100 zoom-img">
//                                         <img
//                                             src={service.img}
//                                             alt={service.title}
//                                             className="img-fluid d-block mx-auto"
//                                         />
//                                         <p className="text-center mt-2">{service.title}</p>
//                                     </div>
//                                 </div>
//                             ))}
//                         </div>
//                     </div>

//                 </div>
//             </div>
//         </>
//     )
// }

// export default WhatWeDo;



import "./WhatWeDo.css";
import {
    FaTools,
    FaCloud,
    FaRobot,
    FaCode,
    FaLink,
} from "react-icons/fa"; 
import { FaCogs } from "react-icons/fa";


import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const services = [
    {
        icon: FaTools,
        title: "Salesforce Implementation",
        description:
            "Complete Salesforce CRM implementation tailored to your business needs. Our certified architects and consultants ensure seamless deployment across industries, focusing on security reviews and best practices.",
    },
    {
        icon: FaCloud,
        title: "Industries Cloud Solutions",
        description:
            "Specialized solutions for Financial Services, Healthcare, Insurance, Telecommunications, and Education sectors. We leverage Salesforce Industries Cloud to deliver 360-degree views of your clients.",
    },
    {
        icon: FaRobot,
        title: "AI & Agentforce",
        description:
            "Enhance customer support with AI-driven automation and Agentforce solutions. We integrate cutting-edge AI and LLMs to provide real-time data insights and smarter service delivery.",
    },
    {
        icon: FaCode,
        title: "Custom Software Development",
        description:
            "Bespoke software solutions built with .NET, React, and Python. We create scalable applications that integrate seamlessly with your existing systems and drive business growth.",
    },
    {
        icon: FaLink,
        title: "API Integration & Data Migration",
        description:
            "Expert API integration services connecting your platforms and tools. We handle complex data migrations ensuring data integrity and minimal disruption to your operations.",
    },
    {
    icon: FaCogs,
    title: "Technical & Deployment Support",
    description:
        "Reliable deployment and technical support covering environment setup, releases, monitoring, and post-deployment stability.",
}
];

const expertise = [
    "Salesforce OmniStudio (Vlocity)",
    "Salesforce CPQ",
    "Lightning Web Components",
    "Customer 360 Platform",
    "Financial Services Cloud",
    "Banking Services",
    "Education Cloud",
    "Managed Packages",
];

function WhatWeDo() {

    useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });

  }, []);
    return (
        <section className="what-we-do">
            <div className="container">
                <div className="section-header">
                    <h2>What We Do</h2>
                    <p>
                        As a certified Salesforce Consulting Partner, we deliver innovative
                        CRM solutions
                    </p>
                </div>

                <div className="services-grid text-center">
                    {services.map((service, index) => {
                        const Icon = service.icon;
                        return (
                            // <div key={index} className="service-card" data-aos="fade-down" data-aos-delay="100">
                            <div key={index} className="service-card">
                                <div className="d-flex justify-content-center align-items-center">
                                <div className="service-icon">
                                    <Icon size={32} color="white"/>
                                </div>
                                </div>
                                <h3>{service.title}</h3>
                                <p>{service.description}</p>
                            </div>
                        );
                    })}

                </div>

            </div>
        </section>
    );
}

export default WhatWeDo;
