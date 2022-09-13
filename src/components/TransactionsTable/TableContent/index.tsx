import { PriceHighLight, TableContentContainer } from "./styles";

interface TableContentProps {
  title: string;
  amount: number;
  type: string;
  date: string;
}

export function TableContent({ title, amount, type, date }: TableContentProps) {
  return (
    <TableContentContainer>
      <td>{title}</td>
      <td>
        <PriceHighLight variant={amount < 0 ? "outcome" : "income"}>
          {amount}
        </PriceHighLight>
      </td>
      <td>{type}</td>
      <td>{date}</td>
    </TableContentContainer>
  );
}
