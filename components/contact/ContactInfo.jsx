import React from "react";

export default function ContactInfo() {
  let infos = [
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

  return (
    <div className="mt-3 mt-lg-5">
      <h3 className="fw-bold display-6">Nos informations</h3>
     <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis velit id voluptatem, reiciendis expedita praesentium similique qui, vel ullam deleniti eos nostrum quaerat, error ad totam est consequatur facilis. Maxime.
     </p>
      <div className="d-flex flex-column flex-lg-row gap-3">
        {infos.map((info) => (
          <div className="colored-card p-3 text-light">
            <ul className="list-unstyled">
              {info.content.map((content) => (
                <li>
                  <span className=" fw-bold">{content.title}:</span>{" "}
                  {content.content}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
