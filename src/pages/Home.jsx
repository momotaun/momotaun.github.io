import { lazy, Suspense } from 'react'
import { Link } from 'react-router-dom'

const HeroScene = lazy(() => import('../components/HeroScene.jsx'))

export default function Home({ onBookMeeting }) {
  return (
    <>
      <section className="relative w-full max-w-container-max mx-auto px-gutter py-section-gap md:py-32 flex flex-col items-center justify-center text-center bg-grid-pattern min-h-[80vh] overflow-hidden">
        <Suspense fallback={null}>
          <HeroScene />
        </Suspense>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-surface pointer-events-none z-0" />

        <div className="relative z-10 w-full max-w-4xl flex flex-col items-center space-y-6 perspective-1000">
          <div className="inline-flex items-center px-4 py-2 bg-secondary-container text-on-secondary-container rounded-full text-label-mono font-label-mono border border-outline-variant/30 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-primary mr-2 animate-pulse" />
            Available for new projects
          </div>

          <h1 className="text-headline-xl-mobile md:text-headline-xl font-headline-xl-mobile md:font-headline-xl text-on-background tracking-tight">
            Salesforce Specialist &amp;
            <br />
            <span className="text-primary bg-clip-text text-transparent bg-gradient-to-r from-primary to-tertiary-container">
              Full-Stack Architect.
            </span>
          </h1>

          <p className="text-body-lg font-body-lg text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
            Bridging enterprise CRM solutions with robust custom software. Expert in{' '}
            <span className="font-semibold text-on-surface">Python, Django, React,</span> and{' '}
            <span className="font-semibold text-on-surface">Angular</span> to deliver scalable, end-to-end
            ecosystems.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-8 w-full sm:w-auto">
            <Link
              to="/projects"
              className="inline-flex items-center justify-center px-8 py-3 bg-primary text-on-primary rounded-lg text-label-mono font-label-mono font-semibold hover:bg-primary/90 transition-all shadow-sm hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 w-full sm:w-auto"
            >
              View My Projects
              <span className="material-symbols-outlined ml-2 text-[20px]">arrow_forward</span>
            </Link>
            <button
              onClick={onBookMeeting}
              className="inline-flex items-center justify-center px-8 py-3 border border-primary text-primary rounded-lg text-label-mono font-label-mono font-semibold hover:bg-primary/10 transition-all shadow-sm hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 w-full sm:w-auto"
            >
              Book a Meeting
            </button>
          </div>

          <div className="mt-16 w-full max-w-2xl text-left code-snippet rounded-xl p-6 shadow-2xl border border-outline/20 relative overflow-hidden group preserve-3d transition-transform duration-500 ease-out hover:[transform:rotateX(4deg)_rotateY(-3deg)_translateZ(10px)] backdrop-blur-md">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-tertiary-container" />
            <div className="flex items-center gap-2 mb-4 border-b border-slate-700 pb-2">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
              <span className="text-xs text-slate-400 font-label-mono ml-2">architecture.py</span>
            </div>
            <pre className="text-sm font-label-mono text-label-mono overflow-x-auto">
              <code>{`class SystemArchitect:
    def __init__(self):
        self.stack = ['Salesforce', 'Python', 'React']
        self.focus = 'Scalability'

    def build_solution(self, requirements):
        if requirements.complexity > High:
            return self.design_microservices()
        return self.integrate_crm()`}</code>
            </pre>
          </div>
        </div>
      </section>

      <section className="w-full max-w-container-max mx-auto px-gutter py-section-gap relative z-20 bg-surface-container-lowest">
        <div className="mb-12 text-center md:text-left">
          <h2 className="text-headline-lg font-headline-lg text-on-surface">The Bridge Between Ecosystems</h2>
          <p className="text-body-md font-body-md text-on-surface-variant mt-2 max-w-2xl">
            Integrating the structured data power of Salesforce with the limitless potential of custom full-stack
            development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[minmax(200px,_auto)]">
          <div className="md:col-span-5 bg-surface rounded-xl p-8 border border-outline-variant flex flex-col justify-between ambient-shadow transition-all relative overflow-hidden group">
            <div className="absolute -right-10 -top-10 w-32 h-32 bg-primary/10 rounded-full blur-2xl group-hover:bg-primary/20 transition-all" />
            <div>
              <div className="w-12 h-12 bg-primary-container text-on-primary-container rounded-lg flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-[24px]">cloud</span>
              </div>
              <h3 className="text-headline-md font-headline-md text-on-surface mb-3">Enterprise CRM</h3>
              <p className="text-body-md font-body-md text-on-surface-variant">
                Deep expertise in Apex, LWC, and Salesforce architecture to optimize business processes and data
                flow.
              </p>
            </div>
            <div className="mt-6 flex flex-wrap gap-2">
              {['Apex', 'LWC', 'SOQL'].map((t) => (
                <span key={t} className="px-3 py-1 bg-surface-variant text-on-surface text-[12px] font-label-mono rounded-full">
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div className="md:col-span-7 bg-surface rounded-xl p-8 border border-outline-variant flex flex-col justify-between ambient-shadow transition-all relative overflow-hidden group">
            <div className="absolute -left-10 -bottom-10 w-40 h-40 bg-tertiary-container/10 rounded-full blur-2xl group-hover:bg-tertiary-container/20 transition-all" />
            <div>
              <div className="w-12 h-12 bg-tertiary-container text-on-tertiary-container rounded-lg flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-[24px]">code</span>
              </div>
              <h3 className="text-headline-md font-headline-md text-on-surface mb-3">Custom Software Engineering</h3>
              <p className="text-body-md font-body-md text-on-surface-variant">
                Building high-performance APIs and dynamic frontends using modern frameworks to extend platform
                capabilities.
              </p>
            </div>
            <div className="mt-6 flex flex-wrap gap-2">
              {['Python/Django', 'React', 'Angular', 'PostgreSQL'].map((t) => (
                <span key={t} className="px-3 py-1 bg-surface-variant text-on-surface text-[12px] font-label-mono rounded-full">
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div className="md:col-span-12 bg-surface rounded-xl border border-outline-variant ambient-shadow transition-all overflow-hidden flex flex-col md:flex-row items-center">
            <div className="p-8 md:w-1/2 flex flex-col justify-center">
              <div className="w-12 h-12 bg-secondary-container text-on-secondary-container rounded-lg flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-[24px]">sync</span>
              </div>
              <h3 className="text-headline-md font-headline-md text-on-surface mb-3">Seamless Integration</h3>
              <p className="text-body-md font-body-md text-on-surface-variant mb-6">
                Connecting disparate systems via REST/SOAP APIs and event-driven architectures to create unified
                operational views.
              </p>
              <Link
                to="/experience"
                className="text-primary font-label-mono text-label-mono font-bold hover:underline inline-flex items-center"
              >
                Read Architecture Case Studies
                <span className="material-symbols-outlined ml-1 text-[16px]">chevron_right</span>
              </Link>
            </div>
            <div
              className="md:w-1/2 w-full h-64 md:h-full min-h-[300px] bg-cover bg-center"
              style={{ backgroundImage: "url('/images/integration-illustration.jpg')" }}
            />
          </div>
        </div>
      </section>
    </>
  )
}
