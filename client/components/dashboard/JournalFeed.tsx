import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const entries = [
  { day: 1, date: "2025-09-12", symptoms: "Fatigue, shallow sleep", notes: "Started light snehana. Hydration emphasized.", tags: ["sleep", "hydration"] },
  { day: 2, date: "2025-09-13", symptoms: "Improved bowel movement", notes: "Virechana prep. Bland diet.", tags: ["digestion"] },
  { day: 3, date: "2025-09-14", symptoms: "Calmer mind", notes: "Pranayama added. Gentle walk.", tags: ["mind", "breath"] },
  { day: 4, date: "2025-09-15", symptoms: "Deep sleep", notes: "Basti planned tomorrow.", tags: ["sleep"] },
];

export default function JournalFeed() {
  return (
    <Card className="border-border/60 shadow-sm">
      <CardHeader className="pb-2">
        <CardTitle>Daily Progress Log</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        {entries.map((e) => (
          <div key={e.day} className="rounded-lg border p-3 hover:bg-muted/30 transition">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div className="text-sm font-medium">Day {e.day} • <span className="text-muted-foreground text-xs">{e.date}</span></div>
              <div className="flex flex-wrap gap-1">
                {e.tags.map((t) => (
                  <Badge key={t} variant="secondary" className="bg-[hsl(var(--leaf))]/10 text-[hsl(var(--leaf))] border-0">{t}</Badge>
                ))}
              </div>
            </div>
            <div className="mt-1 text-sm">{e.symptoms}</div>
            <div className="text-xs text-muted-foreground">Doctor: {e.notes}</div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
