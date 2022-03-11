import React from 'react';
import "./Card.css"

import {Link} from "react-router-dom";

function Card({category, onClick}) {
    return (   <div className="stock-form" onClick={onClick}>
        <div className="card">
            <img/>
            <Link role="button" className="button" to="/stock-category">{category}</Link>

        </div>

</div>
    );
}

export default Card;