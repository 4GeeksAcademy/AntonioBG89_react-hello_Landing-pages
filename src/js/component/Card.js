import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";

const Card = (props) => {
    return (
    <div className="card mb-4" style={{ width: "18rem" }}>
        <img className="card-img-top bg-secondary" alt="500 x 325" style={{ height: "150px" }} />
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.description}</p>
                <a href="#" className="btn btn-primary">Find Out More!</a>
            </div>
    </div>)

}

export default Card;