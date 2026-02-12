import HeaderWithBg from "../../utils/HeaderWithBg/HeaderWithBg";

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
    </>
  )
}

export default AgentforceAI;