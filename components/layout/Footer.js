import style from "../../styles/shared/Footer.module.scss";
import { BsFacebook, BsInstagram, BsTwitter, BsWhatsapp } from "react-icons/bs";

const Footer = () => {
  return (
    <div
      className={[
        style.footer_box,
        "d-flex",
        "justify-content-between",
        "px-5",
      ].join(" ")}
    >
      <div>
        <h6>YetTech 2021 &copy;</h6>
      </div>

      <div>
        <BsFacebook />
        &nbsp;&nbsp;
        <BsInstagram />
        &nbsp;&nbsp;
        <BsTwitter />
        &nbsp;&nbsp;
        <BsWhatsapp />
        &nbsp;&nbsp;
      </div>
    </div>
  );
};

export default Footer;
