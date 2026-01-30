"use client";

export default function AccessibilitySpec() {
  const contrastData = [
    { label: 'Primary #4F46E5 on white', ratio: '6.4:1', level: 'AAA', color: 'bg-indigo-600' },
    { label: 'Success #059669 on white', ratio: '4.6:1', level: 'AA', color: 'bg-emerald-600' },
    { label: 'Warning #D97706 on white', ratio: '3.2:1', level: 'AA Large', color: 'bg-amber-600' },
    { label: 'Error #DC2626 on white', ratio: '4.6:1', level: 'AA', color: 'bg-rose-600' },
  ];

  return (
    <div className="space-y-8 animate-fade-in">
      <section className="bg-gradient-to-br from-white to-slate-50/80 shadow-sm rounded-2xl p-8">
        <h2 className="text-2xl font-bold text-slate-900 mb-2">Accessibility Standards and Implementation</h2>
        <div className="h-1 w-20 bg-gradient-to-r from-indigo-600 to-violet-500 rounded-full mb-8" />
        <p className="text-sm leading-relaxed text-slate-600 max-w-4xl mb-8">
          Iklavya is designed to meet WCAG 2.1 Level AA compliance across all features. Accessibility is not a separate workstream but an integrated aspect of every component, interaction, and content decision. The following specifications ensure the platform is usable by students with diverse abilities, including those using assistive technologies, keyboard-only navigation, or operating in constrained environments.
        </p>

        <h3 className="text-lg font-semibold text-slate-800 mb-4">Color and Contrast</h3>
        <p className="text-sm leading-relaxed text-slate-600 max-w-4xl mb-6">
          All text elements maintain a minimum contrast ratio of 4.5:1 against their backgrounds for normal text and 3:1 for large text (18px or 14px bold). The primary indigo (#4F46E5) against white backgrounds achieves a 6.4:1 ratio. Status indicators never rely solely on color -- every colored badge, progress bar, and state indicator includes either text labels, icons, or patterns as secondary identifiers. The platform includes a high-contrast mode toggle that increases all contrast ratios by approximately 30%.
        </p>

        <div className="grid grid-cols-4 gap-4 mb-10">
          {contrastData.map((c, i) => (
            <div key={i} className="bg-gradient-to-br from-slate-50 to-white shadow-sm rounded-xl p-5 transition-all duration-300 hover:shadow-md">
              <div className={`w-10 h-10 rounded-lg ${c.color} mb-3`} />
              <div className="text-xs text-slate-500 mb-1">{c.label}</div>
              <div className="text-lg font-bold text-slate-900">{c.ratio}</div>
              <div className={`text-xs font-medium mt-1 inline-block px-2 py-0.5 rounded ${c.level === 'AAA' ? 'bg-emerald-100 text-emerald-700' : c.level === 'AA' ? 'bg-cyan-100 text-cyan-700' : 'bg-amber-100 text-amber-700'}`}>
                {c.level}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-gradient-to-br from-white to-slate-50/80 shadow-sm rounded-2xl p-8">
        <h3 className="text-lg font-semibold text-slate-800 mb-4">Keyboard Navigation</h3>
        <p className="text-sm leading-relaxed text-slate-600 max-w-4xl mb-6">
          Every interactive element is reachable via Tab key in a logical reading order. The sidebar navigation supports arrow key movement between items. Modal dialogs implement focus trapping -- Tab cycles only within the modal until it is dismissed. Skip-to-content links appear on first Tab press on every page. Keyboard shortcuts include Cmd/Ctrl+K for global search, Escape to close modals and dropdowns, and Enter/Space to activate buttons and links.
        </p>
        <div className="flex gap-3 flex-wrap">
          {[
            { key: 'Tab', desc: 'Navigate forward' },
            { key: 'Shift+Tab', desc: 'Navigate backward' },
            { key: 'Enter / Space', desc: 'Activate element' },
            { key: 'Escape', desc: 'Close / Dismiss' },
            { key: 'Cmd+K', desc: 'Global search' },
            { key: 'Arrow keys', desc: 'Menu navigation' },
          ].map((k, i) => (
            <div key={i} className="flex items-center gap-2 px-3 py-2 bg-slate-50 rounded-lg">
              <kbd className="px-2 py-0.5 bg-white border border-slate-200 rounded text-xs font-mono text-slate-700 shadow-sm">{k.key}</kbd>
              <span className="text-xs text-slate-500">{k.desc}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-gradient-to-br from-white to-slate-50/80 shadow-sm rounded-2xl p-8">
        <h3 className="text-lg font-semibold text-slate-800 mb-4">Screen Reader Support</h3>
        <p className="text-sm leading-relaxed text-slate-600 max-w-4xl">
          Semantic HTML elements are used throughout -- nav for navigation, main for primary content, section with aria-labelledby for content sections, and button elements for all clickable actions. Dynamic content updates, such as live interview metrics and exam timer countdowns, use aria-live regions with appropriate politeness levels. Progress bars include aria-valuenow, aria-valuemin, and aria-valuemax attributes. Form inputs are associated with labels using htmlFor, and error messages are linked via aria-describedby.
        </p>
      </section>

      <section className="bg-gradient-to-br from-white to-slate-50/80 shadow-sm rounded-2xl p-8">
        <h3 className="text-lg font-semibold text-slate-800 mb-4">Reduced Motion</h3>
        <p className="text-sm leading-relaxed text-slate-600 max-w-4xl">
          All animations respect the prefers-reduced-motion media query. When reduced motion is enabled, transitions are replaced with instant state changes, loading shimmer animations are replaced with static skeleton placeholders, and the page transition fade is reduced to a simple opacity swap without translation. This ensures the platform remains fully functional and visually coherent for users who experience discomfort with motion.
        </p>
      </section>
    </div>
  );
}
