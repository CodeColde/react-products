import React from 'react';

const Product = ({ image, title, price, loadPage, id }) => {
    return (
        <section>
            <img src={image} alt={title} />
            <h2><button onClick={() => loadPage(id)}>{title}</button></h2>
            <h4>Price: ${price}</h4>
        </section>
    );
};


export default Product;