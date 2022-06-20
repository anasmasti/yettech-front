import ContactFormInputsSection from "./ContactFormInputsSection";
import { contactFormContext } from "./ContactFormContext";
import SubmitButton from "./SubmitButton";
import { useState } from "react";

export default function ContactForm() {
  let initFormData = {
    "first-name": "",
    "last-name": "",
    phone: "",
    email: "",
    message: "",
  };

  const [formData, setFormData] = useState(initFormData);

  function fillFormData(data) {
    setFormData(data);
  }

  return (
    <div className="mt-3">
      <form className="form-group">
        <contactFormContext.Provider value={{ formData, fillFormData }}>
          <ContactFormInputsSection />
          <SubmitButton />
        </contactFormContext.Provider>
      </form>
    </div>
  );
}
