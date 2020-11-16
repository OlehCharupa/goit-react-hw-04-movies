import React, { useEffect, useState } from 'react';
import { movieCredits } from '../../helpers/helpers';
import "./Cast.css"
import avatar from "../../images/avatar.png"

const Cast = ({ id, ...props }) => {
    const [actors, setActors] = useState([])
    useEffect(() => {
        movieCredits(id).then(data => {
            setActors(data.data.cast)
        })
    }, [])
    return (
        <div className="cast_box">
            <h1 className="cast_title">Cast</h1>
            <ul className="cast_list">
                {actors.map(actor => <li className="cast_item" key={actor.id}>
                    {actor.profile_path
                        ? <img className="cast_actor_photo" src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`} alt={actor.name} />
                        : <img className="cast_actor_photo" src="http://placehold.it/116x175/0b0b0b&text=_N_O_+_P_H_O_T_O_" alt={actor.name} />}
                    <h3 className="cast_actor_name">{actor.name}</h3>
                </li>)}
            </ul>
        </div>
    );
};

export default Cast;