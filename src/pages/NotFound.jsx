import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <main className="flex-grow flex flex-col items-center justify-center text-center px-gutter py-section-gap">
      <h1 className="text-headline-xl font-headline-xl text-on-background mb-4">404</h1>
      <p className="text-body-lg font-body-lg text-on-surface-variant mb-8">This page doesn&apos;t exist.</p>
      <Link
        to="/"
        className="inline-flex items-center justify-center px-8 py-3 bg-primary text-on-primary rounded-lg text-label-mono font-label-mono font-semibold hover:bg-primary/90 transition-all"
      >
        Back to Home
      </Link>
    </main>
  )
}
