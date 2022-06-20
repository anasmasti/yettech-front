import MainTitle from "../shared/MainTitle";
import ContactForm from "./ContactForm";
import ContactLinks from "./ContactLinks";

export default function ContactSection() {
  return (
    <div>
      <div>
        <MainTitle title="Contact" />
      </div>

      <div className="p-5">
        <ContactLinks />
        <ContactForm />
      </div>
    </div>
  );
}
