import React, { useEffect, useState } from 'react';
import { movieReviews } from '../../helpers/helpers';

const Reviews = ({ id }) => {
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        movieReviews(id).then(data =>
            setReviews(data.data.results)
        )
    }, [id])
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