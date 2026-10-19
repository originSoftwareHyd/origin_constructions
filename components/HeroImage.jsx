'use client'

import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'

export default function HeroImage({ src, alt = '' }) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const imageRef = useRef(null)
  const frameRef = useRef(null)

  useEffect(() => {
    if (imageRef.current?.complete && imageRef.current.naturalWidth > 0) {
      setIsLoaded(true)
    }
  }, [])

  useEffect(() => {
    const frame = frameRef.current
    if (!frame) return undefined

    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.35 }
    )

    observer.observe(frame)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={frameRef}
      className="hero-image-frame group relative aspect-[4/3] w-full overflow-hidden lg:aspect-auto lg:h-[clamp(18rem,calc(100svh-23rem),32rem)] border border-white/10 shadow-2xl shadow-black/25"
      data-loaded={isLoaded}
      data-visible={isVisible}
    >
      <div className="hero-image-reveal absolute inset-0">
        <Image
          src={src}
          ref={imageRef}
          alt={alt}
          fill
          priority
          sizes="(min-width: 1024px) 50vw, 100vw"
          onLoad={() => setIsLoaded(true)}
          className="object-cover object-center transition-transform duration-1000 ease-out group-hover:scale-[1.035] motion-reduce:transition-none"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-deep/35 via-brand-deep/10 to-transparent" aria-hidden="true" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-deep/25 via-transparent to-transparent" aria-hidden="true" />
        <div className="hero-image-sweep pointer-events-none absolute inset-y-0 -left-1/2 w-3/4 skew-x-[-18deg] bg-gradient-to-r from-transparent via-white/40 to-transparent" aria-hidden="true" />
      </div>
    </div>
  )
}
