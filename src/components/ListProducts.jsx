import React from 'react';
import Product from './organisms/Product';

const ListProducts = ({ data, loadPage }) => {
    return (
        <main>
            {data.map(product => (
                <Product
                    image={product.images[0].thumb}
                    title={product.title}
                    price={product.price}
                    key={product.id}
                    id={product.id}
                    loadPage={loadPage}
                />
            ))}
        </main>
    );
};

export default ListProducts;