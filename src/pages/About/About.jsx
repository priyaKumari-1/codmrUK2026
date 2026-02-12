import FifthSection from "../../AboutComponents/FifthSection/FifthSection";
import FirstSection from "../../AboutComponents/FirstSection/FirstSection";
import FourthSection from "../../AboutComponents/FourthSection/FourthSection";
import Insurance from "../../AboutComponents/Insurance/Insurance";
import SecondSection from "../../AboutComponents/SecondSection/SecondSection";
import ThirdSection from "../../AboutComponents/ThirdSection/ThirdSection";
import WhatWeDo from "../../AboutComponents/WhatWeDo/WhatWeDo";
import BlogSection from "../../components/BlogSection/BlogSection";


function About() {
  return (
    <>
  <FirstSection/>
  <SecondSection/>
  <WhatWeDo/>
  {/* <ThirdSection/> */}
  <FourthSection/>
  <Insurance/>
  <BlogSection/>
  {/* <FifthSection/> */}
  </>
  )
}

export default About;