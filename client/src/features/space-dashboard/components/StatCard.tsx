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
    <Card className="w-full">
      <CardHeader>
        <CardAction>
          <Badge variant="secondary">{stat.icon}</Badge>
        </CardAction>
        <CardTitle className="">{stat.title}</CardTitle>
        <CardDescription className="text-xl">{stat.data}</CardDescription>
      </CardHeader>
    </Card>
  );
};

export default StatCard;
