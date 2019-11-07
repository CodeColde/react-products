import React from 'react';
import styled from 'styled-components';

const Loading = () => {
    return (
        <Wrapper>
            <Text>Loading...</Text>
        </Wrapper>
    )
}

export default Loading;

const Wrapper = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    align-items: center;
    justify-items: center;
    text-align: center;
`;

const Text = styled.p`
    margin: auto;
    font-size: 1.5rem;
`;