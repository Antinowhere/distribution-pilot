'use client'

import Link from 'next/link'
import Image from 'next/image'

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        <div className="mt-4 flex items-center justify-between rounded-2xl bg-black/40 backdrop-blur-md px-5 py-3 hairline">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/distribution-pilot-icon.png"
              alt="Distribution Pilot"
              width={32}
              height={32}
              className="rounded-lg"
            />
            <span className="font-semibold tracking-tight hidden sm:block">
              Distribution Pilot
            </span>
          </Link>

          {/* Nav Links */}
          <nav className="hidden md:flex items-center gap-6">
            <a href="#features" className="text-sm text-[var(--muted)] hover:text-foreground transition-colors">
              Features
            </a>
            <a href="#how-it-works" className="text-sm text-[var(--muted)] hover:text-foreground transition-colors">
              How It Works
            </a>
            <a href="#booking" className="text-sm text-[var(--muted)] hover:text-foreground transition-colors">
              Book a Call
            </a>
          </nav>

          {/* CTA */}
          <a
            href="https://cal.com/liam-mason01/distribution-automation-strategy-call"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl bg-accent hover:bg-accent-hover px-4 py-2 text-sm font-semibold text-black transition-colors focus-ring"
          >
            Book a Call
          </a>
        </div>
      </div>
    </header>
  )
}
