import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardAction,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type statData = {
  id: number;
  title: string;
  icon: React.JSX.Element;
  data: number;
};

type Props = {
  stat: statData;
};

const StatCard = ({ stat }: Props) => {
  return (
    <Card className="min-w-xs">
      <CardHeader>
        <CardAction>
          <Badge variant="secondary">{stat.icon}</Badge>
        </CardAction>
        <CardTitle>{stat.title}</CardTitle>
        <CardDescription>{stat.data}</CardDescription>
      </CardHeader>
    </Card>
  );
};

export default StatCard;
