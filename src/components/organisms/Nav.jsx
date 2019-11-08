import React from 'react';
import styled from 'styled-components';
import Header from '../atoms/Header';
import theme from '../../constants/theme';

const Nav = ({ returnToList }) => {
    return (
        <Wrapper>
            <StoreTitle variant="Large" onClick={() => returnToList(false)}>Nerf Store</StoreTitle>
        </Wrapper>
    );
};

export default Nav;


const Wrapper = styled.nav`
    background-color: ${theme.colors.blue};
    width: 100%;
    min-height: 5rem;
    padding: 1rem 10rem;
    box-sizing: border-box;
`;

const StoreTitle = styled(Header)`
    text-align: center;

    &:hover {
        cursor: pointer;
    }
`;