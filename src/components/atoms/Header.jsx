import React from "react";
import styled, { css } from "styled-components";
import theme from "../../constants/theme";

const elementMap = {
  Large: "h1",
  Big: "h2",
  Default: "h3",
  Medium: "h4",
  Small: "h5",
  Tiny: "h6"
};

const Large = css`
  font-size: 2.4rem;
  color: ${theme.colors.white};
`;

const Big = css`
  font-size: 2.2rem;
  font-weight: 500;
`;

const Default = css`
  font-size: 1.6rem;
  font-weight: 500;
`;

const Medium = css`
  font-size: 1.2rem;
  font-weight: 400;
`;

const Small = css``;

const Tiny = css``;

const MainTitle = styled.h1`
  color: ${theme.colors.black};

  ${({ variant = "Default" }) => {
    switch (variant) {
      case "Large":
        return Large;
      case "Big":
        return Big;
      case "Medium":
        return Medium;
      case "Small":
        return Small;
      case "Tiny":
        return Tiny;
      default:
        return Default;
    }
  }}
`;

const Header = ({
  variant = "Default",
  as = elementMap[variant],
  children,
  ...rest
}) => {
  return (
    <MainTitle variant={variant} as={as} {...rest}>
      {children}
    </MainTitle>
  );
};

export default Header;