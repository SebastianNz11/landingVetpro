export const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Navbar
          </a>
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
                <a className="nav-link" aria-current="page" href="#">
                  Home 1
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Home 2
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
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
