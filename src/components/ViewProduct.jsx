import React from 'react';
import styled from 'styled-components';
import Slideshow from './organisms/Slideshow';
import theme from '../constants/theme';
import Comments from './organisms/Comments';
import InfoBlock from './organisms/InfoBlock';
import DescriptionBlock from './organisms/Description';
import Breadcrumb from './atoms/Breadcrumb';

const ViewProduct = ({ productId, back }) => {
    const products = JSON.parse(localStorage.getItem('products'));
    const data = products.find((item) => item.id === productId);

    return (
        <Wrapper>
            <Breadcrumb back={() => back(false)}>Home...</Breadcrumb>
            <Images>
                <Slideshow images={data.images} />
            </Images>
            <Info>
                <InfoBlock
                    title={data.title}
                    specification={data.specification}
                    price={data.price}
                />
            </Info>
            <Description>
                <DescriptionBlock description={data.description} />
            </Description>
            <CommentsWrapper>
                <Comments productId={productId} />
            </CommentsWrapper>
        </Wrapper>
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

const Wrapper = styled.main`
    box-sizing: border-box;
    width: 100%;
    padding: 2rem 5rem;
    margin: 0 auto;
    display: grid;
    grid-template-areas:
        'breadcrumb breadcrumb'
        'image info'
        'description description'
        'comments comments';
    grid-column-gap: 2rem;
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