const timeline = [
  {
    role: 'Senior Technical Architect',
    company: 'Acme Cloud Solutions',
    period: '2021 - Present',
    description:
      'Led the design and implementation of highly scalable enterprise solutions integrating Salesforce with custom AWS microservices. Mentored a team of 15 developers.',
    tags: ['Salesforce', 'AWS', 'System Architecture'],
    current: true,
  },
  {
    role: 'Full-Stack Developer',
    company: 'TechNova Inc.',
    period: '2018 - 2021',
    description:
      'Developed robust backend APIs using Python/Django and built responsive frontend applications with React. Integrated multiple third-party payment gateways.',
    tags: ['Python', 'Django', 'React'],
    code: `def process_payment(payload):
    # Validating transaction payload
    result = gateway.authorize(payload)
    return result.status == "SUCCESS"`,
  },
]

const skillGroups = [
  {
    title: 'Salesforce Ecosystem',
    icon: 'cloud',
    skills: [
      { label: 'Apex / LWC', value: 95 },
      { label: 'Sales / Service Cloud', value: 90 },
    ],
  },
  {
    title: 'Full-Stack Engineering',
    icon: 'terminal',
    skills: [
      { label: 'Python / Django', value: 85 },
      { label: 'React / TypeScript', value: 80 },
    ],
  },
]

const certifications = [
  { title: 'Salesforce Certified System Architect', issued: 'Issued: Jan 2023' },
  { title: 'AWS Certified Solutions Architect', issued: 'Issued: Nov 2022' },
]

export default function Experience({ onBookMeeting }) {
  return (
    <main className="pt-[100px] pb-section-gap px-gutter md:px-10 lg:max-w-container-max lg:mx-auto">
      <header className="mb-section-gap pt-10">
        <h1 className="text-headline-xl-mobile md:text-headline-xl font-headline-xl-mobile md:font-headline-xl text-on-surface mb-4">
          Engineering Trajectory
        </h1>
        <p className="text-body-lg font-body-lg text-on-surface-variant max-w-3xl">
          A comprehensive overview of my professional journey, blending enterprise Salesforce architecture with
          modern full-stack development methodologies.
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <section className="lg:col-span-7">
          <div className="flex items-center gap-3 mb-8">
            <span className="material-symbols-outlined text-primary text-[28px]">timeline</span>
            <h2 className="text-headline-lg font-headline-lg text-on-surface">Career Timeline</h2>
          </div>

          <div className="space-y-0 relative">
            {timeline.map((item) => (
              <div key={item.role} className="relative pl-10 pb-12 timeline-item timeline-line">
                <div
                  className={`absolute left-0 top-1 w-6 h-6 rounded-full bg-surface border-2 z-10 flex items-center justify-center ${
                    item.current ? 'border-primary' : 'border-outline-variant'
                  }`}
                >
                  {item.current && <div className="w-2 h-2 rounded-full bg-primary" />}
                </div>
                <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-6 hover:ambient-shadow transition-shadow duration-300">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4 gap-2">
                    <div>
                      <h3 className="text-headline-md font-headline-md text-on-surface">{item.role}</h3>
                      <div className="text-primary font-medium text-body-md font-body-md mt-1">{item.company}</div>
                    </div>
                    <div className="text-label-mono font-label-mono text-on-surface-variant bg-surface-container-low px-3 py-1 rounded-sm self-start">
                      {item.period}
                    </div>
                  </div>
                  <p className="text-body-md font-body-md text-on-surface-variant mb-4">{item.description}</p>
                  {item.code && (
                    <div className="bg-on-surface text-surface-container-low p-4 rounded-lg font-label-mono text-label-mono text-sm overflow-x-auto mb-4">
                      <pre>
                        <code>{item.code}</code>
                      </pre>
                    </div>
                  )}
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-secondary-container/30 text-on-secondary-container px-3 py-1 rounded text-label-mono font-label-mono text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}

            <div className="relative pl-10 mt-8">
              <button
                onClick={onBookMeeting}
                className="border-2 border-primary text-primary px-8 py-4 rounded-xl font-headline-md text-headline-md hover:bg-primary-container/10 transition-all active:scale-95 flex items-center gap-3"
              >
                <span className="material-symbols-outlined">calendar_today</span>
                Schedule Interview
              </button>
            </div>
          </div>
        </section>

        <section className="lg:col-span-5 space-y-10">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="material-symbols-outlined text-primary text-[28px]">code_blocks</span>
              <h2 className="text-headline-lg font-headline-lg text-on-surface">Skills Matrix</h2>
            </div>
            <div className="space-y-6">
              {skillGroups.map((group) => (
                <div key={group.title} className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5">
                  <h3 className="text-body-lg font-body-lg font-semibold text-on-surface mb-4 flex items-center gap-2">
                    <span className="material-symbols-outlined text-tertiary text-[20px]">{group.icon}</span>
                    {group.title}
                  </h3>
                  <div className="space-y-3">
                    {group.skills.map((skill) => (
                      <div key={skill.label}>
                        <div className="flex justify-between text-label-mono font-label-mono text-sm mb-1 text-on-surface-variant">
                          <span>{skill.label}</span>
                          <span>{skill.value}%</span>
                        </div>
                        <div className="h-2 w-full bg-surface-variant rounded-full overflow-hidden">
                          <div className="h-full bg-primary rounded-full" style={{ width: `${skill.value}%` }} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="material-symbols-outlined text-primary text-[28px]">workspace_premium</span>
              <h2 className="text-headline-lg font-headline-lg text-on-surface">Certifications</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
              {certifications.map((cert) => (
                <div
                  key={cert.title}
                  className="flex items-center gap-4 bg-surface-container-lowest border border-outline-variant rounded-xl p-4 hover:border-primary transition-colors cursor-default"
                >
                  <div className="w-12 h-12 rounded bg-secondary-container flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-on-secondary-container">military_tech</span>
                  </div>
                  <div>
                    <div className="text-body-md font-body-md font-semibold text-on-surface">{cert.title}</div>
                    <div className="text-label-mono font-label-mono text-xs text-on-surface-variant mt-1">{cert.issued}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
