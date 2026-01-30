"use client";
import { useState, useEffect } from 'react';

function Gauge({ value, label, size = 80 }) {
  const r = (size - 8) / 2;
  const c = 2 * Math.PI * r;
  const off = c - (value / 100) * c;
  const color = value >= 70 ? '#10B981' : value >= 45 ? '#F59E0B' : '#EF4444';
  return (
    <div className="flex flex-col items-center">
      <div className="relative" style={{ width: size, height: size }}>
        <svg width={size} height={size} className="-rotate-90">
          <circle cx={size/2} cy={size/2} r={r} fill="none" stroke="#f1f5f9" strokeWidth={8} />
          <circle cx={size/2} cy={size/2} r={r} fill="none" stroke={color} strokeWidth={8}
            strokeDasharray={c} strokeDashoffset={off} strokeLinecap="round" className="transition-all duration-700" />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center text-lg font-bold text-slate-900">{value}</div>
      </div>
      <div className="text-[11px] text-slate-500 mt-1 font-medium">{label}</div>
    </div>
  );
}

export default function InterviewLiveScreen() {
  const [elapsed, setElapsed] = useState(134);
  useEffect(() => {
    const t = setInterval(() => setElapsed(e => e + 1), 1000);
    return () => clearInterval(t);
  }, []);
  const mins = String(Math.floor(elapsed / 60)).padStart(2, '0');
  const secs = String(elapsed % 60).padStart(2, '0');

  const fillers = [{ word: 'um', count: 4 }, { word: 'like', count: 7 }, { word: 'you know', count: 3 }, { word: 'basically', count: 5 }];
  const keywords = ['REST API', 'FastAPI', 'PostgreSQL', 'optimization', 'scalability', 'microservices'];
  const transcript = [
    { time: '0:42', text: 'So in my internship at Razorpay, I worked on building REST API endpoints using FastAPI...' },
    { time: '1:15', text: 'The main challenge was optimizing the PostgreSQL queries because we were dealing with, like, 10K requests per day...' },
    { time: '1:48', text: 'I basically used query indexing and connection pooling to reduce the response time by about 35 percent...' },
    { time: '2:14', text: 'For the architecture, we followed a microservices pattern where each service had its own database...' },
  ];

  const waveform = [30,50,80,65,40,70,90,55,45,75,85,60,35,50,70,80,45,65,55,40,30,60,75,85,70,50,40,55,65,80,90,70,45,35,60,75,50,40,65,55];

  return (
    <div className="animate-fade-in flex gap-5">
      {/* Main Area */}
      <div className="flex-1 space-y-4">
        {/* Video Feed */}
        <div className="bg-slate-900 rounded-2xl aspect-video relative overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-28 h-28 rounded-full bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center">
              <svg className="w-14 h-14 text-white/80" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0" /></svg>
            </div>
          </div>
          {/* Self cam */}
          <div className="absolute bottom-4 right-4 w-36 h-24 rounded-xl bg-slate-700 border-2 border-white/20 flex items-center justify-center">
            <div className="w-10 h-10 rounded-full bg-slate-600" />
          </div>
          {/* Timer */}
          <div className="absolute top-4 right-4 px-4 py-1.5 bg-black/40 backdrop-blur rounded-full text-white font-mono text-sm">{mins}:{secs}</div>
          {/* REC */}
          <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1.5 bg-black/40 backdrop-blur rounded-full">
            <div className="w-2.5 h-2.5 rounded-full bg-rose-500 animate-pulse" />
            <span className="text-white text-xs font-medium">REC</span>
          </div>
          {/* Controls */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-3">
            {[
              { icon: 'M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z', bg: 'bg-white/20' },
              { icon: 'M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z', bg: 'bg-white/20' },
              { icon: 'M6 18L18 6M6 6l12 12', bg: 'bg-rose-500' },
            ].map((btn, i) => (
              <button key={i} className={`w-11 h-11 ${btn.bg} backdrop-blur rounded-full flex items-center justify-center hover:opacity-80 transition-opacity`}>
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={btn.icon} /></svg>
              </button>
            ))}
          </div>
        </div>

        {/* Current Question */}
        <div className="bg-white rounded-xl shadow-sm p-5">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-9 h-9 rounded-lg bg-indigo-100 flex items-center justify-center text-indigo-600 font-bold text-sm">Q3</div>
            <div className="flex-1">
              <div className="text-sm font-semibold text-slate-800">Tell me about a time you optimized a system for performance. What was your approach?</div>
            </div>
            <div className="px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-xs font-medium">Behavioral</div>
          </div>
          <div className="flex gap-2">
            {[1,2,3,4,5].map(q => (
              <div key={q} className={`flex-1 h-1.5 rounded-full ${q < 3 ? 'bg-emerald-500' : q === 3 ? 'bg-indigo-500' : 'bg-slate-200'}`} />
            ))}
          </div>
          <div className="text-[10px] text-slate-400 mt-1.5">Question 3 of 5</div>
        </div>

        {/* Waveform */}
        <div className="bg-white rounded-xl shadow-sm p-4">
          <div className="text-xs text-slate-500 mb-2 font-medium">Speech Waveform</div>
          <div className="flex items-end gap-[2px] h-12">
            {waveform.map((h, i) => (
              <div key={i} className="flex-1 bg-indigo-400 rounded-t-sm transition-all" style={{ height: `${h}%`, opacity: i > waveform.length - 6 ? 1 : 0.5 }} />
            ))}
          </div>
        </div>

        {/* Transcript */}
        <div className="bg-white rounded-xl shadow-sm p-5 max-h-48 overflow-y-auto">
          <div className="text-xs text-slate-500 mb-3 font-medium">Live Transcript</div>
          <div className="space-y-3">
            {transcript.map((t, i) => (
              <div key={i} className="flex gap-3">
                <span className="text-[10px] text-slate-400 w-10 flex-shrink-0 pt-0.5 font-mono">{t.time}</span>
                <p className="text-sm text-slate-700 leading-relaxed">
                  {t.text.split(' ').map((word, j) => {
                    const clean = word.replace(/[.,]/g, '');
                    const isKeyword = keywords.some(k => k.toLowerCase().includes(clean.toLowerCase()) && clean.length > 3);
                    const isFiller = fillers.some(f => f.word === clean.toLowerCase());
                    return (
                      <span key={j} className={isKeyword ? 'bg-emerald-100 text-emerald-700 px-0.5 rounded font-medium' : isFiller ? 'bg-rose-100 text-rose-600 px-0.5 rounded' : ''}>
                        {word}{' '}
                      </span>
                    );
                  })}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right Panel */}
      <div className="w-72 space-y-4 flex-shrink-0">
        {/* Gauges */}
        <div className="bg-white rounded-xl shadow-sm p-5">
          <div className="text-xs text-slate-500 mb-4 font-medium flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" /> Live Metrics
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Gauge value={76} label="Confidence" />
            <Gauge value={82} label="Clarity" />
          </div>
          <div className="mt-4">
            <div className="text-xs text-slate-500 mb-2">Pace</div>
            <div className="relative h-6 bg-slate-100 rounded-full overflow-hidden">
              <div className="absolute left-[30%] right-[30%] h-full bg-emerald-100 rounded-full" />
              <div className="absolute left-[55%] w-3 h-full bg-indigo-600 rounded-full transition-all duration-500" />
            </div>
            <div className="flex justify-between text-[10px] text-slate-400 mt-1">
              <span>Too Slow</span><span>Optimal</span><span>Too Fast</span>
            </div>
          </div>
        </div>

        {/* Filler Words */}
        <div className="bg-white rounded-xl shadow-sm p-5">
          <div className="text-xs text-slate-500 mb-3 font-medium">Filler Words Detected</div>
          <div className="space-y-2">
            {fillers.map((f, i) => (
              <div key={i} className="flex items-center justify-between">
                <span className="text-sm text-slate-700">&quot;{f.word}&quot;</span>
                <div className="flex items-center gap-2">
                  <div className="w-16 h-2 bg-slate-100 rounded-full overflow-hidden">
                    <div className="h-full bg-rose-400 rounded-full" style={{ width: `${f.count * 10}%` }} />
                  </div>
                  <span className="text-xs font-semibold text-rose-500 w-4">{f.count}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="text-[10px] text-slate-400 mt-3">Total: {fillers.reduce((a, f) => a + f.count, 0)} filler words</div>
        </div>

        {/* Keywords */}
        <div className="bg-white rounded-xl shadow-sm p-5">
          <div className="text-xs text-slate-500 mb-3 font-medium">Keywords Matched</div>
          <div className="flex flex-wrap gap-1.5">
            {keywords.map((k, i) => (
              <span key={i} className="px-2.5 py-1 bg-emerald-100 text-emerald-700 rounded-lg text-xs font-medium">{k}</span>
            ))}
          </div>
          <div className="text-[10px] text-emerald-600 mt-3 font-medium">6/8 required keywords used</div>
        </div>
      </div>
    </div>
  );
}
