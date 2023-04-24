import { FiPhone } from "react-icons/fi";

export default function Contact() {
  return (
    <div className="contact-wrapper">
      <section>Family Owned and Operated, Professional, Licensed, and Insured</section>
      <section>
        <a href="tel:example">
        <FiPhone />
        &nbsp; (954) 951-4883
        </a>
      </section>
    </div>
  );
}
