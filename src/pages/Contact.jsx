import { useState } from 'react'

const CONTACT_EMAIL = 'moeketsimotaung1@gmail.com'

export default function Contact({ onBookMeeting }) {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const subject = encodeURIComponent(form.subject || `Portfolio contact from ${form.name || 'website visitor'}`)
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`)
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`
  }

  return (
    <main className="flex-grow w-full max-w-container-max mx-auto px-margin-mobile md:px-gutter py-section-gap">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-gutter">
        <div className="md:col-span-4 flex flex-col justify-start">
          <h1 className="text-headline-xl-mobile md:text-headline-xl font-headline-xl-mobile md:font-headline-xl text-primary mb-6">
            Let&apos;s Connect
          </h1>
          <p className="text-body-lg font-body-lg text-on-surface-variant mb-12">
            I&apos;m currently available for freelance projects and full-time opportunities. Whether you have a
            question or just want to say hi, I&apos;ll try my best to get back to you!
          </p>

          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <span className="material-symbols-outlined text-tertiary-container text-[32px]">mail</span>
              <div>
                <p className="text-label-mono font-label-mono text-outline uppercase tracking-wider mb-1">Email</p>
                <a
                  className="text-body-lg font-body-lg text-on-surface hover:text-primary transition-colors"
                  href={`mailto:${CONTACT_EMAIL}`}
                >
                  {CONTACT_EMAIL}
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="material-symbols-outlined text-tertiary-container text-[32px]">location_on</span>
              <div>
                <p className="text-label-mono font-label-mono text-outline uppercase tracking-wider mb-1">Location</p>
                <p className="text-body-lg font-body-lg text-on-surface">
                  South Africa
                  <br />
                  <span className="text-body-md text-on-surface-variant">Remote Available</span>
                </p>
              </div>
            </div>
          </div>

          <div className="mt-16">
            <p className="text-label-mono font-label-mono text-outline uppercase tracking-wider mb-4">Connect Socially</p>
            <div className="flex gap-4">
              <a
                className="w-12 h-12 rounded-full bg-surface-container flex items-center justify-center text-on-surface hover:bg-primary hover:text-on-primary transition-all ambient-shadow-hover"
                href="https://github.com/momotaun"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
              >
                <span className="material-symbols-outlined">code</span>
              </a>
              <a
                className="w-12 h-12 rounded-full bg-surface-container flex items-center justify-center text-on-surface hover:bg-primary hover:text-on-primary transition-all ambient-shadow-hover"
                href="https://www.linkedin.com"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <span className="material-symbols-outlined">link</span>
              </a>
            </div>
          </div>
        </div>

        <div className="md:col-span-8">
          <div className="bg-surface-container-lowest rounded-xl border border-surface-variant p-8 md:p-12 ambient-shadow">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-label-mono font-label-mono text-on-surface-variant mb-2" htmlFor="name">
                    Full Name
                  </label>
                  <input
                    className="w-full bg-surface border border-outline-variant rounded-lg px-4 py-3 text-body-md font-body-md text-on-surface focus:border-primary input-glow transition-all"
                    id="name"
                    name="name"
                    placeholder="John Doe"
                    type="text"
                    value={form.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <label className="block text-label-mono font-label-mono text-on-surface-variant mb-2" htmlFor="email">
                    Email Address
                  </label>
                  <input
                    className="w-full bg-surface border border-outline-variant rounded-lg px-4 py-3 text-body-md font-body-md text-on-surface focus:border-primary input-glow transition-all"
                    id="email"
                    name="email"
                    placeholder="john@example.com"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div>
                <label className="block text-label-mono font-label-mono text-on-surface-variant mb-2" htmlFor="subject">
                  Subject (Optional)
                </label>
                <input
                  className="w-full bg-surface border border-outline-variant rounded-lg px-4 py-3 text-body-md font-body-md text-on-surface focus:border-primary input-glow transition-all"
                  id="subject"
                  name="subject"
                  placeholder="How can I help you?"
                  type="text"
                  value={form.subject}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label className="block text-label-mono font-label-mono text-on-surface-variant mb-2" htmlFor="message">
                  Message
                </label>
                <textarea
                  className="w-full bg-surface border border-outline-variant rounded-lg px-4 py-3 text-body-md font-body-md text-on-surface focus:border-primary input-glow transition-all resize-none"
                  id="message"
                  name="message"
                  placeholder="Your message here..."
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="pt-4 flex flex-wrap justify-end gap-4">
                <button
                  type="button"
                  onClick={onBookMeeting}
                  className="text-primary border border-primary px-8 py-3 rounded-lg text-body-lg font-headline-md hover:bg-surface-container-low transition-colors flex items-center gap-2 ambient-shadow-hover"
                >
                  <span className="material-symbols-outlined text-[20px]">calendar_today</span>
                  Schedule a Call
                </button>
                <button
                  className="bg-primary text-on-primary px-8 py-3 rounded-lg text-body-lg font-headline-md hover:bg-primary/90 transition-colors flex items-center gap-2 ambient-shadow-hover"
                  type="submit"
                >
                  Send Message
                  <span className="material-symbols-outlined text-[20px]">send</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  )
}
