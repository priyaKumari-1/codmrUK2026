import BlogSection from "../../components/BlogSection/BlogSection";
import HeaderWithBg from "../../utils/HeaderWithBg/HeaderWithBg";
import BlogFormSection from "../ui/BlogFormSection/BlogFormSection";
import AgentforceAI_First from "./AgentforceAI_First/AgentforceAI_First";

function AgentforceAI() {
  return (
    <>
      <HeaderWithBg  
                    title="AI Powered Salesforce Development"
                    breadcrumbs={[
                        { label: "Home", link: "/" },
                        { label:"Blog",link:"/blog"},
                        { label: "AI Powered Salesforce Development", color: "purple-text"}
                    ]}
      />  
      <AgentforceAI_First/>
       <BlogFormSection heading="Share Your Thoughts on Our Agentforce Vibe Coding "/>
      <BlogSection/>
    </>
  )
}

export default AgentforceAI;