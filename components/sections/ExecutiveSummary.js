"use client";

export default function ExecutiveSummary() {
  return (
    <div className="space-y-8 animate-fade-in">
      <section className="bg-gradient-to-br from-white to-slate-50/80 shadow-sm rounded-2xl p-8">
        <h2 className="text-2xl font-bold text-slate-900 mb-2">Executive Summary</h2>
        <div className="h-1 w-20 bg-gradient-to-r from-indigo-600 to-violet-500 rounded-full mb-8" />

        <div className="max-w-4xl space-y-5">
          <p className="text-sm leading-relaxed text-slate-600">
            Iklavya is an AI-powered career readiness platform designed to bridge the gap between academic learning and industry expectations for Indian college students. Built on a modern stack combining Next.js 14 for the frontend and FastAPI with LangChain for intelligent backend services, the platform delivers personalized career preparation through four integrated modules: AI-assisted resume building, real-time mock interview practice with WebRTC video analysis, module-wise mini examinations with RAG-based evaluation, and embedding-powered job matching.
          </p>
          <p className="text-sm leading-relaxed text-slate-600">
            The platform targets students across engineering colleges in Rajasthan and neighbouring states, starting with a pilot at MNIT Jaipur and expanding to affiliated institutions. The core business objective is to achieve a 40% improvement in student placement readiness scores within six months of active usage. By combining structured assessments with AI-driven feedback loops, Iklavya addresses the critical gap where students have theoretical knowledge but lack the practical interview skills, professional documentation, and self-awareness that employers expect.
          </p>
          <p className="text-sm leading-relaxed text-slate-600">
            Success will be measured across three dimensions: engagement metrics (daily active users exceeding 60% of registered students), outcome metrics (measurable improvement in mock interview scores over a 90-day period), and placement metrics (15% increase in campus placement conversion rates for participating colleges in the 2026-27 placement season).
          </p>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="grid grid-cols-4 gap-5">
        {[
          { label: 'Target Users', value: '10,000+', sub: 'First year' },
          { label: 'Placement Improvement', value: '15%', sub: 'Conversion rate' },
          { label: 'Engagement Goal', value: '60%', sub: 'DAU / MAU' },
          { label: 'Colleges', value: '25+', sub: 'By end of 2026' },
        ].map((m, i) => (
          <div key={i} className="bg-gradient-to-br from-slate-50 to-white shadow-sm rounded-xl p-6 transition-all duration-300 hover:shadow-md">
            <div className="text-xs font-medium text-slate-500 uppercase tracking-wide mb-2">{m.label}</div>
            <div className="text-3xl font-bold gradient-text mb-1">{m.value}</div>
            <div className="text-xs text-slate-400">{m.sub}</div>
          </div>
        ))}
      </section>

      {/* Project Timeline */}
      <section className="bg-gradient-to-br from-white to-slate-50/80 shadow-sm rounded-2xl p-8">
        <h3 className="text-lg font-semibold text-slate-800 mb-6">Project Timeline</h3>
        <div className="space-y-4">
          <div className="flex rounded-xl overflow-hidden h-12 shadow-inner">
            {[
              { label: 'Foundation', period: 'Feb-Mar', color: 'bg-indigo-500', width: 'w-[25%]' },
              { label: 'Core Features', period: 'Apr-May', color: 'bg-violet-500', width: 'w-[25%]' },
              { label: 'Assessment', period: 'Jun', color: 'bg-emerald-500', width: 'w-[12.5%]' },
              { label: 'Intelligence', period: 'Jul', color: 'bg-amber-500', width: 'w-[12.5%]' },
              { label: 'Launch', period: 'Aug', color: 'bg-rose-500', width: 'w-[25%]' },
            ].map((phase, i) => (
              <div key={i} className={`${phase.color} ${phase.width} flex items-center justify-center text-white text-xs font-medium transition-all duration-300 hover:brightness-110 relative group`}>
                <span className="truncate px-2">{phase.label}</span>
                <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-[10px] text-slate-500 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  {phase.period} 2026
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-between text-[10px] text-slate-400 px-1 pt-4">
            <span>Feb 2026</span>
            <span>Apr 2026</span>
            <span>Jun 2026</span>
            <span>Aug 2026</span>
          </div>
        </div>
      </section>
    </div>
  );
}
