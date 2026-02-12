import BlogSection from "../../components/BlogSection/BlogSection";
import HeaderWithBg from "../../utils/HeaderWithBg/HeaderWithBg";
import BlogFormSection from "../ui/BlogFormSection/BlogFormSection";
import AgentforceFinancialServices_FirstSection from "./AgentforceFinancialServices_FirstSection/AgentforceFinancialServices_FirstSection";
// import AIPoweredDashboard_FirstSection from "./AIPoweredDashboard_FirstSection/AIPoweredDashboard_FirstSection";

function AgentforceFinancialServices() {
  return (
    <>
     <HeaderWithBg  
                    title="Salesforce Financial Service Cloud"
                    breadcrumbs={[
                        { label: "Home", link: "/" },
                        { label:"Blog",link:"/blog"},
                        { label: "Salesforce Financial Service Cloud", color: "purple-text"}
                    ]}
      />  
      <AgentforceFinancialServices_FirstSection/>
    </>
  ) 
}

export default AgentforceFinancialServices;