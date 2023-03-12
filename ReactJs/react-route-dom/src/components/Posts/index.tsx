import { Link, Outlet, useParams, useSearchParams } from 'react-router-dom';

export const Posts = () => {
    const params = useParams();
    const { id } = params;
    const [qs] = useSearchParams();
    return(
        <div className='text-center'>
            <h1> This is a page of Posts </h1>
            <Outlet />
            { id && parseInt(id) > 0 ? (
            <>
                <ul className="nav justify-content-center  ">
                    <li className="nav-item">
                        <Link className="nav-link active" to="?page=1" aria-current="page">Page 1</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link active" to="?page=2" aria-current="page">Page 2</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link active" to="?page=3" aria-current="page">Page 3</Link>
                    </li>
                </ul>
                <h1>Current page: {qs.get('page') ?? '0'} </h1>
            </>
            ) : null }
        </div>
    );
}