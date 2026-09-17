import { useState } from 'react'

const projects = [
  {
    title: 'Global CRM Consolidation',
    description:
      'Architected and deployed a unified Salesforce instance replacing three legacy CRM systems across EMEA and NA regions, improving data visibility by 40%.',
    image: '/images/project-crm.jpg',
    tags: ['Apex', 'LWC', 'MuleSoft'],
    category: 'Salesforce',
    badgeClass: 'text-primary border-primary/20',
  },
  {
    title: 'Real-Time Analytics Dashboard',
    description:
      'Built a highly responsive, real-time data visualization platform for logistics tracking, processing millions of events per day with sub-second latency.',
    image: '/images/project-analytics.jpg',
    tags: ['React', 'Node.js', 'PostgreSQL'],
    category: 'Full-Stack',
    badgeClass: 'text-tertiary border-tertiary/20',
  },
  {
    title: 'Customer Portal Integration',
    description:
      'Developed a custom Next.js frontend integrated deeply with Salesforce via REST APIs to provide a seamless self-service experience for enterprise clients.',
    image: '/images/project-portal.jpg',
    tags: ['Next.js', 'Salesforce API', 'Tailwind'],
    category: 'Hybrid',
    badgeClass: 'text-primary border-primary/20',
  },
]

const filters = ['All Projects', 'Salesforce', 'Full-Stack']

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All Projects')

  const visibleProjects =
    activeFilter === 'All Projects'
      ? projects
      : projects.filter((p) => p.category === activeFilter || p.category === 'Hybrid')

  return (
    <main className="flex-grow w-full max-w-container-max mx-auto px-margin-mobile md:px-gutter py-section-gap">
      <div className="mb-12">
        <h1 className="text-headline-xl-mobile md:text-headline-xl font-headline-xl-mobile md:font-headline-xl text-on-background mb-4">
          Projects Showcase
        </h1>
        <p className="text-body-lg font-body-lg text-secondary max-w-3xl">
          Explore a curated selection of my work, ranging from complex enterprise Salesforce implementations to
          agile, modern full-stack web applications.
        </p>
      </div>

      <div className="flex flex-wrap gap-4 mb-12 pb-4 border-b border-outline-variant">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={
              filter === activeFilter
                ? 'px-6 py-2 rounded-full bg-primary text-on-primary text-label-mono font-label-mono font-bold transition-all'
                : 'px-6 py-2 rounded-full border border-outline-variant text-on-surface hover:bg-surface-container-low text-label-mono font-label-mono transition-all'
            }
          >
            {filter}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {visibleProjects.map((project) => (
          <article
            key={project.title}
            className="bg-surface-container-lowest border border-outline-variant rounded-xl overflow-hidden hover:ambient-shadow transition-shadow duration-300 flex flex-col group h-full"
          >
            <div className="h-48 w-full relative overflow-hidden bg-surface-container-low">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
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
            </div>
          </article>
        ))}
      </div>
    </main>
  )
}
