import HeaderWithBg from "../../utils/HeaderWithBg/HeaderWithBg"
import AgentforceImplementation_First from "./AgentforceImplementation_First/AgentforceImplementation_First";

function AgentforceImplementation() {
  return (
    <>
    <HeaderWithBg
                  title="Salesforce Agentforce Implementation"
                  breadcrumbs={[
                      { label: "Home", link: "/" },
                        { label:"Blog",link:"/blog"},
                      { label: "Salesforce Agentforce Implementation", color: "purple-text" }
                  ]}
    />
    <AgentforceImplementation_First/>
    </>
  )
}
export default AgentforceImplementation;