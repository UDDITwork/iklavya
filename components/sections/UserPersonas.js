"use client";

export default function UserPersonas() {
  const personas = [
    {
      name: 'Priya Sharma',
      profile: 'Final-year B.Tech (Computer Science), MNIT Jaipur',
      color: 'from-indigo-500 to-indigo-600',
      bio: [
        'Priya is a strong academic performer with a 8.7 CGPA who has completed coursework in data structures, machine learning, and web development. She has built three personal projects and contributed to one open-source repository, but she struggles with translating her technical knowledge into compelling interview responses. During her internship interviews last summer, she received feedback that her answers were technically correct but lacked structure and confidence. She knows the STAR method exists but has never practiced it with real-time feedback.',
        'Her primary goal is securing a software engineering role at a product company with a package above 12 LPA. She spends two hours daily on LeetCode but has no structured approach to behavioral interview preparation. She finds existing mock interview platforms either too expensive or too generic, offering American English prompts that feel disconnected from the Indian campus recruitment process.',
      ],
    },
    {
      name: 'Rohit Meena',
      profile: 'Third-year BCA, Manipal University Jaipur',
      color: 'from-emerald-500 to-emerald-600',
      bio: [
        'Rohit comes from a Hindi-medium school background and transitioned to English-medium education in college. While his programming skills have improved significantly, he lacks confidence in professional communication. His resume was last updated using a Word template his senior shared, and it does not reflect his recent Python and SQL projects. He applied to 40 internships on Internshala last semester and received callbacks from only two, both of which he could not convert because he froze during technical discussions.',
        'Rohit needs a platform that not only helps him build a professional resume but also provides a safe, judgment-free space to practice speaking about his work. He is particularly interested in the AI interview feature because he can practice alone in his hostel room without the social pressure of peer mock interviews. His target is a 6-8 LPA fresher role at a service company, with a stretch goal of cracking a product company.',
      ],
    },
    {
      name: 'Ananya Gupta',
      profile: 'Final-year MBA (Marketing), IIS University Jaipur',
      color: 'from-amber-500 to-amber-600',
      bio: [
        'Ananya represents the non-engineering segment that Iklavya plans to serve in Phase 2. With a background in commerce and an MBA specializing in digital marketing, her career preparation needs differ significantly from engineering students. She needs to demonstrate case study analysis skills, marketing campaign thinking, and client communication abilities rather than coding proficiency.',
        'Currently, Ananya prepares for interviews by reading Glassdoor reviews and practicing with friends, but the feedback she receives is inconsistent and often unhelpfully positive. She is looking for structured behavioral interview practice specific to marketing and business development roles, along with a resume format that highlights her campaign projects and internship outcomes rather than technical skills. Her salary expectation is 8-10 LPA, and she is targeting FMCG and tech companies with strong marketing divisions.',
      ],
    },
  ];

  return (
    <div className="space-y-8 animate-fade-in">
      <section className="bg-gradient-to-br from-white to-slate-50/80 shadow-sm rounded-2xl p-8">
        <h2 className="text-2xl font-bold text-slate-900 mb-2">User Personas</h2>
        <div className="h-1 w-20 bg-gradient-to-r from-indigo-600 to-violet-500 rounded-full mb-8" />
        <p className="text-sm leading-relaxed text-slate-600 max-w-4xl mb-8">
          These personas were developed through interviews with 45 students across three institution tiers in Rajasthan during November-December 2025. They represent the primary user segments that Iklavya must serve effectively.
        </p>

        <div className="space-y-6">
          {personas.map((p, i) => (
            <div key={i} className="flex gap-6 bg-gradient-to-br from-slate-50 to-white shadow-sm rounded-xl overflow-hidden transition-all duration-300 hover:shadow-md">
              <div className={`w-1.5 bg-gradient-to-b ${p.color} flex-shrink-0`} />
              <div className="py-6 pr-8 flex-1">
                <div className="flex items-center gap-4 mb-4">
                  <div className={`w-14 h-14 rounded-full bg-gradient-to-br ${p.color} flex items-center justify-center text-white text-lg font-bold flex-shrink-0`}>
                    {p.name[0]}
                  </div>
                  <div>
                    <div className="text-lg font-semibold text-slate-900">{p.name}</div>
                    <div className="text-sm text-slate-500">{p.profile}</div>
                  </div>
                </div>
                <div className="space-y-4">
                  {p.bio.map((para, j) => (
                    <p key={j} className="text-sm leading-relaxed text-slate-600">{para}</p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
