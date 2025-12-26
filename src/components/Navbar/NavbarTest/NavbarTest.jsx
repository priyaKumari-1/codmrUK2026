
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { CiDark, CiLight } from "react-icons/ci";
import { MdKeyboardArrowDown } from "react-icons/md";
import { FaReact } from "react-icons/fa";
import logo from "../../../assets/imgs/template/image17.png";
import "./NavbarTest.css";
import flag1 from '../../../assets/imgs/contact-4/Flag of UK.png';
import flag2 from '../../../assets/imgs/contact-4/Flag_of_India.png';
import flag3 from '../../../assets/imgs/contact-4/Flag_of_the_United_States.png';
import saalLogo from '../../../assets/imgs/template/SaasAi.png';

function Navbar() {
    const [isDark, setIsDark] = useState(true);
    const [openDropdown, setOpenDropdown] = useState(null);

    const handleToggle = () => {
        setIsDark(!isDark);
        document.body.classList.toggle("dark-mode");
    };

    // Close navbar after clicking a link
    const handleNavItemClick = () => {
        const navbarCollapse = document.getElementById("mainNavbar");
        if (navbarCollapse && navbarCollapse.classList.contains("show")) {
            window.bootstrap.Collapse.getInstance(navbarCollapse)?.hide();
        }
    };

    // Toggle dropdown (Service, Blog) on mobile
    const toggleDropdown = (menu) => {
        setOpenDropdown(openDropdown === menu ? null : menu);
    };

    return (
        <nav className="navbar navbar-expand-lg border-bottom fixed-top">
            <div className="nav_container container  position-relative">
                {/* Brand */}
                <Link
                    className="navbar-brand d-flex align-items-center"
                    to="/"
                    onClick={handleNavItemClick}
                >
                    <img src={logo} alt="CODM" className="me-2" />
                </Link>

                {/* Toggler */}
                <button
                    className="navbar-toggler position-absolute"
                    style={{ right: "2rem", top: "1.5rem" }}
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#mainNavbar"
                    aria-controls="mainNavbar"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* Links */}
                <div className="collapse navbar-collapse" id="mainNavbar">
                    <ul className="navbar-nav mx-auto mb-5 mb-lg-0 px-4 gap-3 gap-lg-4">
                        <li className="nav-item">
                            <NavLink
                                className={({ isActive }) =>
                                    `nav-link ${isActive ? "active-link" : ""}`
                                }
                                to="/"
                                onClick={handleNavItemClick}
                            >
                                Home
                            </NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink
                                className={({ isActive }) =>
                                    `nav-link ${isActive ? "active-link" : ""}`
                                }
                                to="/about"
                                onClick={handleNavItemClick}
                            >
                                About
                            </NavLink>
                        </li>

                        {/* service and blog  */}

                        {/* SERVICES */}
                        <li className="nav-item mega-dropdown d-lg-block">
                            <button
                                type="button"
                                className="nav-link mobile-toggle"
                                onClick={() => toggleDropdown("service")}
                            >
                                Services
                                <MdKeyboardArrowDown
                                    className={openDropdown === "service" ? "rotate" : ""}
                                />
                            </button>
                            {/* lg screen */}
                            <div
                                className={`dropdown-menu mega-menu dropdown-menu-service ${openDropdown === "service" ? "show" : ""
                                    }`}
                            >
                                <div className="row ps-5 p-md-0">
                                    {/* Column 1 */}
                                    <div className="col-md-3">
                                        <h6 className="text-uppercase fw-bold mb-3">
                                            Salesforce CRM
                                        </h6>
                                        <Link
                                            to="/service/higher-education"
                                            className="dropdown-item"
                                            onClick={handleNavItemClick}
                                        >
                                            Higher Education
                                        </Link>
                                        <Link
                                            to="/service/financial-service"
                                            className="dropdown-item"
                                            onClick={handleNavItemClick}
                                        >
                                            Financial Service
                                        </Link>
                                        <Link
                                            to="/service/industries-cloud"
                                            className="dropdown-item"
                                            onClick={handleNavItemClick}
                                        >
                                            Industries Cloud
                                        </Link>
                                        <Link
                                            to="/service/data-cloud-ai"
                                            className="dropdown-item"
                                            onClick={handleNavItemClick}
                                        >
                                            Data Cloud + A.I.
                                        </Link>
                                        <Link
                                            to="/service/marketing-cloud"
                                            className="dropdown-item"
                                            onClick={handleNavItemClick}
                                        >
                                            Marketing Cloud
                                        </Link>
                                    </div>

                                    {/* Column 2 */}
                                    <div className="col-md-3">
                                        <h6 className="text-uppercase fw-bold mb-3">Data</h6>
                                        <Link
                                            to="/service/api-integration"
                                            className="dropdown-item"
                                            onClick={handleNavItemClick}
                                        >
                                            API Integration
                                        </Link>
                                        <Link
                                            to="/service/data-integration"
                                            className="dropdown-item"
                                            onClick={handleNavItemClick}
                                        >
                                            Data Integration
                                        </Link>
                                        <Link
                                            to="/service/data-migration"
                                            className="dropdown-item"
                                            onClick={handleNavItemClick}
                                        >
                                            Data Migration
                                        </Link>
                                    </div>

                                    {/* Column 3 */}
                                    <div className="col-md-3">
                                        <h6 className="text-uppercase fw-bold mb-3">Development</h6>
                                        <Link
                                            to="/service/SalesforceCRM"
                                            className="dropdown-item"
                                            onClick={handleNavItemClick}
                                        >
                                            CRM Development
                                        </Link>
                                        <Link
                                            to="/service/BuildingLLM"
                                            className="dropdown-item"
                                            onClick={handleNavItemClick}
                                        >
                                            Building LLM
                                        </Link>
                                        <Link
                                            to="/service/DotNetApplication"
                                            className="dropdown-item"
                                            onClick={handleNavItemClick}
                                        >
                                            .NET Application
                                        </Link>
                                        <Link
                                            to="/service/React-Application"
                                            className="dropdown-item"
                                            onClick={handleNavItemClick}
                                        >
                                            React Application
                                        </Link>
                                        <Link
                                            to="/service/python-Application"
                                            className="dropdown-item"
                                            onClick={handleNavItemClick}
                                        >
                                            Python Application
                                        </Link>
                                    </div>

                                    {/* Column 4 */}
                                    <div className="col-md-3">
                                        <h6 className="text-uppercase fw-bold mb-3">Support</h6>
                                        <Link
                                            to="/service/Technical-Support"
                                            className="dropdown-item"
                                            onClick={handleNavItemClick}
                                        >
                                            Technical Support
                                        </Link>
                                    </div>
                                </div>
                            </div>



                            {/* phone  */}
                            <ul className={`mobile-accordion d-lg-none ${openDropdown === "service" ? "open" : ""}`}>
                                <li className="accordion-title">Salesforce CRM</li>

                                <li><NavLink to="/service/api-integration" onClick={handleNavItemClick}>Api Integration</NavLink></li>
                                <li><NavLink to="/service/BuildingLLM" onClick={handleNavItemClick}>Building LLM</NavLink></li>
                                <li><NavLink to="/service/DotNetApplication" onClick={handleNavItemClick}>.Net Application</NavLink></li>
                                <li><NavLink to="/service/python-Application" onClick={handleNavItemClick}>Python Application</NavLink></li>
                                <li><NavLink to="/service/React-Application" onClick={handleNavItemClick}>React Application</NavLink></li>
                                <li><NavLink to="/service/data-integration" onClick={handleNavItemClick}>Data Integration / Migration</NavLink></li>
                                <li><NavLink to="/service/higher-education" onClick={handleNavItemClick}>Higher Education</NavLink></li>
                                <li><NavLink to="/service/financial-service" onClick={handleNavItemClick}>Financial Service Cloud</NavLink></li>
                                <li><NavLink to="/service/data-cloud-ai" onClick={handleNavItemClick}>Data Cloud + A.I</NavLink></li>
                                <li><NavLink to="/service/industries-cloud" onClick={handleNavItemClick}>Industries Cloud</NavLink></li>
                                <li><NavLink to="/service/marketing-cloud" onClick={handleNavItemClick}>Salesforce Marketing Cloud</NavLink></li>
                                <li><NavLink to="/service/Technical-Support" onClick={handleNavItemClick}>Technical Support</NavLink></li>
                            </ul>
                        </li>

                        {/* BLOGS */}
                        <li className="nav-item mega-dropdown1">
                            <button
                                type="button"
                                className="nav-link mobile-toggle"
                                onClick={() => toggleDropdown("blog")}
                            >
                                Blogs
                                <MdKeyboardArrowDown
                                    className={openDropdown === "blog" ? "rotate" : ""}
                                />
                            </button>

                            {/* for lg screen */}
                            <div
                                className={`dropdown-menu1 mega-menu1 ${openDropdown === "blog" ? "show" : ""
                                    }`}
                            >
                                <div className="col-md-3">
                                    <Link
                                        className="dropdown-item"
                                        to="/blog/integration-framework"
                                        onClick={handleNavItemClick}
                                    >
                                        Integration Framework
                                    </Link>
                                    <Link
                                        className="dropdown-item"
                                        to="/blog/trigger-framework"
                                        onClick={handleNavItemClick}
                                    >
                                        Trigger Framework
                                    </Link>
                                    <Link
                                        className="dropdown-item"
                                        to="/blog/AI-Powered-Dashboard"
                                        onClick={handleNavItemClick}
                                    >
                                        Pharmaceutical Dashboard
                                    </Link>
                                    <Link
                                        className="dropdown-item"
                                        to="/blog/salesforceagentforce"
                                        onClick={handleNavItemClick}
                                    >
                                        Agentforce Implementation
                                    </Link>
                                    <Link
                                        className="dropdown-item"
                                        to="/blog/Salesforce-Einstein"
                                        onClick={handleNavItemClick}
                                    >
                                        Salesforce AI + Synergy
                                    </Link>
                                    <Link
                                        className="dropdown-item"
                                        to="/blog/Salesforce-Revenue-Cloud"
                                        onClick={handleNavItemClick}
                                    >
                                        Salesforce CPQ to Revenue Cloud
                                    </Link>
                                </div>
                            </div>

                            <ul className={`mobile-accordion d-lg-none ${openDropdown === "blog" ? "open" : ""}`}>
                                <li><NavLink to="/blog/integration-framework" onClick={handleNavItemClick}>Integration Framework</NavLink></li>
                                <li><NavLink to="/blog/trigger-framework" onClick={handleNavItemClick}>Trigger Framework</NavLink></li>
                                <li><NavLink to="/blog/AI-Powered-Dashboard" onClick={handleNavItemClick}>Pharmaceutical Dashboard</NavLink></li>
                                <li><NavLink to="/blog/salesforceagentforce" onClick={handleNavItemClick}>Agentforce Implementation</NavLink></li>
                                <li><NavLink to="/blog/Salesforce-Einstein" onClick={handleNavItemClick}>Salesforce AI + Synergy</NavLink></li>
                                <li><NavLink to="/blog/Salesforce-Revenue-Cloud" onClick={handleNavItemClick}> Salesforce CPQ to Revenue Cloud</NavLink></li>
                            </ul>
                        </li>




                        <li className="nav-item">
                            <NavLink
                                className={({ isActive }) =>
                                    `nav-link ${isActive ? "active-link" : ""}`
                                }
                                to="/contact"
                                onClick={handleNavItemClick}
                            >
                                Contact
                            </NavLink>
                        </li>
                    </ul>
                </div>

                {/* Right side */}
                {/* <div className="align-items-center d-none">
                    <img
                        src={saalLogo}
                        alt=""
                        style={{
                            width: "50%"
                        }}
                    />
                </div> */}
                <div className="justify-content-center align-content-center d-none d-lg-block">

                    <div className="d-flex text-center align-items-center">
                        <img
                            src={flag1}
                            alt="UK Flag"
                            style={{ width: "15px", height: "13px", marginRight: "6px", paddingTop: "0rem", }}
                        />
                        <p className="align-items-center" style={{ fontSize: ".9rem", marginBottom: "1px" }}>UK: (+44) 0121 818 6924</p>
                    </div>
                    {/*  */}
                    <div className="d-flex align-items-center">
                        <img
                            src={flag3}
                            alt="USA Flag"
                            style={{ width: "15px", height: "13px", marginRight: "6px" }}
                        />
                        <span className="align-items-center" style={{ fontSize: ".9rem" }}>USA: (+1) 201 623 3132</span>
                    </div>
                    {/*  */}
                    <div className="d-flex align-items-center p-0">
                        <img
                            src={flag2}
                            alt="UK Flag"
                            style={{ width: "15px", height: "13px", marginRight: "6px", paddingTop: "0rem", }}
                        />
                        <p className="align-items-center" style={{ fontSize: ".9rem", marginBottom: "1px" }}>India : (+91) 9717116432</p>
                    </div>
                </div>
            </div>
        </nav>
    );
}
export default Navbar;