export default function ContactLinks() {
  let message = "Hi Anas I saw your portfolio, i want to tell you that ";

  let links = [
    {
      id: 1,
      title: "WhatsApp",
      url: `https://wa.me/212660548100?text=${message}`,
      bg_img: "whatsapp-btn",
    },
    {
      id: 2,
      title: "Messenger",
      url: "https://m.me/anas.masti.96",
      bg_img: "messenger-btn",
    },
    {
      id: 3,
      title: "Telegram",
      url: "https://t.me/anasmasti",
      bg_img: "telegram-btn",
    },
    {
      id: 4,
      title: "E-mail",
      url: `mailto:anasmasti@hotmail.com?subject='Anas Masti Portfolio' Contact&body=${message}`,
      bg_img: "mail-btn",
    },
  ];

  return (
    <>
      <h3 className="fw-bold display-6">
        Avec un seul clique</h3>
      <div className="d-flex justify-content-between gap-3">
             {links.map((link) => (
        <a
          key={link.id}
          href={link.url}
          target="_blank"
          className={`p-3 ${link.bg_img}`}
        >
          {link.title}
        </a>
      ))}
      </div>
 
    </>
  );
}
