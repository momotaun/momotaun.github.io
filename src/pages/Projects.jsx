const projects = [
  {
    title: 'Apex Marketplace',
    description:
      'A multi-vendor e-commerce marketplace: shoppers browse a shared catalogue, vendors apply to sell and manage their own storefronts, and admins approve vendors and curate platform-wide content. Checkout is backed by instant EFT (Ozow) and PayFast.',
    tags: ['Next.js', 'NestJS', 'Prisma', 'PostgreSQL'],
    category: 'Full-Stack',
    badgeClass: 'text-tertiary border-tertiary/20',
    repoUrl: 'https://github.com/momotaun/Annah_E_Commerce',
    liveUrl: null,
  },
]

export default function Projects() {
  return (
    <main className="flex-grow w-full max-w-container-max mx-auto px-margin-mobile md:px-gutter py-section-gap">
      <div className="mb-12">
        <h1 className="text-headline-xl-mobile md:text-headline-xl font-headline-xl-mobile md:font-headline-xl text-on-background mb-4">
          Projects Showcase
        </h1>
        <p className="text-body-lg font-body-lg text-secondary max-w-3xl">
          A selection of my work, ranging from complex enterprise Salesforce implementations to full-stack web
          applications.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <article
            key={project.title}
            className="bg-surface-container-lowest border border-outline-variant rounded-xl overflow-hidden hover:ambient-shadow transition-shadow duration-300 flex flex-col group h-full"
          >
            <div className="h-48 w-full relative overflow-hidden bg-gradient-to-br from-primary to-tertiary-container flex items-center justify-center">
              <span className="material-symbols-outlined text-white/90 text-[56px]">storefront</span>
              <div
                className={`absolute top-4 left-4 bg-surface/90 backdrop-blur px-3 py-1 rounded text-label-mono font-label-mono text-xs border ${project.badgeClass}`}
              >
                {project.category}
              </div>
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-headline-md font-headline-md text-on-background mb-2 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-body-md font-body-md text-secondary mb-6 flex-grow">{project.description}</p>
              <div className="mb-6 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 rounded bg-secondary-container/30 text-on-secondary-container text-label-mono font-label-mono text-xs"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex items-center gap-4 mt-auto">
                {project.liveUrl && (
                  <a
                    className="inline-flex items-center text-primary font-bold hover:text-on-primary-container transition-colors text-label-mono font-label-mono"
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live Demo
                    <span className="material-symbols-outlined ml-1 text-sm">open_in_new</span>
                  </a>
                )}
                <a
                  className="inline-flex items-center text-on-surface-variant font-bold hover:text-primary transition-colors text-label-mono font-label-mono"
                  href={project.repoUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  View Code
                  <span className="material-symbols-outlined ml-1 text-sm">code</span>
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </main>
  )
}
