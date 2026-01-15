import Image from 'next/image'

export function Hero() {
  return (
    <section aria-label="Hero" className="flex flex-col items-center pt-32 pb-14 sm:pt-40 sm:pb-24">
      {/* Main headline - centered */}
      <div className="w-full text-center px-5 sm:px-6 lg:px-8">
        <h1 className="whitespace-nowrap text-[clamp(2rem,8vw,7rem)] font-bold leading-[1.0] tracking-tight">
          <span className="text-accent">Automate</span> your{' '}
          <span className="text-accent">growth</span>
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-xl text-[var(--muted)] sm:text-2xl">
          marketing with data powered content that performs
        </p>
        <p className="mx-auto mt-6 max-w-2xl text-pretty text-base leading-7 text-[var(--muted2)]">
          Not just making videos—making the <em>right</em> videos. Real-time trend data 
          meets automated creation for content that actually performs.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href="#booking"
            className="focus-ring inline-flex h-12 items-center justify-center rounded-xl bg-accent px-6 text-sm font-semibold text-black shadow-lg transition hover:bg-accent-hover"
          >
            Book a strategy call
          </a>
          <a
            href="#features"
            className="focus-ring inline-flex h-12 items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--panel)] px-6 text-sm font-semibold text-foreground transition hover:bg-[var(--panel-strong)]"
          >
            See the features
          </a>
        </div>
      </div>

      {/* Logo + brand at bottom */}
      <div className="mt-16 flex items-center justify-center gap-3">
        <Image
          src="/distribution-pilot-icon.png"
          alt="Distribution Pilot"
          width={40}
          height={40}
          className="rounded-lg"
        />
        <div>
          <p className="text-sm font-semibold tracking-wide">Distribution Pilot</p>
          <p className="text-xs text-[var(--muted2)]">
            Data-Powered Content Automation
          </p>
        </div>
      </div>
    </section>
  )
}
