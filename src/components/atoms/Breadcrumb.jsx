import React from 'react';
import styled from 'styled-components';
import theme from '../../constants/theme';

const Breadcrumb = ({ back, children }) => {
    return (
        <Link onClick={() => back(false)}>{children}</Link>
    );
};

export default Breadcrumb;

const Link = styled.p`
    color: ${theme.colors.blue};

    &:hover{
        cursor: pointer;
        font-weight: 500;
    }
`;