import { useEffect, useState } from "react";

export default function ProgressRing({ value, size = 120, stroke = 10, label }: { value: number; size?: number; stroke?: number; label?: string }) {
  const radius = (size - stroke) / 2;
  const circumference = 2 * Math.PI * radius;
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const t = setTimeout(() => setProgress(value), 50);
    return () => clearTimeout(t);
  }, [value]);

  const dash = circumference - (progress / 100) * circumference;

  return (
    <div className="relative flex flex-col items-center justify-center">
      <svg width={size} height={size} className="rotate-[-90deg]">
        <circle cx={size / 2} cy={size / 2} r={radius} stroke="hsl(var(--muted-foreground) / 0.15)" strokeWidth={stroke} fill="transparent" />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="hsl(var(--saffron))"
          strokeWidth={stroke}
          strokeLinecap="round"
          fill="transparent"
          strokeDasharray={circumference}
          strokeDashoffset={dash}
          className="transition-[stroke-dashoffset] duration-700 ease-out drop-shadow-sm"
        />
      </svg>
      <div className="absolute text-center">
        <div className="text-3xl font-bold">{Math.round(progress)}%</div>
        {label ? <div className="text-xs text-muted-foreground mt-1">{label}</div> : null}
      </div>
    </div>
  );
}
