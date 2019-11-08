import React from 'react';
import styled from "styled-components";
import theme from '../../constants/theme';


const Input = ({ type = "text", ...rest }) => {
    return (
        <Field type={type} {...rest} />
    );
};

export default Input;

const Field = styled.input`
    border: 0;
    border-bottom: 1px solid ${theme.colors.gray};
    outline: 0;
    font-size: 1.2rem;
    padding: 1rem 0;
    margin-bottom: 2rem;
    color: ${theme.colors.black};
    max-width: 100%;

    &:focus, &:active, &:hover {
        border-bottom: 1px solid ${theme.colors.black};
    }
`;