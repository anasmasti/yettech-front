import React, { useEffect } from "react";
import OurTeamStyle from "../../styles/pages/OurTeam.module.scss";
import homeStyle from "../../styles/pages/Home.module.scss";
import OurTeamSection from "../../components/team-members/OurTeamSection.jsx";
import changeHeaderTheme from "../../helper/services/shared/theme/changeHeaderTheme";

const OurTeam = () => {
  useEffect(() => {
    changeHeaderTheme("contact");
  }, []);

  return (
    <div className={[OurTeamStyle.ourteam_content].join(" ")}>
      {/* Our Team description */}
      <div
        className={[
          homeStyle.div_section,
          "row justify-content-center align-items-center pt-0",
        ].join(" ")}
      >
        <div className={[homeStyle.section_container].join(" ")}>
          <h2 className={[homeStyle.title].join(" ")}>Our Team.</h2>
          <p className={["main-text", "text-color mt-3 text-start"].join(" ")}>
            Le Lorem Ipsum est simplement du faux texte employé dans la
            composition et la mise en page avant impression. Le Lorem Ipsum est
            le faux texte standard de l'imprimerie depuis les années 1500, quand
            un imprimeur anonyme assembla ensemble des morceaux de texte pour
            réaliser un livre spécimen de polices de texte.
          </p>
        </div>
      </div>

      {/* Our Team Members */}
      <OurTeamSection />
    </div>
  );
};

export default OurTeam;
