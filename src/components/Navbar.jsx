import "../app.css";

export const Navbar = () => {
  return (
    <div className="sticky-top">
      <nav className="navbar navbar-expand-lg fondo shadow-lg">
        <div className="container-fluid">
          <img
            src="/VETPRO.jpg"
            alt=""
            style={{ width: "75px", height: "75px" }}
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
          <div className="collapse navbar-collapse" id="navbarNav">
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
                <a className="nav-link text-white fw-bold" href="#">
                  Home 3
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};
