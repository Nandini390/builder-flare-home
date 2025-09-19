import { Button } from "@/components/ui/button";

function toCSV(rows: Record<string, any>[]) {
  const headers = Object.keys(rows[0] || {});
  const csv = [headers.join(","), ...rows.map((r) => headers.map((h) => JSON.stringify(r[h] ?? "")).join(","))].join("\n");
  return new Blob([csv], { type: "text/csv;charset=utf-8;" });
}

export default function ReportsDownloader({ rows }: { rows: Record<string, any>[] }) {
  const downloadCSV = () => {
    const blob = toCSV(rows);
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "health-report.csv";
    a.click();
    URL.revokeObjectURL(url);
  };

  const printReport = () => {
    const w = window.open("", "_blank", "noopener,noreferrer");
    if (!w) return;
    w.document.write(`<html><head><title>Health Report</title><style>body{font-family:Inter,system-ui,sans-serif;padding:24px} h1{margin:0 0 12px} table{width:100%;border-collapse:collapse} td,th{border:1px solid #ddd;padding:8px} th{background:#faf7f2}</style></head><body><h1>Patient Health Report</h1><table><thead><tr>${Object.keys(rows[0]||{}).map(h=>`<th>${h}</th>`).join("")}</tr></thead><tbody>${rows.map(r=>`<tr>${Object.values(r).map(v=>`<td>${String(v)}</td>`).join("")}</tr>`).join("")}</tbody></table></body></html>`);
    w.document.close();
    w.focus();
    w.print();
  };

  return (
    <div className="flex gap-2">
      <Button size="sm" onClick={downloadCSV} className="bg-[hsl(var(--leaf))] text-white hover:opacity-90">Download CSV</Button>
      <Button size="sm" variant="secondary" onClick={printReport} className="bg-[hsl(var(--saffron))]/10 text-[hsl(var(--saffron))] border-0 hover:bg-[hsl(var(--saffron))]/20">Print Report</Button>
    </div>
  );
}
