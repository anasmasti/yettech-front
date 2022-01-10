import React from "react";
import Link from "next/link";
import Image from "next/image";

function Card({ title, description, image, checkStyle }) {
  return (
    <div className={checkStyle ? "main-card" : "main-card"}>
      <img src={image} className="card--image"></img>
      <div className={"overlay"}></div>
      <div className={["card--title"].join(" ")}>
        <h4>{title}</h4>
      </div>
      <div className="card--content px-2">
        <h3>{title}</h3>
        <p className="card--description text-color">
          {description},{checkStyle.toString()}
        </p>
      </div>
    </div>
  );
}

export default Card;
