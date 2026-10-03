"use client";

const alerts = [
  { id: 1, title: 'Water quality alert', severity: 'Critical', value: 'pH 5.8' },
  { id: 2, title: 'Flow rate drop', severity: 'Warning', value: '42%' },
  { id: 3, title: 'Chlorine low', severity: 'Moderate', value: '0.6 mg/L' },
];

export default function Page() {
  return (
    <main className="h-screen w-full bg-slate-950 text-white">
      <div className="grid h-full grid-cols-1 lg:grid-cols-[320px_1fr]">
        <aside className="border-r border-slate-800 bg-slate-900 p-4">
          <h2 className="mb-6 text-xl font-bold">Water Health Alerts</h2>
          <div className="space-y-4">
            {alerts.map((alert) => (
              <div
                key={alert.id}
                className="rounded-xl border border-slate-700 bg-slate-800 p-4"
              >
                <div className="flex items-center justify-between gap-2">
                  <span className="text-sm font-medium">{alert.title}</span>
                  <span className="rounded-full bg-red-500/20 px-2 py-1 text-xs text-red-300">
                    {alert.severity}
                  </span>
                </div>
                <p className="mt-3 text-lg font-semibold">{alert.value}</p>
              </div>
            ))}
          </div>
        </aside>

        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(34,211,238,0.15),transparent_35%),linear-gradient(135deg,#020617,#0f172a_40%,#111827)]" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(148,163,184,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.08)_1px,transparent_1px)] bg-[size:40px_40px]" />
          <div className="relative z-10 flex h-full items-center justify-center">
            <div className="rounded-3xl border border-slate-700 bg-slate-900/60 p-8 shadow-2xl backdrop-blur-sm">
              <p className="text-xs uppercase tracking-[0.3em] text-cyan-400">Live map</p>
              <h1 className="mt-3 text-3xl font-bold">Water network overview</h1>
              <div className="mt-8 grid grid-cols-3 gap-6 text-center">
                <div className="rounded-xl bg-slate-800 p-4">
                  <p className="text-xs text-slate-400">Reservoir</p>
                  <p className="mt-1 text-xl font-semibold">96%</p>
                </div>
                <div className="rounded-xl bg-slate-800 p-4">
                  <p className="text-xs text-slate-400">Flow</p>
                  <p className="mt-1 text-xl font-semibold">42 m³/s</p>
                </div>
                <div className="rounded-xl bg-slate-800 p-4">
                  <p className="text-xs text-slate-400">Status</p>
                  <p className="mt-1 text-xl font-semibold text-emerald-400">Healthy</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
