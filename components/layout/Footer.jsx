import style from "../../styles/shared/Footer.module.scss";
import Copyright from "../shared/Copyright";

const Footer = () => {
  return (
    <div className={[style.footer_box, "px-5"].join(" ")}>
      <Copyright />
    </div>
  );
};

export default Footer;
