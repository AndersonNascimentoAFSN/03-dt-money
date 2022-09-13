import { TableContent } from "./TableContent";

import { TransactionsTableContainer, Table } from "./styles";

const transactions = [
  {
    title: "Desenvolvimento de site",
    amount: 12000,
    type: "Venda",
    date: "13/04/2022",
  },
  {
    title: "Almoço",
    amount: -30,
    type: "Alimentação",
    date: "05/02/2022",
  },
];

export function TransactionTable() {
  return (
    <TransactionsTableContainer>
      <Table>
        <tbody>
          {transactions.map((transaction) => (
            <TableContent
              title={transaction.title}
              amount={transaction.amount}
              type={transaction.type}
              date={transaction.date}
            />
          ))}
        </tbody>
      </Table>
    </TransactionsTableContainer>
  );
}
