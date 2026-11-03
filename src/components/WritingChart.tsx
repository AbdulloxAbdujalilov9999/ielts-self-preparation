"use client";

import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Legend,
  Line,
  LineChart,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { WritingTask } from "@/lib/types";

const COLORS = ["#1d4ed8", "#059669", "#d97706", "#db2777", "#7c3aed"];

export default function WritingChart({ chart }: { chart: NonNullable<WritingTask["chart"]> }) {
  const seriesNames = Array.from(new Set(chart.data.map((d) => d.series).filter(Boolean))) as string[];

  if (chart.kind === "pie") {
    return (
      <div className="h-64 w-full">
        <p className="mb-1 text-sm font-medium text-muted">{chart.caption}</p>
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie data={chart.data} dataKey="value" nameKey="name" outerRadius={90} label>
              {chart.data.map((_, i) => (
                <Cell key={i} fill={COLORS[i % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    );
  }

  const categories = Array.from(new Set(chart.data.map((d) => d.name)));
  const pivoted = categories.map((name) => {
    const row: Record<string, string | number> = { name };
    for (const d of chart.data.filter((d) => d.name === name)) {
      row[d.series ?? "value"] = d.value;
    }
    return row;
  });
  const keys = seriesNames.length > 0 ? seriesNames : ["value"];

  const ChartComponent = chart.kind === "bar" ? BarChart : LineChart;

  return (
    <div className="h-64 w-full">
      <p className="mb-1 text-sm font-medium text-muted">{chart.caption}</p>
      <ResponsiveContainer width="100%" height="100%">
        <ChartComponent data={pivoted}>
          <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
          <XAxis dataKey="name" fontSize={12} />
          <YAxis fontSize={12} />
          <Tooltip />
          {seriesNames.length > 1 && <Legend />}
          {keys.map((key, i) =>
            chart.kind === "bar" ? (
              <Bar key={key} dataKey={key} fill={COLORS[i % COLORS.length]} />
            ) : (
              <Line key={key} type="monotone" dataKey={key} stroke={COLORS[i % COLORS.length]} strokeWidth={2} dot={false} />
            )
          )}
        </ChartComponent>
      </ResponsiveContainer>
    </div>
  );
}
