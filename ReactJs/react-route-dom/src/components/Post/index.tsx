import { useParams } from "react-router-dom";

export const Post = () => {
    const params = useParams();
    const { id } = params;
    return(
        <div>
            <h1>Post: { id }</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam quibusdam deserunt enim esse vitae rem saepe iure blanditiis repudiandae? Voluptatibus nisi minus ab cum aliquid, quia sequi inventore perspiciatis rerum?</p>
        </div>
    );
}