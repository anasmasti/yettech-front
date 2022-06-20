import MainTitle from "../shared/MainTitle";
import ContactForm from "./ContactForm";
import ContactLinks from "./ContactLinks";

export default function ContactSection() {
  return (
    <section className="d-flex justify-content-center align-items-center h-100 pt-5 justify-content-lg-between flex-column">
      <div className="mt-5">
        <MainTitle title="Contact" />
      </div>

      <div className="d-flex justify-content-center align-items-center flex-column flex-lg-row-reverse gap-lg-3">
        <ContactLinks />
        <ContactForm />
      </div>
    </section>
  );
}
