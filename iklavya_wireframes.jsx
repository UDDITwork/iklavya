import React, { useState } from 'react';

const IklavyaWireframes = () => {
  const [activeView, setActiveView] = useState('overview');
  const [activeScreen, setActiveScreen] = useState('dashboard');

  const screens = [
    { id: 'dashboard', name: 'Student Dashboard', status: 'Primary' },
    { id: 'resume', name: 'Resume Builder', status: 'Core' },
    { id: 'interview', name: 'Interview Practice', status: 'Core' },
    { id: 'exams', name: 'Mini Exams', status: 'Core' },
    { id: 'jobs', name: 'Job Matching', status: 'Core' },
    { id: 'profile', name: 'Profile & Settings', status: 'Secondary' },
    { id: 'components', name: 'Component Library', status: 'System' },
  ];

  const Annotation = ({ number, text, position = 'right' }) => (
    <div className={`absolute flex items-start gap-2 ${position === 'left' ? 'flex-row-reverse right-full mr-3' : 'left-full ml-3'}`} style={{ top: '50%', transform: 'translateY(-50%)' }}>
      <div className="w-6 h-6 rounded-full bg-rose-500 text-white text-xs flex items-center justify-center flex-shrink-0 font-bold">
        {number}
      </div>
      <div className="text-xs text-slate-600 bg-rose-50 border border-rose-200 rounded px-2 py-1 whitespace-nowrap max-w-48">
        {text}
      </div>
    </div>
  );

  const WireframeBox = ({ children, className = '', dashed = false, label = '' }) => (
    <div className={`relative ${dashed ? 'border-2 border-dashed border-slate-300' : 'border border-slate-300'} bg-white rounded-lg ${className}`}>
      {label && (
        <div className="absolute -top-2.5 left-3 px-2 bg-white text-[10px] font-medium text-slate-500 uppercase tracking-wide">
          {label}
        </div>
      )}
      {children}
    </div>
  );

  return (
    <div className="min-h-screen bg-slate-100 text-slate-800 font-sans">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-600 to-violet-600 flex items-center justify-center text-white font-bold">
                I
              </div>
              <div>
                <h1 className="text-lg font-bold text-slate-900">Iklavya - UI/UX Wireframe Document</h1>
                <p className="text-xs text-slate-500">Complete Interface Planning | Version 2.0 | January 2026</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="text-right text-xs">
                <div className="text-slate-500">Prepared by</div>
                <div className="font-medium text-slate-700">PATMASTER Design Team</div>
              </div>
              <div className="w-px h-8 bg-slate-200" />
              <div className="flex gap-1">
                {['overview', 'screens', 'flows'].map(view => (
                  <button
                    key={view}
                    onClick={() => setActiveView(view)}
                    className={`px-3 py-1.5 text-xs font-medium rounded-lg capitalize ${
                      activeView === view 
                        ? 'bg-indigo-100 text-indigo-700' 
                        : 'text-slate-500 hover:bg-slate-100'
                    }`}
                  >
                    {view}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-8">
        
        {/* Overview Section */}
        {activeView === 'overview' && (
          <div className="space-y-8">
            {/* Design System Summary */}
            <section className="bg-white rounded-2xl border border-slate-200 p-6">
              <h2 className="text-lg font-bold mb-6 text-slate-900">Design System Overview</h2>
              
              <div className="grid grid-cols-4 gap-6">
                {/* Colors */}
                <div>
                  <h3 className="text-sm font-semibold mb-3 text-slate-700">Color Palette</h3>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-lg bg-indigo-600" />
                      <div className="text-xs">
                        <div className="font-medium">Primary</div>
                        <div className="text-slate-500">#4F46E5</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-lg bg-emerald-500" />
                      <div className="text-xs">
                        <div className="font-medium">Success</div>
                        <div className="text-slate-500">#10B981</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-lg bg-amber-500" />
                      <div className="text-xs">
                        <div className="font-medium">Warning</div>
                        <div className="text-slate-500">#F59E0B</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-lg bg-rose-500" />
                      <div className="text-xs">
                        <div className="font-medium">Error</div>
                        <div className="text-slate-500">#EF4444</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-lg bg-slate-100 border border-slate-200" />
                      <div className="text-xs">
                        <div className="font-medium">Background</div>
                        <div className="text-slate-500">#F8FAFC</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Typography */}
                <div>
                  <h3 className="text-sm font-semibold mb-3 text-slate-700">Typography Scale</h3>
                  <div className="space-y-2">
                    <div>
                      <div className="text-2xl font-bold">Heading 1</div>
                      <div className="text-[10px] text-slate-500">32px / Bold / Inter</div>
                    </div>
                    <div>
                      <div className="text-xl font-semibold">Heading 2</div>
                      <div className="text-[10px] text-slate-500">24px / Semibold</div>
                    </div>
                    <div>
                      <div className="text-base font-medium">Body Large</div>
                      <div className="text-[10px] text-slate-500">16px / Medium</div>
                    </div>
                    <div>
                      <div className="text-sm">Body Regular</div>
                      <div className="text-[10px] text-slate-500">14px / Regular</div>
                    </div>
                    <div>
                      <div className="text-xs text-slate-500">Caption</div>
                      <div className="text-[10px] text-slate-500">12px / Regular</div>
                    </div>
                  </div>
                </div>

                {/* Spacing */}
                <div>
                  <h3 className="text-sm font-semibold mb-3 text-slate-700">Spacing System</h3>
                  <div className="space-y-2">
                    {[
                      { name: 'xs', value: '4px', width: 'w-1' },
                      { name: 'sm', value: '8px', width: 'w-2' },
                      { name: 'md', value: '16px', width: 'w-4' },
                      { name: 'lg', value: '24px', width: 'w-6' },
                      { name: 'xl', value: '32px', width: 'w-8' },
                      { name: '2xl', value: '48px', width: 'w-12' },
                    ].map(s => (
                      <div key={s.name} className="flex items-center gap-3">
                        <div className={`h-3 ${s.width} bg-indigo-200 rounded`} />
                        <div className="text-xs">
                          <span className="font-medium">{s.name}</span>
                          <span className="text-slate-500 ml-2">{s.value}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Border Radius */}
                <div>
                  <h3 className="text-sm font-semibold mb-3 text-slate-700">Border Radius</h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-slate-200 rounded" />
                      <div className="text-xs"><span className="font-medium">sm</span> - 4px</div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-slate-200 rounded-lg" />
                      <div className="text-xs"><span className="font-medium">md</span> - 8px</div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-slate-200 rounded-xl" />
                      <div className="text-xs"><span className="font-medium">lg</span> - 12px</div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-slate-200 rounded-2xl" />
                      <div className="text-xs"><span className="font-medium">xl</span> - 16px</div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-slate-200 rounded-full" />
                      <div className="text-xs"><span className="font-medium">full</span> - 50%</div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Screen Map */}
            <section className="bg-white rounded-2xl border border-slate-200 p-6">
              <h2 className="text-lg font-bold mb-6 text-slate-900">Application Screen Map</h2>
              
              <div className="relative">
                {/* Central Node */}
                <div className="flex justify-center mb-8">
                  <div className="px-6 py-4 bg-indigo-600 text-white rounded-2xl text-center">
                    <div className="font-bold">Student Portal</div>
                    <div className="text-xs text-indigo-200">Main Entry Point</div>
                  </div>
                </div>

                {/* Level 1 Screens */}
                <div className="grid grid-cols-5 gap-4 mb-6">
                  {[
                    { name: 'Dashboard', screens: 3, priority: 'P0' },
                    { name: 'Resume Builder', screens: 4, priority: 'P0' },
                    { name: 'Interview Bot', screens: 5, priority: 'P0' },
                    { name: 'Mini Exams', screens: 4, priority: 'P1' },
                    { name: 'Job Matching', screens: 3, priority: 'P1' },
                  ].map((item, i) => (
                    <div key={i} className="relative">
                      <div className="absolute left-1/2 -top-4 w-px h-4 bg-slate-300" />
                      <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl text-center">
                        <div className="font-medium text-sm">{item.name}</div>
                        <div className="text-xs text-slate-500 mt-1">{item.screens} screens</div>
                        <div className={`text-[10px] mt-2 px-2 py-0.5 rounded-full inline-block ${
                          item.priority === 'P0' ? 'bg-rose-100 text-rose-700' : 'bg-amber-100 text-amber-700'
                        }`}>
                          {item.priority}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Level 2 - Supporting */}
                <div className="grid grid-cols-4 gap-4 max-w-3xl mx-auto">
                  {[
                    { name: 'Profile Settings', screens: 2 },
                    { name: 'Certifications', screens: 2 },
                    { name: 'Progress Reports', screens: 2 },
                    { name: 'Notifications', screens: 1 },
                  ].map((item, i) => (
                    <div key={i} className="p-3 bg-slate-100 border border-slate-200 rounded-lg text-center">
                      <div className="font-medium text-xs">{item.name}</div>
                      <div className="text-[10px] text-slate-500">{item.screens} screens</div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Tech Specs */}
            <section className="bg-white rounded-2xl border border-slate-200 p-6">
              <h2 className="text-lg font-bold mb-6 text-slate-900">Technical Specifications</h2>
              
              <div className="grid grid-cols-3 gap-6">
                <div className="p-4 bg-slate-50 rounded-xl">
                  <h3 className="font-semibold text-sm mb-3">Frontend Stack</h3>
                  <div className="space-y-2 text-xs">
                    <div className="flex justify-between"><span>Framework</span><span className="font-medium">Next.js 14</span></div>
                    <div className="flex justify-between"><span>UI Library</span><span className="font-medium">React 18</span></div>
                    <div className="flex justify-between"><span>Styling</span><span className="font-medium">Tailwind CSS</span></div>
                    <div className="flex justify-between"><span>State</span><span className="font-medium">Zustand</span></div>
                    <div className="flex justify-between"><span>Forms</span><span className="font-medium">React Hook Form</span></div>
                    <div className="flex justify-between"><span>Charts</span><span className="font-medium">Recharts</span></div>
                  </div>
                </div>

                <div className="p-4 bg-slate-50 rounded-xl">
                  <h3 className="font-semibold text-sm mb-3">Responsive Breakpoints</h3>
                  <div className="space-y-2 text-xs">
                    <div className="flex justify-between"><span>Mobile</span><span className="font-medium">320px - 640px</span></div>
                    <div className="flex justify-between"><span>Tablet</span><span className="font-medium">641px - 1024px</span></div>
                    <div className="flex justify-between"><span>Desktop</span><span className="font-medium">1025px - 1280px</span></div>
                    <div className="flex justify-between"><span>Large</span><span className="font-medium">1281px+</span></div>
                  </div>
                  <div className="mt-3 pt-3 border-t border-slate-200 text-xs text-slate-500">
                    Mobile-first approach with progressive enhancement
                  </div>
                </div>

                <div className="p-4 bg-slate-50 rounded-xl">
                  <h3 className="font-semibold text-sm mb-3">Component Categories</h3>
                  <div className="space-y-2 text-xs">
                    <div className="flex justify-between"><span>Atoms</span><span className="font-medium">24 components</span></div>
                    <div className="flex justify-between"><span>Molecules</span><span className="font-medium">18 components</span></div>
                    <div className="flex justify-between"><span>Organisms</span><span className="font-medium">12 components</span></div>
                    <div className="flex justify-between"><span>Templates</span><span className="font-medium">6 layouts</span></div>
                    <div className="flex justify-between"><span>Pages</span><span className="font-medium">22 screens</span></div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        )}

        {/* Screens Section */}
        {activeView === 'screens' && (
          <div className="flex gap-6">
            {/* Screen Navigation */}
            <div className="w-56 flex-shrink-0">
              <div className="bg-white rounded-xl border border-slate-200 p-4 sticky top-24">
                <h3 className="text-sm font-semibold mb-3 text-slate-700">Screens</h3>
                <div className="space-y-1">
                  {screens.map(screen => (
                    <button
                      key={screen.id}
                      onClick={() => setActiveScreen(screen.id)}
                      className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                        activeScreen === screen.id
                          ? 'bg-indigo-100 text-indigo-700 font-medium'
                          : 'text-slate-600 hover:bg-slate-50'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span>{screen.name}</span>
                        <span className={`text-[10px] px-1.5 py-0.5 rounded ${
                          screen.status === 'Primary' ? 'bg-indigo-200 text-indigo-700' :
                          screen.status === 'Core' ? 'bg-emerald-100 text-emerald-700' :
                          screen.status === 'System' ? 'bg-violet-100 text-violet-700' :
                          'bg-slate-100 text-slate-600'
                        }`}>
                          {screen.status}
                        </span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Screen Content */}
            <div className="flex-1 space-y-6">
              
              {/* Dashboard Wireframe */}
              {activeScreen === 'dashboard' && (
                <>
                  <div className="bg-white rounded-2xl border border-slate-200 p-6">
                    <div className="flex items-center justify-between mb-6">
                      <div>
                        <h2 className="text-xl font-bold text-slate-900">Student Dashboard</h2>
                        <p className="text-sm text-slate-500">Primary landing screen after login - Central hub for all activities</p>
                      </div>
                      <div className="flex gap-2">
                        <span className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-xs font-medium">Desktop</span>
                        <span className="px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-xs">1440 x 900</span>
                      </div>
                    </div>

                    {/* Wireframe */}
                    <div className="border-2 border-slate-200 rounded-xl bg-slate-50 p-4">
                      <div className="flex gap-4 min-h-[600px]">
                        
                        {/* Sidebar */}
                        <div className="w-56 flex-shrink-0 relative">
                          <WireframeBox className="h-full p-4" label="Sidebar Navigation">
                            {/* Logo */}
                            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-200">
                              <div className="w-10 h-10 bg-slate-300 rounded-xl" />
                              <div>
                                <div className="w-20 h-3 bg-slate-300 rounded mb-1" />
                                <div className="w-12 h-2 bg-slate-200 rounded" />
                              </div>
                            </div>

                            {/* Nav Items */}
                            <div className="space-y-1">
                              <div className="flex items-center gap-3 p-3 bg-indigo-100 rounded-lg">
                                <div className="w-5 h-5 bg-indigo-400 rounded" />
                                <div className="w-20 h-3 bg-indigo-400 rounded" />
                              </div>
                              {['Resume', 'Interview', 'Exams', 'Jobs', 'Certificates'].map((item, i) => (
                                <div key={i} className="flex items-center gap-3 p-3 hover:bg-slate-100 rounded-lg cursor-pointer">
                                  <div className="w-5 h-5 bg-slate-300 rounded" />
                                  <div className="w-16 h-2.5 bg-slate-300 rounded" />
                                </div>
                              ))}
                            </div>

                            {/* Bottom Section */}
                            <div className="absolute bottom-4 left-4 right-4">
                              <div className="p-3 bg-slate-100 rounded-lg">
                                <div className="flex items-center gap-3">
                                  <div className="w-8 h-8 bg-slate-300 rounded-full" />
                                  <div>
                                    <div className="w-20 h-2.5 bg-slate-300 rounded mb-1" />
                                    <div className="w-16 h-2 bg-slate-200 rounded" />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </WireframeBox>
                          <div className="absolute -right-2 top-4 w-6 h-6 rounded-full bg-rose-500 text-white text-xs flex items-center justify-center font-bold">1</div>
                        </div>

                        {/* Main Content */}
                        <div className="flex-1 space-y-4">
                          {/* Header */}
                          <div className="relative">
                            <WireframeBox className="p-4" label="Top Header">
                              <div className="flex items-center justify-between">
                                <div>
                                  <div className="w-48 h-4 bg-slate-300 rounded mb-2" />
                                  <div className="w-64 h-3 bg-slate-200 rounded" />
                                </div>
                                <div className="flex items-center gap-4">
                                  <div className="w-64 h-10 bg-slate-100 rounded-lg border border-slate-200 flex items-center px-3">
                                    <div className="w-4 h-4 bg-slate-300 rounded mr-2" />
                                    <div className="w-24 h-2.5 bg-slate-200 rounded" />
                                  </div>
                                  <div className="w-10 h-10 bg-slate-200 rounded-full" />
                                  <div className="w-10 h-10 bg-slate-200 rounded-full" />
                                </div>
                              </div>
                            </WireframeBox>
                            <div className="absolute -right-2 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-rose-500 text-white text-xs flex items-center justify-center font-bold">2</div>
                          </div>

                          {/* Stats Row */}
                          <div className="grid grid-cols-4 gap-4 relative">
                            {['Readiness Score', 'Courses', 'Interviews', 'Certifications'].map((stat, i) => (
                              <WireframeBox key={i} className="p-4" label={i === 0 ? "Score Card" : ""}>
                                <div className="w-20 h-2.5 bg-slate-200 rounded mb-3" />
                                <div className="w-16 h-8 bg-slate-300 rounded mb-2" />
                                <div className="h-2 bg-slate-100 rounded-full">
                                  <div className="h-full bg-emerald-400 rounded-full" style={{ width: `${60 + i * 10}%` }} />
                                </div>
                              </WireframeBox>
                            ))}
                            <div className="absolute -right-2 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-rose-500 text-white text-xs flex items-center justify-center font-bold">3</div>
                          </div>

                          {/* Main Grid */}
                          <div className="grid grid-cols-3 gap-4">
                            {/* Skill Radar */}
                            <div className="relative">
                              <WireframeBox className="p-4 h-64" label="Skills Chart">
                                <div className="w-24 h-3 bg-slate-200 rounded mb-4" />
                                <div className="flex items-center justify-center h-44">
                                  <div className="w-40 h-40 border-2 border-slate-300 rounded-full flex items-center justify-center">
                                    <div className="w-28 h-28 border-2 border-slate-200 rounded-full flex items-center justify-center">
                                      <div className="w-16 h-16 border-2 border-slate-200 rounded-full" />
                                    </div>
                                  </div>
                                </div>
                              </WireframeBox>
                              <div className="absolute -right-2 top-4 w-6 h-6 rounded-full bg-rose-500 text-white text-xs flex items-center justify-center font-bold">4</div>
                            </div>

                            {/* Course Progress */}
                            <div className="relative">
                              <WireframeBox className="p-4 h-64" label="Course Progress">
                                <div className="w-28 h-3 bg-slate-200 rounded mb-4" />
                                <div className="space-y-3">
                                  {[85, 60, 40, 25].map((p, i) => (
                                    <div key={i}>
                                      <div className="flex justify-between mb-1">
                                        <div className="w-24 h-2.5 bg-slate-200 rounded" />
                                        <div className="w-8 h-2.5 bg-slate-200 rounded" />
                                      </div>
                                      <div className="h-2 bg-slate-100 rounded-full">
                                        <div className="h-full bg-indigo-400 rounded-full" style={{ width: `${p}%` }} />
                                      </div>
                                    </div>
                                  ))}
                                </div>
                              </WireframeBox>
                              <div className="absolute -right-2 top-4 w-6 h-6 rounded-full bg-rose-500 text-white text-xs flex items-center justify-center font-bold">5</div>
                            </div>

                            {/* Quick Actions */}
                            <div className="relative">
                              <WireframeBox className="p-4 h-64" label="Quick Actions">
                                <div className="w-24 h-3 bg-slate-200 rounded mb-4" />
                                <div className="space-y-2">
                                  {[1,2,3,4].map(i => (
                                    <div key={i} className="p-3 bg-slate-50 border border-slate-200 rounded-lg flex items-center gap-3">
                                      <div className="w-8 h-8 bg-slate-200 rounded-lg" />
                                      <div className="w-24 h-2.5 bg-slate-200 rounded" />
                                    </div>
                                  ))}
                                </div>
                              </WireframeBox>
                              <div className="absolute -right-2 top-4 w-6 h-6 rounded-full bg-rose-500 text-white text-xs flex items-center justify-center font-bold">6</div>
                            </div>
                          </div>

                          {/* Job Recommendations */}
                          <div className="relative">
                            <WireframeBox className="p-4" label="Job Recommendations">
                              <div className="flex items-center justify-between mb-4">
                                <div className="w-32 h-3 bg-slate-200 rounded" />
                                <div className="w-16 h-2.5 bg-indigo-200 rounded" />
                              </div>
                              <div className="grid grid-cols-3 gap-4">
                                {[1,2,3].map(i => (
                                  <div key={i} className="p-3 bg-slate-50 border border-slate-200 rounded-lg">
                                    <div className="flex items-start justify-between mb-2">
                                      <div>
                                        <div className="w-28 h-3 bg-slate-300 rounded mb-1" />
                                        <div className="w-20 h-2 bg-slate-200 rounded" />
                                      </div>
                                      <div className="w-12 h-5 bg-emerald-100 rounded" />
                                    </div>
                                    <div className="flex gap-1 mt-3">
                                      <div className="w-12 h-4 bg-slate-100 rounded" />
                                      <div className="w-12 h-4 bg-slate-100 rounded" />
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </WireframeBox>
                            <div className="absolute -right-2 top-4 w-6 h-6 rounded-full bg-rose-500 text-white text-xs flex items-center justify-center font-bold">7</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Annotations */}
                  <div className="bg-white rounded-2xl border border-slate-200 p-6">
                    <h3 className="text-lg font-bold mb-4 text-slate-900">Component Specifications</h3>
                    <div className="grid grid-cols-2 gap-4">
                      {[
                        { num: 1, title: 'Sidebar Navigation', desc: 'Fixed left sidebar with collapsible menu. Contains primary navigation, user profile, and settings access. Width: 224px (collapsed: 64px)' },
                        { num: 2, title: 'Top Header', desc: 'Contains greeting text with user name, global search bar (Cmd+K shortcut), notification bell, and profile dropdown' },
                        { num: 3, title: 'Readiness Score Cards', desc: 'Four metric cards showing: Overall readiness score (0-100), Courses completed, Interview sessions, Certificates earned. Each with progress indicator' },
                        { num: 4, title: 'Skills Radar Chart', desc: '6-axis radar chart showing: Technical, Communication, Problem Solving, Leadership, Teamwork, Creativity. Built with Recharts' },
                        { num: 5, title: 'Course Progress', desc: 'List of active courses with horizontal progress bars. Shows course name, completion %, and estimated time remaining' },
                        { num: 6, title: 'Quick Actions', desc: 'CTA buttons for: Start Interview Practice, Take Assessment, Update Resume, Browse Jobs. Icon + label format' },
                        { num: 7, title: 'Job Recommendations', desc: 'AI-matched job cards showing: Title, Company, Match %, Required skills. "View All" link to Job Matching page' },
                      ].map(item => (
                        <div key={item.num} className="flex gap-3 p-3 bg-slate-50 rounded-lg">
                          <div className="w-6 h-6 rounded-full bg-rose-500 text-white text-xs flex items-center justify-center flex-shrink-0 font-bold">
                            {item.num}
                          </div>
                          <div>
                            <div className="font-medium text-sm">{item.title}</div>
                            <div className="text-xs text-slate-500 mt-1">{item.desc}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </>
              )}

              {/* Resume Builder Wireframe */}
              {activeScreen === 'resume' && (
                <>
                  <div className="bg-white rounded-2xl border border-slate-200 p-6">
                    <div className="flex items-center justify-between mb-6">
                      <div>
                        <h2 className="text-xl font-bold text-slate-900">AI Resume Builder</h2>
                        <p className="text-sm text-slate-500">Multi-step resume generation with AI assistance and live preview</p>
                      </div>
                      <div className="flex gap-2">
                        <span className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-xs font-medium">Core Feature</span>
                      </div>
                    </div>

                    {/* Wireframe */}
                    <div className="border-2 border-slate-200 rounded-xl bg-slate-50 p-4">
                      <div className="flex gap-6 min-h-[550px]">
                        {/* Left Panel - Form */}
                        <div className="w-1/2 space-y-4">
                          {/* Step Indicator */}
                          <WireframeBox className="p-4" label="Progress Stepper">
                            <div className="flex items-center justify-between">
                              {['Personal', 'Education', 'Experience', 'Skills', 'Review'].map((step, i) => (
                                <div key={i} className="flex items-center">
                                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-medium ${
                                    i === 0 ? 'bg-indigo-600 text-white' : i < 2 ? 'bg-indigo-100 text-indigo-600' : 'bg-slate-200 text-slate-500'
                                  }`}>
                                    {i + 1}
                                  </div>
                                  {i < 4 && <div className={`w-12 h-1 ${i < 1 ? 'bg-indigo-600' : 'bg-slate-200'}`} />}
                                </div>
                              ))}
                            </div>
                          </WireframeBox>

                          {/* Form Fields */}
                          <WireframeBox className="p-4 flex-1" label="Form Section">
                            <div className="w-32 h-4 bg-slate-300 rounded mb-6" />
                            
                            <div className="grid grid-cols-2 gap-4 mb-4">
                              <div>
                                <div className="w-20 h-2.5 bg-slate-200 rounded mb-2" />
                                <div className="h-10 bg-slate-100 border border-slate-200 rounded-lg" />
                              </div>
                              <div>
                                <div className="w-20 h-2.5 bg-slate-200 rounded mb-2" />
                                <div className="h-10 bg-slate-100 border border-slate-200 rounded-lg" />
                              </div>
                            </div>

                            <div className="mb-4">
                              <div className="w-16 h-2.5 bg-slate-200 rounded mb-2" />
                              <div className="h-10 bg-slate-100 border border-slate-200 rounded-lg" />
                            </div>

                            <div className="mb-4">
                              <div className="w-24 h-2.5 bg-slate-200 rounded mb-2" />
                              <div className="h-10 bg-slate-100 border border-slate-200 rounded-lg" />
                            </div>

                            <div className="mb-4">
                              <div className="w-28 h-2.5 bg-slate-200 rounded mb-2" />
                              <div className="h-24 bg-slate-100 border border-slate-200 rounded-lg" />
                            </div>

                            {/* AI Assist Button */}
                            <div className="p-3 bg-indigo-50 border border-indigo-200 rounded-lg flex items-center gap-3">
                              <div className="w-8 h-8 bg-indigo-200 rounded-lg" />
                              <div>
                                <div className="w-32 h-2.5 bg-indigo-300 rounded mb-1" />
                                <div className="w-48 h-2 bg-indigo-200 rounded" />
                              </div>
                            </div>
                          </WireframeBox>

                          {/* Navigation */}
                          <div className="flex justify-between">
                            <div className="w-24 h-10 bg-slate-200 rounded-lg" />
                            <div className="w-32 h-10 bg-indigo-600 rounded-lg" />
                          </div>
                        </div>

                        {/* Right Panel - Preview */}
                        <div className="w-1/2">
                          <WireframeBox className="h-full p-4" label="Live PDF Preview">
                            <div className="flex items-center justify-between mb-4">
                              <div className="w-24 h-3 bg-slate-200 rounded" />
                              <div className="flex gap-2">
                                <div className="w-8 h-8 bg-slate-100 rounded-lg" />
                                <div className="w-8 h-8 bg-slate-100 rounded-lg" />
                                <div className="w-20 h-8 bg-indigo-100 rounded-lg" />
                              </div>
                            </div>

                            {/* Resume Preview */}
                            <div className="bg-white border border-slate-200 rounded-lg p-6 h-[420px] overflow-hidden">
                              <div className="text-center mb-4">
                                <div className="w-32 h-4 bg-slate-300 rounded mx-auto mb-2" />
                                <div className="w-48 h-2.5 bg-slate-200 rounded mx-auto" />
                              </div>
                              
                              <div className="flex gap-4 justify-center mb-4 text-xs">
                                <div className="w-20 h-2 bg-slate-200 rounded" />
                                <div className="w-24 h-2 bg-slate-200 rounded" />
                                <div className="w-20 h-2 bg-slate-200 rounded" />
                              </div>

                              <div className="border-t border-slate-200 pt-4 mb-4">
                                <div className="w-20 h-3 bg-slate-300 rounded mb-2" />
                                <div className="w-full h-2 bg-slate-100 rounded mb-1" />
                                <div className="w-full h-2 bg-slate-100 rounded mb-1" />
                                <div className="w-3/4 h-2 bg-slate-100 rounded" />
                              </div>

                              <div className="border-t border-slate-200 pt-4 mb-4">
                                <div className="w-24 h-3 bg-slate-300 rounded mb-2" />
                                <div className="flex justify-between mb-2">
                                  <div className="w-32 h-2.5 bg-slate-200 rounded" />
                                  <div className="w-20 h-2 bg-slate-200 rounded" />
                                </div>
                                <div className="w-24 h-2 bg-slate-200 rounded mb-2" />
                                <div className="w-full h-2 bg-slate-100 rounded mb-1" />
                                <div className="w-full h-2 bg-slate-100 rounded" />
                              </div>

                              <div className="border-t border-slate-200 pt-4">
                                <div className="w-16 h-3 bg-slate-300 rounded mb-2" />
                                <div className="flex flex-wrap gap-2">
                                  {[1,2,3,4,5].map(i => (
                                    <div key={i} className="w-16 h-5 bg-slate-100 rounded" />
                                  ))}
                                </div>
                              </div>
                            </div>
                          </WireframeBox>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* User Flow */}
                  <div className="bg-white rounded-2xl border border-slate-200 p-6">
                    <h3 className="text-lg font-bold mb-4 text-slate-900">Resume Builder User Flow</h3>
                    <div className="flex items-center justify-between">
                      {[
                        { step: 'Input Profile', desc: 'Fill personal info' },
                        { step: 'Add Education', desc: 'Academic history' },
                        { step: 'Add Experience', desc: 'Work history' },
                        { step: 'Select Skills', desc: 'Skill tags' },
                        { step: 'AI Enhancement', desc: 'Auto-improve content' },
                        { step: 'Download PDF', desc: 'Export final resume' },
                      ].map((item, i) => (
                        <div key={i} className="flex items-center">
                          <div className="text-center">
                            <div className="w-12 h-12 rounded-xl bg-indigo-100 flex items-center justify-center text-indigo-600 font-bold mb-2">
                              {i + 1}
                            </div>
                            <div className="text-xs font-medium">{item.step}</div>
                            <div className="text-[10px] text-slate-500">{item.desc}</div>
                          </div>
                          {i < 5 && (
                            <div className="w-8 h-px bg-slate-300 mx-2" />
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </>
              )}

              {/* Interview Practice Wireframe */}
              {activeScreen === 'interview' && (
                <>
                  <div className="bg-white rounded-2xl border border-slate-200 p-6">
                    <div className="flex items-center justify-between mb-6">
                      <div>
                        <h2 className="text-xl font-bold text-slate-900">AI Interview Practice</h2>
                        <p className="text-sm text-slate-500">Real-time mock interviews with WebRTC video and AI evaluation</p>
                      </div>
                      <div className="flex gap-2">
                        <span className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-xs font-medium">Core Feature</span>
                        <span className="px-3 py-1 bg-rose-100 text-rose-700 rounded-full text-xs font-medium">WebRTC</span>
                      </div>
                    </div>

                    {/* Wireframe */}
                    <div className="border-2 border-slate-200 rounded-xl bg-slate-50 p-4">
                      <div className="flex gap-4 min-h-[500px]">
                        {/* Video Area */}
                        <div className="w-2/3 space-y-4">
                          {/* Main Video */}
                          <WireframeBox className="aspect-video relative" label="Video Feed">
                            <div className="absolute inset-0 bg-slate-200 rounded-lg flex items-center justify-center">
                              <div className="w-24 h-24 rounded-full bg-slate-300 flex items-center justify-center">
                                <div className="w-16 h-16 rounded-full bg-indigo-200" />
                              </div>
                            </div>
                            {/* Self video */}
                            <div className="absolute bottom-4 right-4 w-32 aspect-video bg-slate-300 rounded-lg border-2 border-white" />
                            {/* Timer */}
                            <div className="absolute top-4 right-4 px-3 py-1 bg-white rounded-full text-sm font-mono">
                              12:34
                            </div>
                            {/* Recording indicator */}
                            <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1 bg-white rounded-full">
                              <div className="w-2 h-2 rounded-full bg-rose-500" />
                              <span className="text-xs">REC</span>
                            </div>
                          </WireframeBox>

                          {/* Current Question */}
                          <WireframeBox className="p-4" label="Current Question">
                            <div className="flex items-start gap-4">
                              <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                <span className="text-sm font-medium text-indigo-600">Q3</span>
                              </div>
                              <div className="flex-1">
                                <div className="w-full h-3 bg-slate-200 rounded mb-2" />
                                <div className="w-3/4 h-3 bg-slate-200 rounded mb-3" />
                                <div className="flex gap-4 text-xs text-slate-500">
                                  <span>Technical Interview</span>
                                  <span>|</span>
                                  <span>Behavioral</span>
                                  <span>|</span>
                                  <span className="text-amber-600">2 min remaining</span>
                                </div>
                              </div>
                            </div>
                          </WireframeBox>

                          {/* Controls */}
                          <div className="flex items-center justify-center gap-4">
                            <div className="w-12 h-12 bg-white border border-slate-200 rounded-full" />
                            <div className="w-12 h-12 bg-white border border-slate-200 rounded-full" />
                            <div className="w-14 h-14 bg-rose-500 rounded-full" />
                            <div className="w-12 h-12 bg-white border border-slate-200 rounded-full" />
                            <div className="w-12 h-12 bg-emerald-500 rounded-full" />
                          </div>
                        </div>

                        {/* Analysis Panel */}
                        <div className="w-1/3 space-y-4">
                          <WireframeBox className="p-4" label="Live Analysis">
                            <div className="flex items-center gap-2 mb-4">
                              <div className="w-2 h-2 rounded-full bg-emerald-500" />
                              <div className="w-20 h-2.5 bg-slate-200 rounded" />
                            </div>
                            {['Confidence', 'Clarity', 'Pace', 'Eye Contact'].map((metric, i) => (
                              <div key={i} className="mb-3">
                                <div className="flex justify-between text-xs mb-1">
                                  <span>{metric}</span>
                                  <span>{70 + i * 5}%</span>
                                </div>
                                <div className="h-1.5 bg-slate-100 rounded-full">
                                  <div className="h-full bg-emerald-500 rounded-full" style={{ width: `${70 + i * 5}%` }} />
                                </div>
                              </div>
                            ))}
                          </WireframeBox>

                          <WireframeBox className="p-4" label="Keywords Detected">
                            <div className="w-28 h-2.5 bg-slate-200 rounded mb-3" />
                            <div className="flex flex-wrap gap-2">
                              {['React', 'API', 'debug', 'team', 'agile'].map((word, i) => (
                                <span key={i} className="px-2 py-1 bg-slate-100 rounded text-xs">{word}</span>
                              ))}
                            </div>
                          </WireframeBox>

                          <WireframeBox className="p-4" label="AI Suggestions">
                            <div className="w-20 h-2.5 bg-amber-200 rounded mb-3" />
                            <div className="space-y-2 text-xs text-slate-600">
                              <div className="flex gap-2">
                                <span className="text-amber-500">-</span>
                                <span>Slow down pace</span>
                              </div>
                              <div className="flex gap-2">
                                <span className="text-amber-500">-</span>
                                <span>Use STAR method</span>
                              </div>
                              <div className="flex gap-2">
                                <span className="text-amber-500">-</span>
                                <span>Add metrics</span>
                              </div>
                            </div>
                          </WireframeBox>

                          <WireframeBox className="p-4" label="Session Progress">
                            <div className="w-28 h-2.5 bg-slate-200 rounded mb-3" />
                            <div className="flex gap-2 mb-2">
                              {[1,2,3,4,5].map(q => (
                                <div key={q} className={`flex-1 h-2 rounded-full ${
                                  q < 3 ? 'bg-emerald-500' : q === 3 ? 'bg-indigo-500' : 'bg-slate-200'
                                }`} />
                              ))}
                            </div>
                            <div className="text-xs text-slate-500">Question 3 of 5</div>
                          </WireframeBox>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Interview States */}
                  <div className="bg-white rounded-2xl border border-slate-200 p-6">
                    <h3 className="text-lg font-bold mb-4 text-slate-900">Interview Session States</h3>
                    <div className="grid grid-cols-4 gap-4">
                      {[
                        { state: 'Setup', desc: 'Camera/mic permissions, role selection', color: 'slate' },
                        { state: 'In Progress', desc: 'Active interview with live feedback', color: 'indigo' },
                        { state: 'Processing', desc: 'AI analyzing final responses', color: 'amber' },
                        { state: 'Complete', desc: 'Detailed report with scores', color: 'emerald' },
                      ].map((item, i) => (
                        <div key={i} className={`p-4 rounded-xl bg-${item.color}-50 border border-${item.color}-200`}>
                          <div className={`w-8 h-8 rounded-lg bg-${item.color}-200 mb-3`} />
                          <div className="font-medium text-sm">{item.state}</div>
                          <div className="text-xs text-slate-500 mt-1">{item.desc}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </>
              )}

              {/* Mini Exams Wireframe */}
              {activeScreen === 'exams' && (
                <>
                  <div className="bg-white rounded-2xl border border-slate-200 p-6">
                    <div className="flex items-center justify-between mb-6">
                      <div>
                        <h2 className="text-xl font-bold text-slate-900">AI-Assessed Mini Exams</h2>
                        <p className="text-sm text-slate-500">Module-wise assessments with auto-generated questions and AI evaluation</p>
                      </div>
                      <div className="flex gap-2">
                        <span className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-xs font-medium">Core Feature</span>
                        <span className="px-3 py-1 bg-violet-100 text-violet-700 rounded-full text-xs font-medium">RAG</span>
                      </div>
                    </div>

                    {/* Wireframe - Exam List */}
                    <div className="border-2 border-slate-200 rounded-xl bg-slate-50 p-4 mb-6">
                      <div className="mb-4">
                        <div className="text-sm font-medium text-slate-700 mb-2">Screen 1: Exam Selection</div>
                      </div>
                      <WireframeBox className="p-4">
                        {/* Header */}
                        <div className="flex items-center justify-between mb-6">
                          <div>
                            <div className="w-40 h-4 bg-slate-300 rounded mb-2" />
                            <div className="w-64 h-2.5 bg-slate-200 rounded" />
                          </div>
                          <div className="flex gap-2">
                            <div className="w-32 h-10 bg-slate-100 rounded-lg" />
                            <div className="w-32 h-10 bg-slate-100 rounded-lg" />
                          </div>
                        </div>

                        {/* Exam Cards */}
                        <div className="grid grid-cols-3 gap-4">
                          {[
                            { status: 'completed', score: 85 },
                            { status: 'completed', score: 72 },
                            { status: 'available', score: null },
                            { status: 'available', score: null },
                            { status: 'locked', score: null },
                            { status: 'locked', score: null },
                          ].map((exam, i) => (
                            <div key={i} className={`p-4 rounded-xl border ${
                              exam.status === 'completed' ? 'bg-emerald-50 border-emerald-200' :
                              exam.status === 'available' ? 'bg-white border-slate-200' :
                              'bg-slate-100 border-slate-200 opacity-60'
                            }`}>
                              <div className="flex justify-between items-start mb-3">
                                <div className="w-10 h-10 bg-slate-200 rounded-lg" />
                                {exam.status === 'completed' && (
                                  <div className="px-2 py-1 bg-emerald-200 rounded text-xs font-medium">{exam.score}%</div>
                                )}
                                {exam.status === 'locked' && (
                                  <div className="w-5 h-5 bg-slate-300 rounded" />
                                )}
                              </div>
                              <div className="w-28 h-3 bg-slate-300 rounded mb-2" />
                              <div className="w-full h-2 bg-slate-200 rounded mb-1" />
                              <div className="w-3/4 h-2 bg-slate-200 rounded mb-3" />
                              <div className="flex items-center justify-between">
                                <div className="w-16 h-2 bg-slate-200 rounded" />
                                {exam.status === 'available' && (
                                  <div className="w-16 h-7 bg-indigo-600 rounded-lg" />
                                )}
                              </div>
                            </div>
                          ))}
                        </div>
                      </WireframeBox>
                    </div>

                    {/* Wireframe - Exam Taking */}
                    <div className="border-2 border-slate-200 rounded-xl bg-slate-50 p-4">
                      <div className="mb-4">
                        <div className="text-sm font-medium text-slate-700 mb-2">Screen 2: Taking Exam</div>
                      </div>
                      <WireframeBox className="p-4">
                        <div className="flex gap-6">
                          {/* Question Panel */}
                          <div className="flex-1 space-y-4">
                            {/* Progress Header */}
                            <div className="flex items-center justify-between p-3 bg-slate-100 rounded-lg">
                              <div className="flex items-center gap-3">
                                <div className="w-20 h-3 bg-slate-300 rounded" />
                                <div className="text-sm">Q5 of 20</div>
                              </div>
                              <div className="flex items-center gap-3">
                                <div className="w-16 h-6 bg-amber-100 rounded" />
                                <div className="text-sm font-mono">14:32</div>
                              </div>
                            </div>

                            {/* Question */}
                            <div className="p-4 bg-white border border-slate-200 rounded-xl">
                              <div className="w-full h-3 bg-slate-200 rounded mb-2" />
                              <div className="w-full h-3 bg-slate-200 rounded mb-2" />
                              <div className="w-2/3 h-3 bg-slate-200 rounded mb-4" />

                              {/* MCQ Options */}
                              <div className="space-y-3">
                                {['A', 'B', 'C', 'D'].map((opt, i) => (
                                  <div key={i} className={`p-3 rounded-lg border-2 flex items-center gap-3 cursor-pointer ${
                                    i === 1 ? 'border-indigo-500 bg-indigo-50' : 'border-slate-200 hover:border-slate-300'
                                  }`}>
                                    <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                                      i === 1 ? 'border-indigo-500 bg-indigo-500' : 'border-slate-300'
                                    }`}>
                                      {i === 1 && <div className="w-2 h-2 bg-white rounded-full" />}
                                    </div>
                                    <div className="w-48 h-2.5 bg-slate-200 rounded" />
                                  </div>
                                ))}
                              </div>
                            </div>

                            {/* Navigation */}
                            <div className="flex justify-between">
                              <div className="w-24 h-10 bg-slate-200 rounded-lg" />
                              <div className="flex gap-2">
                                <div className="w-24 h-10 bg-slate-200 rounded-lg" />
                                <div className="w-24 h-10 bg-indigo-600 rounded-lg" />
                              </div>
                            </div>
                          </div>

                          {/* Question Navigator */}
                          <div className="w-48">
                            <WireframeBox className="p-4" label="Question Nav">
                              <div className="grid grid-cols-5 gap-2">
                                {Array.from({ length: 20 }).map((_, i) => (
                                  <div key={i} className={`w-8 h-8 rounded-lg flex items-center justify-center text-xs font-medium ${
                                    i < 4 ? 'bg-emerald-100 text-emerald-700' :
                                    i === 4 ? 'bg-indigo-600 text-white' :
                                    'bg-slate-100 text-slate-500'
                                  }`}>
                                    {i + 1}
                                  </div>
                                ))}
                              </div>
                              <div className="mt-4 pt-4 border-t border-slate-200 space-y-2 text-xs">
                                <div className="flex items-center gap-2">
                                  <div className="w-3 h-3 bg-emerald-100 rounded" />
                                  <span>Answered: 4</span>
                                </div>
                                <div className="flex items-center gap-2">
                                  <div className="w-3 h-3 bg-amber-100 rounded" />
                                  <span>Flagged: 1</span>
                                </div>
                                <div className="flex items-center gap-2">
                                  <div className="w-3 h-3 bg-slate-100 rounded" />
                                  <span>Remaining: 15</span>
                                </div>
                              </div>
                            </WireframeBox>
                          </div>
                        </div>
                      </WireframeBox>
                    </div>
                  </div>
                </>
              )}

              {/* Job Matching Wireframe */}
              {activeScreen === 'jobs' && (
                <>
                  <div className="bg-white rounded-2xl border border-slate-200 p-6">
                    <div className="flex items-center justify-between mb-6">
                      <div>
                        <h2 className="text-xl font-bold text-slate-900">AI Smart Job Matching</h2>
                        <p className="text-sm text-slate-500">Embedding-based job recommendations with skill matching</p>
                      </div>
                      <div className="flex gap-2">
                        <span className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-xs font-medium">Core Feature</span>
                        <span className="px-3 py-1 bg-cyan-100 text-cyan-700 rounded-full text-xs font-medium">Vector Search</span>
                      </div>
                    </div>

                    {/* Wireframe */}
                    <div className="border-2 border-slate-200 rounded-xl bg-slate-50 p-4">
                      <div className="flex gap-6 min-h-[500px]">
                        {/* Filters */}
                        <div className="w-64 space-y-4">
                          <WireframeBox className="p-4" label="Search">
                            <div className="h-10 bg-slate-100 border border-slate-200 rounded-lg flex items-center px-3">
                              <div className="w-4 h-4 bg-slate-300 rounded mr-2" />
                              <div className="w-24 h-2.5 bg-slate-200 rounded" />
                            </div>
                          </WireframeBox>

                          <WireframeBox className="p-4" label="Filters">
                            {/* Job Type */}
                            <div className="mb-4">
                              <div className="w-20 h-2.5 bg-slate-200 rounded mb-2" />
                              <div className="space-y-2">
                                {['Full Time', 'Internship', 'Remote'].map((type, i) => (
                                  <label key={i} className="flex items-center gap-2">
                                    <div className={`w-4 h-4 rounded border ${i === 0 ? 'bg-indigo-600 border-indigo-600' : 'border-slate-300'}`} />
                                    <span className="text-xs">{type}</span>
                                  </label>
                                ))}
                              </div>
                            </div>

                            {/* Salary Range */}
                            <div className="mb-4">
                              <div className="w-24 h-2.5 bg-slate-200 rounded mb-2" />
                              <div className="h-2 bg-slate-200 rounded-full relative">
                                <div className="absolute left-1/4 right-1/4 h-full bg-indigo-500 rounded-full" />
                                <div className="absolute left-1/4 w-3 h-3 bg-white border-2 border-indigo-600 rounded-full -top-0.5" />
                                <div className="absolute right-1/4 w-3 h-3 bg-white border-2 border-indigo-600 rounded-full -top-0.5" />
                              </div>
                              <div className="flex justify-between mt-2 text-xs text-slate-500">
                                <span>5 LPA</span>
                                <span>15 LPA</span>
                              </div>
                            </div>

                            {/* Skills */}
                            <div>
                              <div className="w-16 h-2.5 bg-slate-200 rounded mb-2" />
                              <div className="flex flex-wrap gap-2">
                                {['React', 'Python', 'SQL'].map((skill, i) => (
                                  <span key={i} className="px-2 py-1 bg-indigo-100 text-indigo-700 rounded text-xs">{skill}</span>
                                ))}
                                <span className="px-2 py-1 bg-slate-100 rounded text-xs">+</span>
                              </div>
                            </div>
                          </WireframeBox>

                          <WireframeBox className="p-4" label="Match Score">
                            <div className="w-28 h-2.5 bg-slate-200 rounded mb-2" />
                            <div className="h-2 bg-slate-200 rounded-full">
                              <div className="h-full w-3/4 bg-emerald-500 rounded-full" />
                            </div>
                            <div className="text-xs text-slate-500 mt-2">Min: 75% match</div>
                          </WireframeBox>
                        </div>

                        {/* Job List */}
                        <div className="flex-1 space-y-4">
                          <div className="flex items-center justify-between">
                            <div className="w-32 h-3 bg-slate-200 rounded" />
                            <div className="flex gap-2">
                              <div className="w-24 h-8 bg-slate-100 rounded-lg" />
                              <div className="w-24 h-8 bg-slate-100 rounded-lg" />
                            </div>
                          </div>

                          {/* Job Cards */}
                          <div className="space-y-3">
                            {[
                              { match: 94, company: 'TechCorp' },
                              { match: 87, company: 'StartupXYZ' },
                              { match: 82, company: 'DataInc' },
                              { match: 78, company: 'CloudSoft' },
                            ].map((job, i) => (
                              <WireframeBox key={i} className="p-4">
                                <div className="flex items-start justify-between">
                                  <div className="flex gap-4">
                                    <div className="w-12 h-12 bg-slate-200 rounded-xl" />
                                    <div>
                                      <div className="w-40 h-3.5 bg-slate-300 rounded mb-2" />
                                      <div className="w-24 h-2.5 bg-slate-200 rounded mb-2" />
                                      <div className="flex gap-2 text-xs text-slate-500">
                                        <span>Bangalore</span>
                                        <span>|</span>
                                        <span>8-12 LPA</span>
                                        <span>|</span>
                                        <span>2d ago</span>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="text-right">
                                    <div className={`px-3 py-1 rounded-lg text-sm font-medium ${
                                      job.match >= 90 ? 'bg-emerald-100 text-emerald-700' :
                                      job.match >= 80 ? 'bg-cyan-100 text-cyan-700' :
                                      'bg-slate-100 text-slate-600'
                                    }`}>
                                      {job.match}% match
                                    </div>
                                  </div>
                                </div>
                                <div className="flex items-center justify-between mt-4 pt-4 border-t border-slate-100">
                                  <div className="flex gap-2">
                                    {['React', 'Node.js', 'AWS'].map((skill, j) => (
                                      <span key={j} className="px-2 py-1 bg-slate-100 rounded text-xs">{skill}</span>
                                    ))}
                                  </div>
                                  <div className="flex gap-2">
                                    <div className="w-8 h-8 bg-slate-100 rounded-lg" />
                                    <div className="w-20 h-8 bg-indigo-600 rounded-lg" />
                                  </div>
                                </div>
                              </WireframeBox>
                            ))}
                          </div>

                          {/* Pagination */}
                          <div className="flex justify-center gap-2">
                            {[1, 2, 3, '...', 12].map((page, i) => (
                              <div key={i} className={`w-8 h-8 rounded-lg flex items-center justify-center text-xs ${
                                page === 1 ? 'bg-indigo-600 text-white' : 'bg-slate-100'
                              }`}>
                                {page}
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              )}

              {/* Profile & Settings Wireframe */}
              {activeScreen === 'profile' && (
                <>
                  <div className="bg-white rounded-2xl border border-slate-200 p-6">
                    <div className="flex items-center justify-between mb-6">
                      <div>
                        <h2 className="text-xl font-bold text-slate-900">Profile & Settings</h2>
                        <p className="text-sm text-slate-500">User profile management and application preferences</p>
                      </div>
                    </div>

                    {/* Wireframe */}
                    <div className="border-2 border-slate-200 rounded-xl bg-slate-50 p-4">
                      <div className="flex gap-6 min-h-[500px]">
                        {/* Settings Nav */}
                        <div className="w-56">
                          <WireframeBox className="p-4" label="Settings Menu">
                            {['Profile Info', 'Account Security', 'Notifications', 'Privacy', 'Preferences', 'Billing'].map((item, i) => (
                              <div key={i} className={`p-3 rounded-lg mb-1 flex items-center gap-3 ${
                                i === 0 ? 'bg-indigo-100' : 'hover:bg-slate-50'
                              }`}>
                                <div className={`w-5 h-5 rounded ${i === 0 ? 'bg-indigo-400' : 'bg-slate-300'}`} />
                                <span className="text-sm">{item}</span>
                              </div>
                            ))}
                          </WireframeBox>
                        </div>

                        {/* Profile Content */}
                        <div className="flex-1 space-y-4">
                          {/* Profile Header */}
                          <WireframeBox className="p-6" label="Profile Header">
                            <div className="flex items-start gap-6">
                              <div className="relative">
                                <div className="w-24 h-24 bg-slate-200 rounded-full" />
                                <div className="absolute bottom-0 right-0 w-8 h-8 bg-indigo-600 rounded-full border-4 border-white" />
                              </div>
                              <div className="flex-1">
                                <div className="w-48 h-5 bg-slate-300 rounded mb-2" />
                                <div className="w-64 h-3 bg-slate-200 rounded mb-4" />
                                <div className="flex gap-4">
                                  <div className="text-center">
                                    <div className="w-12 h-5 bg-slate-300 rounded mx-auto mb-1" />
                                    <div className="w-16 h-2.5 bg-slate-200 rounded" />
                                  </div>
                                  <div className="text-center">
                                    <div className="w-12 h-5 bg-slate-300 rounded mx-auto mb-1" />
                                    <div className="w-16 h-2.5 bg-slate-200 rounded" />
                                  </div>
                                  <div className="text-center">
                                    <div className="w-12 h-5 bg-slate-300 rounded mx-auto mb-1" />
                                    <div className="w-16 h-2.5 bg-slate-200 rounded" />
                                  </div>
                                </div>
                              </div>
                              <div className="w-28 h-10 bg-indigo-600 rounded-lg" />
                            </div>
                          </WireframeBox>

                          {/* Personal Info */}
                          <WireframeBox className="p-6" label="Personal Information">
                            <div className="grid grid-cols-2 gap-6">
                              {[
                                { label: 'Full Name', value: 'Student Name' },
                                { label: 'Email', value: 'student@email.com' },
                                { label: 'Phone', value: '+91 98765 43210' },
                                { label: 'Location', value: 'Jaipur, India' },
                                { label: 'College', value: 'MNIT Jaipur' },
                                { label: 'Graduation', value: '2026' },
                              ].map((field, i) => (
                                <div key={i}>
                                  <div className="w-20 h-2.5 bg-slate-200 rounded mb-2" />
                                  <div className="h-10 bg-slate-50 border border-slate-200 rounded-lg px-3 flex items-center">
                                    <div className="w-32 h-3 bg-slate-200 rounded" />
                                  </div>
                                </div>
                              ))}
                            </div>
                          </WireframeBox>

                          {/* Skills */}
                          <WireframeBox className="p-6" label="Skills & Interests">
                            <div className="mb-4">
                              <div className="w-16 h-2.5 bg-slate-200 rounded mb-3" />
                              <div className="flex flex-wrap gap-2">
                                {['React', 'Python', 'Machine Learning', 'SQL', 'FastAPI', 'Docker'].map((skill, i) => (
                                  <span key={i} className="px-3 py-1.5 bg-indigo-100 text-indigo-700 rounded-lg text-sm flex items-center gap-2">
                                    {skill}
                                    <span className="text-indigo-400">x</span>
                                  </span>
                                ))}
                                <span className="px-3 py-1.5 border border-dashed border-slate-300 rounded-lg text-sm text-slate-500">
                                  + Add Skill
                                </span>
                              </div>
                            </div>
                          </WireframeBox>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              )}

              {/* Component Library */}
              {activeScreen === 'components' && (
                <>
                  <div className="bg-white rounded-2xl border border-slate-200 p-6">
                    <div className="flex items-center justify-between mb-6">
                      <div>
                        <h2 className="text-xl font-bold text-slate-900">Component Library</h2>
                        <p className="text-sm text-slate-500">Reusable UI components for consistent design</p>
                      </div>
                    </div>

                    {/* Buttons */}
                    <div className="mb-8">
                      <h3 className="text-sm font-semibold mb-4 text-slate-700">Buttons</h3>
                      <div className="flex flex-wrap gap-4 p-4 bg-slate-50 rounded-xl">
                        <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg text-sm font-medium">Primary</button>
                        <button className="px-4 py-2 bg-white border border-slate-300 text-slate-700 rounded-lg text-sm font-medium">Secondary</button>
                        <button className="px-4 py-2 bg-emerald-600 text-white rounded-lg text-sm font-medium">Success</button>
                        <button className="px-4 py-2 bg-rose-600 text-white rounded-lg text-sm font-medium">Danger</button>
                        <button className="px-4 py-2 bg-slate-100 text-slate-500 rounded-lg text-sm font-medium" disabled>Disabled</button>
                        <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg text-sm font-medium flex items-center gap-2">
                          <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          Loading
                        </button>
                      </div>
                    </div>

                    {/* Form Elements */}
                    <div className="mb-8">
                      <h3 className="text-sm font-semibold mb-4 text-slate-700">Form Elements</h3>
                      <div className="grid grid-cols-3 gap-6 p-4 bg-slate-50 rounded-xl">
                        <div>
                          <label className="block text-xs font-medium text-slate-600 mb-1">Text Input</label>
                          <input type="text" placeholder="Enter text..." className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm" />
                        </div>
                        <div>
                          <label className="block text-xs font-medium text-slate-600 mb-1">Select</label>
                          <select className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm">
                            <option>Option 1</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-xs font-medium text-slate-600 mb-1">Search Input</label>
                          <div className="relative">
                            <input type="text" placeholder="Search..." className="w-full pl-9 pr-3 py-2 border border-slate-300 rounded-lg text-sm" />
                            <svg className="absolute left-3 top-2.5 w-4 h-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Cards */}
                    <div className="mb-8">
                      <h3 className="text-sm font-semibold mb-4 text-slate-700">Cards</h3>
                      <div className="grid grid-cols-3 gap-4 p-4 bg-slate-50 rounded-xl">
                        <div className="p-4 bg-white border border-slate-200 rounded-xl">
                          <div className="w-10 h-10 bg-indigo-100 rounded-lg mb-3" />
                          <div className="font-medium text-sm mb-1">Basic Card</div>
                          <div className="text-xs text-slate-500">Card description text</div>
                        </div>
                        <div className="p-4 bg-gradient-to-br from-indigo-50 to-violet-50 border border-indigo-200 rounded-xl">
                          <div className="w-10 h-10 bg-indigo-200 rounded-lg mb-3" />
                          <div className="font-medium text-sm mb-1">Highlighted Card</div>
                          <div className="text-xs text-slate-500">With gradient bg</div>
                        </div>
                        <div className="p-4 bg-white border border-slate-200 rounded-xl shadow-lg">
                          <div className="w-10 h-10 bg-emerald-100 rounded-lg mb-3" />
                          <div className="font-medium text-sm mb-1">Elevated Card</div>
                          <div className="text-xs text-slate-500">With shadow</div>
                        </div>
                      </div>
                    </div>

                    {/* Badges & Tags */}
                    <div className="mb-8">
                      <h3 className="text-sm font-semibold mb-4 text-slate-700">Badges & Tags</h3>
                      <div className="flex flex-wrap gap-3 p-4 bg-slate-50 rounded-xl">
                        <span className="px-2 py-1 bg-indigo-100 text-indigo-700 rounded text-xs font-medium">Primary</span>
                        <span className="px-2 py-1 bg-emerald-100 text-emerald-700 rounded text-xs font-medium">Success</span>
                        <span className="px-2 py-1 bg-amber-100 text-amber-700 rounded text-xs font-medium">Warning</span>
                        <span className="px-2 py-1 bg-rose-100 text-rose-700 rounded text-xs font-medium">Error</span>
                        <span className="px-2 py-1 bg-slate-100 text-slate-600 rounded text-xs font-medium">Default</span>
                        <span className="px-2 py-1 bg-violet-100 text-violet-700 rounded-full text-xs font-medium">Pill Badge</span>
                        <span className="px-3 py-1 border border-indigo-300 text-indigo-700 rounded-lg text-xs font-medium">Outlined</span>
                      </div>
                    </div>

                    {/* Progress Indicators */}
                    <div>
                      <h3 className="text-sm font-semibold mb-4 text-slate-700">Progress Indicators</h3>
                      <div className="grid grid-cols-2 gap-6 p-4 bg-slate-50 rounded-xl">
                        <div>
                          <div className="text-xs text-slate-500 mb-2">Progress Bar</div>
                          <div className="h-2 bg-slate-200 rounded-full">
                            <div className="h-full w-3/4 bg-indigo-600 rounded-full" />
                          </div>
                        </div>
                        <div>
                          <div className="text-xs text-slate-500 mb-2">Stepper</div>
                          <div className="flex items-center">
                            {[1,2,3,4].map(n => (
                              <div key={n} className="flex items-center">
                                <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs ${
                                  n <= 2 ? 'bg-indigo-600 text-white' : 'bg-slate-200'
                                }`}>{n}</div>
                                {n < 4 && <div className={`w-8 h-1 ${n < 2 ? 'bg-indigo-600' : 'bg-slate-200'}`} />}
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        )}

        {/* User Flows Section */}
        {activeView === 'flows' && (
          <div className="space-y-8">
            <div className="bg-white rounded-2xl border border-slate-200 p-6">
              <h2 className="text-lg font-bold mb-6 text-slate-900">User Flow Diagrams</h2>

              {/* Onboarding Flow */}
              <div className="mb-8">
                <h3 className="text-sm font-semibold mb-4 text-slate-700">1. Student Onboarding Flow</h3>
                <div className="p-4 bg-slate-50 rounded-xl overflow-x-auto">
                  <div className="flex items-center min-w-max">
                    {[
                      { step: 'Sign Up', desc: 'Email/Phone' },
                      { step: 'Verify', desc: 'OTP' },
                      { step: 'Basic Info', desc: 'Name, College' },
                      { step: 'Skills', desc: 'Select skills' },
                      { step: 'Goals', desc: 'Career goals' },
                      { step: 'Dashboard', desc: 'Complete' },
                    ].map((item, i) => (
                      <div key={i} className="flex items-center">
                        <div className="w-32 text-center">
                          <div className="w-12 h-12 rounded-xl bg-indigo-100 flex items-center justify-center mx-auto mb-2">
                            <span className="text-indigo-600 font-bold">{i + 1}</span>
                          </div>
                          <div className="text-xs font-medium">{item.step}</div>
                          <div className="text-[10px] text-slate-500">{item.desc}</div>
                        </div>
                        {i < 5 && (
                          <div className="w-12 flex items-center justify-center">
                            <svg className="w-6 h-6 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Interview Flow */}
              <div className="mb-8">
                <h3 className="text-sm font-semibold mb-4 text-slate-700">2. Interview Practice Flow</h3>
                <div className="p-4 bg-slate-50 rounded-xl overflow-x-auto">
                  <div className="flex items-center min-w-max">
                    {[
                      { step: 'Select Role', desc: 'Job type' },
                      { step: 'Setup', desc: 'Cam/Mic' },
                      { step: 'Instructions', desc: 'Rules' },
                      { step: 'Interview', desc: '5-10 Qs' },
                      { step: 'Processing', desc: 'AI Analysis' },
                      { step: 'Report', desc: 'Detailed score' },
                    ].map((item, i) => (
                      <div key={i} className="flex items-center">
                        <div className="w-32 text-center">
                          <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center mx-auto mb-2">
                            <span className="text-emerald-600 font-bold">{i + 1}</span>
                          </div>
                          <div className="text-xs font-medium">{item.step}</div>
                          <div className="text-[10px] text-slate-500">{item.desc}</div>
                        </div>
                        {i < 5 && (
                          <div className="w-12 flex items-center justify-center">
                            <svg className="w-6 h-6 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Job Application Flow */}
              <div>
                <h3 className="text-sm font-semibold mb-4 text-slate-700">3. Job Application Flow</h3>
                <div className="p-4 bg-slate-50 rounded-xl overflow-x-auto">
                  <div className="flex items-center min-w-max">
                    {[
                      { step: 'Browse Jobs', desc: 'AI matched' },
                      { step: 'View Details', desc: 'Requirements' },
                      { step: 'Check Fit', desc: 'Skill gap' },
                      { step: 'Apply', desc: 'One-click' },
                      { step: 'Track', desc: 'Status' },
                      { step: 'Feedback', desc: 'Results' },
                    ].map((item, i) => (
                      <div key={i} className="flex items-center">
                        <div className="w-32 text-center">
                          <div className="w-12 h-12 rounded-xl bg-cyan-100 flex items-center justify-center mx-auto mb-2">
                            <span className="text-cyan-600 font-bold">{i + 1}</span>
                          </div>
                          <div className="text-xs font-medium">{item.step}</div>
                          <div className="text-[10px] text-slate-500">{item.desc}</div>
                        </div>
                        {i < 5 && (
                          <div className="w-12 flex items-center justify-center">
                            <svg className="w-6 h-6 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Interaction States */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6">
              <h2 className="text-lg font-bold mb-6 text-slate-900">Interaction States</h2>
              
              <div className="grid grid-cols-4 gap-4">
                <div className="p-4 bg-slate-50 rounded-xl">
                  <h4 className="text-sm font-medium mb-3">Default</h4>
                  <button className="w-full px-4 py-2 bg-indigo-600 text-white rounded-lg text-sm">Button</button>
                </div>
                <div className="p-4 bg-slate-50 rounded-xl">
                  <h4 className="text-sm font-medium mb-3">Hover</h4>
                  <button className="w-full px-4 py-2 bg-indigo-700 text-white rounded-lg text-sm shadow-lg">Button</button>
                </div>
                <div className="p-4 bg-slate-50 rounded-xl">
                  <h4 className="text-sm font-medium mb-3">Active/Focus</h4>
                  <button className="w-full px-4 py-2 bg-indigo-800 text-white rounded-lg text-sm ring-2 ring-indigo-300">Button</button>
                </div>
                <div className="p-4 bg-slate-50 rounded-xl">
                  <h4 className="text-sm font-medium mb-3">Disabled</h4>
                  <button className="w-full px-4 py-2 bg-slate-300 text-slate-500 rounded-lg text-sm cursor-not-allowed">Button</button>
                </div>
              </div>
            </div>

            {/* Responsive Behavior */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6">
              <h2 className="text-lg font-bold mb-6 text-slate-900">Responsive Behavior</h2>
              
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-20 h-36 bg-slate-100 border-2 border-slate-300 rounded-xl mx-auto mb-3 flex items-center justify-center">
                    <div className="text-xs text-slate-500">Mobile</div>
                  </div>
                  <div className="text-sm font-medium">320-640px</div>
                  <div className="text-xs text-slate-500 mt-1">Single column, bottom nav, collapsed sidebar</div>
                </div>
                <div className="text-center">
                  <div className="w-40 h-28 bg-slate-100 border-2 border-slate-300 rounded-xl mx-auto mb-3 flex items-center justify-center">
                    <div className="text-xs text-slate-500">Tablet</div>
                  </div>
                  <div className="text-sm font-medium">641-1024px</div>
                  <div className="text-xs text-slate-500 mt-1">2 columns, collapsible sidebar, adapted cards</div>
                </div>
                <div className="text-center">
                  <div className="w-56 h-32 bg-slate-100 border-2 border-slate-300 rounded-xl mx-auto mb-3 flex items-center justify-center">
                    <div className="text-xs text-slate-500">Desktop</div>
                  </div>
                  <div className="text-sm font-medium">1025px+</div>
                  <div className="text-xs text-slate-500 mt-1">Full layout, expanded sidebar, all features</div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="border-t border-slate-200 py-6 px-6 bg-white mt-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between text-xs text-slate-500">
          <div>Iklavya UI/UX Wireframe Document v2.0 | Confidential</div>
          <div>PATMASTER Design Team | January 2026</div>
        </div>
      </footer>
    </div>
  );
};

export default IklavyaWireframes;
