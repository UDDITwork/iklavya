"use client";
import { useState } from 'react';

const steps = ['Personal Info', 'Education', 'Experience', 'Skills', 'Review'];

const skillOptions = ['React', 'Python', 'Node.js', 'SQL', 'Java', 'Machine Learning', 'Docker', 'AWS', 'Git', 'TypeScript', 'FastAPI', 'MongoDB', 'C++', 'TensorFlow', 'Figma'];

export default function ResumeBuilderScreen() {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState({
    name: 'Priya Sharma', email: 'priya.sharma@mnit.ac.in', phone: '+91 98765 43210', linkedin: 'linkedin.com/in/priyasharma',
    college: 'MNIT Jaipur', degree: 'B.Tech Computer Science', cgpa: '8.7', year: '2026',
    company: 'Razorpay', role: 'Backend Intern', duration: 'May 2025 - Jul 2025',
    description: 'Built RESTful APIs using FastAPI serving 10K+ requests/day. Optimized PostgreSQL queries reducing response time by 35%.',
    selectedSkills: ['React', 'Python', 'FastAPI', 'SQL', 'Git', 'Docker'],
  });

  const updateForm = (key, val) => setForm(prev => ({ ...prev, [key]: val }));
  const toggleSkill = (skill) => {
    setForm(prev => ({
      ...prev,
      selectedSkills: prev.selectedSkills.includes(skill)
        ? prev.selectedSkills.filter(s => s !== skill)
        : [...prev.selectedSkills, skill],
    }));
  };

  return (
    <div className="animate-fade-in">
      {/* Stepper */}
      <div className="bg-white rounded-2xl shadow-sm p-5 mb-5">
        <div className="flex items-center justify-between">
          {steps.map((s, i) => (
            <div key={i} className="flex items-center">
              <button onClick={() => setStep(i)} className="flex items-center gap-2 group">
                <div className={`w-9 h-9 rounded-full flex items-center justify-center text-sm font-semibold transition-all ${
                  i === step ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-200' :
                  i < step ? 'bg-emerald-500 text-white' : 'bg-slate-200 text-slate-500'
                }`}>
                  {i < step ? '\u2713' : i + 1}
                </div>
                <span className={`text-sm font-medium ${i === step ? 'text-indigo-600' : 'text-slate-400'}`}>{s}</span>
              </button>
              {i < 4 && <div className={`w-16 h-0.5 mx-3 ${i < step ? 'bg-emerald-500' : 'bg-slate-200'}`} />}
            </div>
          ))}
        </div>
      </div>

      <div className="flex gap-5">
        {/* Left: Form */}
        <div className="w-1/2 bg-white rounded-2xl shadow-sm p-6">
          {step === 0 && (
            <div className="space-y-4">
              <div className="text-lg font-semibold text-slate-900 mb-4">Personal Information</div>
              {[
                { label: 'Full Name', key: 'name', type: 'text' },
                { label: 'Email Address', key: 'email', type: 'email' },
                { label: 'Phone Number', key: 'phone', type: 'tel' },
                { label: 'LinkedIn Profile', key: 'linkedin', type: 'url' },
              ].map(f => (
                <div key={f.key}>
                  <label className="block text-xs font-medium text-slate-600 mb-1">{f.label}</label>
                  <div className="relative">
                    <input type={f.type} value={form[f.key]} onChange={e => updateForm(f.key, e.target.value)}
                      className="w-full px-3 py-2.5 border border-slate-200 rounded-lg text-sm focus:ring-2 focus:ring-indigo-200 focus:border-indigo-400 outline-none transition-all" />
                    {f.key === 'name' && (
                      <div className="absolute right-2 top-1/2 -translate-y-1/2 px-2 py-0.5 bg-indigo-50 text-indigo-600 text-[10px] rounded-full font-medium cursor-pointer hover:bg-indigo-100">
                        AI: Add title
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}

          {step === 1 && (
            <div className="space-y-4">
              <div className="text-lg font-semibold text-slate-900 mb-4">Education</div>
              <div>
                <label className="block text-xs font-medium text-slate-600 mb-1">College / University</label>
                <select value={form.college} onChange={e => updateForm('college', e.target.value)}
                  className="w-full px-3 py-2.5 border border-slate-200 rounded-lg text-sm focus:ring-2 focus:ring-indigo-200 focus:border-indigo-400 outline-none">
                  <option>MNIT Jaipur</option><option>DTU Delhi</option><option>BITS Pilani</option><option>IIT Jodhpur</option><option>NIT Surathkal</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-600 mb-1">Degree</label>
                <input type="text" value={form.degree} onChange={e => updateForm('degree', e.target.value)}
                  className="w-full px-3 py-2.5 border border-slate-200 rounded-lg text-sm focus:ring-2 focus:ring-indigo-200 focus:border-indigo-400 outline-none" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-slate-600 mb-1">CGPA</label>
                  <input type="text" value={form.cgpa} onChange={e => updateForm('cgpa', e.target.value)}
                    className="w-full px-3 py-2.5 border border-slate-200 rounded-lg text-sm focus:ring-2 focus:ring-indigo-200 focus:border-indigo-400 outline-none" />
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-600 mb-1">Graduation Year</label>
                  <select value={form.year} onChange={e => updateForm('year', e.target.value)}
                    className="w-full px-3 py-2.5 border border-slate-200 rounded-lg text-sm focus:ring-2 focus:ring-indigo-200 focus:border-indigo-400 outline-none">
                    <option>2024</option><option>2025</option><option>2026</option><option>2027</option>
                  </select>
                </div>
              </div>
              <div className="p-3 bg-indigo-50 rounded-lg flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-indigo-200 flex items-center justify-center text-indigo-600 text-xs font-bold">AI</div>
                <span className="text-xs text-indigo-700">Add relevant coursework automatically based on your degree?</span>
                <button className="ml-auto px-3 py-1 bg-indigo-600 text-white text-xs rounded-lg hover:bg-indigo-700 transition-colors">Add</button>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-4">
              <div className="text-lg font-semibold text-slate-900 mb-4">Experience</div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-slate-600 mb-1">Company</label>
                  <input type="text" value={form.company} onChange={e => updateForm('company', e.target.value)}
                    className="w-full px-3 py-2.5 border border-slate-200 rounded-lg text-sm focus:ring-2 focus:ring-indigo-200 focus:border-indigo-400 outline-none" />
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-600 mb-1">Role</label>
                  <input type="text" value={form.role} onChange={e => updateForm('role', e.target.value)}
                    className="w-full px-3 py-2.5 border border-slate-200 rounded-lg text-sm focus:ring-2 focus:ring-indigo-200 focus:border-indigo-400 outline-none" />
                </div>
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-600 mb-1">Duration</label>
                <input type="text" value={form.duration} onChange={e => updateForm('duration', e.target.value)}
                  className="w-full px-3 py-2.5 border border-slate-200 rounded-lg text-sm focus:ring-2 focus:ring-indigo-200 focus:border-indigo-400 outline-none" />
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-600 mb-1">Description</label>
                <textarea value={form.description} onChange={e => updateForm('description', e.target.value)} rows={4}
                  className="w-full px-3 py-2.5 border border-slate-200 rounded-lg text-sm focus:ring-2 focus:ring-indigo-200 focus:border-indigo-400 outline-none resize-none" />
                <div className="flex gap-2 mt-2">
                  <button className="px-3 py-1.5 bg-indigo-50 text-indigo-600 text-xs rounded-lg hover:bg-indigo-100 transition-colors font-medium">AI: Add metrics</button>
                  <button className="px-3 py-1.5 bg-indigo-50 text-indigo-600 text-xs rounded-lg hover:bg-indigo-100 transition-colors font-medium">AI: Stronger verbs</button>
                  <button className="px-3 py-1.5 bg-indigo-50 text-indigo-600 text-xs rounded-lg hover:bg-indigo-100 transition-colors font-medium">AI: Expand</button>
                </div>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-4">
              <div className="text-lg font-semibold text-slate-900 mb-4">Skills</div>
              <div className="flex flex-wrap gap-2 mb-4">
                {form.selectedSkills.map(s => (
                  <span key={s} className="px-3 py-1.5 bg-indigo-100 text-indigo-700 rounded-lg text-sm flex items-center gap-2 font-medium">
                    {s}
                    <button onClick={() => toggleSkill(s)} className="text-indigo-400 hover:text-indigo-600 transition-colors">x</button>
                  </span>
                ))}
              </div>
              <div className="text-xs text-slate-500 mb-2">Click to add:</div>
              <div className="flex flex-wrap gap-2">
                {skillOptions.filter(s => !form.selectedSkills.includes(s)).map(s => (
                  <button key={s} onClick={() => toggleSkill(s)}
                    className="px-3 py-1.5 bg-slate-100 text-slate-600 rounded-lg text-sm hover:bg-indigo-100 hover:text-indigo-700 transition-colors">
                    + {s}
                  </button>
                ))}
              </div>
              <div className="p-3 bg-amber-50 rounded-lg flex items-center gap-2 mt-4">
                <div className="w-6 h-6 rounded-full bg-amber-200 flex items-center justify-center text-amber-600 text-xs font-bold">!</div>
                <span className="text-xs text-amber-700">Based on your experience, consider adding: <strong>PostgreSQL</strong>, <strong>REST APIs</strong></span>
              </div>
            </div>
          )}

          {step === 4 && (
            <div className="space-y-4">
              <div className="text-lg font-semibold text-slate-900 mb-4">Review</div>
              <div className="space-y-3">
                <div className="p-3 bg-emerald-50 rounded-lg flex items-center gap-2">
                  <span className="text-emerald-600 font-bold text-sm">86/100</span>
                  <span className="text-xs text-emerald-700">Resume Score - Strong for SDE roles</span>
                </div>
                {[
                  { label: 'ATS Compatibility', score: 92, color: 'bg-emerald-500' },
                  { label: 'Content Quality', score: 84, color: 'bg-indigo-500' },
                  { label: 'Keyword Match', score: 78, color: 'bg-amber-500' },
                  { label: 'Formatting', score: 90, color: 'bg-cyan-500' },
                ].map((m, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <span className="text-xs text-slate-500 w-32">{m.label}</span>
                    <div className="flex-1 h-2 bg-slate-100 rounded-full overflow-hidden">
                      <div className={`h-full ${m.color} rounded-full`} style={{ width: `${m.score}%` }} />
                    </div>
                    <span className="text-xs font-semibold text-slate-700 w-8">{m.score}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Nav Buttons */}
          <div className="flex justify-between mt-6 pt-4 border-t border-slate-100">
            <button onClick={() => setStep(Math.max(0, step - 1))} disabled={step === 0}
              className="px-5 py-2 bg-slate-100 text-slate-600 rounded-lg text-sm font-medium disabled:opacity-30 hover:bg-slate-200 transition-colors">
              Back
            </button>
            <button onClick={() => setStep(Math.min(4, step + 1))}
              className="px-5 py-2 bg-indigo-600 text-white rounded-lg text-sm font-medium hover:bg-indigo-700 transition-colors shadow-sm">
              {step === 4 ? 'Download PDF' : 'Next Step'}
            </button>
          </div>
        </div>

        {/* Right: Live Preview */}
        <div className="w-1/2 bg-white rounded-2xl shadow-sm p-6">
          <div className="flex items-center justify-between mb-4">
            <span className="text-sm font-semibold text-slate-700">Live Preview</span>
            <div className="flex gap-2">
              <button className="px-3 py-1.5 bg-slate-100 rounded-lg text-xs text-slate-600 hover:bg-slate-200 transition-colors">Template</button>
              <button className="px-3 py-1.5 bg-indigo-600 text-white rounded-lg text-xs hover:bg-indigo-700 transition-colors">Export PDF</button>
            </div>
          </div>
          {/* Resume Preview */}
          <div className="border border-slate-200 rounded-lg p-8 bg-white min-h-[600px] shadow-inner">
            <div className="text-center mb-5 pb-4 border-b-2 border-indigo-600">
              <div className="text-2xl font-bold text-slate-900">{form.name}</div>
              <div className="flex items-center justify-center gap-3 mt-2 text-xs text-slate-500">
                <span>{form.email}</span>
                <span className="w-1 h-1 rounded-full bg-slate-300" />
                <span>{form.phone}</span>
                <span className="w-1 h-1 rounded-full bg-slate-300" />
                <span>{form.linkedin}</span>
              </div>
            </div>

            <div className="mb-5">
              <div className="text-xs font-bold text-indigo-600 uppercase tracking-wider mb-2">Education</div>
              <div className="flex justify-between items-start">
                <div>
                  <div className="text-sm font-semibold text-slate-800">{form.college}</div>
                  <div className="text-xs text-slate-500">{form.degree}</div>
                </div>
                <div className="text-right text-xs text-slate-500">
                  <div>CGPA: {form.cgpa}/10</div>
                  <div>Expected {form.year}</div>
                </div>
              </div>
            </div>

            <div className="mb-5">
              <div className="text-xs font-bold text-indigo-600 uppercase tracking-wider mb-2">Experience</div>
              <div className="flex justify-between items-start mb-1">
                <div>
                  <div className="text-sm font-semibold text-slate-800">{form.role}</div>
                  <div className="text-xs text-slate-500">{form.company}</div>
                </div>
                <div className="text-xs text-slate-500">{form.duration}</div>
              </div>
              <ul className="list-disc list-inside text-xs text-slate-600 space-y-1 ml-1">
                {form.description.split('. ').filter(Boolean).map((line, i) => (
                  <li key={i}>{line.trim().replace(/\.$/, '')}</li>
                ))}
              </ul>
            </div>

            <div>
              <div className="text-xs font-bold text-indigo-600 uppercase tracking-wider mb-2">Technical Skills</div>
              <div className="flex flex-wrap gap-2">
                {form.selectedSkills.map((s, i) => (
                  <span key={i} className="px-2 py-1 bg-slate-100 text-slate-700 rounded text-xs">{s}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
