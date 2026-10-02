import Image from 'next/image'
import Container from './ui/Container'

function SocialIcon({ platform }) {
  const commonProps = {
    width: 16,
    height: 16,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.8,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    'aria-hidden': true,
  }

  switch (platform) {
    case 'Facebook':
      return (
        <svg {...commonProps}>
          <path d="M14 8h3V4h-3c-3.3 0-5 1.9-5 5v3H6v4h3v8h4v-8h3.2l.8-4H13V9c0-.7.3-1 1-1Z" />
        </svg>
      )

    case 'Twitter':
      return (
        <svg
          {...commonProps}
          viewBox="0 0 24 24"
          strokeWidth="1.7"
        >
          <path d="M18.5 3h2.9l-6.3 7.2L22.5 21h-5.7l-4.5-6-5.2 6H4.2l6.7-7.7L2.3 3H8l4.1 5.4L18.5 3Zm-1 16h1.6L7.7 4.9H6L17.5 19Z" />
        </svg>
      )

    case 'Pinterest':
      return (
        <svg {...commonProps}>
          <path d="M9.5 20.5c.7-1.1 1.2-2.7 1.5-4.1.4.7 1.5 1.4 3 1.4 3.9 0 6.5-3.5 6.5-7.7C20.5 6 17.5 3 13.1 3 7.7 3 5 6.8 5 10c0 2 .8 3.8 2.4 4.5.3.1.5 0 .6-.3l.5-1.9c.1-.3 0-.5-.2-.8-.5-.6-.8-1.4-.8-2.3 0-2.8 2.1-5.4 5.8-5.4 3.2 0 4.9 2 4.9 4.6 0 3.5-1.5 6.4-3.7 6.4-1.2 0-2.1-1-1.8-2.2.3-1.4 1-2.9 1-3.9 0-.9-.5-1.7-1.6-1.7-1.3 0-2.4 1.4-2.4 3.2 0 1.2.4 2 .4 2s-1.3 5.6-1.5 6.5Z" />
        </svg>
      )

    case 'Behance':
      return (
        <svg {...commonProps}>
          <path d="M4 6h5.5c3 0 4.8 1.4 4.8 3.6 0 1.4-.7 2.4-1.9 2.9 1.6.4 2.5 1.5 2.5 3.1 0 2.6-2 4.4-5.1 4.4H4V6Zm3.1 2.4v3.1h2c1.3 0 2-.6 2-1.6s-.7-1.5-2-1.5h-2Zm0 5.5v3.6h2.5c1.4 0 2.2-.7 2.2-1.8 0-1.2-.8-1.8-2.2-1.8H7.1ZM16.2 9h4.5v1.4h-4.5V9Zm2.3 2.5c2.5 0 4.1 1.8 4.1 4.5v.7h-6.8c.1 1.6 1 2.5 2.4 2.5 1 0 1.7-.4 2.2-1.2l1.9 1.1c-.9 1.4-2.4 2.2-4.3 2.2-2.9 0-4.7-1.9-4.7-4.9 0-2.9 1.9-4.9 5.2-4.9Zm-2.7 3.4h4.1c-.2-1.1-.8-1.8-1.9-1.8-1.1 0-1.9.7-2.2 1.8Z" />
        </svg>
      )

    case 'Instagram':
      return (
        <svg {...commonProps}>
          <rect x="3.5" y="3.5" width="17" height="17" rx="4" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="17.5" cy="6.8" r="0.9" fill="currentColor" stroke="none" />
        </svg>
      )

    case 'Youtube':
      return (
        <svg
          {...commonProps}
          fill="currentColor"
          stroke="none"
        >
          <path d="M23.2 7.1a3 3 0 0 0-2.1-2.1C19.2 4.5 12 4.5 12 4.5s-7.2 0-9.1.5A3 3 0 0 0 .8 7.1 31 31 0 0 0 .3 12a31 31 0 0 0 .5 4.9 3 3 0 0 0 2.1 2.1c1.9.5 9.1.5 9.1.5s7.2 0 9.1-.5a3 3 0 0 0 2.1-2.1 31 31 0 0 0 .5-4.9 31 31 0 0 0-.5-4.9ZM9.7 15.5v-7l6 3.5-6 3.5Z" />
        </svg>
      )

    default:
      return null
  }
}

export default function Footer({ data }) {
  return (
    <footer className="border-t border-white/10 bg-brand-deep text-white">
      <Container className="py-12 sm:py-14 lg:py-16">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-start lg:gap-16">
          {/* Brand */}
          <div className="min-w-0">
            <div className="inline-flex max-w-full rounded-none border border-black/10 bg-transparent p-3">
              <Image
                src="/logo/o4.png"
                alt={data.brand.logoAlt}   
                width={230}
                height={61}
                sizes="(max-width: 640px) 195px, 230px"
                className="h-auto w-[195px] max-w-full rounded-none sm:w-[230px]"
              />
            </div>

            <p className="mt-5 max-w-xl text-sm leading-7 text-white/60">
              {data.brand.tagline}
            </p>
          </div>

          {/* Footer navigation + social */}
          <div className="grid gap-9 sm:grid-cols-2 sm:gap-12">
            {/* Navigation */}
            <div>
              <div className="text-[0.63rem] font-extrabold uppercase tracking-[0.18em] text-white/45">
                Navigation
              </div>

              <nav
                aria-label="Footer navigation"
                className="mt-4 grid grid-cols-2 gap-x-7 gap-y-3 text-[0.65rem] font-extrabold uppercase tracking-[0.14em] text-white/65"
              >
                {data.navigation.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="transition-colors hover:text-brand-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-2 focus-visible:ring-offset-brand-deep"
                  >
                    {item.name}
                  </a>
                ))}
              </nav>
            </div>

            {/* Social */}
            <div>
              <div className="text-[0.63rem] font-extrabold uppercase tracking-[0.18em] text-white/45">
                Social
              </div>

              <div className="mt-4 grid grid-cols-2 gap-x-7 gap-y-3">
                {data.socials.map((social) => {
                  const isPlaceholder = social.href === '#'

                  const content = (
                    <>
                      <span className="shrink-0 text-white/70 transition-colors group-hover:text-brand-accent">
                        <SocialIcon platform={social.platform} />
                      </span>

                      <span>{social.platform}</span>
                    </>
                  )

                  if (isPlaceholder) {
                    return (
                      <span
                        key={social.platform}
                        className="group inline-flex min-w-0 items-center gap-2 text-[0.65rem] font-extrabold uppercase tracking-[0.14em] text-white/40"
                        aria-label={`${social.platform} link not provided`}
                      >
                        {content}
                      </span>
                    )
                  }

                  return (
                    <a
                      key={social.platform}
                      href={social.href}
                      rel="noreferrer"
                      target="_blank"
                      className="group inline-flex min-w-0 items-center gap-2 text-[0.65rem] font-extrabold uppercase tracking-[0.14em] text-white/65 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-2 focus-visible:ring-offset-brand-deep"
                    >
                      {content}
                    </a>
                  )
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom attribution */}
        <div className="mt-10 grid gap-4 border-t border-white/10 pt-5 text-[0.61rem] font-semibold uppercase tracking-[0.12em] text-white/38 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center">
          <span className="min-w-0 break-words">
            {data.brand.copyright}
          </span>

          <span className="text-white/55">
            Developed by Origin Softwares
          </span>
        </div>
      </Container>
    </footer>
  )
}