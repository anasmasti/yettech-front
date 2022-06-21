import ContactFormInputsSection from "./ContactFormInputsSection";
import { contactFormContext } from "../../helper/contexts/ContactFormContext.jsx";
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
      <form className="form-group p-5 colored-card">
        <h2 className="text-light display-3 fw-bold mb-4">
          Contactez-nous
        </h2>
        <contactFormContext.Provider value={{ formData, fillFormData }}>
          <ContactFormInputsSection />
          <SubmitButton />
        </contactFormContext.Provider>
      </form>
    </div>
  );
}
