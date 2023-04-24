import { AiFillPhone } from "react-icons/ai";
import { HiEnvelope } from "react-icons/hi2";
import { AiFillStar } from "react-icons/ai";

export default function Header() {
  return (
    <nav className="header-wrapper">
      <h1 className="pure-cleaning-logo"><span>PURE</span> CLEANING</h1>
      <ul className="header-nav-links">
        <li>
          <a href="https://www.angi.com/companylist/us/fl/ft-lauderdale/pure-cleaning-pressure-cleaning-reviews-2354397.htm" target="_blank" rel="noreferrer"> 
            <AiFillStar />
            <h6>Reviews</h6>
          </a>
        </li>
        <li>
          <a href="mailto: abc@example.com">
            <HiEnvelope className="email-icon" />
            <h6>Email</h6>
          </a>
        </li>
        <li>
          <a href="tel:example">
            <AiFillPhone />
            <h6>Contact</h6>
          </a>
        </li>
      </ul>
    </nav>
  );
}
