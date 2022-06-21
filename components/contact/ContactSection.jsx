import ContactForm from "./ContactForm";
import ContactInfoSection from "./ContactInfoSection";

export default function ContactSection() {
  return (
    <section className="d-flex justify-content-center align-items-center h-100 pt-5 justify-content-lg-between flex-column">
      <div className="d-flex justify-content-center align-items-center flex-column flex-lg-row-reverse gap-lg-3 mt-5">
        <ContactInfoSection />
        <ContactForm />
      </div>
    </section>
  );
}
