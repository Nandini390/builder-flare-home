import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { Droplets, Flame, Syringe, Wind, Flower2 } from "lucide-react";

const therapies = [
  { key: "vamana", name: "Vamana", icon: Wind, purpose: "Induced emesis to expel Kapha toxins.", benefits: "Clears congestion, improves respiration.", precautions: "Light meals prior, rest after." },
  { key: "virechana", name: "Virechana", icon: Flame, purpose: "Purgation to eliminate Pitta toxins.", benefits: "Improves digestion, skin clarity.", precautions: "Hydration and bland diet." },
  { key: "basti", name: "Basti", icon: Syringe, purpose: "Medicated enema to balance Vata.", benefits: "Relieves constipation, joint pain.", precautions: "Gentle movement, calm mind." },
  { key: "nasya", name: "Nasya", icon: Droplets, purpose: "Nasal administration for head-neck.", benefits: "Relieves sinus issues, stress.", precautions: "Avoid cold exposure." },
  { key: "raktamokshana", name: "Raktamokshana", icon: Flower2, purpose: "Bloodletting to remove impurities.", benefits: "Reduces inflammation.", precautions: "Sterile care, rest." },
];

export default function TherapyTimeline() {
  return (
    <Card className="overflow-hidden border-border/60 shadow-sm">
      <CardHeader className="pb-2">
        <CardTitle className="flex items-center justify-between">
          <span>Therapy Progress</span>
          <div className="flex items-center gap-2 text-xs">
            <Badge className="bg-[hsl(var(--leaf))] text-white border-0">Purva</Badge>
            <Badge className="bg-[hsl(var(--saffron))] text-white border-0">Pradhana</Badge>
            <Badge variant="secondary" className="bg-[hsl(var(--sandal))]/20 text-[hsl(var(--sandal))] border-0">Paschat</Badge>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="relative h-2 w-full rounded-full bg-muted">
          <div className="absolute left-0 top-0 h-2 w-1/2 rounded-full bg-[hsl(var(--leaf))]" />
          <div className="absolute left-1/2 top-0 h-2 w-1/3 rounded-full bg-[hsl(var(--saffron))]" />
        </div>
        <div className="flex items-center justify-between">
          <span className="text-xs text-muted-foreground">Purva Karma</span>
          <span className="text-xs text-muted-foreground">Pradhana Karma</span>
          <span className="text-xs text-muted-foreground">Paschat Karma</span>
        </div>
        <div className="grid grid-cols-5 gap-3">
          {therapies.map((t, i) => (
            <HoverCard key={t.key}>
              <HoverCardTrigger asChild>
                <div className="group cursor-pointer rounded-lg border bg-card p-3 text-center shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
                  <t.icon className="mx-auto h-5 w-5 text-[hsl(var(--saffron))] group-hover:scale-110 transition" />
                  <div className="mt-2 text-xs font-medium">{t.name}</div>
                  <div className="mt-1 text-[10px] text-muted-foreground">{i < 3 ? "In Progress" : i === 3 ? "Next" : "Pending"}</div>
                </div>
              </HoverCardTrigger>
              <HoverCardContent align="center" className="w-64 text-xs">
                <div className="font-medium text-sm mb-1">{t.name}</div>
                <div className="text-muted-foreground">Purpose: {t.purpose}</div>
                <div className="text-muted-foreground">Benefits: {t.benefits}</div>
                <div className="text-muted-foreground">Precautions: {t.precautions}</div>
              </HoverCardContent>
            </HoverCard>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
