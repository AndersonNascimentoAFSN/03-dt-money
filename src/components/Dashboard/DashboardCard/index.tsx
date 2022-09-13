import { Amount, DashboardCardContainer, Header, Title } from "./styles";
import { IconProps } from "phosphor-react";

interface DashboardCardProps {
  type: "Entries" | "Exit" | "Total";
  Icon: React.ForwardRefExoticComponent<
    IconProps & React.RefAttributes<SVGSVGElement>
  >;
}

export function DashboardCard({ Icon, type }: DashboardCardProps) {
  return (
    <DashboardCardContainer>
      <Header type={type}>
        <Title>Entradas</Title>
        <Icon />
      </Header>
      <Amount>R$ 17.400,00</Amount>
    </DashboardCardContainer>
  );
}
