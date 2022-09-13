import styled, { css } from "styled-components";

type type = "Entries" | "Exit" | "Total";

interface HeaderProps {
  type: type;
}

interface DashboardCard {
  type: type;
}

const colorTypeIcon = {
  Entries: "green-300",
  Exit: "red-300",
  Total: "white",
} as const;

export const DashboardCardContainer = styled.div<DashboardCard>`
  background-color: ${({ theme, type }) => type === 'Total' ? theme["green-700"] : theme["gray-600"]};
  border-radius: 6px;
  padding: 1.5rem 1.5rem 1.5rem 2rem;
`;

export const Header = styled.header<HeaderProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${({ theme }) => theme["gray-300"]};

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

export const Title = styled.span`

`;

export const Amount = styled.strong`
  display: block;
  margin-top: 1rem;
  font-size: 2rem;
`;
