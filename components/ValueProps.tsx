const features = [
  {
    title: 'Real-Time Trend Data',
    description: 'Make content based on what\'s working right now—not vague or outdated data. Updated monthly.',
    icon: '📊',
  },
  {
    title: 'Brand-Tailored Formats',
    description: 'Create winning formats customized to your brand voice and visual style.',
    icon: '🎨',
  },
  {
    title: 'Recursive Improvement',
    description: 'Learn from your past performance. Every batch gets smarter based on what worked.',
    icon: '🔄',
  },
  {
    title: 'Full Auto or Semi-Auto',
    description: 'Go hands-off with full automation, or stay in control with semi-automatic creation.',
    icon: '⚡',
  },
  {
    title: 'Calendar & Scheduling',
    description: 'Plan a month of content in minutes. Control frequency, format mix, and sales vs value ratio.',
    icon: '📅',
  },
  {
    title: 'Paid Ad Iteration',
    description: 'Turn organic winners into paid campaigns. Iterate and improve automatically.',
    icon: '🚀',
  },
]

export function ValueProps() {
  return (
    <section id="features" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-14">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-accent mb-3">
            Why Distribution Pilot
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            The unfair advantage for content at scale.
          </h2>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-2xl bg-black/30 border border-white/10 p-6 hover-glow transition-all"
            >
              <div className="text-3xl mb-4">{feature.icon}</div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-sm text-[var(--muted)] leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
