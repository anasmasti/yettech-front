import ContactForm from "./ContactForm";
import ContactInfoSection from "./ContactInfoSection";

export default function ContactSection() {
  return (
    <section className="">
      <div className="row mt-5 p-2 p-xl-5">
        <div className="col-12 col-lg-5">
          <ContactForm />
        </div>
        <div className="col-12 col-lg-7 p-5 main-card mt-4 mt-lg-0 d-lg-flex align-items-lg-center">
          <ContactInfoSection />
        </div>
      </div>
    </section>
  );
}
