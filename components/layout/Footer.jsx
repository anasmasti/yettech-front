import style from "../../styles/shared/Footer.module.scss";
import Copyright from "../shared/Copyright";

const Footer = () => {
  return (
    <footer className={[style.footer_box, "px-5"].join(" ")}>
      <Copyright />
    </footer>
  );
};

export default Footer;
