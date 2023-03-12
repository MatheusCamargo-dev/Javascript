import { Link } from "react-router-dom";
import {FaHome, FaSignInAlt, FaUserAlt} from 'react-icons/fa';
export const Header = () => {
    return (
        <nav className="navbar navbar-expand-sm bg-warning">
            <div className="container-fluid">
                <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-center " id="collapsibleNavId">
                    <ul className="navbar-nav py-2 ">
                        <li className="nav-item">
                            <Link className="nav-link text-white active" to="#" aria-current="page">
                            <FaHome size={24} /> Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-white" to="#">
                                <FaUserAlt size={24} />
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-white" to="#">
                                <FaSignInAlt size={24} />
                            </Link>
                        </li>

                    </ul> 
                </div>
            </div>
        </nav>
    );
}