import styled from "styled-components";
import theme from '../../constants/theme';

const Textarea = styled.textarea`
    width: 75%;
    max-width: 100%;
    height: 100px;
    font-family: Helvetica, Arial, Helvetica, sans-serif;
    border: 1px solid ${theme.colors.gray};
    outline: 0;
    font-size: 1.2rem;
    padding: 1rem;
    margin-bottom: 2rem;
    color: ${theme.colors.black};
    transition: border 0.2s ease-in-out;

    &:focus, &:active, &:hover {
        border: 1px solid ${theme.colors.black};
    }

    @media screen and (max-width: ${theme.mediaQueries.width.s}) {
        width: 100%;
    }
`;

export default Textarea;