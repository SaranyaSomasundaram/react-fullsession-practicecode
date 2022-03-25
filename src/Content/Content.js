import React from "react";
import Card from '../Card/Card';
import './Content.css';
import one from './one.png';
import choli from './choli.jpg';
import maker from './maker.jpg';
import bag from './bag.jpg';


const Content = () => {

    const carddetail = [{
        image: one, content: "Men's T-shirt",
        price: "560", discountprice: "700"
    },
    {
        image: choli, content: "Lehenga Cholis",
        price: "350", discountprice: "540"
    },
    {
        image: maker, content: "Ice-cream maker",
        price: "560", discountprice: "700"
    },

    {
        image: bag, content: "college and laptop bags",
        price: "745", discountprice: "999"
    }
    ]
    return (
        <div className="wrapper">
            {
                carddetail.map((item) => {
                    const { image, content, price, discountprice } = item;
                    return <Card image={image} content={content}
                        price={price} discountprice={discountprice} />


                })
            }

        </div>

    );
};
export default Content;