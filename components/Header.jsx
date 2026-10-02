'use client'

import Image from 'next/image'
import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import Icon from './ui/Icon'

export default function Header({ data }) {
  const [isOpen, setIsOpen] = useState(false)
  const menuButtonRef = useRef(null)
  const closeButtonRef = useRef(null)
  const dialogRef = useRef(null)

  useEffect(() => {
    if (!isOpen) return undefined

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        setIsOpen(false)
        requestAnimationFrame(() => menuButtonRef.current?.focus())
        return
      }

      if (event.key !== 'Tab' || !dialogRef.current) return

      const focusable = dialogRef.current.querySelectorAll(
        'a[href], button:not([disabled]), input:not([disabled]), textarea:not([disabled])'
      )
      if (!focusable.length) return

      const first = focusable[0]
      const last = focusable[focusable.length - 1]

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }

    requestAnimationFrame(() => closeButtonRef.current?.focus())
    window.addEventListener('keydown', onKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [isOpen])

  const closeMenu = () => {
    setIsOpen(false)
    requestAnimationFrame(() => menuButtonRef.current?.focus())
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="hidden border-b border-white/10 bg-brand-deep text-white/75 md:block">
        <div className="container-shell flex min-h-9 items-center justify-between gap-6 py-2 text-[0.62rem] font-semibold uppercase tracking-[0.14em]">
          <div className="flex min-w-0 items-center gap-7">
            <a className="truncate transition-colors hover:text-white" href={`mailto:${data.contact.email}`}>
              {data.contact.email}
            </a>
            <a className="shrink-0 transition-colors hover:text-white" href={`tel:${data.contact.phone.replace(/\s+/g, '')}`}>
              {data.contact.phone}
            </a>
          </div>
          <span className="shrink-0 text-white/60">{data.contact.hours}</span>
        </div>
      </div>

      <nav
        aria-label="Primary navigation"
        className="border-b border-ink/10 bg-canvas/95 backdrop-blur-xl"
      >
        <div className="container-shell flex min-h-[4.75rem] items-center justify-between gap-6">
          <a href="#home" aria-label={data.brand.name} className="shrink-0">
            <Image
              src={data.brand.logo}
              alt={data.brand.logoAlt}
              width={180}
              height={48}
              priority
              sizes="(min-width: 1024px) 180px, (min-width: 640px) 150px, 130px"
              className="h-auto w-[130px] sm:w-[150px] lg:w-[180px]"
            />
          </a>

          <div className="hidden items-center gap-7 lg:flex">
            {data.navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="group relative py-3 text-[0.67rem] font-extrabold uppercase tracking-[0.14em] text-slate-700 transition-colors hover:text-ink"
              >
                {item.name}
                <span className="absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-brand transition-transform duration-200 group-hover:scale-x-100" />
              </a>
            ))}
          </div>

          <a
            href="#contact"
            className="hidden min-h-11 items-center justify-center border border-brand bg-brand px-4 py-3 text-[0.66rem] font-extrabold uppercase tracking-[0.15em] text-white transition-colors hover:bg-brand-dark lg:inline-flex"
          >
            {data.hero.primaryCta}
          </a>

          <button
            type="button"
            ref={menuButtonRef}
            onClick={() => setIsOpen(true)}
            className="inline-flex h-11 w-11 shrink-0 items-center justify-center border border-ink/15 text-ink transition-colors hover:border-brand hover:text-brand lg:hidden"
            aria-label="Open navigation menu"
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
          >
            <Icon name="menu" />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen ? (
          <motion.div
            className="fixed inset-0 bg-brand-deep/45 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onMouseDown={closeMenu}
          >
            <motion.aside
              id="mobile-navigation"
              ref={dialogRef}
              role="dialog"
              aria-modal="true"
              aria-label="Mobile navigation"
              className="ml-auto flex h-full w-[min(88vw,26rem)] flex-col bg-canvas px-6 py-6 shadow-architectural-dark"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.26, ease: [0.22, 1, 0.36, 1] }}
              onMouseDown={(event) => event.stopPropagation()}
            >
              <div className="flex items-center justify-between border-b border-ink/10 pb-5">
                <Image
                  src={data.brand.logo}
                  alt={data.brand.logoAlt}
                  width={150}
                  height={40}
                  sizes="150px"
                  className="h-auto w-[130px]"
                />
                <button
                  type="button"
                  ref={closeButtonRef}
                  onClick={closeMenu}
                  className="grid h-10 w-10 place-items-center border border-ink/15 transition-colors hover:border-brand hover:text-brand"
                  aria-label="Close navigation menu"
                >
                  <Icon name="close" />
                </button>
              </div>

              <div className="flex flex-1 flex-col justify-center">
                {data.navigation.map((item, index) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={closeMenu}
                    className="group flex items-end justify-between border-b border-ink/10 py-4 text-2xl font-semibold tracking-tight transition-colors hover:text-brand"
                  >
                    <span>{item.name}</span>
                    <span className="text-xs font-extrabold tracking-[0.15em] text-gold">0{index + 1}</span>
                  </a>
                ))}
              </div>

              <div className="border-t border-ink/10 pt-5 text-xs leading-6 text-slate-600">
                <a href={`mailto:${data.contact.email}`} className="block break-words transition-colors hover:text-brand">
                  {data.contact.email}
                </a>
                <a href={`tel:${data.contact.phone.replace(/\s+/g, '')}`} className="block transition-colors hover:text-brand">
                  {data.contact.phone}
                </a>
              </div>
            </motion.aside>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  )
}
