import { Header, Dashboard, TransactionTable, SearchForm } from "../../components";

import { Container } from "./styles";

export function Transactions() {
  return (
    <>
      <Header />
      <Dashboard />
    <Container>
      <SearchForm />
      <TransactionTable />
    </Container>
    </>
  );
}
