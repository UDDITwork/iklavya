"use client";

export default function CompetitiveAnalysis() {
  const features = [
    { name: 'AI Resume Building', iklavya: 100, internshala: 10, linkedin: 20, naukri: 15 },
    { name: 'Real-time Interview Practice', iklavya: 100, internshala: 0, linkedin: 0, naukri: 0 },
    { name: 'Adaptive Assessments', iklavya: 100, internshala: 30, linkedin: 15, naukri: 0 },
    { name: 'Semantic Job Matching', iklavya: 100, internshala: 20, linkedin: 35, naukri: 40 },
    { name: 'Unified Progress Tracking', iklavya: 100, internshala: 0, linkedin: 10, naukri: 0 },
  ];

  const platforms = [
    { key: 'iklavya', label: 'Iklavya', color: 'bg-indigo-500' },
    { key: 'internshala', label: 'Internshala', color: 'bg-emerald-400' },
    { key: 'linkedin', label: 'LinkedIn Learning', color: 'bg-cyan-400' },
    { key: 'naukri', label: 'Naukri Campus', color: 'bg-amber-400' },
  ];

  return (
    <div className="space-y-8 animate-fade-in">
      <section className="bg-gradient-to-br from-white to-slate-50/80 shadow-sm rounded-2xl p-8">
        <h2 className="text-2xl font-bold text-slate-900 mb-2">Competitive Analysis</h2>
        <div className="h-1 w-20 bg-gradient-to-r from-indigo-600 to-violet-500 rounded-full mb-8" />

        <p className="text-sm leading-relaxed text-slate-600 max-w-4xl mb-8">
          The Indian edtech and career preparation market has several established players, but none currently offer the integrated, AI-driven approach that Iklavya proposes. Understanding the competitive landscape helps position Iklavya&apos;s unique value proposition and identify opportunities for differentiation.
        </p>

        <h3 className="text-lg font-semibold text-slate-800 mb-4">Market Landscape</h3>
        <div className="max-w-4xl space-y-5 mb-10">
          <p className="text-sm leading-relaxed text-slate-600">
            Internshala has established itself as the dominant platform for internship discovery among Indian college students, with over 21 million registered users. Its strength lies in its extensive employer network and brand recognition on campuses. However, Internshala&apos;s career preparation offerings are limited to static courses and webinars. The platform does not provide personalized feedback on resumes or interview skills, and its assessment tools are generic rather than adaptive to individual student profiles.
          </p>
          <p className="text-sm leading-relaxed text-slate-600">
            LinkedIn Learning and Naukri Campus offer professional development content and job matching respectively, but both operate as general-purpose platforms. LinkedIn Learning&apos;s content is globally oriented and does not account for the specific dynamics of Indian campus placements, such as the emphasis on aptitude tests, group discussions, and HR rounds that follow technical interviews. Naukri Campus provides job listings but its matching algorithm relies primarily on keyword matching rather than semantic understanding of student capabilities.
          </p>
          <p className="text-sm leading-relaxed text-slate-600">
            Smaller players like PrepInsta and InterviewBit focus on technical preparation through practice problems but lack the holistic approach that combines resume optimization, interview practice, and job matching in a single workflow. Students currently cobble together four or five different tools to prepare for placements, creating a fragmented experience with no unified progress tracking.
          </p>
        </div>
      </section>

      {/* Feature Comparison */}
      <section className="bg-gradient-to-br from-white to-slate-50/80 shadow-sm rounded-2xl p-8">
        <h3 className="text-lg font-semibold text-slate-800 mb-6">Feature Comparison</h3>
        <div className="flex gap-4 mb-6 flex-wrap">
          {platforms.map(p => (
            <div key={p.key} className="flex items-center gap-2 text-xs">
              <div className={`w-3 h-3 rounded ${p.color}`} />
              <span className="text-slate-600">{p.label}</span>
            </div>
          ))}
        </div>
        <div className="space-y-6">
          {features.map((f, i) => (
            <div key={i}>
              <div className="text-sm font-medium text-slate-700 mb-2">{f.name}</div>
              <div className="space-y-1.5">
                {platforms.map(p => (
                  <div key={p.key} className="flex items-center gap-3">
                    <div className="w-20 text-[10px] text-slate-400 text-right flex-shrink-0">{p.label}</div>
                    <div className="flex-1 h-3 bg-slate-100 rounded-full overflow-hidden">
                      <div className={`h-full ${p.color} rounded-full transition-all duration-500`} style={{ width: `${f[p.key]}%` }} />
                    </div>
                    <div className="w-8 text-[10px] text-slate-400">{f[p.key] > 0 ? `${f[p.key]}%` : '--'}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Differentiators */}
      <section className="bg-gradient-to-br from-white to-slate-50/80 shadow-sm rounded-2xl p-8">
        <h3 className="text-lg font-semibold text-slate-800 mb-4">What Iklavya Does Differently</h3>
        <div className="max-w-4xl space-y-5">
          <p className="text-sm leading-relaxed text-slate-600">
            Iklavya&apos;s fundamental differentiator is its closed-loop feedback system. Unlike platforms that treat resume building, interview preparation, and job applications as separate activities, Iklavya connects these workflows through a shared intelligence layer. When a student practices an interview, the AI evaluates not just the content of their answers but also maps identified skill gaps back to their resume and surfaces relevant job opportunities that align with their demonstrated strengths. This creates a flywheel effect where each interaction makes subsequent recommendations more precise.
          </p>
          <p className="text-sm leading-relaxed text-slate-600">
            The technical architecture reinforces this integration. By using LangChain for orchestrating AI interactions and embedding-based vector search for job matching, Iklavya can perform semantic analysis that goes beyond keyword matching. A student who describes a &quot;REST API project using Flask&quot; during an interview is automatically recognized as having backend development experience, which updates their skill profile and improves job recommendations -- all without manual input. This level of intelligence simply does not exist in any current Indian career preparation platform.
          </p>
        </div>
      </section>
    </div>
  );
}
