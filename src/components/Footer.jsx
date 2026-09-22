import React from "react";
// import Socialmedia from "./Socialmedia";
import ContactForm from "./ContactForm";
import Contact from "./Contact";
function Footer() {
  return (
    <div className="dot-pattern flex flex-col-reverse lg:flex-row-reverse lg:justify-between lg:gap-12 gap-y-8  px-6 py-10 mt-16 " id="footer">
      <div className="w-full lg:w-[55%]">
    <ContactForm/>
      </div>
      <div className="w-full lg:w-[45%] text-end">
      <Contact  />
      </div>
     
    </div>
  );
}

export default Footer;
