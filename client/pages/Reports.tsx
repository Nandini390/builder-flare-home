import DashboardLayout from "@/components/layout/DashboardLayout";
import RecommendationsPanel from "@/components/dashboard/RecommendationsPanel";

export default function ReportsPage() {
  return (
    <DashboardLayout rightPanel={<RecommendationsPanel />}>
      <div className="rounded-xl border bg-card/60 p-6 shadow-sm">
        <h1 className="text-xl font-semibold">Reports</h1>
        <p className="mt-2 text-sm text-muted-foreground">This section will show detailed downloadable reports and historical analytics. Ask to expand with specific KPIs or formats.</p>
      </div>
    </DashboardLayout>
  );
}
