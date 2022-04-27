import React from "react";
import "../styles.css";

const Card = (props) => {
    return (
        <div className="card-div" onClick={props.onSelectChar}>
            <img src={props.char.img} alt={props.char.name} id={props.char.id} className="char-img"></img>
            <span className="card-name">{props.char.name}</span>
        </div>
    )
};

export default Card;