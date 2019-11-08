import React from 'react';
import styled from 'styled-components';
import Header from '../atoms/Header';
import Paragraph from '../atoms/Paragraph';

const InfoBlock = ({ title, specification, price }) => {
    return (
        <>
            <ProductTitle variant="Big">{title}</ProductTitle>
            <Paragraph variant="Italics">{specification}</Paragraph>
            <Paragraph>Price: <Span>${price}</Span></Paragraph>
        </>
    );
};

export default InfoBlock;

const ProductTitle = styled(Header)`
    margin-top: 0;
`;

const Span = styled.span`
    margin-left: 0.5rem;
    font-weight: 700;
`;