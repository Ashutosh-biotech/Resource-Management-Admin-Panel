import {Link} from "react-router-dom";
import {Logo, Me} from "../Assets/Assets";

export default function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-sm navbar-light bg-white">
                <div className="container-fluid">
                    <div className={"navbar-brand"}>
                        {/*<Link to="/">*/}
                        <img src={Logo} alt="Next Wave"/>
                        {/*</Link>*/}
                    </div>
                    <div className={"d-flex align-items-center"}>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ms-auto align-items-center">
                                <li className="nav-item">
                                    <button type="button" className="btn btn-success btn-sm">Add Item</button>
                                </li>
                                <li className="nav-item dropdown">
                                    <img src={Me} alt="" className={"img-fluid rounded-circle ml-4"} style={{width: "40px"}}/>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}
