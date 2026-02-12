import BlogSection from '../../components/BlogSection/BlogSection';
import HeaderWithBg from '../../utils/HeaderWithBg/HeaderWithBg';
import BlogFormSection from '../ui/BlogFormSection/BlogFormSection';
import TriggerframeworkBlog_First from './TriggerframeworkBlog_First.jsx/TriggerframeworkBlog_First';

function TriggerframeworkBlog() {
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
    <TriggerframeworkBlog_First/>
    <BlogFormSection heading='Share Your Thoughts on Our Salesforce Trigger Framework'/>
    <BlogSection/>

    </>
  )
}
export default TriggerframeworkBlog;