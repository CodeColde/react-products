import React from 'react';
import styled from 'styled-components';
import Slideshow from './organisms/Slideshow';
import theme from '../constants/theme';
import Comments from './organisms/Comments';

const ViewProduct = ({ productId, returnToList }) => {
    const products = JSON.parse(localStorage.getItem('products'));
    const data = products.find((item) => item.id === productId);

    return (
        <>
            <button onClick={() => returnToList(false)}>Back</button>
            <Wrapper>
                <Images>
                    <Slideshow images={data.images} />
                </Images>
                <Info>
                    <h1>{data.title}</h1>
                    <p>{data.specification}</p>
                    <PriceBlock>
                        <p>Price: </p>
                        <p>${data.price}</p>
                    </PriceBlock>
                </Info>
                <Description>
                    <h2>Description:</h2>
                    <p>{data.description}</p>
                </Description>
                <CommentsWrapper>
                    <Comments productId={productId} />
                </CommentsWrapper>
            </Wrapper>
        </>
    );
};

export default ViewProduct;

const Images = styled.section`
    grid-area: image;
`;

const Info = styled.section`
    grid-area: info;
`;

const Description = styled.section`
    grid-area: description;
`;

const CommentsWrapper = styled.section`
    grid-area: comments;
`;

const PriceBlock = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

const Wrapper = styled.main`
    box-sizing: border-box;
    width: 100%;
    padding: 0 5rem;
    margin: 0 auto;
    display: grid;
    grid-template-areas:
        'image info'
        'description description'
        'comments comments';
    grid-column-gap: 20px;
    grid-template-columns: 5fr 2fr;

    @media screen and (min-width: ${theme.mediaQueries.width.l}) {
        width: ${theme.mediaQueries.width.l};
    }

    @media screen and (max-width: ${theme.mediaQueries.width.s}) {
        grid-template-areas:
        'image image'
        'info info'
        'description description'
        'comments comments';
    }
`;


