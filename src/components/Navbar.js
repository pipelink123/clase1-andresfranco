import "bootstrap/dist/css/bootstrap.min.css";
import CartWidget from './CartWidget'




function NavBar() {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar navbar-dark bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            global.org
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                  Inicio
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Nosotros
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  conocenos
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  productos
                </a>
              </li>
              <li class="nav-item">
              <CartWidget />
              </li>

            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
