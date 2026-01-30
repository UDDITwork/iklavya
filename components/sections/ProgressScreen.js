"use client";

function generateHeatmap() {
  const data = [];
  for (let w = 0; w < 26; w++) {
    const week = [];
    for (let d = 0; d < 7; d++) {
      week.push(Math.random() > 0.3 ? Math.floor(Math.random() * 4) + 1 : 0);
    }
    data.push(week);
  }
  return data;
}
const heatmap = generateHeatmap();

const leaderboard = [
  { rank: 1, name: 'Aditya Verma', college: 'DTU Delhi', score: 94, change: 0, avatar: 'AV' },
  { rank: 2, name: 'Sneha Patel', college: 'BITS Pilani', score: 91, change: 1, avatar: 'SP' },
  { rank: 3, name: 'Rahul Joshi', college: 'IIT Jodhpur', score: 89, change: -1, avatar: 'RJ' },
  { rank: 4, name: 'Priya Sharma', college: 'MNIT Jaipur', score: 86, change: 2, avatar: 'PS' },
  { rank: 5, name: 'Arjun Singh', college: 'NIT Jaipur', score: 83, change: 0, avatar: 'AS' },
  { rank: 6, name: 'Kavya Reddy', college: 'IIIT Hyderabad', score: 81, change: -2, avatar: 'KR' },
  { rank: 7, name: 'Rohit Meena', college: 'MUJ Jaipur', score: 78, change: 3, avatar: 'RM' },
  { rank: 8, name: 'Ananya Gupta', college: 'IIS University', score: 75, change: 1, avatar: 'AG' },
];

const milestones = [
  { date: 'Jan 5', label: 'First Mock Interview', done: true },
  { date: 'Jan 10', label: 'Resume v1 Complete', done: true },
  { date: 'Jan 15', label: 'DSA Exam - 85%', done: true },
  { date: 'Jan 20', label: 'React Certification', done: true },
  { date: 'Jan 25', label: 'System Design Started', done: true },
  { date: 'Feb 1', label: 'Interview Score 80+', done: false },
  { date: 'Feb 10', label: 'Complete All Courses', done: false },
];

export default function ProgressScreen() {
  const funnel = [
    { stage: 'Courses Started', count: 12, width: 'w-full', color: 'bg-indigo-200' },
    { stage: '50% Completed', count: 9, width: 'w-[75%]', color: 'bg-indigo-400' },
    { stage: '80% Completed', count: 6, width: 'w-[50%]', color: 'bg-indigo-500' },
    { stage: 'Fully Completed', count: 4, width: 'w-[33%]', color: 'bg-indigo-600' },
  ];

  const stats = [
    { label: 'This Week', value: '14 hrs', sub: 'Study time', trend: '+23%', up: true },
    { label: 'Streak', value: '12 days', sub: 'Consecutive', trend: 'Best: 18', up: true },
    { label: 'Interviews', value: '3', sub: 'This month', trend: '+1 vs last', up: true },
    { label: 'Avg Score', value: '76%', sub: 'All exams', trend: '-2%', up: false },
  ];

  return (
    <div className="space-y-5 animate-fade-in">
      {/* Stats Cards */}
      <div className="grid grid-cols-4 gap-4">
        {stats.map((s, i) => (
          <div key={i} className="bg-white rounded-xl shadow-sm p-5 hover:shadow-md transition-shadow">
            <div className="text-xs text-slate-400">{s.label}</div>
            <div className="text-2xl font-bold text-slate-900 mt-1">{s.value}</div>
            <div className="flex items-center justify-between mt-2">
              <span className="text-[10px] text-slate-400">{s.sub}</span>
              <span className={`text-[10px] font-medium ${s.up ? 'text-emerald-600' : 'text-rose-500'}`}>
                {s.up ? '\u25B2' : '\u25BC'} {s.trend}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Heatmap */}
      <div className="bg-white rounded-2xl shadow-sm p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="text-sm font-semibold text-slate-800">Activity Heatmap</div>
          <div className="flex items-center gap-2 text-[10px] text-slate-400">
            <span>Less</span>
            {[0, 1, 2, 3, 4].map(l => (
              <div key={l} className={`w-3 h-3 rounded-sm ${
                l === 0 ? 'bg-slate-100' : l === 1 ? 'bg-emerald-200' : l === 2 ? 'bg-emerald-300' : l === 3 ? 'bg-emerald-500' : 'bg-emerald-700'
              }`} />
            ))}
            <span>More</span>
          </div>
        </div>
        <div className="flex gap-[3px]">
          {heatmap.map((week, wi) => (
            <div key={wi} className="flex flex-col gap-[3px]">
              {week.map((val, di) => (
                <div key={di} className={`w-[14px] h-[14px] rounded-sm transition-colors ${
                  val === 0 ? 'bg-slate-100' : val === 1 ? 'bg-emerald-200' : val === 2 ? 'bg-emerald-300' : val === 3 ? 'bg-emerald-500' : 'bg-emerald-700'
                }`} title={`Week ${wi + 1}, Day ${di + 1}: ${val} activities`} />
              ))}
            </div>
          ))}
        </div>
        <div className="flex gap-6 mt-3 text-[10px] text-slate-400">
          <span>Mon</span><span>Wed</span><span>Fri</span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-5">
        {/* Funnel */}
        <div className="bg-white rounded-2xl shadow-sm p-6">
          <div className="text-sm font-semibold text-slate-800 mb-5">Course Completion Funnel</div>
          <div className="space-y-3 flex flex-col items-center">
            {funnel.map((f, i) => (
              <div key={i} className={`${f.width} ${f.color} rounded-lg py-3 px-4 flex items-center justify-between transition-all hover:opacity-90`}>
                <span className="text-sm text-white font-medium">{f.stage}</span>
                <span className="text-lg font-bold text-white">{f.count}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Milestones */}
        <div className="bg-white rounded-2xl shadow-sm p-6">
          <div className="text-sm font-semibold text-slate-800 mb-5">Skill Improvement Timeline</div>
          <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-slate-200" />
            <div className="space-y-4">
              {milestones.map((m, i) => (
                <div key={i} className="flex items-start gap-4 relative">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 z-10 ${
                    m.done ? 'bg-emerald-500 text-white' : 'bg-slate-200 text-slate-400'
                  }`}>
                    {m.done ? '\u2713' : (i + 1)}
                  </div>
                  <div className="pt-1">
                    <div className={`text-sm font-medium ${m.done ? 'text-slate-800' : 'text-slate-400'}`}>{m.label}</div>
                    <div className="text-[10px] text-slate-400">{m.date}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Leaderboard */}
      <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
        <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between">
          <div className="text-sm font-semibold text-slate-800">Leaderboard</div>
          <div className="text-xs text-slate-400">Updated daily</div>
        </div>
        <table className="w-full">
          <thead>
            <tr className="text-[10px] text-slate-400 uppercase tracking-wide border-b border-slate-100">
              <th className="text-left px-6 py-3 font-medium w-16">Rank</th>
              <th className="text-left px-3 py-3 font-medium">Student</th>
              <th className="text-left px-3 py-3 font-medium">College</th>
              <th className="text-center px-3 py-3 font-medium">Score</th>
              <th className="text-center px-3 py-3 font-medium w-24">Change</th>
            </tr>
          </thead>
          <tbody>
            {leaderboard.map((s, i) => (
              <tr key={i} className={`border-b border-slate-50 hover:bg-slate-50 transition-colors ${s.name === 'Priya Sharma' ? 'bg-indigo-50' : ''}`}>
                <td className="px-6 py-3">
                  <span className={`w-7 h-7 inline-flex items-center justify-center rounded-full text-xs font-bold ${
                    s.rank === 1 ? 'bg-amber-100 text-amber-700' : s.rank === 2 ? 'bg-slate-200 text-slate-600' : s.rank === 3 ? 'bg-orange-100 text-orange-700' : 'text-slate-500'
                  }`}>{s.rank}</span>
                </td>
                <td className="px-3 py-3">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-400 to-violet-500 flex items-center justify-center text-white text-[10px] font-bold">{s.avatar}</div>
                    <span className="text-sm font-medium text-slate-800">{s.name}</span>
                  </div>
                </td>
                <td className="px-3 py-3 text-xs text-slate-500">{s.college}</td>
                <td className="text-center text-sm font-bold text-slate-900">{s.score}</td>
                <td className="text-center">
                  {s.change > 0 ? <span className="text-xs text-emerald-600">{'\u25B2'} {s.change}</span> :
                   s.change < 0 ? <span className="text-xs text-rose-500">{'\u25BC'} {Math.abs(s.change)}</span> :
                   <span className="text-xs text-slate-400">--</span>}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
