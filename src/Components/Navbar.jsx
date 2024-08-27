import {Logo} from "../Assets/Assets"

export default function Navbar() {
    return (
        <nav className="navbar navbar-light bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    <img
                        src="https://mdbcdn.b-cdn.net/img/logo/mdb-transaprent-noshadows.webp"
                        height="20"
                        alt="MDB Logo"
                        loading="lazy"
                    />
                </a>
                <button data-mdb-collapse-init className="navbar-toggler" type="button" data-mdb-target="#navbarButtonsExample" aria-controls="navbarButtonsExample" aria-expanded="false" aria-label="Toggle navigation">
                    <i className="fas fa-bars"></i>
                </button>
            </div>
        </nav>
    )
}
