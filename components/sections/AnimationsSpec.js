"use client";
import { useState } from 'react';

export default function AnimationsSpec() {
  const [hovered, setHovered] = useState(null);

  return (
    <div className="space-y-8 animate-fade-in">
      <section className="bg-gradient-to-br from-white to-slate-50/80 shadow-sm rounded-2xl p-8">
        <h2 className="text-2xl font-bold text-slate-900 mb-2">Interaction Design and Micro-Animations</h2>
        <div className="h-1 w-20 bg-gradient-to-r from-indigo-600 to-violet-500 rounded-full mb-8" />
        <p className="text-sm leading-relaxed text-slate-600 max-w-4xl mb-8">
          Thoughtful animation design is what separates a functional interface from one that feels responsive and alive. Every transition in Iklavya serves a purpose: confirming user actions, maintaining spatial context during navigation, and reducing perceived latency during asynchronous operations. The following specifications define the animation language used consistently across the platform.
        </p>

        {/* Hover and Focus States */}
        <h3 className="text-lg font-semibold text-slate-800 mb-4">Hover and Focus States</h3>
        <p className="text-sm leading-relaxed text-slate-600 max-w-4xl mb-6">
          All interactive elements use a consistent 200ms ease-out transition. Buttons scale to 1.02x on hover with a subtle shadow elevation. Cards lift 2px with expanded shadow on hover. Focus rings use a 3px indigo-300 outline with 2px offset for keyboard accessibility. Links use an underline that slides in from the left using a pseudo-element transition.
        </p>

        <div className="flex gap-6 mb-10 p-6 bg-slate-50 rounded-xl">
          <div className="text-center space-y-3">
            <div className="text-xs text-slate-500 mb-2">Button Hover</div>
            <button
              onMouseEnter={() => setHovered('btn')}
              onMouseLeave={() => setHovered(null)}
              className={`px-6 py-2.5 bg-indigo-600 text-white rounded-lg text-sm font-medium transition-all duration-200 ${hovered === 'btn' ? 'shadow-lg shadow-indigo-200 scale-[1.02]' : ''}`}
            >
              Hover Me
            </button>
          </div>
          <div className="text-center space-y-3">
            <div className="text-xs text-slate-500 mb-2">Card Lift</div>
            <div
              onMouseEnter={() => setHovered('card')}
              onMouseLeave={() => setHovered(null)}
              className={`px-6 py-4 bg-white rounded-xl border border-slate-200 text-sm cursor-pointer transition-all duration-300 ${hovered === 'card' ? 'shadow-lg -translate-y-0.5' : 'shadow-sm'}`}
            >
              Card Element
            </div>
          </div>
          <div className="text-center space-y-3">
            <div className="text-xs text-slate-500 mb-2">Link Underline</div>
            <span
              onMouseEnter={() => setHovered('link')}
              onMouseLeave={() => setHovered(null)}
              className="text-sm text-indigo-600 cursor-pointer relative inline-block"
            >
              Link Text
              <span className={`absolute bottom-0 left-0 h-0.5 bg-indigo-600 transition-all duration-300 ${hovered === 'link' ? 'w-full' : 'w-0'}`} />
            </span>
          </div>
        </div>
      </section>

      {/* Page Transitions */}
      <section className="bg-gradient-to-br from-white to-slate-50/80 shadow-sm rounded-2xl p-8">
        <h3 className="text-lg font-semibold text-slate-800 mb-4">Page Transitions</h3>
        <p className="text-sm leading-relaxed text-slate-600 max-w-4xl mb-6">
          Content area transitions use a fade-up pattern: outgoing content fades to opacity 0 while incoming content fades in from opacity 0 with a 12px upward translate. The total transition duration is 300ms, creating a smooth handoff that maintains the user&apos;s spatial orientation. Sidebar navigation highlights use a sliding background indicator that moves to the active item with a 250ms spring-like transition.
        </p>
        <div className="grid grid-cols-3 gap-4 p-6 bg-slate-50 rounded-xl">
          <div className="text-center p-4">
            <div className="text-xs text-slate-500 mb-3">Fade In</div>
            <div className="w-full h-20 bg-white rounded-lg shadow-sm flex items-center justify-center text-xs text-slate-400 animate-fade-in">Content appears</div>
          </div>
          <div className="text-center p-4">
            <div className="text-xs text-slate-500 mb-3">Slide Up</div>
            <div className="w-full h-20 bg-white rounded-lg shadow-sm flex items-center justify-center text-xs text-slate-400 animate-slide-up">Content rises</div>
          </div>
          <div className="text-center p-4">
            <div className="text-xs text-slate-500 mb-3">Slide In</div>
            <div className="w-full h-20 bg-white rounded-lg shadow-sm flex items-center justify-center text-xs text-slate-400 animate-slide-in">Content enters</div>
          </div>
        </div>
      </section>

      {/* Loading States */}
      <section className="bg-gradient-to-br from-white to-slate-50/80 shadow-sm rounded-2xl p-8">
        <h3 className="text-lg font-semibold text-slate-800 mb-4">Loading States</h3>
        <p className="text-sm leading-relaxed text-slate-600 max-w-4xl mb-6">
          Three loading patterns are used depending on context. Full-page loads display a centered pulsing Iklavya logo. Section loads use skeleton placeholders that match the expected content layout with a shimmer animation (a 1.5s infinite linear gradient sweep from left to right). Inline operations like AI suggestion generation use a subtle three-dot pulse animation next to the triggering element.
        </p>
        <div className="grid grid-cols-3 gap-6 p-6 bg-slate-50 rounded-xl">
          <div>
            <div className="text-xs text-slate-500 mb-3">Skeleton Loader</div>
            <div className="space-y-3 p-4 bg-white rounded-lg">
              <div className="h-4 bg-slate-200 rounded animate-pulse w-3/4" />
              <div className="h-3 bg-slate-200 rounded animate-pulse w-full" />
              <div className="h-3 bg-slate-200 rounded animate-pulse w-5/6" />
              <div className="h-8 bg-slate-200 rounded-lg animate-pulse w-1/3 mt-4" />
            </div>
          </div>
          <div>
            <div className="text-xs text-slate-500 mb-3">Logo Pulse</div>
            <div className="flex items-center justify-center p-4 bg-white rounded-lg h-[104px]">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-600 to-violet-600 flex items-center justify-center text-white font-bold animate-pulse">
                I
              </div>
            </div>
          </div>
          <div>
            <div className="text-xs text-slate-500 mb-3">Inline Dots</div>
            <div className="flex items-center gap-2 p-4 bg-white rounded-lg h-[104px] justify-center">
              <span className="text-sm text-slate-500">Generating</span>
              <div className="flex gap-1">
                <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-bounce" style={{ animationDelay: '0ms' }} />
                <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-bounce" style={{ animationDelay: '150ms' }} />
                <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-bounce" style={{ animationDelay: '300ms' }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feedback Patterns */}
      <section className="bg-gradient-to-br from-white to-slate-50/80 shadow-sm rounded-2xl p-8">
        <h3 className="text-lg font-semibold text-slate-800 mb-4">Feedback Patterns</h3>
        <p className="text-sm leading-relaxed text-slate-600 max-w-4xl">
          Success confirmations appear as a brief green toast notification that slides in from the top-right, displays for 3 seconds, and slides out. Error states use inline red text with a subtle shake animation (3 cycles of 4px horizontal displacement over 400ms). Form validation errors appear with a fade-in beneath the relevant field. Destructive action confirmations use a modal with a 200ms scale-in animation from 0.95 to 1.0.
        </p>
      </section>
    </div>
  );
}
