import React from "react";

export default function ContactInfo() {
  let contactInfos = [
    {
      id: 1,
      content: [
        {
          id: 1,
          title: "Telephone 1",
          content: "+212 6 60 54 81 00",
        },
        {
          id: 2,
          title: "Telephone 2",
          content: "+212 6 60 54 81 00",
        },
        {
          id: 3,
          title: "Telephone 3",
          content: "+212 6 60 54 81 00",
        },
      ],
    },
    {
      id: 2,
      content: [
        {
          id: 1,
          title: "E-mail",
          content: "yettech.contact@hotmail.com",
        },
      ],
    },
  ];

  let horaireInfo = [
    {
      id: 1,
      day_name: "Lundi",
      horaire: "08h - 18h",
    },
    {
      id: 2,
      day_name: "Mardi",
      horaire: "08h - 18h",
    },
    {
      id: 3,
      day_name: "Mercredi",
      horaire: "08h - 18h",
    },
    {
      id: 4,
      day_name: "Jeudi",
      horaire: "08h - 18h",
    },
    {
      id: 5,
      day_name: "Vendredi",
      horaire: "08h - 18h",
    },
    {
      id: 6,
      day_name: "Samedi",
      horaire: "08h - 18h",
    },
    {
      id: 7,
      day_name: "Dimanche",
      horaire: "08h - 18h",
    },
  ];

  return (
    <div>
      <h2 className="fw-bold display-3">Nos informations</h2>
      <p className="fw-light">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis velit
        id voluptatem.
      </p>
      <h3 className="fw-bold h6">Informations de contat :</h3>
      <div className="d-flex flex-column flex-lg-row gap-3">
        {contactInfos.map((info) => (
          <ul key={info.id} className="dark-card p-3 list-unstyled">
            {info.content.map((content) => (
              <li key={content.id}>
                <span className="fw-normal main-colored-text">
                  {content.title} :
                </span>{" "}
                <span className="fw-bold">{content.content}</span>
              </li>
            ))}
          </ul>
        ))}
      </div>

      <h3 className="fw-bold h6">Nos horaires :</h3>
      <ul className="dark-card p-3 list-unstyled">
        {horaireInfo.map((day) => (
          <li key={day.id}>
            <span className="fw-normal main-colored-text">
              {" "}
              {day.day_name} :
            </span>{" "}
            <span className="fw-bold">{day.horaire}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
