/**
 * Smart-building performance pillars — command-center strip for Yuva Yodha Challenge 02.
 */
import React from "react";
import { Zap, Wind, Droplets, Leaf, LayoutGrid } from "lucide-react";

export interface PerformancePillarsMetrics {
  energy_label?: string;
  iaq_label?: string;
  water_label?: string;
  carbon_label?: string;
  space_label?: string;
}

const DEFAULTS = {
  energy_label: "Solar + peak shave · 32% load reduction",
  iaq_label: "IAQ nominal · CO₂-aware ventilation",
  water_label: "Cooling-tower aware · metering ready",
  carbon_label: "Scope-2 abatement · plug-load control",
  space_label: "58% zone utilisation · daylight harvest",
};

const ITEMS = [
  { key: "energy_label" as const, name: "Energy", sub: "Efficiency & peak", icon: Zap, color: "from-amber-50 to-orange-50 border-amber-200 text-amber-950" },
  { key: "iaq_label" as const, name: "Indoor air", sub: "Comfort & IAQ", icon: Wind, color: "from-sky-50 to-cyan-50 border-sky-200 text-sky-950" },
  { key: "water_label" as const, name: "Water", sub: "Cooling systems", icon: Droplets, color: "from-blue-50 to-indigo-50 border-blue-200 text-blue-950" },
  { key: "carbon_label" as const, name: "Carbon", sub: "Operations footprint", icon: Leaf, color: "from-emerald-50 to-green-50 border-emerald-200 text-emerald-950" },
  { key: "space_label" as const, name: "Space", sub: "Occupancy & daylight", icon: LayoutGrid, color: "from-violet-50 to-slate-50 border-violet-100 text-violet-950" },
];

export const PerformancePillarsStrip: React.FC<{ metrics?: PerformancePillarsMetrics }> = ({ metrics }) => {
  const m = { ...DEFAULTS, ...metrics };
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-2">
      {ITEMS.map(({ key, name, sub, icon: Icon, color }) => (
        <div key={key} className={`rounded-xl border bg-gradient-to-br px-3 py-2.5 ${color}`}>
          <div className="flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-wide opacity-90">
            <Icon className="w-3.5 h-3.5" />
            {name}
          </div>
          <p className="text-[10px] opacity-55 mt-0.5">{sub}</p>
          <p className="text-xs font-medium mt-1.5 leading-snug">{m[key]}</p>
        </div>
      ))}
    </div>
  );
};
