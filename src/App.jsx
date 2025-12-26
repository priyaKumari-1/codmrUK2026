import { useEffect } from 'react';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Service from './pages/Service/Service';
import AOS from "aos";
import "aos/dist/aos.css";
import ScrollOnTop from './components/ScrollOnTop/ScrollOnTop';
import Contact from './pages/Contact/Contact';
import HigherEducation from './ServiceComponents/HigherEducation/HigherEducation';
import Blog from './pages/Blog/Blog';
import IntegrationFrameworkBlog from './BlogsComponents/IntegrationFrameworkBlog/IntegrationFrameworkBlog';
import FinancialServiceCloud from './ServiceComponents/FinancialServiceCloud/FinancialServiceCloud';
import IndustriesCloud from './ServiceComponents/IndustriesCloud/IndustriesCloud';
import DataCloud from './ServiceComponents/DataCloud/DataCloud';
import MarketingCloud from './ServiceComponents/MarketingCloud/MarketingCloud';
import ApiIntegration from './ServiceComponents/ApiIntegration/ApiIntegration';
import TriggerframeworkBlog from './BlogsComponents/TriggerframeworkBlog/TriggerframeworkBlog';
import AIPoweredDashboard from './BlogsComponents/AIPoweredDashboard/AIPoweredDashboard';
import DataIntegration from './ServiceComponents/DataIntegration/DataIntegration';
import CRMDevelopment from './ServiceComponents/CRMDevelopment/CRMDevelopment';
import BuildingLLMDevelopment from './ServiceComponents/BuildingLLMDevelopment/BuildingLLMDevelopment';
import DotNetApplication from './ServiceComponents/DotNetApplication/DotNetApplication';
import ReactApplication from './ServiceComponents/ReactApplication/ReactApplication';
import PythonApplication from './ServiceComponents/PythonApplication/PythonApplication';
import TechnicalSupport from './ServiceComponents/TechnicalSupport/TechnicalSupport';
import AgentforceImplementation from './BlogsComponents/AgentforceImplementation/AgentforceImplementation';
import SalesforceEinstein from './BlogsComponents/SalesforceEinstein/SalesforceEinstein';
import SalesforceRevenueCloud from './BlogsComponents/SalesforceRevenueCloud/SalesforceRevenueCloud';
import SalesforcePartnerLogo from './components/SalesforcePartnerLogo/SalesforcePartnerLogo';
import NavbarTest from './components/Navbar/NavbarTest/NavbarTest';


function App() {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <>
      <ScrollOnTop/>
      <SalesforcePartnerLogo/>
      <Router>
        {/* <Navbar /> */}
        <NavbarTest/>
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />

            {/* service routes */}
            <Route path="/service" element={<Service/>} />
            <Route path='/service/higher-education' element={<HigherEducation />} />
            <Route path='/service/Financial-Service' element={<FinancialServiceCloud />} />
            <Route path="/service/industries-cloud" element={<IndustriesCloud/>} />
            <Route path="/service/data-cloud-ai" element={<DataCloud/>} />
            
            <Route path="/service/marketing-cloud" element={<MarketingCloud/>} />

            {/* Data */}
            <Route path="/service/api-integration" element={<ApiIntegration/>} />
            <Route path="/service/data-integration" element={<DataIntegration />} />
            <Route path="/service/data-migration" element={<DataIntegration />} />

            {/* Development */}
          <Route path="/service/SalesforceCRM" element={<CRMDevelopment/>} />
           <Route path="/service/BuildingLLM" element={<BuildingLLMDevelopment />} />
           <Route path="/service/DotNetApplication" element={<DotNetApplication />} />
           <Route path="/service/React-Application" element={<ReactApplication/>} />
           <Route path="/service/python-Application" element={<PythonApplication />} />

            {/* Support */}
            <Route path="/service/Technical-Support" element={<TechnicalSupport/>} />


            {/* Blog routes*/}
            {/* <Route path="blog" element={<Blog />}> */}
              <Route path="/blog/integration-framework" element={<IntegrationFrameworkBlog />} />
              <Route path="/blog/trigger-framework" element={<TriggerframeworkBlog/>}/>
              <Route path="/blog/AI-Powered-Dashboard" element={<AIPoweredDashboard/>}/>
              <Route path="/blog/salesforceagentforce" element={<AgentforceImplementation/>}/>
              <Route path="/blog/Salesforce-Einstein" element={<SalesforceEinstein/>}/>
              <Route path="/blog/Salesforce-Revenue-Cloud" element={<SalesforceRevenueCloud/>}/>
              {/* </Route> */}
            <Route path="/contact" element={<Contact />}/>
          </Routes>
        </div>
        <Footer />
      </Router>
    </>
  )
}
export default App;