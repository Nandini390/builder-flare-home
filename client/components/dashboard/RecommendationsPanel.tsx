import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import ReportsDownloader from "./ReportsDownloader";
import { Apple, Carrot, Soup, Wheat } from "lucide-react";

const diet = [
  { icon: Apple, text: "Warm stewed apples at breakfast" },
  { icon: Soup, text: "Light khichdi for lunch" },
  { icon: Carrot, text: "Steamed seasonal veggies" },
  { icon: Wheat, text: "Avoid cold, processed foods" },
];

const lifestyle = [
  { title: "Yoga & Breath", tip: "10 min Anulom-Vilom + 15 min gentle asanas" },
  { title: "Sleep", tip: "Unplug 1 hr before bed, sesame oil foot massage" },
  { title: "Hydration", tip: "Sip warm water with cumin" },
];

export default function RecommendationsPanel() {
  const rows = [
    { metric: "Sleep", score: 8, note: "Improved with routine" },
    { metric: "Digestion", score: 7, note: "Khichdi diet helping" },
    { metric: "Stress", score: 4, note: "Breath work effective" },
  ];
  return (
    <div className="space-y-4">
      <Card className="border-border/60 shadow-sm">
        <CardHeader className="pb-2">
          <CardTitle>Reports & Recommendations</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <ReportsDownloader rows={rows} />
          <div>
            <div className="mb-2 text-sm font-medium">Personalized Diet</div>
            <div className="grid grid-cols-2 gap-2">
              {diet.map((d, i) => (
                <div key={i} className="flex items-center gap-2 rounded-md border p-2 hover:bg-muted/30">
                  <d.icon className="h-4 w-4 text-[hsl(var(--leaf))]" />
                  <span className="text-xs">{d.text}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <div className="mb-2 text-sm font-medium">Lifestyle & Yoga</div>
            <div className="space-y-2">
              {lifestyle.map((l, i) => (
                <div key={i} className="rounded-md border p-3 hover:bg-muted/30">
                  <div className="text-sm font-medium">{l.title}</div>
                  <div className="text-xs text-muted-foreground">{l.tip}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-wrap gap-2 pt-1">
            <Badge className="bg-[hsl(var(--saffron))] text-white border-0">Herbs</Badge>
            <Badge variant="secondary" className="bg-[hsl(var(--leaf))]/10 text-[hsl(var(--leaf))] border-0">Routine</Badge>
            <Badge variant="secondary" className="bg-[hsl(var(--sandal))]/20 text-[hsl(var(--sandal))] border-0">Mindfulness</Badge>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
