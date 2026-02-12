import HeaderWithBg from "../../utils/HeaderWithBg/HeaderWithBg";
import S_lastSection from "../HigherEducation/S_lastSection/S_lastSection";
import SalesCloud_First from "./SalesCloud_First/SalesCloud_First";

function SalesCloud() {
  return (
    <>
    <HeaderWithBg  title="Salesforce Sales Cloud"
                    breadcrumbs={[
                        { label: "Home", link: "/" },
                          { label:"Service",link:"/ItServices"},
                        { label: "Salesforce Sales Cloud", color: "purple-text" }
    ]}
    />
    <SalesCloud_First/>
    <S_lastSection/>
    </>
  )
}

export default SalesCloud;