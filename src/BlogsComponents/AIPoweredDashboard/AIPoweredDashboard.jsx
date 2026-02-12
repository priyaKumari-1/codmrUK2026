import BlogSection from "../../components/BlogSection/BlogSection";
import HeaderWithBg from "../../utils/HeaderWithBg/HeaderWithBg";
import BlogFormSection from "../ui/BlogFormSection/BlogFormSection";
import AIPoweredDashboard_FirstSection from "./AIPoweredDashboard_FirstSection/AIPoweredDashboard_FirstSection";

function AIPoweredDashboard() {
  return (
    <>
     <HeaderWithBg
                    title="Salesforce AI-Powered Dashboard"
                    breadcrumbs={[
                        { label: "Home", link: "/" },
                        { label:"Blog",link:"/blog"},
                        { label: "Salesforce AI-Powered Dashboard", color: "purple-text" }
                    ]}
      />  
      <AIPoweredDashboard_FirstSection/>
      <BlogFormSection heading="Share Your Thoughts on Our Salesforce Pharmaceutical Dashboard"/>
      <BlogSection/>
    </>
  ) 
}

export default AIPoweredDashboard;