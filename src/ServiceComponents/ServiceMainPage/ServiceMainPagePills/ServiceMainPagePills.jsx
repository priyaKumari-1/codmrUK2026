import { useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import './ServiceMainPagePills.css';

const ServiceMainPagePills = ({ pillLabel, title, description, link }) => {
  const [showCard, setShowCard] = useState(false);

  const handleMouseEnter = () => setShowCard(true);
  const handleMouseLeave = () => setShowCard(false);

  return (
    <div className="position-relative d-inline-block mx-2 pb-3">
      {/* Pill */}
      <span
        className="badge rounded-pill purple-pill-bg px-3 py-2 text-white"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{ cursor: "pointer" }}
      >
        {pillLabel} 
      </span>

      {/* Card */}
      {showCard && (
        <div
          className="card shadow p-3 position-absolute"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          style={{
            top: "110%",
            left: "50%",
            transform: "translateX(-50%)",
            width: "260px",
            zIndex: 999,
          }}
        >
          <h6 className="fw-bold">{title}</h6>
          <p className="text-muted" style={{ fontSize: "14px" }}>
            {description}
          </p>

          <Link to={link} className="text-primary fw-semibold text-decoration-none">
            Read More →
          </Link>
        </div>
      )}
    </div>
  );
};

export default ServiceMainPagePills;



// import { useState } from "react";
// import { Link } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";

// const ServiceMainPagePills = () => {
//   const [showCard, setShowCard] = useState(false);

//   const handleMouseEnter = () => setShowCard(true);
//   const handleMouseLeave = () => setShowCard(false);

//   return (
//     <div className="position-relative d-inline-block">
//       {/* Pill */}
//       <span
//         className="badge rounded-pill bg-primary px-3 py-2 text-white"
//         onMouseEnter={handleMouseEnter}
//         onMouseLeave={handleMouseLeave}
//         style={{ cursor: "pointer" }}
//       >
//         Wellness
//       </span>

//       {/* Card */}
//       {showCard && (
//         <div
//           className="card shadow p-3 position-absolute"
//           onMouseEnter={handleMouseEnter}
//           onMouseLeave={handleMouseLeave}
//           style={{
//             top: "110%",
//             left: "50%",
//             transform: "translateX(-50%)",
//             width: "250px",
//             zIndex: 999,
//           }}
//         >
//           <h6 className="fw-bold">Wellness Programs</h6>
//           <p className="text-muted" style={{ fontSize: "14px" }}>
//             Explore mindfulness, yoga & relaxation sessions to boost mental wellness.
//           </p>

//           <Link to="/wellness" className="text-primary fw-semibold text-decoration-none">
//             Read More →
//           </Link>
//         </div>
//       )}
//     </div>
//   );
// };
// export default ServiceMainPagePills;


// import { useState } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";

// const ServiceMainPagePills = () => {
//   const [showCard, setShowCard] = useState(false);

//   return (
//     <div className="position-relative d-inline-block">
//       {/* Pill */}
//       <span
//         className="badge rounded-pill bg-primary px-3 py-2 text-white"
//         onMouseEnter={() => setShowCard(true)}
//         onMouseLeave={() => setShowCard(false)}
//         style={{ cursor: "pointer" }}
//       >
//         Hover Me
//       </span>

//       {/* Card on Hover */}
//       {showCard && (
//         <div
//           className="card shadow position-absolute p-3"
//           style={{
//             top: "110%", 
//             left: "50%",
//             transform: "translateX(-50%)",
//             width: "220px",
//             zIndex: 10,
//           }}
//         >
//           <h6 className="fw-bold mb-2">Card Title</h6>
//           <p className="mb-0 text-muted" style={{ fontSize: "14px" }}>
//             This is a card that appears when you hover over the pill.
//           </p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ServiceMainPagePills;
