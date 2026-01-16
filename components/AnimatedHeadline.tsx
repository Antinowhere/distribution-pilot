'use client'

import { useState } from 'react'

function GearIcon({ className, style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg className={className} style={style} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 15.5A3.5 3.5 0 0 1 8.5 12 3.5 3.5 0 0 1 12 8.5a3.5 3.5 0 0 1 3.5 3.5 3.5 3.5 0 0 1-3.5 3.5m7.43-2.53c.04-.32.07-.64.07-.97 0-.33-.03-.66-.07-1l2.11-1.63c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.31-.61-.22l-2.49 1c-.52-.39-1.06-.73-1.69-.98l-.37-2.65A.506.506 0 0 0 14 2h-4c-.25 0-.46.18-.5.42l-.37 2.65c-.63.25-1.17.59-1.69.98l-2.49-1c-.22-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64L4.57 11c-.04.34-.07.67-.07 1 0 .33.03.65.07.97l-2.11 1.66c-.19.15-.25.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1.01c.52.4 1.06.74 1.69.99l.37 2.65c.04.24.25.42.5.42h4c.25 0 .46-.18.5-.42l.37-2.65c.63-.26 1.17-.59 1.69-.99l2.49 1.01c.22.08.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.66Z"/>
    </svg>
  )
}

function ArrowIcon({ className, style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg className={className} style={style} viewBox="0 0 24 24" fill="currentColor">
      <path d="M13 20h-2V8l-5.5 5.5-1.42-1.42L12 4.16l7.92 7.92-1.42 1.42L13 8v12Z"/>
    </svg>
  )
}


const arrows = [
  // Top arrows
  { top: '-50%', left: '5%', delay: 0 },
  { top: '-60%', left: '25%', delay: 50 },
  { top: '-55%', left: '45%', delay: 100 },
  { top: '-65%', left: '65%', delay: 75 },
  { top: '-50%', left: '85%', delay: 125 },
  // Bottom arrows (also pointing up)
  { bottom: '-50%', left: '10%', delay: 60 },
  { bottom: '-55%', left: '35%', delay: 110 },
  { bottom: '-60%', left: '55%', delay: 30 },
  { bottom: '-50%', left: '75%', delay: 90 },
  { bottom: '-55%', left: '95%', delay: 140 },
]

export function AnimatedHeadline() {
  const [automateHover, setAutomateHover] = useState(false)
  const [yourHover, setYourHover] = useState(false)
  const [growthHover, setGrowthHover] = useState(false)

  return (
    <h1 className="whitespace-nowrap text-[clamp(2rem,8vw,7rem)] font-bold leading-[1.0] tracking-tight">
      {/* AUTOMATE */}
      <span
        className="relative inline-block cursor-default"
        onMouseEnter={() => setAutomateHover(true)}
        onMouseLeave={() => setAutomateHover(false)}
      >
        <span className="text-accent">Automate</span>
        
        {/* Gears */}
        <GearIcon
          className={`absolute -top-4 -left-2 w-6 h-6 text-accent/60 transition-all duration-300 ${
            automateHover 
              ? 'opacity-100 scale-100 animate-spin' 
              : 'opacity-0 scale-50'
          }`}
          style={{ animationDuration: '3s' }}
        />
        <GearIcon
          className={`absolute -top-2 -right-3 w-8 h-8 text-accent/40 transition-all duration-300 ${
            automateHover 
              ? 'opacity-100 scale-100 animate-spin' 
              : 'opacity-0 scale-50'
          }`}
          style={{ animationDuration: '4s', animationDirection: 'reverse' }}
        />
        <GearIcon
          className={`absolute -bottom-3 left-1/4 w-5 h-5 text-accent/50 transition-all duration-300 ${
            automateHover 
              ? 'opacity-100 scale-100 animate-spin' 
              : 'opacity-0 scale-50'
          }`}
          style={{ animationDuration: '2.5s' }}
        />
      </span>

      {' '}

      {/* YOUR */}
      <span
        className="relative inline-block cursor-default"
        onMouseEnter={() => setYourHover(true)}
        onMouseLeave={() => setYourHover(false)}
      >
        your
        {/* Hand-drawn circle */}
        <svg
          className={`absolute pointer-events-none transition-opacity duration-300 z-50 ${
            yourHover ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '140%',
            height: '180%',
          }}
          viewBox="0 0 100 60"
          fill="none"
        >
          <ellipse
            cx="50"
            cy="30"
            rx="46"
            ry="26"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            style={{
              strokeDasharray: 300,
              strokeDashoffset: yourHover ? 0 : 300,
              transition: 'stroke-dashoffset 0.6s ease-out',
            }}
            transform="rotate(-3 50 30)"
          />
          {/* Second slightly offset stroke for hand-drawn feel */}
          <ellipse
            cx="51"
            cy="29"
            rx="44"
            ry="24"
            stroke="rgba(255,255,255,0.4)"
            strokeWidth="1.5"
            strokeLinecap="round"
            style={{
              strokeDasharray: 280,
              strokeDashoffset: yourHover ? 0 : 280,
              transition: 'stroke-dashoffset 0.7s ease-out 0.1s',
            }}
            transform="rotate(2 51 29)"
          />
        </svg>
      </span>

      {' '}

      {/* GROWTH */}
      <span
        className="relative inline-block cursor-default"
        onMouseEnter={() => setGrowthHover(true)}
        onMouseLeave={() => setGrowthHover(false)}
      >
        <span className="text-accent">growth</span>
        
        {/* Floating arrows - top and bottom */}
        {arrows.map((arrow, i) => (
          <ArrowIcon
            key={i}
            className={`absolute w-6 h-6 text-accent/60 transition-all duration-500 ${
              growthHover 
                ? 'opacity-100' 
                : 'opacity-0'
            }`}
            style={{
              top: arrow.top,
              bottom: arrow.bottom,
              left: arrow.left,
              transitionDelay: `${arrow.delay}ms`,
              animation: growthHover 
                ? `float-arrow 1.2s ease-in-out infinite ${arrow.delay}ms` 
                : 'none',
            }}
          />
        ))}
      </span>
    </h1>
  )
}
