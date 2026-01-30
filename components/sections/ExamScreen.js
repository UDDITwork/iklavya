"use client";
import { useState } from 'react';

const questions = [
  { id: 1, text: 'Which of the following data structures uses LIFO (Last In, First Out) principle?', options: ['Queue', 'Stack', 'Linked List', 'Tree'], correct: 1 },
  { id: 2, text: 'What is the time complexity of binary search on a sorted array of n elements?', options: ['O(n)', 'O(log n)', 'O(n log n)', 'O(1)'], correct: 1 },
  { id: 3, text: 'In SQL, which clause is used to filter groups of rows?', options: ['WHERE', 'GROUP BY', 'HAVING', 'ORDER BY'], correct: 2 },
  { id: 4, text: 'Which HTTP status code indicates a resource was successfully created?', options: ['200 OK', '201 Created', '204 No Content', '301 Moved'], correct: 1 },
  { id: 5, text: 'What does the "virtual DOM" in React help optimize?', options: ['Network requests', 'DOM manipulation', 'CSS rendering', 'Memory allocation'], correct: 1 },
];

export default function ExamScreen() {
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState({});
  const [flagged, setFlagged] = useState(new Set());
  const [confidence, setConfidence] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [timeLeft] = useState(847); // seconds

  const q = questions[current];
  const mins = String(Math.floor(timeLeft / 60)).padStart(2, '0');
  const secs = String(timeLeft % 60).padStart(2, '0');
  const pct = ((timeLeft) / 1200) * 100;

  const selectAnswer = (i) => setAnswers(prev => ({ ...prev, [current]: i }));
  const toggleFlag = () => {
    setFlagged(prev => {
      const n = new Set(prev);
      n.has(current) ? n.delete(current) : n.add(current);
      return n;
    });
  };

  const answered = Object.keys(answers).length;
  const flagCount = flagged.size;

  return (
    <div className="animate-fade-in">
      {/* Top Bar */}
      <div className="bg-white rounded-xl shadow-sm p-4 mb-5 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <span className="text-sm font-semibold text-slate-800">DSA Fundamentals</span>
          <span className="text-xs text-slate-400">Module 3</span>
        </div>
        <div className="flex items-center gap-5">
          <div className="flex items-center gap-2 text-xs">
            <span className="text-slate-500">Question</span>
            <span className="font-bold text-indigo-600">{current + 1}</span>
            <span className="text-slate-400">of {questions.length}</span>
          </div>
          {/* Timer Ring */}
          <div className="relative w-12 h-12">
            <svg viewBox="0 0 48 48" className="-rotate-90 w-full h-full">
              <circle cx="24" cy="24" r="20" fill="none" stroke="#f1f5f9" strokeWidth="4" />
              <circle cx="24" cy="24" r="20" fill="none" stroke={pct > 30 ? '#6366F1' : pct > 10 ? '#F59E0B' : '#EF4444'}
                strokeWidth="4" strokeDasharray={`${2 * Math.PI * 20}`}
                strokeDashoffset={`${2 * Math.PI * 20 * (1 - pct / 100)}`} strokeLinecap="round" />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center text-[10px] font-mono font-bold text-slate-700">{mins}:{secs}</div>
          </div>
        </div>
      </div>

      <div className="flex gap-5">
        {/* Question Panel */}
        <div className="flex-1 space-y-5">
          <div className="bg-white rounded-2xl shadow-sm p-6">
            <div className="flex items-start gap-3 mb-6">
              <div className="w-9 h-9 rounded-lg bg-indigo-100 flex items-center justify-center text-indigo-600 font-bold text-sm flex-shrink-0">
                {current + 1}
              </div>
              <div className="text-base text-slate-800 font-medium leading-relaxed">{q.text}</div>
            </div>

            {/* Options */}
            <div className="space-y-3">
              {q.options.map((opt, i) => (
                <button key={i} onClick={() => selectAnswer(i)}
                  className={`w-full flex items-center gap-4 p-4 rounded-xl border-2 text-left transition-all ${
                    answers[current] === i
                      ? 'border-indigo-500 bg-indigo-50 shadow-sm'
                      : 'border-slate-200 hover:border-slate-300 hover:bg-slate-50'
                  }`}>
                  <div className={`w-7 h-7 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-all ${
                    answers[current] === i ? 'border-indigo-500 bg-indigo-500' : 'border-slate-300'
                  }`}>
                    {answers[current] === i && <div className="w-2.5 h-2.5 bg-white rounded-full" />}
                  </div>
                  <span className={`text-sm ${answers[current] === i ? 'text-indigo-700 font-medium' : 'text-slate-700'}`}>{opt}</span>
                </button>
              ))}
            </div>

            {/* Confidence Slider */}
            <div className="mt-6 pt-4 border-t border-slate-100">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs text-slate-500">How confident are you?</span>
                <span className="text-xs font-semibold text-indigo-600">{confidence[current] || 50}%</span>
              </div>
              <input type="range" min="0" max="100" value={confidence[current] || 50}
                onChange={e => setConfidence(prev => ({ ...prev, [current]: parseInt(e.target.value) }))}
                className="w-full h-2 bg-slate-200 rounded-full appearance-none cursor-pointer accent-indigo-600" />
              <div className="flex justify-between text-[10px] text-slate-400 mt-1">
                <span>Guessing</span><span>Somewhat sure</span><span>Very confident</span>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between">
            <button onClick={() => setCurrent(Math.max(0, current - 1))} disabled={current === 0}
              className="px-5 py-2.5 bg-white border border-slate-200 rounded-lg text-sm text-slate-600 hover:bg-slate-50 disabled:opacity-30 transition-all">
              Previous
            </button>
            <div className="flex gap-2">
              <button onClick={toggleFlag}
                className={`px-4 py-2.5 rounded-lg text-sm transition-all ${
                  flagged.has(current) ? 'bg-amber-100 text-amber-700 border border-amber-300' : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50'
                }`}>
                {flagged.has(current) ? 'Flagged' : 'Flag'}
              </button>
              {current < questions.length - 1 ? (
                <button onClick={() => setCurrent(current + 1)}
                  className="px-5 py-2.5 bg-indigo-600 text-white rounded-lg text-sm font-medium hover:bg-indigo-700 transition-colors shadow-sm">
                  Next
                </button>
              ) : (
                <button onClick={() => setShowModal(true)}
                  className="px-5 py-2.5 bg-emerald-600 text-white rounded-lg text-sm font-medium hover:bg-emerald-700 transition-colors shadow-sm">
                  Submit Exam
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Question Navigator */}
        <div className="w-56 flex-shrink-0 space-y-4">
          <div className="bg-white rounded-xl shadow-sm p-5">
            <div className="text-xs font-semibold text-slate-700 mb-3">Question Navigator</div>
            <div className="grid grid-cols-5 gap-2">
              {questions.map((_, i) => (
                <button key={i} onClick={() => setCurrent(i)}
                  className={`w-9 h-9 rounded-lg flex items-center justify-center text-xs font-semibold transition-all ${
                    i === current ? 'bg-indigo-600 text-white shadow-md' :
                    answers[i] !== undefined ? 'bg-emerald-100 text-emerald-700' :
                    flagged.has(i) ? 'bg-amber-100 text-amber-700' :
                    'bg-slate-100 text-slate-500 hover:bg-slate-200'
                  }`}>
                  {i + 1}
                </button>
              ))}
            </div>
            <div className="mt-4 pt-4 border-t border-slate-100 space-y-2 text-xs">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded bg-emerald-100 flex-shrink-0" />
                <span className="text-slate-600">Answered: {answered}</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded bg-amber-100 flex-shrink-0" />
                <span className="text-slate-600">Flagged: {flagCount}</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded bg-slate-100 flex-shrink-0" />
                <span className="text-slate-600">Remaining: {questions.length - answered}</span>
              </div>
            </div>
          </div>

          {/* Progress */}
          <div className="bg-white rounded-xl shadow-sm p-5">
            <div className="text-xs font-semibold text-slate-700 mb-2">Completion</div>
            <div className="h-2.5 bg-slate-100 rounded-full overflow-hidden">
              <div className="h-full bg-indigo-500 rounded-full transition-all" style={{ width: `${(answered / questions.length) * 100}%` }} />
            </div>
            <div className="text-[10px] text-slate-400 mt-1.5">{answered}/{questions.length} answered</div>
          </div>
        </div>
      </div>

      {/* Submit Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-sm w-full mx-4 animate-fade-in">
            <div className="text-lg font-bold text-slate-900 mb-2">Submit Exam?</div>
            <div className="text-sm text-slate-500 mb-4">
              {answered}/{questions.length} answered, {flagCount} flagged
            </div>
            {answered < questions.length && (
              <div className="p-3 bg-amber-50 rounded-lg text-xs text-amber-700 mb-4">
                You have {questions.length - answered} unanswered question(s).
              </div>
            )}
            <div className="flex gap-3">
              <button onClick={() => setShowModal(false)}
                className="flex-1 py-2.5 bg-slate-100 text-slate-600 rounded-lg text-sm hover:bg-slate-200 transition-colors">
                Go Back
              </button>
              <button className="flex-1 py-2.5 bg-indigo-600 text-white rounded-lg text-sm font-medium hover:bg-indigo-700 transition-colors">
                Confirm Submit
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
