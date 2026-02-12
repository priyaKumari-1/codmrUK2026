import HeaderWithBg from "../../utils/HeaderWithBg/HeaderWithBg";
import Header from "./Header/Header";
import ServiceLastSection from "./ServiceLastSection/ServiceLastSection";
import ServiceMainContentpage from "./ServiceMainContentpage/ServiceMainContentpage";
import ServiceMainNextComponent from "./ServiceMainNextComponent/ServiceMainNextComponent";
import './ServiceMainPage.css';
import ServiceMainPageSidebar from "./ServiceMainPageSidebar/ServiceMainPageSidebar";



function ServiceMainPage() {
    return (
        <div className="ServiceMainPageContainer">
            <Header/>
            <ServiceMainPageSidebar/>
            <ServiceMainContentpage/>
            <ServiceMainNextComponent/>
            <ServiceLastSection/>
        </div>
    )
}

export default ServiceMainPage;