import styled from "styled-components";

interface PriceHighLightProps {
  variant: "income" | "outcome";
}

export const TableContentContainer = styled.tr`
  td {
    padding: 1.25rem 2rem;
    background: ${({ theme }) => theme["gray-700"]};

    &:first-child {
      border-top-left-radius: 6px;
      border-bottom-left-radius: 6px;
      width: 50%;
    }

    &:last-child {
      border-top-right-radius: 6px;
      border-bottom-right-radius: 6px;
    }
  }
`;

export const PriceHighLight = styled.span<PriceHighLightProps>`
  color: ${({ theme, variant }) =>
    variant === "income" ? theme["green-300"] : theme["red-300"]};
`;
