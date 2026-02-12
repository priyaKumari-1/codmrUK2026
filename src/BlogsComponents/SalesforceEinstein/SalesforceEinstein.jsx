

import BlogSection from '../../components/BlogSection/BlogSection';
import HeaderWithBg from '../../utils/HeaderWithBg/HeaderWithBg';
import BlogFormSection from '../ui/BlogFormSection/BlogFormSection';
import SalesforceEinstein_first from './SalesforceEinstein_first/SalesforceEinstein_first';

function SalesforceEinstein() {
  return (
    <>
    <HeaderWithBg
                    title="Salesforce Trigger Framework"
                    breadcrumbs={[
                        { label: "Home", link: "/" },
                        { label:"Blog",link:"/blog"},
                        { label: "Salesforce Trigger Framework", color: "purple-text" }
                    ]}
    />
    <SalesforceEinstein_first/>
    <BlogFormSection heading='Share Your Thoughts on Our Salesforce Trigger Framework'/>
    <BlogSection/>
    </>
  )
}
export default SalesforceEinstein;