import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

export default function ProfileCard() {
  return (
    <Card className="overflow-hidden border-border/60 shadow-sm">
      <CardHeader className="bg-[hsl(var(--sandal))]/15">
        <CardTitle className="flex items-center gap-3">
          <Avatar className="h-12 w-12 ring-2 ring-[hsl(var(--saffron))]/40">
            <AvatarImage src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=256&q=80&auto=format&fit=crop" alt="Patient" />
            <AvatarFallback>PT</AvatarFallback>
          </Avatar>
          <div>
            <div className="text-lg">Aarav Sharma</div>
            <div className="text-xs text-muted-foreground">Age 34 • Male • +91 98765 43210</div>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent className="grid gap-4 p-4 md:grid-cols-3">
        <div className="space-y-2">
          <div className="text-sm font-medium">Current Condition</div>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Chronic stress, irregular sleep, mild digestive discomfort. Recommended Panchakarma course for 14 days.
          </p>
        </div>
        <div className="space-y-2">
          <div className="text-sm font-medium">Dosha Imbalance</div>
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs">
              <span>Vata</span>
              <span>60%</span>
            </div>
            <div className="h-2 rounded-full bg-muted">
              <div className="h-2 w-[60%] rounded-full bg-[hsl(var(--leaf))] transition-all" />
            </div>
            <div className="flex items-center justify-between text-xs">
              <span>Pitta</span>
              <span>40%</span>
            </div>
            <div className="h-2 rounded-full bg-muted">
              <div className="h-2 w-[40%] rounded-full bg-[hsl(var(--saffron))] transition-all" />
            </div>
            <div className="flex items-center justify-between text-xs">
              <span>Kapha</span>
              <span>30%</span>
            </div>
            <div className="h-2 rounded-full bg-muted">
              <div className="h-2 w-[30%] rounded-full bg-[hsl(var(--marigold))] transition-all" />
            </div>
          </div>
        </div>
        <div className="space-y-2">
          <div className="text-sm font-medium">Therapies</div>
          <div className="flex flex-wrap gap-2">
            <Badge className="bg-[hsl(var(--saffron))] text-white border-0">Virechana</Badge>
            <Badge variant="secondary" className="bg-[hsl(var(--leaf))]/15 text-[hsl(var(--leaf))] border-0">Basti</Badge>
            <Badge variant="secondary" className="bg-[hsl(var(--sandal))]/15 text-[hsl(var(--sandal))] border-0">Nasya</Badge>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
