import Image from 'next/image'

export function Footer() {
  return (
    <footer className="py-10 border-t border-white/10">
      <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Image
              src="/distribution-pilot-icon.png"
              alt="Distribution Pilot"
              width={24}
              height={24}
              className="rounded"
            />
            <span className="text-sm text-[var(--muted)]">
              Distribution Pilot — © 2026
            </span>
          </div>

          <a
            href="#"
            className="text-sm text-[var(--muted)] hover:text-foreground transition-colors"
          >
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  )
}
