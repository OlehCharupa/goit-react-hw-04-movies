import React, { useEffect, useState } from 'react';
import { movieReviews } from '../../helpers/helpers';

const Reviews = ({ id, ...props }) => {
    const [reviews, setReviews] = useState([])
    console.log(reviews);
    // useEffect(() => {
    //     movieReviews(id).then(data =>
    //         // console.log(data)
    //         setReviews(data.data.results)
    //     )

    // })
    return (
        <div>
            <h1>Reviews</h1>
            <ul>
                {reviews.map(el => <li>
                    <h4>{el.author}</h4>
                    <p>{el.content}</p>
                </li>)}
            </ul>
        </div>
    );
};

export default Reviews;