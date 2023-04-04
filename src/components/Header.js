import { AiFillPhone } from "react-icons/ai";
import { AiFillMail } from "react-icons/ai";
import { AiFillStar } from "react-icons/ai";
import { IoIosChatboxes } from "react-icons/io"

export default function Header() {
  return (
    <nav className="header-wrapper">
      <h1 className="pure-cleaning-logo">Pure Cleaning</h1>
      <ul className="header-nav-links">
        <li>
          <a href="/">
            <AiFillStar />
            <h6>Reviews</h6>
          </a>
        </li>
        <li>
          <a href="/">
            <IoIosChatboxes />
            <h6>Quote</h6>
          </a>
        </li>
        <li>
          <a href="mailto: abc@example.com">
            <AiFillMail className="email-icon" />
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
