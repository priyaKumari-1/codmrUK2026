// import ContactSection_FirstSection from "./ContactSection_FirstSection";

import ContactMapSection from "./ContactMapSection/ContactMapSection";
import ContactSection_FirstSection from "./ContactSection_FirstSection/ContactSection_FirstSection";
import ContactSection_SecondSection from "./ContactSection_SecondSection/ContactSection_SecondSection";
import ContactSection_ThirdSection from "./ContactSection_ThirdSection/ContactSection_ThirdSection";


function ContactComponents() {
  return (
    <>
    
      <ContactSection_FirstSection/>
      <ContactSection_SecondSection/>
      <ContactSection_ThirdSection/>
      <ContactMapSection/>
    </>
  )
}

export default ContactComponents;