import "../app.css";

export const Navbar = () => {
  return (
    <div className="sticky-top">
      <nav className="navbar navbar-expand-lg fondo shadow-lg ms">
        <div className="container-fluid ms-5 ps-5">
          <img
            src="/VETPRO.jpg"
            alt=""
            className=""
            style={{ width: "75px", height: "75px", marginLeft: "40px" }}
          />
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse ms-5" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a
                  className="nav-link text-white fw-bold"
                  aria-current="page"
                  href="/"
                >
                  Inicio
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white fw-bold" href="#seccion2">
                  Quiénes somos
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white fw-bold" href="#seccion3">
                  Agendar cita
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white fw-bold" href="#seccion4">
                  Servicios
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};
