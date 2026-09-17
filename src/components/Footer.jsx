export default function Footer() {
  return (
    <footer className="w-full py-section-gap px-gutter max-w-container-max mx-auto flex flex-col md:flex-row justify-between items-start gap-8 bg-surface-container-lowest border-t border-outline-variant mt-auto">
      <div>
        <div className="flex items-center gap-2 mb-2">
          <div className="w-8 h-8 rounded-full overflow-hidden bg-surface-container-high flex items-center justify-center">
            <img src="/images/nav-logo.jpg" alt="Moeketsi Motaung Logo" className="w-full h-full object-cover" />
          </div>
          <span className="text-headline-md font-headline-md font-bold text-primary">Moeketsi Motaung</span>
        </div>
        <p className="text-body-md font-body-md text-on-surface-variant">
          © {new Date().getFullYear()} Moeketsi Motaung. Built with Salesforce &amp; Full-Stack Precision.
        </p>
      </div>
      <div className="flex gap-6">
        <a
          className="text-label-mono font-label-mono text-secondary hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded"
          href="https://github.com/momotaun"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
        <a
          className="text-label-mono font-label-mono text-secondary hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded"
          href="https://www.linkedin.com"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>
        <a
          className="text-label-mono font-label-mono text-secondary hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded"
          href="mailto:moeketsimotaung1@gmail.com"
        >
          Email
        </a>
      </div>
    </footer>
  )
}
