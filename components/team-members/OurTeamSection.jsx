import React from "react";
import OurTeamStyle from "../../styles/pages/OurTeam.module.scss";
import homeStyle from "../../styles/pages/Home.module.scss";
import TeamMember from "./TeamMember";
import MembersData from "../../helper/data/team-members.json";

const OurTeamSection = () => {
  return (
    <>
      {/* Our Team Members */}
      <div
        className={[
          homeStyle.div_section,
          "row justify-content-center align-items-center pt-0",
        ].join(" ")}
      >
        <div className={[homeStyle.section_container].join(" ")}>
          <h2 className={[homeStyle.title].join(" ")}>Team Members.</h2>
          {MembersData.map((MemberData) => (
            <TeamMember name={MemberData.name} faculty={MemberData.faculty} description={MemberData.description} key={MemberData.id}  id={MemberData.id}/>
          ))}
        </div>
      </div>
    </>
  );
};

export default OurTeamSection;
