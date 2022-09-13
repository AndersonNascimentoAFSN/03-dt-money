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
}

const dashboardsList: Dashboard[] = [
  { Icon: ArrowCircleUp, type: "Entries" },
  { Icon: ArrowCircleDown, type: "Exit" },
  { Icon: CurrencyDollar, type: "Total" },
];

export function Dashboard() {
  return (
    <DashboardContainer>
      {dashboardsList.map((dashboard) => (
        <DashboardCard
          key={dashboard.type}
          Icon={dashboard.Icon}
          type={dashboard.type}
        />
      ))}
    </DashboardContainer>
  );
}
