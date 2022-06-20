import { useContext } from "react";
import { contactFormContext } from "../../helper/contexts/ContactFormContext.jsx";
import ContactFormInput from "./ContactFormInput";

export default function ContactFormInputs({ inputs }) {
  const { formData, fillFormData } = useContext(contactFormContext);

  const handleInputChange = (event) => {
    const { name, value } = event;

    fillFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <>
      {inputs.map((input) => (
        <ContactFormInput
          key={input.id}
          {...input}
          handleInputChange={handleInputChange}
        />
      ))}
    </>
  );
}
