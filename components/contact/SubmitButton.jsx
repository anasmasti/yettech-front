import { useContext } from "react";
import { contactFormContext } from "../../helper/contexts/ContactFormContext.jsx";
import sendMessage from "../../helper/services/contact/sendMeddase";

export default function SubmitButton() {
  const { formData } = useContext(contactFormContext);

  let handleSubmit = () => {
    event.preventDefault();
    // convert data to json for submit it
    let dataToJson = JSON.stringify(formData);
    // Send message to database
    sendMessage(dataToJson);
  };

  return (
    <button
      type="submit"
      className="p-3 main-btn mt-3 border-0"
      onClick={() => handleSubmit()}
    >
      Envoyer le message
    </button>
  );
}
