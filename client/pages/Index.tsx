import DashboardLayout from "@/components/layout/DashboardLayout";
import ProfileCard from "@/components/dashboard/ProfileCard";
import TherapyTimeline from "@/components/dashboard/TherapyTimeline";
import ProgressRing from "@/components/dashboard/ProgressRing";
import MetricGraph from "@/components/dashboard/MetricGraph";
import MoodTracker from "@/components/dashboard/MoodTracker";
import JournalFeed from "@/components/dashboard/JournalFeed";
import RecommendationsPanel from "@/components/dashboard/RecommendationsPanel";
import { Card, CardContent } from "@/components/ui/card";

export default function Index() {
  return (
    <DashboardLayout rightPanel={<RecommendationsPanel />}>
      <div className="grid gap-4 md:grid-cols-3">
        <div className="md:col-span-2"><ProfileCard /></div>
        <Card className="border-border/60 shadow-sm">
          <CardContent className="flex items-center justify-center p-4">
            <ProgressRing value={68} label="Overall Completion" />
          </CardContent>
        </Card>
      </div>
      <TherapyTimeline />
      <div className="grid gap-4 md:grid-cols-2">
        <MetricGraph />
        <div className="grid gap-4">
          <MoodTracker />
          <JournalFeed />
        </div>
      </div>
    </DashboardLayout>
  );
}
