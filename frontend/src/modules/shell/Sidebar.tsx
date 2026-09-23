import React from "react";
import { NavLink } from "react-router-dom";
import {
  LayoutDashboard, Thermometer, Building2, Activity,
  Sun, Sparkles, Trophy, Zap,
} from "lucide-react";
import clsx from "clsx";

const NAV = [
  { to: "/dashboard", label: "Command Center", icon: LayoutDashboard },
  { to: "/occupancy", label: "Occupancy HVAC", icon: Thermometer },
  { to: "/digital-twin", label: "ECBC Digital Twin", icon: Building2 },
  { to: "/faults", label: "Fault Detection", icon: Activity },
  { to: "/grid-solar", label: "Solar & Grid", icon: Sun },
  { to: "/xai", label: "Explainable AI", icon: Sparkles },
  { to: "/tenant", label: "Tenant Engagement", icon: Trophy },
];

export const Sidebar: React.FC = () => (
  <aside className="hidden md:flex w-60 flex-col border-r border-slate-200 bg-white">
    <div className="h-14 flex items-center gap-2.5 px-4 border-b border-slate-100">
      <div className="w-8 h-8 rounded-lg bg-emerald-600 text-white flex items-center justify-center">
        <Zap className="w-4 h-4" />
      </div>
      <div>
        <p className="text-sm font-semibold text-slate-900 leading-tight">Unified BMS</p>
        <p className="text-[10px] text-slate-500 uppercase tracking-wider">Smart Buildings</p>
      </div>
    </div>
    <nav className="flex-1 p-3 space-y-0.5 overflow-y-auto">
      {NAV.map(({ to, label, icon: Icon }) => (
        <NavLink
          key={to}
          to={to}
          className={({ isActive }) =>
            clsx(
              "flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm transition-colors",
              isActive
                ? "bg-emerald-50 text-emerald-800 font-medium"
                : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
            )
          }
        >
          <Icon className="w-4 h-4 flex-shrink-0" />
          {label}
        </NavLink>
      ))}
    </nav>
    <div className="p-3 border-t border-slate-100">
      <p className="text-[10px] text-slate-400 px-2">Yuva Yodha · Challenge 02</p>
    </div>
  </aside>
);
