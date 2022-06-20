import OurTeamStyle from "../../styles/pages/OurTeam.module.scss";
import homeStyle from "../../styles/pages/Home.module.scss";
import Image from "next/image";

const TeamMember = ({ name, faculty, description, id }) => {
  return (
    <>
      <div
        className={[OurTeamStyle.member_container, "row", " mt-5"].join(" ")}
      >
        {
          (
          id % 2 != 0 ? (
            <>
              <div className={[OurTeamStyle.member_info].join(" ")}>
                <Image
                  className="rounded-circle"
                  src={
                    "/images/card/main-qimg-e9cb794cb052cd92e94ca11434b29155-lq.jpg"
                  }
                  width={200}
                  height={200}
                ></Image>
                <h3 className="my-2">{name}</h3>
                <p>{faculty}</p>
              </div>
              <div
                className={[
                  OurTeamStyle.member_description,
                  "my-auto main-text",
                ].join(" ")}
              >
                {description}
              </div>
            </>
          ) : (
            <>
              <div
                className={[
                  OurTeamStyle.member_description,
                  "my-auto main-text",
                ].join(" ")}
              >
                {description}
              </div>
              <div className={[OurTeamStyle.member_info].join(" ")}>
                <Image
                  className="rounded-circle"
                  src={
                    "/images/card/main-qimg-e9cb794cb052cd92e94ca11434b29155-lq.jpg"
                  }
                  width={200}
                  height={200}
                ></Image>
                <h3 className="my-2">{name}</h3>
                <p>{faculty}</p>
              </div>
            </>
          ))
        }
      </div>
    </>
  );
};

export default TeamMember;
