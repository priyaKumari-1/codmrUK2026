import BlogSection from "../../components/BlogSection/BlogSection";
import HeaderWithBg from "../../utils/HeaderWithBg/HeaderWithBg";
import BlogFormSection from "../ui/BlogFormSection/BlogFormSection";
import SalesforceRevenueCloud_first from "./SalesforceRevenueCloud_first/SalesforceRevenueCloud_first";

function SalesforceRevenueCloud() {

  return (
    <>
    <HeaderWithBg
                    title="Salesforce Revenue Cloud (Previously CPQ)"
                    breadcrumbs={[
                        { label: "Home", link: "/" },
                          { label:"Blog",link:"/blog"},
                        { label: "Revenue Cloud Advanced", color: "purple-text" }
                    ]}
    />
    <SalesforceRevenueCloud_first/>
    <BlogFormSection heading="Share Your Thoughts on Our Salesforce Revenue Cloud"/>
    <BlogSection/>
    </>
  )
}

export default SalesforceRevenueCloud;