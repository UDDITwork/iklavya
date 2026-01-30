"use client";
import { useState } from 'react';

const features = [
  {
    id: 'resume',
    title: 'AI Resume Builder',
    brief: 'Multi-step resume generation with AI content suggestions and live PDF preview',
    userStory: 'As a college student preparing for campus placements, I want to build a professionally formatted resume with AI-powered content suggestions so that I can present my skills and experience in the most compelling way to recruiters.',
    criteria: [
      'Student can input personal, educational, and professional details through a guided multi-step form',
      'AI generates bullet point suggestions for experience descriptions using action verbs and quantifiable metrics',
      'Live PDF preview updates in real-time as the student fills in information',
      'Completed resumes can be downloaded in PDF format with ATS-compatible formatting',
      'System stores up to five resume versions per student for different job targets',
    ],
    edges: [
      'Student has no work experience: System suggests project-based and academic achievement content',
      'Incomplete form submission: Auto-save drafts every 30 seconds, resume on return',
      'PDF rendering failure: Fallback to HTML preview with download retry',
    ],
    endpoints: [
      { method: 'POST', path: '/api/v1/resume/create', desc: 'Initialize new resume' },
      { method: 'PUT', path: '/api/v1/resume/{id}/section', desc: 'Update specific section' },
      { method: 'POST', path: '/api/v1/resume/{id}/ai-suggest', desc: 'Generate AI suggestions for a section' },
      { method: 'GET', path: '/api/v1/resume/{id}/preview', desc: 'Render PDF preview' },
      { method: 'GET', path: '/api/v1/resume/{id}/download', desc: 'Download final PDF' },
    ],
    store: 'useResumeStore (Zustand) -- currentStep, formData, previewUrl, aiSuggestions, savedDrafts',
  },
  {
    id: 'interview',
    title: 'AI Interview Practice',
    brief: 'Real-time mock interviews with WebRTC video and AI evaluation',
    userStory: 'As a student who gets nervous during interviews, I want to practice with an AI interviewer that provides real-time feedback on my responses, body language, and communication style so that I can build confidence before actual interviews.',
    criteria: [
      'Student selects interview type (technical, behavioral, HR) and target role',
      'WebRTC-based video session with AI-generated questions displayed on screen',
      'Real-time analysis of speech pace, confidence level, filler word usage, and eye contact',
      'Post-session report with scores across multiple dimensions and specific improvement suggestions',
      'Session recordings available for self-review for 30 days',
    ],
    edges: [
      'Camera/microphone permission denied: Text-only fallback mode with typed responses',
      'Network interruption mid-interview: Auto-pause with session recovery on reconnect',
      'Student speaks in Hindi/Hinglish: Bilingual NLP processing for mixed-language responses',
    ],
    endpoints: [
      { method: 'POST', path: '/api/v1/interview/start', desc: 'Initialize interview session' },
      { method: 'WS', path: '/api/v1/interview/{id}/stream', desc: 'WebSocket for real-time audio/video analysis' },
      { method: 'POST', path: '/api/v1/interview/{id}/evaluate', desc: 'Trigger final evaluation' },
      { method: 'GET', path: '/api/v1/interview/{id}/report', desc: 'Fetch detailed report' },
      { method: 'GET', path: '/api/v1/interview/history', desc: 'List past sessions' },
    ],
    store: 'useInterviewStore (Zustand) -- sessionStatus, currentQuestion, liveMetrics, mediaStream, analysisResults',
  },
  {
    id: 'exams',
    title: 'AI-Assessed Mini Exams',
    brief: 'Module-wise assessments with RAG-based question generation and evaluation',
    userStory: 'As a student studying for placement tests, I want to take module-wise assessments that adapt to my skill level and provide detailed explanations for incorrect answers so that I can identify and address my knowledge gaps efficiently.',
    criteria: [
      'RAG-based question generation from uploaded course materials and curated question banks',
      'Support for MCQ, short answer, and code-based question types',
      'Timed assessment with configurable duration per question or per exam',
      'AI-generated explanations for every answer, including why wrong options are incorrect',
      'Progress tracking with spaced repetition scheduling for weak topics',
    ],
    edges: [
      'Browser tab switch during exam: Warning notification, optional proctoring flag',
      'Timer expires with unanswered questions: Auto-submit with unanswered marked separately',
      'Ambiguous question detected: Student can flag for review, admin notification triggered',
    ],
    endpoints: [
      { method: 'POST', path: '/api/v1/exam/generate', desc: 'Generate exam from module/topic' },
      { method: 'POST', path: '/api/v1/exam/{id}/submit', desc: 'Submit answers for evaluation' },
      { method: 'GET', path: '/api/v1/exam/{id}/results', desc: 'Fetch results with explanations' },
      { method: 'GET', path: '/api/v1/exam/progress', desc: 'Student progress across all modules' },
      { method: 'POST', path: '/api/v1/exam/{id}/flag', desc: 'Flag a question for review' },
    ],
    store: 'useExamStore (Zustand) -- currentExam, answers, timeRemaining, questionNav, results',
  },
  {
    id: 'jobs',
    title: 'AI Smart Job Matching',
    brief: 'Embedding-based job recommendations with skill gap analysis',
    userStory: 'As a graduating student, I want to see job opportunities ranked by how well they match my verified skills, project experience, and career preferences so that I can focus my applications on roles where I have the highest chance of success.',
    criteria: [
      'Embedding-based matching using student profile vectors and job requirement vectors',
      'Match score calculated from skills overlap, experience relevance, and preference alignment',
      'Filter by job type, location, salary range, and minimum match percentage',
      'One-click application with auto-attached resume (selected version)',
      'Application status tracking with employer response notifications',
    ],
    edges: [
      'New student with sparse profile: Show skill-building recommendations instead of low-match jobs',
      'Job listing with vague requirements: Lower confidence score displayed alongside match percentage',
      'Duplicate job listings from multiple sources: Deduplication with source attribution',
    ],
    endpoints: [
      { method: 'GET', path: '/api/v1/jobs/matches', desc: 'Fetch personalized job matches' },
      { method: 'GET', path: '/api/v1/jobs/{id}/details', desc: 'Full job details with skill gap analysis' },
      { method: 'POST', path: '/api/v1/jobs/{id}/apply', desc: 'Submit application' },
      { method: 'GET', path: '/api/v1/jobs/applications', desc: 'Track application statuses' },
      { method: 'POST', path: '/api/v1/jobs/preferences', desc: 'Update matching preferences' },
    ],
    store: 'useJobStore (Zustand) -- matches, filters, applications, selectedJob, preferences',
  },
  {
    id: 'grading',
    title: 'AI Grading System',
    brief: 'Multi-dimensional evaluation of written and code-based submissions',
    userStory: 'As a student submitting written and code-based assessments, I want AI-powered grading that evaluates not just correctness but also approach, clarity, and completeness so that I receive feedback comparable to what a senior instructor would provide.',
    criteria: [
      'Multi-dimensional rubric evaluation: correctness, methodology, clarity, completeness',
      'Code assessments include runtime analysis, test case results, and code quality scoring',
      'Written answer evaluation uses semantic similarity to model answers with partial credit',
      'Detailed feedback with specific suggestions for improvement per question',
      'Grade calibration against human-graded samples to maintain consistency',
    ],
    edges: [
      'Plagiarism detected: Flag submission, show similarity report, withhold grade pending review',
      'Code that passes tests but uses prohibited approaches: Style and approach scoring handles this',
      'Student disputes grade: Appeal workflow with human reviewer escalation',
    ],
    endpoints: [
      { method: 'POST', path: '/api/v1/grade/submit', desc: 'Submit work for grading' },
      { method: 'GET', path: '/api/v1/grade/{id}/result', desc: 'Fetch grading result with feedback' },
      { method: 'POST', path: '/api/v1/grade/{id}/appeal', desc: 'Submit grade appeal' },
      { method: 'GET', path: '/api/v1/grade/rubrics', desc: 'Fetch grading rubrics' },
      { method: 'GET', path: '/api/v1/grade/calibration', desc: 'View calibration metrics' },
    ],
    store: 'useGradeStore (Zustand) -- submissions, grades, feedback, appeals',
  },
];

export default function FeatureSpecs() {
  const [expanded, setExpanded] = useState(null);

  return (
    <div className="space-y-8 animate-fade-in">
      <section className="bg-gradient-to-br from-white to-slate-50/80 shadow-sm rounded-2xl p-8">
        <h2 className="text-2xl font-bold text-slate-900 mb-2">Detailed Feature Specifications</h2>
        <div className="h-1 w-20 bg-gradient-to-r from-indigo-600 to-violet-500 rounded-full mb-8" />

        <div className="space-y-4">
          {features.map(f => (
            <div key={f.id} className="bg-gradient-to-br from-slate-50 to-white shadow-sm rounded-xl overflow-hidden transition-all duration-300 hover:shadow-md">
              <button
                onClick={() => setExpanded(expanded === f.id ? null : f.id)}
                className="w-full flex items-center justify-between p-5 text-left"
              >
                <div>
                  <div className="font-semibold text-slate-900">{f.title}</div>
                  <div className="text-sm text-slate-500 mt-0.5">{f.brief}</div>
                </div>
                <svg className={`w-5 h-5 text-slate-400 transition-transform duration-300 flex-shrink-0 ml-4 ${expanded === f.id ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {expanded === f.id && (
                <div className="px-5 pb-6 space-y-6 animate-fade-in">
                  <div className="section-divider" />

                  <div>
                    <div className="text-xs font-semibold uppercase tracking-wide text-indigo-600 mb-2">User Story</div>
                    <p className="text-sm leading-relaxed text-slate-600 bg-indigo-50/50 rounded-lg p-4 italic">&quot;{f.userStory}&quot;</p>
                  </div>

                  <div>
                    <div className="text-xs font-semibold uppercase tracking-wide text-emerald-600 mb-2">Acceptance Criteria</div>
                    <ul className="space-y-2">
                      {f.criteria.map((c, i) => (
                        <li key={i} className="flex gap-3 text-sm text-slate-600">
                          <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center text-xs flex-shrink-0 mt-0.5">{i + 1}</span>
                          {c}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <div className="text-xs font-semibold uppercase tracking-wide text-amber-600 mb-2">Edge Cases</div>
                    <ul className="space-y-2">
                      {f.edges.map((e, i) => (
                        <li key={i} className="text-sm text-slate-600 flex gap-2">
                          <span className="text-amber-500 flex-shrink-0">--</span>
                          {e}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <div className="text-xs font-semibold uppercase tracking-wide text-violet-600 mb-2">API Endpoints</div>
                    <div className="space-y-2">
                      {f.endpoints.map((ep, i) => (
                        <div key={i} className="flex items-center gap-3 text-sm">
                          <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${ep.method === 'POST' ? 'bg-emerald-100 text-emerald-700' : ep.method === 'GET' ? 'bg-cyan-100 text-cyan-700' : ep.method === 'PUT' ? 'bg-amber-100 text-amber-700' : 'bg-violet-100 text-violet-700'}`}>
                            {ep.method}
                          </span>
                          <code className="text-xs text-slate-700 font-mono bg-slate-100 px-2 py-0.5 rounded">{ep.path}</code>
                          <span className="text-xs text-slate-400">{ep.desc}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <div className="text-xs font-semibold uppercase tracking-wide text-rose-600 mb-2">State Management</div>
                    <code className="text-xs text-slate-600 font-mono bg-slate-100 px-3 py-2 rounded-lg block">{f.store}</code>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
