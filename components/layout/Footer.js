import style from "../../styles/shared/Footer.module.scss";
import { BsFacebook, BsInstagram, BsTwitter, BsWhatsapp } from "react-icons/bs";
import Copyright from "../shared/Copyright";

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
      <div className="d-flex justify-content-center align-items-center">
       <Copyright />
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
