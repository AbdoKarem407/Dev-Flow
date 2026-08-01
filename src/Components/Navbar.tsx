function Navbar() {
  return (
    <nav className="contant navbar navbar-expand-lg bg-body-tertiary">

      <div className="container-fluid">
        <nav className="navbar-brand" >
          <img className="icon" src="/icon.png" alt="DevFlow Logo" />
          {" "}DevFlow
        </nav>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav mx-auto gap-3 mb-2 mb-lg-0">

            <li className="nav-item">
              <a className="home nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#">
                Services
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#">
                Projects
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link "  href="#">
                About
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#">
                Contact
              </a>
            </li>

          </ul>

          <form className="d-flex">
            <button
              className="btn btn-outline-success"
              type="submit"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;