'use client'

import { motion, useReducedMotion } from 'framer-motion'
import Button from './ui/Button'

// Blueprint line drawing of a modern villa and tower crane; each group draws itself in order.
const drawing = [
  {
    // Ground line and plot dimension
    paths: ['M20 300 H460', 'M60 322 H400', 'M60 316 V328', 'M400 316 V328'],
    className: 'stroke-white/35'
  },
  {
    // Ground floor, first floor and roof slabs with overhangs
    paths: [
      'M80 300 V214 H330 V300',
      'M60 214 H350',
      'M100 214 V136 H360 V214',
      'M84 136 H382',
      'M100 136 V128 H382 V136'
    ],
    className: 'stroke-white'
  },
  {
    // Glazing, door and balcony rail
    paths: [
      'M110 240 H170 V300',
      'M110 240 V300',
      'M140 240 V300',
      'M200 250 H240 V300 M200 250 V300',
      'M265 236 H315 V280 H265 Z',
      'M125 160 H205 V200 H125 Z',
      'M165 160 V200',
      'M235 160 H340 V200 H235 Z',
      'M270 160 V200 M305 160 V200',
      'M220 214 V198 H350 M240 214 V198 M260 214 V198 M280 214 V198 M300 214 V198 M320 214 V198'
    ],
    className: 'stroke-brand'
  },
  {
    // Tower crane: mast, jib, counter-jib, hook
    paths: [
      'M420 300 V60',
      'M432 300 V60',
      'M420 280 L432 260 L420 240 L432 220 L420 200 L432 180 L420 160 L432 140 L420 120 L432 100 L420 80 L432 60',
      'M426 60 V36',
      'M300 60 H470',
      'M300 60 L426 36 L470 60',
      'M450 60 V74 H470 V60',
      'M330 60 V118',
      'M322 118 H338 V128 H322 Z'
    ],
    className: 'stroke-gold'
  },
  {
    // Dimension and section markers
    paths: ['M60 128 V300', 'M54 128 H66', 'M54 214 H66', 'M54 300 H66'],
    className: 'stroke-white/30'
  }
]

const nodes = [
  [80, 214],
  [100, 136],
  [330, 214],
  [360, 136],
  [426, 36],
  [330, 118]
]

export default function InnovationBanner({ data }) {
  const reduceMotion = useReducedMotion()
  const tickerItems = [...data.ticker, ...data.ticker]

  return (
    <div className="innovation-banner relative overflow-hidden border border-brand/25 bg-brand-deep text-white shadow-architectural-dark">
      <div className="absolute inset-0 architectural-grid-dark opacity-70" aria-hidden="true" />
      <div className="innovation-glow absolute -left-24 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full bg-brand/25 blur-3xl" aria-hidden="true" />
      <div className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-brand via-brand/60 to-gold" aria-hidden="true" />

      <div className="relative grid gap-10 px-6 py-10 sm:px-10 sm:py-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:items-center lg:gap-12 lg:px-14 lg:py-14">
        <div className="min-w-0">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-center gap-3 text-[0.68rem] font-extrabold uppercase tracking-[0.22em] text-brand"
          >
            <span className="relative flex h-2.5 w-2.5" aria-hidden="true">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand opacity-60 motion-reduce:animate-none" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-brand" />
            </span>
            {data.eyebrow}
          </motion.div>

          <motion.h3
            initial={reduceMotion ? false : { opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="mt-5 text-balance text-3xl font-semibold leading-[1.1] tracking-[-0.03em] sm:text-4xl xl:text-[2.75rem]"
          >
            {data.heading.split(data.highlight)[0]}
            <span className="innovation-highlight bg-gradient-to-r from-brand via-sky-300 to-brand bg-clip-text text-transparent">
              {data.highlight}
            </span>
            {data.heading.split(data.highlight)[1]}
          </motion.h3>

          <motion.p
            initial={reduceMotion ? false : { opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
            className="mt-5 max-w-xl text-base leading-8 text-white/70"
          >
            {data.text}
          </motion.p>

          <motion.ul
            initial={reduceMotion ? false : { opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7, delay: 0.24, ease: [0.22, 1, 0.36, 1] }}
            className="mt-7 grid max-w-xl grid-cols-3 border-y border-white/10"
          >
            {data.points.map((point) => (
              <li key={point.label} className="border-r border-white/10 py-4 pr-3 last:border-r-0 [&:not(:first-child)]:pl-4">
                <span className="block text-xl font-semibold tracking-tight text-white sm:text-2xl">{point.value}</span>
                <span className="mt-1 block text-[0.62rem] font-extrabold uppercase leading-4 tracking-[0.14em] text-white/50">
                  {point.label}
                </span>
              </li>
            ))}
          </motion.ul>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="#contact" variant="brand">
              {data.cta}
            </Button>
            <Button href="#services" variant="outline">
              {data.secondaryCta}
            </Button>
          </div>
        </div>

        <div className="relative min-w-0" aria-hidden="true">
          <div className="relative border border-white/10 bg-white/[0.03] p-4 sm:p-5">
            <div className="flex items-center justify-between border-b border-white/10 pb-3 text-[0.6rem] font-extrabold uppercase tracking-[0.18em] text-white/45">
              <span>Elevation · G+1 Villa</span>
              <span className="text-brand">Hyderabad</span>
            </div>

            <div className="relative overflow-hidden">
              <div className="innovation-scan pointer-events-none absolute inset-y-0 w-24 bg-gradient-to-r from-transparent via-brand/20 to-transparent motion-reduce:hidden" />
              <svg viewBox="0 0 480 340" className="relative h-auto w-full" fill="none" strokeLinecap="round" strokeLinejoin="round">
                {drawing.map((group, groupIndex) =>
                  group.paths.map((d, pathIndex) => (
                    <motion.path
                      key={`${groupIndex}-${pathIndex}`}
                      d={d}
                      className={group.className}
                      strokeWidth={groupIndex === 1 ? 2 : 1.4}
                      initial={reduceMotion ? false : { pathLength: 0, opacity: 0 }}
                      whileInView={{ pathLength: 1, opacity: 1 }}
                      viewport={{ once: true, amount: 0.3 }}
                      transition={{
                        pathLength: { duration: 1.1, delay: groupIndex * 0.55 + pathIndex * 0.08, ease: 'easeInOut' },
                        opacity: { duration: 0.2, delay: groupIndex * 0.55 + pathIndex * 0.08 }
                      }}
                    />
                  ))
                )}

                {nodes.map(([cx, cy], index) => (
                  <motion.circle
                    key={`${cx}-${cy}`}
                    cx={cx}
                    cy={cy}
                    r="3.5"
                    className="fill-brand-deep stroke-brand"
                    strokeWidth="1.5"
                    initial={reduceMotion ? false : { scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.4, delay: 2.6 + index * 0.1 }}
                  />
                ))}

                <g className="innovation-hook motion-reduce:animate-none">
                  <path d="M330 128 V140" className="stroke-gold" strokeWidth="1.4" />
                  <path d="M318 140 H342 V156 H318 Z" className="fill-gold/20 stroke-gold" strokeWidth="1.4" />
                </g>
              </svg>
            </div>

            <div className="mt-3 grid grid-cols-3 gap-3 border-t border-white/10 pt-3 text-[0.58rem] font-extrabold uppercase tracking-[0.16em] text-white/40">
              <span>Concept</span>
              <span className="text-center">Structure</span>
              <span className="text-right">Handover</span>
            </div>
          </div>
        </div>
      </div>

      <div className="relative overflow-hidden border-t border-white/10 bg-black/20 py-3.5">
        <div className="innovation-ticker flex w-max gap-8 whitespace-nowrap text-[0.66rem] font-extrabold uppercase tracking-[0.2em] text-white/55 motion-reduce:animate-none">
          {tickerItems.map((item, index) => (
            <span key={`${item}-${index}`} className="flex items-center gap-8" aria-hidden={index >= data.ticker.length}>
              {item}
              <span className="h-1.5 w-1.5 rotate-45 bg-brand" aria-hidden="true" />
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
