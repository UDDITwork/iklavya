"use client";

function RadarChart() {
  const axes = ['Technical', 'Communication', 'Problem\nSolving', 'Leadership', 'Teamwork', 'Creativity'];
  const student = [85, 65, 78, 55, 72, 60];
  const average = [70, 70, 65, 60, 68, 55];
  const top10 = [95, 88, 90, 82, 85, 80];
  const cx = 150, cy = 150, maxR = 120;

  const getPoint = (index, value) => {
    const angle = (Math.PI * 2 * index) / 6 - Math.PI / 2;
    const r = (value / 100) * maxR;
    return { x: cx + r * Math.cos(angle), y: cy + r * Math.sin(angle) };
  };

  const toPath = (values) => values.map((v, i) => {
    const { x, y } = getPoint(i, v);
    return `${i === 0 ? 'M' : 'L'}${x},${y}`;
  }).join(' ') + ' Z';

  return (
    <svg viewBox="0 0 300 300" className="w-full max-w-xs mx-auto">
      {/* Grid circles */}
      {[20, 40, 60, 80, 100].map(v => (
        <circle key={v} cx={cx} cy={cy} r={(v / 100) * maxR} fill="none" stroke="#e2e8f0" strokeWidth={0.5} />
      ))}
      {/* Axes */}
      {axes.map((_, i) => {
        const { x, y } = getPoint(i, 100);
        return <line key={i} x1={cx} y1={cy} x2={x} y2={y} stroke="#e2e8f0" strokeWidth={0.5} />;
      })}
      {/* Top 10% */}
      <path d={toPath(top10)} fill="rgba(99,102,241,0.08)" stroke="#6366f1" strokeWidth={1} strokeDasharray="4,4" />
      {/* Average */}
      <path d={toPath(average)} fill="rgba(148,163,184,0.1)" stroke="#94a3b8" strokeWidth={1} />
      {/* Student */}
      <path d={toPath(student)} fill="rgba(16,185,129,0.15)" stroke="#10B981" strokeWidth={2} />
      {student.map((v, i) => {
        const { x, y } = getPoint(i, v);
        return <circle key={i} cx={x} cy={y} r={4} fill="#10B981" />;
      })}
      {/* Labels */}
      {axes.map((label, i) => {
        const { x, y } = getPoint(i, 118);
        return (
          <text key={i} x={x} y={y} textAnchor="middle" dominantBaseline="middle" className="text-[9px] fill-slate-500">
            {label.split('\n').map((line, li) => (
              <tspan key={li} x={x} dy={li === 0 ? 0 : 11}>{line}</tspan>
            ))}
          </text>
        );
      })}
    </svg>
  );
}

export default function ScoringScreen() {
  const weights = [
    { name: 'Technical Accuracy', weight: 40, score: 82, color: 'bg-indigo-500' },
    { name: 'Communication', weight: 25, score: 68, color: 'bg-emerald-500' },
    { name: 'Problem Solving', weight: 20, score: 78, color: 'bg-amber-500' },
    { name: 'Confidence', weight: 15, score: 72, color: 'bg-violet-500' },
  ];

  const totalScore = Math.round(weights.reduce((a, w) => a + (w.score * w.weight / 100), 0));

  const history = [
    { date: 'Jan 5', score: 58 },
    { date: 'Jan 12', score: 64 },
    { date: 'Jan 18', score: 61 },
    { date: 'Jan 23', score: 72 },
    { date: 'Jan 29', score: 76 },
  ];
  const maxH = 120;

  return (
    <div className="space-y-5 animate-fade-in">
      {/* Top: Final Score + Weight Breakdown */}
      <div className="grid grid-cols-3 gap-5">
        <div className="bg-white rounded-2xl shadow-sm p-6 flex flex-col items-center justify-center">
          <div className="relative w-32 h-32">
            <svg viewBox="0 0 128 128" className="-rotate-90 w-full h-full">
              <circle cx="64" cy="64" r="56" fill="none" stroke="#f1f5f9" strokeWidth="10" />
              <circle cx="64" cy="64" r="56" fill="none" stroke="#6366F1" strokeWidth="10"
                strokeDasharray={`${2 * Math.PI * 56}`} strokeDashoffset={`${2 * Math.PI * 56 * (1 - totalScore / 100)}`}
                strokeLinecap="round" className="transition-all duration-1000" />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <div className="text-3xl font-bold text-slate-900">{totalScore}</div>
              <div className="text-[10px] text-slate-400">/ 100</div>
            </div>
          </div>
          <div className="text-sm font-semibold text-slate-700 mt-3">Overall Interview Score</div>
          <div className="text-xs text-emerald-600 mt-1">Top 28% of candidates</div>
        </div>

        <div className="col-span-2 bg-white rounded-2xl shadow-sm p-6">
          <div className="text-sm font-semibold text-slate-800 mb-4">Score Composition</div>
          <div className="space-y-4">
            {weights.map((w, i) => (
              <div key={i}>
                <div className="flex items-center justify-between mb-1.5">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium text-slate-700">{w.name}</span>
                    <span className="text-[10px] text-slate-400 bg-slate-100 px-2 py-0.5 rounded-full">{w.weight}% weight</span>
                  </div>
                  <span className="text-sm font-bold text-slate-900">{w.score}/100</span>
                </div>
                <div className="h-3 bg-slate-100 rounded-full overflow-hidden">
                  <div className={`h-full ${w.color} rounded-full transition-all duration-700`} style={{ width: `${w.score}%` }} />
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
            <span className="text-slate-500">Weighted total</span>
            <span className="font-bold text-indigo-600 text-base">{totalScore} points</span>
          </div>
        </div>
      </div>

      {/* Radar + Trend */}
      <div className="grid grid-cols-2 gap-5">
        <div className="bg-white rounded-2xl shadow-sm p-6">
          <div className="text-sm font-semibold text-slate-800 mb-2">Performance Radar</div>
          <div className="flex gap-4 mb-2 text-[10px]">
            <span className="flex items-center gap-1"><span className="w-3 h-0.5 bg-emerald-500 inline-block rounded" /> You</span>
            <span className="flex items-center gap-1"><span className="w-3 h-0.5 bg-slate-400 inline-block rounded" /> Average</span>
            <span className="flex items-center gap-1"><span className="w-3 h-0.5 bg-indigo-400 inline-block rounded border-dashed" /> Top 10%</span>
          </div>
          <RadarChart />
        </div>

        <div className="bg-white rounded-2xl shadow-sm p-6">
          <div className="text-sm font-semibold text-slate-800 mb-4">Score Trend (Last 5 Interviews)</div>
          <div className="flex items-end gap-3 h-32 px-2">
            {history.map((h, i) => (
              <div key={i} className="flex-1 flex flex-col items-center gap-1">
                <div className="text-xs font-bold text-slate-700">{h.score}</div>
                <div className="w-full bg-gradient-to-t from-indigo-500 to-indigo-400 rounded-t-lg transition-all duration-500 hover:from-indigo-600"
                  style={{ height: `${(h.score / 100) * maxH}px` }} />
                <div className="text-[10px] text-slate-400">{h.date}</div>
              </div>
            ))}
          </div>
          <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-2">
            <span className="text-emerald-600 text-xs font-medium">+18 points improvement</span>
            <span className="text-[10px] text-slate-400">over 4 weeks</span>
          </div>
        </div>
      </div>

      {/* Detailed Breakdown Table */}
      <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
        <div className="px-6 py-4 border-b border-slate-100">
          <div className="text-sm font-semibold text-slate-800">Question-wise Breakdown</div>
        </div>
        <table className="w-full">
          <thead>
            <tr className="text-xs text-slate-500 border-b border-slate-100">
              <th className="text-left px-6 py-3 font-medium">Question</th>
              <th className="text-center px-3 py-3 font-medium">Type</th>
              <th className="text-center px-3 py-3 font-medium">Technical</th>
              <th className="text-center px-3 py-3 font-medium">Clarity</th>
              <th className="text-center px-3 py-3 font-medium">Confidence</th>
              <th className="text-center px-3 py-3 font-medium">Total</th>
            </tr>
          </thead>
          <tbody>
            {[
              { q: 'Introduce yourself', type: 'HR', t: 78, cl: 82, co: 75, total: 79 },
              { q: 'Explain REST vs GraphQL', type: 'Technical', t: 90, cl: 72, co: 68, total: 80 },
              { q: 'Describe a system you optimized', type: 'Behavioral', t: 82, cl: 65, co: 72, total: 74 },
              { q: 'Design a URL shortener', type: 'System Design', t: 70, cl: 60, co: 65, total: 66 },
              { q: 'Where do you see yourself in 5 years?', type: 'HR', t: 75, cl: 80, co: 78, total: 78 },
            ].map((r, i) => (
              <tr key={i} className="border-b border-slate-50 hover:bg-slate-50 transition-colors">
                <td className="px-6 py-3 text-sm text-slate-700">{r.q}</td>
                <td className="text-center"><span className={`text-[10px] px-2 py-0.5 rounded-full font-medium ${
                  r.type === 'Technical' ? 'bg-indigo-100 text-indigo-700' :
                  r.type === 'Behavioral' ? 'bg-amber-100 text-amber-700' :
                  r.type === 'System Design' ? 'bg-violet-100 text-violet-700' :
                  'bg-slate-100 text-slate-600'
                }`}>{r.type}</span></td>
                <td className="text-center text-sm font-medium text-slate-700">{r.t}</td>
                <td className="text-center text-sm font-medium text-slate-700">{r.cl}</td>
                <td className="text-center text-sm font-medium text-slate-700">{r.co}</td>
                <td className="text-center text-sm font-bold text-indigo-600">{r.total}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
