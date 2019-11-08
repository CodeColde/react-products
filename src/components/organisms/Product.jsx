import React from 'react';
import styled from 'styled-components';
import Header from '../atoms/Header';

const Product = ({ product, loadPage }) => {
    const { images, title, price, id } = product;
    const image = images[0].thumb;
    return (
        <Wrapper onClick={() => loadPage(id)}>
            <ImageWrapper>
                <Image src={image} alt={title} />
            </ImageWrapper>
            <Details>
                <ProductTitle>{title}</ProductTitle>
                <Price variant="Medium">Price: ${price}</Price>
            </Details>
        </Wrapper>
    );
};


export default Product;

const Wrapper = styled.article`
    display: flex;
    align-items: center;
    justify-content: stretch;
    flex-direction: column;
    margin: 0 2rem;
    min-height: 24rem;

    &:hover {
        cursor: pointer;
    }
`;

const ImageWrapper = styled.div`
    min-height: 18rem;
    display: flex;
    align-items: center;
`;

const Details = styled.div`
`;

const ProductTitle = styled(Header)`
    margin-bottom: 0.5rem;
`;


const Image = styled.img`
    object-fit: contain;
`;

const Price = styled(Header)`
    margin: 1rem 0;
`;