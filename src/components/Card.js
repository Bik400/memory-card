import React from "react";
import "../styles.css";
import {charData} from "../charData";

const Card = (props) => {
    return (
        <div className="card-layout">
            {charData.map((data) => {
                return (
                    <div className="card-div" onClick={props.change}>
                        <img src={data.img} alt={data.name} id={data.id}></img>
                        <span className="classbro">{data.name}</span>
                    </div>
                )
            })}
        </div>
    )
};

export default Card;