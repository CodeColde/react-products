import React from 'react';
import styled from 'styled-components';
import Paragraph from './Paragraph';

const Loading = () => {
    return (
        <Wrapper>
            <Paragraph variant="Centered">Loading...</Paragraph>
        </Wrapper>
    );
};

export default Loading;

const Wrapper = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    align-items: center;
    justify-items: center;
    text-align: center;
`;