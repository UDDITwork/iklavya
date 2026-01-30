"use client";

export default function AnalyticsPlan() {
  const events = [
    { feature: 'Resume Builder', items: [
      { event: 'resume_started', trigger: 'User begins new resume', payload: '{template_id, source_page}' },
      { event: 'resume_section_completed', trigger: 'Section form submitted', payload: '{section_name, ai_suggestions_used}' },
      { event: 'resume_downloaded', trigger: 'PDF export completed', payload: '{format, version_number}' },
    ]},
    { feature: 'Interview Practice', items: [
      { event: 'interview_session_started', trigger: 'Session initialized', payload: '{role_type, difficulty}' },
      { event: 'interview_question_answered', trigger: 'Response submitted', payload: '{question_id, response_duration_ms}' },
      { event: 'interview_report_viewed', trigger: 'Post-session report opened', payload: '{session_id, score}' },
    ]},
    { feature: 'Mini Exams', items: [
      { event: 'exam_started', trigger: 'Exam attempt begins', payload: '{module_id, question_count}' },
      { event: 'exam_question_flagged', trigger: 'Question flagged for review', payload: '{question_id, reason}' },
      { event: 'exam_completed', trigger: 'All answers submitted', payload: '{score, time_taken_ms, flagged_count}' },
    ]},
    { feature: 'Job Matching', items: [
      { event: 'job_search_performed', trigger: 'Filter/search applied', payload: '{filters, result_count}' },
      { event: 'job_detail_viewed', trigger: 'Job card expanded', payload: '{job_id, match_score}' },
      { event: 'job_application_submitted', trigger: 'Apply button clicked', payload: '{job_id, resume_version}' },
    ]},
  ];

  const kpis = [
    { name: 'Feature Adoption Rate', value: '45%', desc: 'Percentage of registered students who complete at least one action in each feature within their first 7 days.' },
    { name: 'Session Depth', value: '12+', desc: 'Average number of interactions per session across all features.' },
    { name: 'Skill Improvement', value: '18pts', desc: 'Average percentage point improvement in mock interview scores over 30 days of active usage.' },
    { name: 'Application Conversion', value: '25%', desc: 'Improvement in ratio of job applications submitted to interview callbacks received over baseline.' },
  ];

  return (
    <div className="space-y-8 animate-fade-in">
      <section className="bg-gradient-to-br from-white to-slate-50/80 shadow-sm rounded-2xl p-8">
        <h2 className="text-2xl font-bold text-slate-900 mb-2">Metrics and Analytics Plan</h2>
        <div className="h-1 w-20 bg-gradient-to-r from-indigo-600 to-violet-500 rounded-full mb-8" />
        <p className="text-sm leading-relaxed text-slate-600 max-w-4xl mb-8">
          Data-driven decision making requires intentional instrumentation from the start. Iklavya&apos;s analytics framework captures user behavior at three levels: engagement events that measure feature adoption, outcome events that track skill improvement, and system events that monitor performance and reliability. All tracking respects user privacy preferences and complies with Indian data protection regulations.
        </p>

        <h3 className="text-lg font-semibold text-slate-800 mb-4">Event Tracking Framework</h3>
        <div className="space-y-6 mb-10">
          {events.map((group, gi) => (
            <div key={gi}>
              <div className="text-sm font-medium text-slate-700 mb-2">{group.feature}</div>
              <div className="rounded-xl overflow-hidden">
                {group.items.map((item, i) => (
                  <div key={i} className={`flex items-center gap-4 px-4 py-3 text-sm ${i % 2 === 0 ? 'bg-slate-50' : 'bg-white'}`}>
                    <code className="text-xs font-mono text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded w-56 flex-shrink-0">{item.event}</code>
                    <span className="text-slate-600 flex-1">{item.trigger}</span>
                    <code className="text-[11px] font-mono text-slate-400">{item.payload}</code>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* KPIs */}
      <section className="grid grid-cols-4 gap-5">
        {kpis.map((k, i) => (
          <div key={i} className="bg-gradient-to-br from-slate-50 to-white shadow-sm rounded-xl p-6 transition-all duration-300 hover:shadow-md">
            <div className="text-xs font-medium text-slate-500 uppercase tracking-wide mb-2">{k.name}</div>
            <div className="text-3xl font-bold gradient-text mb-2">{k.value}</div>
            <div className="text-xs text-slate-400 leading-relaxed">{k.desc}</div>
          </div>
        ))}
      </section>

      {/* Admin Dashboard Wireframe */}
      <section className="bg-gradient-to-br from-white to-slate-50/80 shadow-sm rounded-2xl p-8">
        <h3 className="text-lg font-semibold text-slate-800 mb-6">Admin Analytics Dashboard (Wireframe)</h3>
        <div className="border-2 border-dashed border-slate-200 rounded-xl bg-slate-50 p-6 space-y-4">
          {/* Top Stats */}
          <div className="grid grid-cols-4 gap-4">
            {['Total Users', 'Active Today', 'Exams Taken', 'Applications'].map((s, i) => (
              <div key={i} className="bg-white rounded-lg p-4 border border-slate-200">
                <div className="w-20 h-2.5 bg-slate-200 rounded mb-2" />
                <div className="w-16 h-6 bg-slate-300 rounded mb-1" />
                <div className="w-12 h-2 bg-slate-200 rounded" />
              </div>
            ))}
          </div>
          {/* Chart Area */}
          <div className="bg-white rounded-lg p-4 border border-slate-200 h-48 flex items-end gap-1 px-8">
            {[40, 55, 45, 60, 75, 65, 80, 70, 85, 90, 78, 95].map((h, i) => (
              <div key={i} className="flex-1 bg-indigo-200 rounded-t" style={{ height: `${h}%` }} />
            ))}
          </div>
          {/* Bottom Row */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white rounded-lg p-4 border border-slate-200 h-32">
              <div className="w-32 h-3 bg-slate-200 rounded mb-4" />
              <div className="space-y-2">
                {[80, 65, 50, 30].map((w, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <div className="w-16 h-2 bg-slate-200 rounded" />
                    <div className="h-2.5 bg-indigo-200 rounded-full" style={{ width: `${w}%` }} />
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white rounded-lg p-4 border border-slate-200 h-32">
              <div className="w-24 h-3 bg-slate-200 rounded mb-4" />
              <div className="space-y-2">
                {[1,2,3,4].map(i => (
                  <div key={i} className="flex items-center gap-2">
                    <div className="w-6 h-6 bg-slate-200 rounded-full" />
                    <div className="w-32 h-2 bg-slate-200 rounded" />
                    <div className="w-12 h-2 bg-slate-100 rounded ml-auto" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
