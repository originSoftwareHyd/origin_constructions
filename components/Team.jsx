
import Image from 'next/image'
import Container from './ui/Container'
import Reveal from './ui/Reveal'
import SectionHeading from './ui/SectionHeading'

function getInitials(name) {
  return name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0])
    .join('')
    .toUpperCase()
}

function TeamPhoto({ member }) {
  const imagePosition =
    member.imagePosition === 'top'
      ? 'object-top'
      : member.imagePosition === 'center'
        ? 'object-center'
        : 'object-[50%_35%]'
  const imageClassName = `scale-[1.02] origin-top object-cover ${imagePosition}`

  if (!member.image) {
    return (
      <div
        className="relative grid aspect-square w-full place-items-center overflow-hidden bg-white"
        aria-hidden="true"
      >
        <div className="architectural-grid absolute inset-0 opacity-70" />
        <span className="relative text-5xl font-semibold tracking-[-0.07em] text-ink/75 sm:text-6xl lg:text-7xl">
          {getInitials(member.name)}
        </span>
      </div>
    )
  }

  const isRemote = /^https?:\/\//i.test(member.image)

  return (
    <div className="relative aspect-square w-full overflow-hidden bg-white">
      {isRemote ? (
        <img
          src={member.image}
          alt={member.name}
          loading="lazy"
          className={`h-full w-full ${imageClassName}`}
        />
      ) : (
        <Image
          src={member.image}
          alt={member.name}
          fill
          sizes="(min-width: 1280px) 360px, (min-width: 640px) 42vw, 46vw"
          className={imageClassName}
        />
      )}
    </div>
  )
}

export default function Team({ data }) {
  return (
    <section
      id="team"
      className="scroll-mt-24 bg-canvas py-14 sm:py-18 lg:py-24"
    >
      <Container>
        <div className="mx-auto w-full max-w-7xl">
          <Reveal>
            <SectionHeading
              badge={data.sectionBadge}
              heading={data.heading}
              subtitle={data.subtitle}
            />
          </Reveal>

          <div className="mx-auto mt-10 grid w-full grid-cols-2 gap-x-4 gap-y-9 sm:mt-12 sm:gap-x-6 sm:gap-y-12 lg:mt-14 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-14">
            {data.members.map((member, index) => (
              <Reveal
                key={member.name}
                className={
                  data.members.length % 2 === 1 &&
                  index === data.members.length - 1
                    ? 'team-grid-last-card'
                    : ''
                }
              >
                <article className="group flex h-full w-full min-w-0 flex-col">
                  <TeamPhoto member={member} />

                  <div className="flex flex-1 items-start justify-between gap-2 border-b border-ink/15 py-4 sm:gap-3 sm:py-5">
                    <div className="min-w-0">
                      <h3 className="min-h-10 text-sm font-semibold leading-snug tracking-tight text-ink sm:min-h-12 sm:text-lg lg:text-xl">
                        {member.name}
                      </h3>

                      <p className="mt-2 text-[0.58rem] font-extrabold uppercase leading-relaxed tracking-[0.12em] text-slate-500 sm:text-[0.67rem] sm:tracking-[0.15em]">
                        {member.role}
                      </p>
                    </div>

                    <span className="shrink-0 pt-1 text-[0.58rem] font-extrabold tracking-[0.12em] text-gold sm:text-[0.65rem]">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
