import { useParams, useSearchParams } from "react-router-dom";

export const Post = () => {
    const params = useParams();
    const { id } = params;
    const [qs] = useSearchParams();
    let page = qs.get('page');
    return(
        <div className="mt-4 ms-5 me-5 d-flex justify-content-center flex-column align-items-center">
            <h2 className="text-warning">This is post { id }</h2>
            {page == '1' || !page ? (
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam quibusdam deserunt enim esse vitae rem saepe iure blanditiis repudiandae? Voluptatibus nisi minus ab cum aliquid, quia sequi inventore perspiciatis rerum?</p>

            ) : null}
             {page == '2' ? (
                <p>The ultimate measure of a man is not where he stands in moments of comfort and convenience, but where he stands at times of challenge and controversy.</p>
            ) : null}
            {page == '3' ? (
                <p>The two most important days in your life are the day you are born and the day you find out why.</p>
            ) : null}
        </div>
    );
}