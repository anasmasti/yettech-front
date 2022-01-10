import { useEffect, useCallback, useMemo, useRef } from "react";
import Link from "next/link";
import homeStyle from "../styles/pages/Home.module.scss";
import styled from "styled-components";
import Cards from "../components/shared/Card";

export default function Home() {
  return (
    <div
      className={[
        homeStyle.home_section,
        "d-flex",
        "justify-content-center",
        "align-items-center",
        "flex-column",
        "text-light"
      ].join(" ")}
    >
      {/* :::::::::: landing page first view :::::::::: */}
      <div
        className={[
          homeStyle.first_view,
          "row justify-content-center align-items-center",
        ].join(" ")}
      >
        <div className="col-12 col-lg-7 h-50 mt-5">
          <div>
            <h1>
              {/* Qualité Rapidité Fluidité */}
              We always provide best service
            </h1>
            <p>
              Le Lorem Ipsum est simplement du faux texte employé dans la
              composition et la mise en page avant impression. Le Lorem Ipsum
              est le faux texte standard de l'imprimerie depuis les années 1500,
              quand un imprimeur anonyme assembla ensemble des morceaux de texte
              pour réaliser un livre spécimen de polices de texte.
            </p>
          </div>

          {/* Where teams build faster, together
          Create, share, and get feedback with collaborative sandboxes for rapid web development. */}
          <div className={homeStyle.btns_section}>
            <Link href="/contact">
              <a className="main-btn px-3">
                <strong>Contactez-nous</strong>
              </a>
            </Link>
          </div>
        </div>
        {/* <svg xmlns="http://www.w3.org/2000/svg"  className={[homeStyle.wave].join(' ')}  viewBox="0 0 1440 320"><path fill="#fff" fillOpacity="1" d="M0,128L60,160C120,192,240,256,360,256C480,256,600,192,720,154.7C840,117,960,107,1080,106.7C1200,107,1320,117,1380,122.7L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg> */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={[homeStyle.wave].join(" ")}
          viewBox="0 0 1440 320"
        >
          <path
            fill="#F7F6FD"
            fillOpacity="1"
            d="M0,128L60,160C120,192,240,256,360,256C480,256,600,192,720,154.7C840,117,960,107,1080,106.7C1200,107,1320,117,1380,122.7L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          ></path>
        </svg>
      </div>

      {/* :::::::::: Why us :::::::::: */}
      <div
        className={[
          homeStyle.div_section,
          "row justify-content-center align-items-center pt-0",
        ].join(" ")}
      >
        <div className={[homeStyle.section_container].join(" ")}>
          <h2 className={[homeStyle.title].join(" ")}>Why Us ?</h2>
          <p className={["main-text", "text-color mt-3 text-start"].join(" ")}>
            Le Lorem Ipsum est simplement du faux texte employé dans la
            composition et la mise en page avant impression. Le Lorem Ipsum est
            le faux texte standard de l'imprimerie depuis les années 1500, quand
            un imprimeur anonyme assembla ensemble des morceaux de texte pour
            réaliser un livre spécimen de polices de texte.
          </p>
        </div>
      </div>

      {/* Projects we can make */}
      <div
        className={[
          homeStyle.div_section,
          "row justify-content-center align-items-center",
        ].join(" ")}
      >
        <div className={[homeStyle.section_container].join(" ")}>
          <h2 className={[homeStyle.title].join(" ")}>Projects we can make</h2>
        </div>
          <Cards/>
      </div>
    </div>
  );
}
