import { DashboardContainer } from "./styles";
import {
  ArrowCircleUp,
  ArrowCircleDown,
  CurrencyDollar,
  IconProps,
} from "phosphor-react";
import { DashboardCard } from "./DashboardCard";

interface Dashboard {
  Icon: React.ForwardRefExoticComponent<
    IconProps & React.RefAttributes<SVGSVGElement>
  >;
  type: "Entries" | "Exit" | "Total";
  title: string;
  amount: number;
}

const dashboardsList: Dashboard[] = [
  { Icon: ArrowCircleUp, type: "Entries", title: 'Entradas', amount: 17400 },
  { Icon: ArrowCircleDown, type: "Exit", title: 'Saídas', amount: 1259 },
  { Icon: CurrencyDollar, type: "Total", title: 'Total', amount: 16141 },
];

export function Dashboard() {
  return (
    <DashboardContainer>
      {dashboardsList.map((dashboard) => (
        <DashboardCard
          key={dashboard.type}
          Icon={dashboard.Icon}
          type={dashboard.type}
          title={dashboard.title}
          amount={dashboard.amount}
        />
      ))}
    </DashboardContainer>
  );
}
