import { Link } from "react-router-dom";
import banner from './../assets/baner.jpg'

const Header = () => {
  return (
    <header>
        <img className="w-100" src={banner} alt="" />
      <div className="header">
        <div className="d-flex flex-column align-items-center">
          <div className="d-flex align-items-baseline">
          </div>
          <p className="mt-2 mb-0 fst-italic" style={{ fontSize: "2em" }}>
            Crea y responde encuestas anónimas
          </p>
        </div>
      </div>

      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand" href="#">
            Inicio
          </Link>
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
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/demo/poiuujihjhiokh" className="nav-link active" aria-current="page" >
                  Demo
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  Nueva Encuesta
                </Link>
              </li>
              
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Buscar"
                aria-label="Buscar"
              />
              <button className="btn btn-outline-success" type="submit">
                Buscar
              </button>
            </form>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
