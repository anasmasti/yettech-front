import React, { useEffect } from "react";
import ContactSection from "../../components/contact/ContactSection";
import changeTheme from "../../helper/services/shared/theme/changeHeaderTheme";

export default function Contact() {
  useEffect(() => {
    changeTheme("contact");
  }, []);

  return <ContactSection />;
}
