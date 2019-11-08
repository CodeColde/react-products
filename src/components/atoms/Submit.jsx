import styled from 'styled-components';
import theme from '../../constants/theme';

const Submit = styled.button`
    margin-top: 1rem;
    padding: 1rem 1.4rem;
    border: 1px solid ${theme.colors.blue};
    background-color: ${theme.colors.blue};
    color: ${theme.colors.white};
    font-size: 1rem;
    transition: color 0.1s ease-in-out, background-color 0.1s ease-in-out;

    &:hover {
        background-color: ${theme.colors.white};
        color: ${theme.colors.blue};
        cursor: pointer;
    }

    &:active {
        border: 1px inset ${theme.colors.blue};
        background-color: ${theme.colors.white};
        color: ${theme.colors.blue};
    }
`;

export default Submit;