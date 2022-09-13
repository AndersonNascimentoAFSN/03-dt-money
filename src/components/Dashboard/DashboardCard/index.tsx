import { Amount, DashboardCardContainer, Header, Title } from "./styles";
import { IconProps } from "phosphor-react";

interface DashboardCardProps {
  type: "Entries" | "Exit" | "Total";
  Icon: React.ForwardRefExoticComponent<
    IconProps & React.RefAttributes<SVGSVGElement>
  >;
  title: string;
  amount: number;
}

export function DashboardCard({
  Icon,
  type,
  title,
  amount,
}: DashboardCardProps) {
  return (
    <DashboardCardContainer type={type}>
      <Header type={type}>
        <Title>{title}</Title>
        <Icon />
      </Header>
      <Amount>{amount}</Amount>
    </DashboardCardContainer>
  );
}
