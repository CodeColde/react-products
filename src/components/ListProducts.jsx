import React from 'react';
import styled from 'styled-components';
import Product from './organisms/Product';
import Header from './atoms/Header';

const ListProducts = ({ data, loadPage }) => {
    return (
            <Container>
                <Header variant="Big">Listing all Nerf products</Header>
                <Products>
                    {data.map(product => (
                        <Product
                            product={product}
                            loadPage={loadPage}
                        />
                    ))}
                </Products>
            </Container>
    );
};

export default ListProducts;


const Container = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    align-self: center;
    justify-content: center;
`;

const Products = styled.section`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
`