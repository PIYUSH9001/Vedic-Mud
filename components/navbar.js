import BootstrapLoader from "./bootstraploader";

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg bg-primary  py-0">
        <div className="container-fluid bg-primary rounded m-2">
          <a className="navbar-brand" href="/">Vedic Mud</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a className="nav-link" aria-current="page" href="/">Home</a>
              <a className="nav-link" href="products">Products</a>
              <a className="nav-link" href="#">About</a>
              <a className="nav-link" href="#">Contact Us</a>
            </div>
          </div>
        </div>
      </nav>
    );
}