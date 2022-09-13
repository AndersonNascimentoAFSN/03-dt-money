import { Header, Dashboard, TransactionTable } from "../../components";

import { Container } from "./styles";

export function Transactions() {
  return (
    <Container>
      <Header />
      <Dashboard />
      <TransactionTable />
    </Container>
  );
}
