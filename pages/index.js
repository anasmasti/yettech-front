import Link from "next/link";
import homeStyle from "../styles/pages/Home.module.scss";

export default function Home() {
  return (
    <div
      className={[
        homeStyle.home_section,
        "d-flex",
        "justify-content-center",
        "align-items-center",
        "flex-column",
      ].join(" ")}
    >
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
        <svg xmlns="http://www.w3.org/2000/svg" className={[homeStyle.wave].join(' ')} viewBox="0 0 1440 320"><path fill="#F7F6FD" fill-opacity="1" d="M0,128L60,160C120,192,240,256,360,256C480,256,600,192,720,154.7C840,117,960,107,1080,106.7C1200,107,1320,117,1380,122.7L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>
      </div>
      <div className="row">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">First</th>
              <th scope="col">Last</th>
              <th scope="col">Handle</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Larry</td>
              <td>the Bird</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
