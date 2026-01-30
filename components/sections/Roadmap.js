"use client";

export default function Roadmap() {
  const sprints = [
    { num: 1, dates: 'Feb 1-14', title: 'Project Foundation', color: 'bg-slate-500', deliverables: ['Next.js project scaffold', 'Authentication (OAuth + OTP)', 'PostgreSQL schema', 'CI/CD pipeline'], deps: null },
    { num: 2, dates: 'Feb 15-28', title: 'Resume Builder MVP', color: 'bg-indigo-500', deliverables: ['Multi-step form', 'PDF generation', 'Template system', 'Basic AI suggestions'], deps: 'Sprint 1' },
    { num: 3, dates: 'Mar 1-14', title: 'Interview Practice MVP', color: 'bg-violet-500', deliverables: ['WebRTC video setup', 'Question bank', 'Recording pipeline', 'Basic analysis'], deps: 'Sprint 1' },
    { num: 4, dates: 'Mar 15-28', title: 'Mini Exams MVP', color: 'bg-emerald-500', deliverables: ['Question engine', 'Exam UI', 'Timer system', 'Basic grading + results'], deps: 'Sprint 1' },
    { num: 5, dates: 'Apr 1-14', title: 'Job Matching Engine', color: 'bg-cyan-500', deliverables: ['Embedding pipeline', 'Vector search', 'Matching algorithm', 'Job listing UI'], deps: 'Sprint 2' },
    { num: 6, dates: 'Apr 15-28', title: 'AI Intelligence Layer', color: 'bg-amber-500', deliverables: ['LangChain integration', 'RAG for exams', 'Advanced interview analysis', 'Resume AI enhancement'], deps: 'Sprints 2-4' },
    { num: 7, dates: 'May 1-14', title: 'Analytics and Admin', color: 'bg-rose-500', deliverables: ['Event tracking', 'Admin dashboard', 'Reporting', 'User management'], deps: 'Sprints 1-6' },
    { num: 8, dates: 'May 15-28', title: 'Polish and Launch', color: 'bg-indigo-500', deliverables: ['Performance optimization', 'Accessibility audit', 'Beta testing', 'Pilot deployment'], deps: 'All sprints' },
  ];

  return (
    <div className="space-y-8 animate-fade-in">
      <section className="bg-gradient-to-br from-white to-slate-50/80 shadow-sm rounded-2xl p-8">
        <h2 className="text-2xl font-bold text-slate-900 mb-2">Implementation Roadmap</h2>
        <div className="h-1 w-20 bg-gradient-to-r from-indigo-600 to-violet-500 rounded-full mb-8" />
        <p className="text-sm leading-relaxed text-slate-600 max-w-4xl mb-8">
          The development plan spans eight two-week sprints from February through May 2026. The first four sprints deliver the minimum viable product with core functionality for the MNIT Jaipur pilot. Sprints five through eight add advanced intelligence features, administrative tools, and scaling infrastructure for multi-college deployment.
        </p>

        {/* Sprint Timeline */}
        <div className="space-y-4">
          {sprints.map((s, i) => (
            <div key={i} className="relative">
              {/* MVP Line */}
              {i === 4 && (
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex-1 h-px bg-gradient-to-r from-rose-300 to-transparent" />
                  <span className="text-xs font-semibold text-rose-500 uppercase tracking-wide px-3 py-1 bg-rose-50 rounded-full">MVP Release</span>
                  <div className="flex-1 h-px bg-gradient-to-l from-rose-300 to-transparent" />
                </div>
              )}
              <div className="flex gap-4 group">
                {/* Sprint Number */}
                <div className={`w-10 h-10 ${s.color} rounded-xl flex items-center justify-center text-white font-bold text-sm flex-shrink-0 transition-all duration-200 group-hover:scale-110`}>
                  {s.num}
                </div>
                {/* Content */}
                <div className="flex-1 bg-gradient-to-br from-slate-50 to-white shadow-sm rounded-xl p-5 transition-all duration-300 group-hover:shadow-md">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <div className="font-semibold text-slate-900">{s.title}</div>
                      <div className="text-xs text-slate-400 mt-0.5">{s.dates}, 2026</div>
                    </div>
                    {s.deps && (
                      <div className="text-[10px] text-slate-400 bg-slate-100 px-2 py-1 rounded">
                        Depends: {s.deps}
                      </div>
                    )}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {s.deliverables.map((d, j) => (
                      <span key={j} className="text-xs px-2.5 py-1 bg-slate-100 text-slate-600 rounded-lg">{d}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* MVP vs Full */}
      <section className="grid grid-cols-2 gap-6">
        <div className="bg-gradient-to-br from-indigo-50 to-white shadow-sm rounded-2xl p-8">
          <div className="text-xs font-semibold uppercase tracking-wide text-indigo-600 mb-2">MVP Scope</div>
          <div className="text-lg font-bold text-slate-900 mb-1">Sprints 1-4</div>
          <div className="text-sm text-slate-500 mb-4">February - March 2026</div>
          <div className="space-y-2">
            {['Authentication and infrastructure', 'AI Resume Builder', 'Interview Practice (WebRTC)', 'Mini Exams with basic grading'].map((item, i) => (
              <div key={i} className="flex items-center gap-2 text-sm text-slate-600">
                <div className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
                {item}
              </div>
            ))}
          </div>
        </div>
        <div className="bg-gradient-to-br from-violet-50 to-white shadow-sm rounded-2xl p-8">
          <div className="text-xs font-semibold uppercase tracking-wide text-violet-600 mb-2">Full Release</div>
          <div className="text-lg font-bold text-slate-900 mb-1">Sprints 5-8</div>
          <div className="text-sm text-slate-500 mb-4">April - May 2026</div>
          <div className="space-y-2">
            {['Job matching engine (vector search)', 'LangChain + RAG intelligence layer', 'Admin dashboard and analytics', 'Performance, accessibility, launch'].map((item, i) => (
              <div key={i} className="flex items-center gap-2 text-sm text-slate-600">
                <div className="w-1.5 h-1.5 rounded-full bg-violet-500" />
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
