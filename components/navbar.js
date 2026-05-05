import Link from "next/link";
import BootstrapLoader from "./bootstraploader";

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg bg-primary  py-0">
        <div className="container-fluid bg-primary rounded m-2">
          <Link className="navbar-brand" href="/">VedicMud</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <Link className="nav-link" aria-current="page" href="/">Home</Link>
              <Link className="nav-link" href="/products">Products</Link>
              <Link className="nav-link" href="#">About</Link>
              <Link className="nav-link" href="#">Contact Us</Link>
            </div>
          </div>
        </div>
      </nav>
    );
}