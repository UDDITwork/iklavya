"use client";
import { useState } from 'react';

const skills = [
  { name: 'React.js', yours: 82, market: 75, percentile: 78 },
  { name: 'Python', yours: 68, market: 80, percentile: 42 },
  { name: 'Data Structures', yours: 90, market: 85, percentile: 88 },
  { name: 'SQL', yours: 55, market: 70, percentile: 30 },
  { name: 'System Design', yours: 45, market: 65, percentile: 25 },
  { name: 'Node.js', yours: 78, market: 72, percentile: 70 },
  { name: 'Machine Learning', yours: 60, market: 75, percentile: 38 },
  { name: 'Communication', yours: 72, market: 80, percentile: 55 },
  { name: 'Git / DevOps', yours: 85, market: 70, percentile: 82 },
  { name: 'Problem Solving', yours: 88, market: 82, percentile: 85 },
];

const courses = [
  { name: 'DSA Masterclass', progress: 92, color: 'bg-emerald-500' },
  { name: 'React Advanced', progress: 78, color: 'bg-indigo-500' },
  { name: 'System Design 101', progress: 45, color: 'bg-amber-500' },
  { name: 'Python for ML', progress: 60, color: 'bg-violet-500' },
  { name: 'SQL Deep Dive', progress: 33, color: 'bg-rose-500' },
  { name: 'Communication Skills', progress: 85, color: 'bg-cyan-500' },
  { name: 'Node.js Backend', progress: 70, color: 'bg-emerald-500' },
  { name: 'Cloud & AWS', progress: 20, color: 'bg-amber-500' },
  { name: 'Docker & K8s', progress: 55, color: 'bg-indigo-500' },
  { name: 'Aptitude & Reasoning', progress: 88, color: 'bg-violet-500' },
  { name: 'Git & GitHub', progress: 95, color: 'bg-emerald-500' },
  { name: 'Interview Prep', progress: 40, color: 'bg-rose-500' },
];

function CircularProgress({ value, size = 160, strokeWidth = 12, label }) {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (value / 100) * circumference;
  const color = value >= 75 ? '#10B981' : value >= 50 ? '#F59E0B' : '#EF4444';

  return (
    <div className="relative flex items-center justify-center" style={{ width: size, height: size }}>
      <svg width={size} height={size} className="-rotate-90">
        <circle cx={size/2} cy={size/2} r={radius} fill="none" stroke="#e2e8f0" strokeWidth={strokeWidth} />
        <circle cx={size/2} cy={size/2} r={radius} fill="none" stroke={color} strokeWidth={strokeWidth}
          strokeDasharray={circumference} strokeDashoffset={offset} strokeLinecap="round"
          className="transition-all duration-1000" />
      </svg>
      <div className="absolute text-center">
        <div className="text-3xl font-bold text-slate-900">{value}</div>
        <div className="text-xs text-slate-400">{label}</div>
      </div>
    </div>
  );
}

export default function DashboardScreen() {
  const [sortKey, setSortKey] = useState('name');
  const [sortDir, setSortDir] = useState('asc');

  const sorted = [...skills].sort((a, b) => {
    const av = a[sortKey], bv = b[sortKey];
    if (typeof av === 'string') return sortDir === 'asc' ? av.localeCompare(bv) : bv.localeCompare(av);
    return sortDir === 'asc' ? av - bv : bv - av;
  });

  const handleSort = (key) => {
    if (sortKey === key) setSortDir(d => d === 'asc' ? 'desc' : 'asc');
    else { setSortKey(key); setSortDir('asc'); }
  };

  const SortIcon = ({ col }) => (
    <span className="ml-1 text-slate-300">{sortKey === col ? (sortDir === 'asc' ? '\u25B2' : '\u25BC') : '\u25B4'}</span>
  );

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Top Row: Score Ring + Stats */}
      <div className="grid grid-cols-4 gap-5">
        <div className="col-span-1 bg-white rounded-2xl shadow-sm p-6 flex flex-col items-center justify-center">
          <CircularProgress value={72} label="Readiness" />
          <div className="mt-3 text-xs text-slate-500">Top 35% of students</div>
        </div>
        <div className="col-span-3 grid grid-cols-3 gap-4">
          {[
            { label: 'Courses Completed', value: '7 / 12', trend: '+2 this week', up: true },
            { label: 'Mock Interviews', value: '14', trend: '+3 this month', up: true },
            { label: 'Certifications', value: '4', trend: '1 pending', up: false },
            { label: 'Resume Score', value: '86/100', trend: '+12 since v1', up: true },
            { label: 'Job Applications', value: '23', trend: '5 callbacks', up: true },
            { label: 'Avg Exam Score', value: '74%', trend: '-2% vs last', up: false },
          ].map((s, i) => (
            <div key={i} className="bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow">
              <div className="text-xs text-slate-400 mb-1">{s.label}</div>
              <div className="text-2xl font-bold text-slate-900">{s.value}</div>
              <div className={`text-xs mt-1 flex items-center gap-1 ${s.up ? 'text-emerald-600' : 'text-rose-500'}`}>
                <span>{s.up ? '\u25B2' : '\u25BC'}</span> {s.trend}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Skills Table + Bar Chart */}
      <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
        <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between">
          <div className="font-semibold text-slate-900">Skills Comparison</div>
          <div className="flex items-center gap-4 text-xs">
            <span className="flex items-center gap-1"><span className="w-3 h-3 rounded bg-indigo-500 inline-block" /> Your Score</span>
            <span className="flex items-center gap-1"><span className="w-3 h-3 rounded bg-slate-300 inline-block" /> Market Avg</span>
          </div>
        </div>
        <table className="w-full">
          <thead>
            <tr className="text-xs text-slate-500 border-b border-slate-100">
              <th className="text-left px-6 py-3 font-medium cursor-pointer hover:text-slate-700" onClick={() => handleSort('name')}>Skill<SortIcon col="name" /></th>
              <th className="text-center px-3 py-3 font-medium cursor-pointer hover:text-slate-700" onClick={() => handleSort('yours')}>Your Score<SortIcon col="yours" /></th>
              <th className="text-center px-3 py-3 font-medium cursor-pointer hover:text-slate-700" onClick={() => handleSort('market')}>Market Req<SortIcon col="market" /></th>
              <th className="text-center px-3 py-3 font-medium">Gap</th>
              <th className="px-3 py-3 font-medium w-64">Comparison</th>
              <th className="text-center px-3 py-3 font-medium cursor-pointer hover:text-slate-700" onClick={() => handleSort('percentile')}>Percentile<SortIcon col="percentile" /></th>
            </tr>
          </thead>
          <tbody>
            {sorted.map((s, i) => {
              const gap = s.yours - s.market;
              const gapColor = gap >= 0 ? 'text-emerald-600' : 'text-rose-500';
              return (
                <tr key={i} className="border-b border-slate-50 hover:bg-slate-50 transition-colors">
                  <td className="px-6 py-3 text-sm font-medium text-slate-800">{s.name}</td>
                  <td className="text-center text-sm font-semibold text-indigo-600">{s.yours}</td>
                  <td className="text-center text-sm text-slate-500">{s.market}</td>
                  <td className={`text-center text-sm font-medium ${gapColor}`}>{gap > 0 ? `+${gap}` : gap}</td>
                  <td className="px-3 py-3">
                    <div className="flex items-center gap-1 h-5">
                      <div className="flex-1 h-3 bg-slate-100 rounded-full relative overflow-hidden">
                        <div className="absolute left-0 top-0 h-full bg-indigo-500 rounded-full" style={{ width: `${s.yours}%` }} />
                      </div>
                      <div className="flex-1 h-3 bg-slate-100 rounded-full relative overflow-hidden">
                        <div className="absolute left-0 top-0 h-full bg-slate-300 rounded-full" style={{ width: `${s.market}%` }} />
                      </div>
                    </div>
                  </td>
                  <td className="text-center">
                    <span className={`text-xs font-medium px-2 py-1 rounded-full ${
                      s.percentile >= 70 ? 'bg-emerald-100 text-emerald-700' :
                      s.percentile >= 40 ? 'bg-amber-100 text-amber-700' :
                      'bg-rose-100 text-rose-700'
                    }`}>Top {100 - s.percentile}%</span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Course Completion Grid */}
      <div className="bg-white rounded-2xl shadow-sm p-6">
        <div className="font-semibold text-slate-900 mb-4">Course Progress</div>
        <div className="grid grid-cols-4 gap-4">
          {courses.map((c, i) => (
            <div key={i} className="rounded-xl border border-slate-100 p-4 hover:shadow-md transition-all group">
              <div className="flex items-center justify-between mb-3">
                <div className="text-sm font-medium text-slate-800 group-hover:text-indigo-600 transition-colors">{c.name}</div>
                <div className={`text-xs font-bold ${c.progress >= 80 ? 'text-emerald-600' : c.progress >= 50 ? 'text-amber-600' : 'text-rose-500'}`}>{c.progress}%</div>
              </div>
              <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                <div className={`h-full ${c.color} rounded-full transition-all duration-700`} style={{ width: `${c.progress}%` }} />
              </div>
              <div className="text-[10px] text-slate-400 mt-2">
                {c.progress >= 90 ? 'Almost done' : c.progress >= 70 ? 'Good progress' : c.progress >= 40 ? 'In progress' : 'Just started'}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
