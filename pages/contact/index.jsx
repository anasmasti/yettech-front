import React, { useEffect } from "react";
import ContactSection from "../../components/contact/ContactSection";
import changeHeaderTheme from "../../helper/services/shared/theme/changeHeaderTheme";

export default function Contact() {
  useEffect(() => {
    changeHeaderTheme("contact");
  }, []);

  return <ContactSection />;
}
