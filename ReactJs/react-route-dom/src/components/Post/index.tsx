import { useParams, useSearchParams } from 'react-router-dom';

export const Posts = () => {
    const params = useParams();
    const { id } = params;
    const [qs] = useSearchParams();
    return(
        <div>
            <h1>Post for: {id} </h1>
            <h1>{`Page: ${qs.get('page') ?? 'none'}`} </h1>
        </div>
    );
}