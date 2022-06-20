import { useContext } from "react";
import { contactFormContext } from "./ContactFormContext";
import sendMessage from "../../services/contact/sendMeddase";

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
      className="btn btn-primary"
      onClick={() => handleSubmit()}
    >
      Send
    </button>
  );
}
