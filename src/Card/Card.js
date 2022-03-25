import React from "react";
import "./Card.css";

const Card = (props) => {
    const { image, content, price, discountprice } = props
    return (
        <div id="firstdiv">
            <div id="new">
                <p className="new-text">NEW</p>
            </div>
            <div className="images">
                <img src={image} className="img" />
            </div>
            <p id="content">{content}</p>
            <span className="price">{`Rs.${price}`}</span><span className="deescountpice">
                <del> {`Rs.${discountprice}`}</del></span>
            <div id="bottom-text">
                <p className="cart-text">Add to cart</p>
            </div>
        </div>

    );
};
export default Card;