import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

export default function SocialBar() {
  return (
    <div className="social-bar">
      <a href="https://facebook.com" target="_blank">
        <FontAwesomeIcon icon={faFacebook} />
      </a>

      <a href="https://instagram.com" target="_blank">
        <FontAwesomeIcon icon={faInstagram} />
      </a>

      <a href="https://whatsapp.com" target="_blank">
        <FontAwesomeIcon icon={faWhatsapp} />
      </a>
    </div>
  );
}
