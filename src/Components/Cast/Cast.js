import React, { useEffect, useState } from 'react';
import { movieCredits } from '../../helpers/helpers';

const Cast = ({ id, ...props }) => {
    const [actors, setActors] = useState([])
    console.log('reviews', id);
    useEffect(() => {
        movieCredits(id).then(data => {
            // console.log(data.data.cast);
            setActors(data.data.cast)
        })
    }, [])
    return (
        <div>
            <h1>Cast</h1>
            <ul>
                {actors.map(actor => <li key={actor.id}>{actor.name}</li>)}
            </ul>
        </div>
    );
};

export default Cast;