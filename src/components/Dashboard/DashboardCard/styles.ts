import styled, { css } from "styled-components";

type type = "Entries" | "Exit" | "Total";
interface HeaderProps {
  type: type;
}

const colorTypeIcon = {
  Entries: "green-300",
  Exit: "red-700",
  Total: "white",
} as const;

export const DashboardCardContainer = styled.div``;

export const Header = styled.header<HeaderProps>`
  svg {
    font-size: 32px;
    color: ${({ type, theme }) => theme[colorTypeIcon[type]]};

    /* ${(props) =>
      props.type === "Entries" &&
      css`
        color: ${props.theme["green-300"]};
      `}

    ${(props) =>
      props.type === "Exit" &&
      css`
        color: ${props.theme["red-700"]};
      `}
      
    ${(props) =>
      props.type === "Total" &&
      css`
        color: ${props.theme["white"]};
      `} */
  }
`;

export const Title = styled.span``;

export const Amount = styled.strong``;
