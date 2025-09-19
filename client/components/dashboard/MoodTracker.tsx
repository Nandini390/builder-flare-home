import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";

const EMOJIS = ["😞", "😟", "😐", "🙂", "😄"];

export default function MoodTracker() {
  const [mood, setMood] = useState(3);
  return (
    <Card className="border-border/60 shadow-sm">
      <CardHeader className="pb-2">
        <CardTitle>Mood Tracker</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center justify-between text-2xl">
          {EMOJIS.map((e, i) => (
            <button
              key={i}
              className={`transition hover:scale-110 ${i + 1 === mood ? "drop-shadow" : "opacity-70"}`}
              onClick={() => setMood(i + 1)}
            >
              {e}
            </button>
          ))}
        </div>
        <Slider value={[mood]} min={1} max={5} step={1} onValueChange={(v) => setMood(v[0])} className="mt-2" />
        <div className="text-xs text-muted-foreground">Tap an emoji or use the slider to log mood</div>
      </CardContent>
    </Card>
  );
}
