import { Link } from 'react-router-dom';
export const Menu = () => {
    return(
        <ul className="nav justify-content-center  ">
            <li className="nav-item">
                <Link className="nav-link active" to="/" aria-current="page">Home</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/about">About</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/posts">Posts</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/posts/10">Post 10</Link>
            </li>
        </ul>
    );
}