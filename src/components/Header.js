import { AiFillInstagram, AiFillPhone } from "react-icons/ai";
import { HiEnvelope } from "react-icons/hi2";

export default function Header() {
  return (
    <nav className="header-wrapper">
      <div>
        <h1 className="pure-cleaning-logo">
          <span>PURE</span> CLEANING
        </h1>
      </div>
      <ul className="header-nav-links">
        <li>
          <a
            href="https://www.instagram.com/purepressurepowercleaning/"
            target="_blank"
            rel="noreferrer"
          >
            <AiFillInstagram />
            <h6>Social</h6>
          </a>
        </li>
        <li>
          <a href="mailto: pure_cleaning@live.com">
            <HiEnvelope className="email-icon" />
            <h6>Email</h6>
          </a>
        </li>
        <li>
          <a href="tel:+19543892642">
            <AiFillPhone />
            <h6>Contact</h6>
          </a>
        </li>
      </ul>
    </nav>
  );
}
