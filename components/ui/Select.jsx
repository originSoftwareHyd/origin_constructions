'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

// Accessible listbox dropdown that replaces the native <select>.
// Calls onChange with a select-like event so existing form handlers keep working.
export default function Select({ id, name, value, onChange, options, placeholder, invalid, describedBy, labelId }) {
  const [isOpen, setIsOpen] = useState(false)
  const [activeIndex, setActiveIndex] = useState(-1)
  const rootRef = useRef(null)
  const buttonRef = useRef(null)
  const listRef = useRef(null)
  const typeahead = useRef({ text: '', timer: null })
  const listId = `${id}-listbox`
  const selectedIndex = options.indexOf(value)

  useEffect(() => {
    if (!isOpen) return undefined

    const onPointerDown = (event) => {
      if (!rootRef.current?.contains(event.target)) setIsOpen(false)
    }

    document.addEventListener('mousedown', onPointerDown)
    document.addEventListener('touchstart', onPointerDown)
    return () => {
      document.removeEventListener('mousedown', onPointerDown)
      document.removeEventListener('touchstart', onPointerDown)
    }
  }, [isOpen])

  useEffect(() => {
    if (!isOpen || activeIndex < 0) return
    listRef.current?.children[activeIndex]?.scrollIntoView({ block: 'nearest' })
  }, [isOpen, activeIndex])

  const open = () => {
    setActiveIndex(selectedIndex >= 0 ? selectedIndex : 0)
    setIsOpen(true)
  }

  const choose = (index) => {
    onChange({ target: { name, value: options[index] } })
    setIsOpen(false)
    buttonRef.current?.focus()
  }

  const onKeyDown = (event) => {
    const last = options.length - 1

    switch (event.key) {
      case 'ArrowDown':
        event.preventDefault()
        if (!isOpen) open()
        else setActiveIndex((index) => Math.min(index + 1, last))
        break
      case 'ArrowUp':
        event.preventDefault()
        if (!isOpen) open()
        else setActiveIndex((index) => Math.max(index - 1, 0))
        break
      case 'Home':
        if (isOpen) {
          event.preventDefault()
          setActiveIndex(0)
        }
        break
      case 'End':
        if (isOpen) {
          event.preventDefault()
          setActiveIndex(last)
        }
        break
      case 'Enter':
      case ' ':
        event.preventDefault()
        if (isOpen && activeIndex >= 0) choose(activeIndex)
        else open()
        break
      case 'Escape':
        if (isOpen) {
          event.preventDefault()
          setIsOpen(false)
        }
        break
      case 'Tab':
        setIsOpen(false)
        break
      default:
        if (event.key.length === 1 && /\S/.test(event.key)) {
          const state = typeahead.current
          clearTimeout(state.timer)
          state.text += event.key.toLowerCase()
          state.timer = setTimeout(() => (state.text = ''), 500)
          const match = options.findIndex((option) => option.toLowerCase().startsWith(state.text))
          if (match >= 0) {
            if (!isOpen) setIsOpen(true)
            setActiveIndex(match)
          }
        }
    }
  }

  return (
    <div ref={rootRef} className="relative">
      <button
        ref={buttonRef}
        id={id}
        type="button"
        role="combobox"
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        aria-controls={listId}
        aria-labelledby={`${labelId} ${id}`}
        aria-activedescendant={isOpen && activeIndex >= 0 ? `${id}-option-${activeIndex}` : undefined}
        aria-invalid={invalid}
        aria-describedby={describedBy}
        onClick={() => (isOpen ? setIsOpen(false) : open())}
        onKeyDown={onKeyDown}
        className="group flex w-full min-w-0 items-center justify-between gap-3 bg-transparent py-3 text-left text-sm focus:outline-none"
      >
        <span className={`truncate ${value ? 'text-ink' : 'text-slate-400'}`}>{value || placeholder}</span>
        <span
          className={`grid h-7 w-7 shrink-0 place-items-center border transition-all duration-200 ${
            isOpen ? 'rotate-180 border-brand bg-brand text-white' : 'border-ink/10 text-slate-500 group-hover:border-brand/50 group-hover:text-brand'
          }`}
          aria-hidden="true"
        >
          <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="m6 9 6 6 6-6" />
          </svg>
        </span>
      </button>

      <AnimatePresence>
        {isOpen ? (
          <motion.ul
            ref={listRef}
            id={listId}
            role="listbox"
            aria-labelledby={labelId}
            tabIndex={-1}
            initial={{ opacity: 0, y: -6, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.98 }}
            transition={{ duration: 0.16, ease: [0.22, 1, 0.36, 1] }}
            className="absolute left-0 right-0 top-full z-30 mt-2 max-h-72 origin-top overflow-y-auto border border-ink/10 bg-white p-1.5 shadow-architectural"
          >
            {options.map((option, index) => {
              const isSelected = option === value
              const isActive = index === activeIndex

              return (
                <li
                  key={option}
                  id={`${id}-option-${index}`}
                  role="option"
                  aria-selected={isSelected}
                  onMouseEnter={() => setActiveIndex(index)}
                  onMouseDown={(event) => event.preventDefault()}
                  onClick={() => choose(index)}
                  className={`relative flex cursor-pointer items-center justify-between gap-3 px-3 py-2.5 text-sm transition-colors ${
                    isActive ? 'bg-brand/[0.07] text-brand-dark' : 'text-slate-700'
                  } ${isSelected ? 'font-semibold' : ''}`}
                >
                  <span className={`absolute inset-y-1.5 left-0 w-0.5 bg-brand transition-opacity ${isActive || isSelected ? 'opacity-100' : 'opacity-0'}`} aria-hidden="true" />
                  <span className="truncate">{option}</span>
                  {isSelected ? (
                    <svg viewBox="0 0 24 24" className="h-4 w-4 shrink-0 text-brand" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="m5 12 4.5 4.5L19 7" />
                    </svg>
                  ) : null}
                </li>
              )
            })}
          </motion.ul>
        ) : null}
      </AnimatePresence>
    </div>
  )
}
