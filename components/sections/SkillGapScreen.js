"use client";

const gapData = [
  { skill: 'React.js', current: 82, required: 75, percentile: 78 },
  { skill: 'Python', current: 68, required: 80, percentile: 42 },
  { skill: 'Data Structures', current: 90, required: 85, percentile: 88 },
  { skill: 'SQL & Databases', current: 55, required: 70, percentile: 30 },
  { skill: 'System Design', current: 45, required: 65, percentile: 25 },
  { skill: 'Node.js', current: 78, required: 72, percentile: 70 },
  { skill: 'Machine Learning', current: 60, required: 75, percentile: 38 },
  { skill: 'Communication', current: 72, required: 80, percentile: 55 },
  { skill: 'Git & DevOps', current: 85, required: 70, percentile: 82 },
  { skill: 'Problem Solving', current: 88, required: 82, percentile: 85 },
];

const courses = [
  { skill: 'System Design', name: 'System Design for Interviews', provider: 'Iklavya', duration: '8 hrs', match: 95 },
  { skill: 'SQL', name: 'Advanced SQL Masterclass', provider: 'Iklavya', duration: '6 hrs', match: 90 },
  { skill: 'Python', name: 'Python for Backend Dev', provider: 'Iklavya', duration: '10 hrs', match: 88 },
  { skill: 'ML', name: 'ML Fundamentals', provider: 'Iklavya', duration: '12 hrs', match: 82 },
  { skill: 'Communication', name: 'Interview Communication', provider: 'Iklavya', duration: '4 hrs', match: 78 },
];

const peers = [
  { name: 'Anon #1', college: 'DTU', score: 82, delta: '+5' },
  { name: 'Anon #2', college: 'BITS Pilani', score: 78, delta: '+2' },
  { name: 'You', college: 'MNIT Jaipur', score: 72, delta: '+8' },
  { name: 'Anon #3', college: 'NIT Trichy', score: 70, delta: '+3' },
  { name: 'Anon #4', college: 'IIIT Hyderabad', score: 68, delta: '+6' },
];

export default function SkillGapScreen() {
  return (
    <div className="space-y-5 animate-fade-in">
      {/* Skill Gap Chart */}
      <div className="bg-white rounded-2xl shadow-sm p-6">
        <div className="flex items-center justify-between mb-5">
          <div className="text-sm font-semibold text-slate-800">Skill Gap Analysis</div>
          <div className="flex gap-4 text-xs">
            <span className="flex items-center gap-1.5"><span className="w-3 h-3 rounded bg-indigo-500" /> Your Level</span>
            <span className="flex items-center gap-1.5"><span className="w-3 h-3 rounded bg-slate-300" /> Required</span>
          </div>
        </div>
        <div className="space-y-3">
          {gapData.map((s, i) => {
            const gap = s.current - s.required;
            const status = gap >= 5 ? 'ahead' : gap >= -5 ? 'on-track' : 'behind';
            return (
              <div key={i} className="group hover:bg-slate-50 rounded-lg p-2 -mx-2 transition-colors">
                <div className="flex items-center gap-4">
                  <div className="w-32 text-sm font-medium text-slate-700 flex-shrink-0">{s.skill}</div>
                  <div className="flex-1 relative h-6">
                    {/* Required marker */}
                    <div className="absolute top-0 bottom-0 border-l-2 border-dashed border-slate-300 z-10" style={{ left: `${s.required}%` }}>
                      <div className="absolute -top-5 -translate-x-1/2 text-[9px] text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity">{s.required}</div>
                    </div>
                    {/* Your bar */}
                    <div className="h-full bg-slate-100 rounded-full overflow-hidden">
                      <div className={`h-full rounded-full transition-all duration-500 ${
                        status === 'ahead' ? 'bg-emerald-500' : status === 'on-track' ? 'bg-amber-400' : 'bg-rose-400'
                      }`} style={{ width: `${s.current}%` }} />
                    </div>
                  </div>
                  <div className="w-14 text-right">
                    <span className={`text-xs font-bold ${gap >= 0 ? 'text-emerald-600' : 'text-rose-500'}`}>
                      {gap > 0 ? `+${gap}` : gap}
                    </span>
                  </div>
                  <div className="w-20 text-right">
                    <span className={`text-[10px] font-medium px-2 py-0.5 rounded-full ${
                      status === 'ahead' ? 'bg-emerald-100 text-emerald-700' :
                      status === 'on-track' ? 'bg-amber-100 text-amber-700' :
                      'bg-rose-100 text-rose-700'
                    }`}>{status === 'ahead' ? 'Ahead' : status === 'on-track' ? 'On Track' : 'Behind'}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-5">
        {/* Percentile Rankings */}
        <div className="bg-white rounded-2xl shadow-sm p-6">
          <div className="text-sm font-semibold text-slate-800 mb-4">Percentile Rankings</div>
          <div className="space-y-3">
            {gapData.sort((a, b) => b.percentile - a.percentile).slice(0, 6).map((s, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="w-28 text-xs text-slate-600 flex-shrink-0">{s.skill}</div>
                <div className="flex-1 h-5 bg-slate-100 rounded-full overflow-hidden relative">
                  <div className={`h-full rounded-full ${
                    s.percentile >= 70 ? 'bg-emerald-400' : s.percentile >= 40 ? 'bg-amber-400' : 'bg-rose-400'
                  }`} style={{ width: `${s.percentile}%` }} />
                </div>
                <div className="w-20 text-right text-xs font-semibold text-slate-700">Top {100 - s.percentile}%</div>
              </div>
            ))}
          </div>
        </div>

        {/* Peer Comparison */}
        <div className="bg-white rounded-2xl shadow-sm p-6">
          <div className="text-sm font-semibold text-slate-800 mb-4">Anonymous Peer Comparison</div>
          <table className="w-full">
            <thead>
              <tr className="text-[10px] text-slate-400 uppercase tracking-wide">
                <th className="text-left pb-2 font-medium">#</th>
                <th className="text-left pb-2 font-medium">Student</th>
                <th className="text-left pb-2 font-medium">College</th>
                <th className="text-center pb-2 font-medium">Score</th>
                <th className="text-center pb-2 font-medium">Change</th>
              </tr>
            </thead>
            <tbody>
              {peers.map((p, i) => (
                <tr key={i} className={`${p.name === 'You' ? 'bg-indigo-50 font-semibold' : ''} hover:bg-slate-50 transition-colors`}>
                  <td className="py-2.5 text-sm text-slate-500">{i + 1}</td>
                  <td className="py-2.5 text-sm text-slate-800">{p.name}</td>
                  <td className="py-2.5 text-xs text-slate-500">{p.college}</td>
                  <td className="py-2.5 text-center text-sm font-medium text-slate-800">{p.score}</td>
                  <td className="py-2.5 text-center text-xs text-emerald-600 font-medium">{p.delta}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Recommended Courses */}
      <div className="bg-white rounded-2xl shadow-sm p-6">
        <div className="text-sm font-semibold text-slate-800 mb-4">Recommended Courses (Based on Gaps)</div>
        <div className="grid grid-cols-5 gap-4">
          {courses.map((c, i) => (
            <div key={i} className="border border-slate-100 rounded-xl p-4 hover:shadow-md transition-all group">
              <div className="px-2 py-0.5 bg-rose-100 text-rose-600 rounded text-[10px] font-medium inline-block mb-2">{c.skill} gap</div>
              <div className="text-sm font-medium text-slate-800 group-hover:text-indigo-600 transition-colors mb-1">{c.name}</div>
              <div className="text-xs text-slate-400 mb-3">{c.duration}</div>
              <div className="flex items-center justify-between">
                <div className="text-[10px] text-emerald-600 font-medium">{c.match}% relevant</div>
                <button className="px-2.5 py-1 bg-indigo-600 text-white text-[10px] rounded-lg hover:bg-indigo-700 transition-colors font-medium">Enroll</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
