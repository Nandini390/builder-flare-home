import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";

const data = [
  { day: "Day 1", sleep: 5, digestion: 4, stress: 8 },
  { day: "Day 2", sleep: 6, digestion: 5, stress: 7 },
  { day: "Day 3", sleep: 7, digestion: 6, stress: 6 },
  { day: "Day 4", sleep: 7, digestion: 7, stress: 5 },
  { day: "Day 5", sleep: 8, digestion: 7, stress: 4 },
  { day: "Day 6", sleep: 8, digestion: 8, stress: 3 },
  { day: "Day 7", sleep: 9, digestion: 8, stress: 3 },
];

const config = {
  sleep: { label: "Sleep", color: "hsl(var(--leaf))" },
  digestion: { label: "Digestion", color: "hsl(var(--saffron))" },
  stress: { label: "Stress", color: "hsl(var(--marigold))" },
} as const;

export default function MetricGraph() {
  return (
    <Card className="border-border/60 shadow-sm">
      <CardHeader className="pb-2">
        <CardTitle>Body Response Metrics</CardTitle>
      </CardHeader>
      <CardContent>
        <ChartContainer config={config} className="h-64 w-full">
          <AreaChart data={data} margin={{ left: 6, right: 6 }}>
            <CartesianGrid strokeDasharray="4 4" />
            <XAxis dataKey="day" tickLine={false} axisLine={false} tickMargin={8} />
            <ChartTooltip content={<ChartTooltipContent />} />
            <Area type="monotone" dataKey="sleep" stroke="var(--color-sleep)" fill="var(--color-sleep)" fillOpacity={0.2} />
            <Area type="monotone" dataKey="digestion" stroke="var(--color-digestion)" fill="var(--color-digestion)" fillOpacity={0.2} />
            <Area type="monotone" dataKey="stress" stroke="var(--color-stress)" fill="var(--color-stress)" fillOpacity={0.2} />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
