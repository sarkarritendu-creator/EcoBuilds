import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Building2, Loader2, Zap } from "lucide-react";
import { useAuth } from "../contexts/AuthContext";

export const LoginPage: React.FC = () => {
  const [email, setEmail] = useState("facility@demo.com");
  const [password, setPassword] = useState("demo123");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);
    try {
      await login(email, password);
      navigate("/dashboard", { replace: true });
    } catch (err: any) {
      setError(err.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-emerald-50/40 to-slate-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-emerald-600 text-white mb-4 shadow-lg shadow-emerald-600/25">
            <Building2 className="w-7 h-7" />
          </div>
          <h1 className="text-2xl font-semibold text-slate-900 tracking-tight">Unified BMS</h1>
          <p className="text-slate-500 mt-1 text-sm">Building Energy Intelligence Platform</p>
          <p className="text-xs text-slate-400 mt-2 flex items-center justify-center gap-1">
            <Zap className="w-3 h-3" /> Energy · Comfort · Grid · Operations
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl shadow-slate-200/60 border border-slate-100 p-8">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1.5">Email</label>
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500/30 focus:border-emerald-500" required />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1.5">Password</label>
              <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}
                className="w-full rounded-xl border border-slate-200 px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-emerald-500/30 focus:border-emerald-500" required />
            </div>
            {error && <div className="rounded-xl bg-red-50 border border-red-100 px-4 py-3 text-sm text-red-700">{error}</div>}
            <button type="submit" disabled={loading}
              className="w-full flex items-center justify-center gap-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 disabled:opacity-60 text-white font-medium py-2.5 transition shadow-sm">
              {loading && <Loader2 className="w-4 h-4 animate-spin" />}
              {loading ? "Signing in…" : "Sign in"}
            </button>
          </form>
          <div className="mt-6 pt-5 border-t border-slate-100">
            <p className="text-xs text-slate-500 text-center mb-2">Demo accounts</p>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <button type="button" onClick={() => { setEmail("facility@demo.com"); setPassword("demo123"); }}
                className="rounded-lg bg-slate-50 hover:bg-slate-100 px-3 py-2 text-slate-600">Facility Manager</button>
              <button type="button" onClick={() => { setEmail("tenant@demo.com"); setPassword("demo123"); }}
                className="rounded-lg bg-slate-50 hover:bg-slate-100 px-3 py-2 text-slate-600">Tenant</button>
            </div>
          </div>
        </div>
        <p className="text-center text-xs text-slate-400 mt-6">
          Yuva Yodha Energy Tech Hackathon · Schneider Electric · Challenge 02 Smart Buildings
        </p>
      </div>
    </div>
  );
};
