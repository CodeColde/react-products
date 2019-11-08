import React from 'react';
import Header from '../atoms/Header';
import Paragraph from '../atoms/Paragraph';

const DescriptionBlock = ({ description }) => {
    return (
        <>
            <Header variant="Big">Description:</Header>
            <Paragraph>{description}</Paragraph>
        </>
    );
};

export default DescriptionBlock;