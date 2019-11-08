import React from 'react';
import styled, { css } from "styled-components";
import theme from '../../constants/theme';

const Default = css`
    color: ${theme.colors.black};
    font-weight: 400;
`;

const Marginless = css`
    margin: 0;
`;

const ErrorVariant = css`
    color: ${theme.colors.red};
    font-weight: 700;
`

const Italics = css`
    font-style: italic;
`;

const Centered = css`
    margin: auto;
    font-size: 1.5rem;
`;

const MainText = styled.p`
    color: ${theme.colors.black};
    font-size: 1rem;

    ${({ variant = "Default" }) => {
        switch (variant) {
            case "Marginless":
                return Marginless;
            case "Italics":
                return Italics;
            case "Centered":
                return Centered;
            case "Error":
                return ErrorVariant;
            default:
                return Default;
        }
    }}
`;

const Paragraph = ({
    variant = "Default",
    children,
    ...rest
}) => {
    return (
        <MainText variant={variant} {...rest}>
            {children}
        </MainText>
    );
};

export default Paragraph;