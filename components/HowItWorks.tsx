const steps = [
  {
    number: '01',
    title: 'See What\'s Working',
    description: 'Access real-time trend data. See what formats, hooks, and CTAs are winning right now in your niche.',
  },
  {
    number: '02',
    title: 'Customize to Your Brand',
    description: 'Input your brand details, voice, and goals. The system adapts trending formats to fit you.',
  },
  {
    number: '03',
    title: 'Generate & Schedule',
    description: 'Batch create content for the week or month. Review, tweak, or let it fly on autopilot.',
  },
  {
    number: '04',
    title: 'Learn & Improve',
    description: 'Track performance, identify winners, and feed insights back into the next batch. Recursive improvement.',
  },
]

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-14">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-accent mb-3">
            The Flow
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            From data to content to results.
          </h2>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {steps.map((step) => (
            <div
              key={step.number}
              className="rounded-2xl bg-black/30 border border-white/10 p-8 hover-glow transition-all"
            >
              <div className="flex items-start gap-5">
                <span className="text-4xl font-bold text-accent/30 font-mono">
                  {step.number}
                </span>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-[var(--muted)] leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom callout */}
        <div className="mt-10 text-center">
          <div className="inline-block rounded-2xl bg-accent/10 border border-accent/20 px-6 py-4">
            <p className="text-sm text-[var(--muted)]">
              <span className="text-accent font-semibold">The goal:</span> Look at what's working → 
              Make it yours → Post it → Learn from results → Repeat. Automatically.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
