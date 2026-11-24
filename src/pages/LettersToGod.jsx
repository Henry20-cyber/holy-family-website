import { ArrowRight, BookOpen, Church, Heart, PenLine, Sparkles } from 'lucide-react'
import PageHero from '../components/ui/PageHero'
import SectionHeading from '../components/ui/SectionHeading'
import { ButtonLink } from '../components/ui/Button'
import CallToAction from '../components/ui/CallToAction'
import Ornament from '../components/ui/Ornament'

const steps = [
  {
    number: '01',
    icon: PenLine,
    title: 'Write Your Intentions',
    text: 'Members write down their personal prayers, hopes and intentions as an expression of faith and trust in God.',
  },
  {
    number: '02',
    icon: Heart,
    title: 'Remembered in Prayer',
    text: 'The letters are included in the prayer life of the community during its gatherings.',
  },
  {
    number: '03',
    icon: Church,
    title: 'The Annual Celebration',
    text: 'The tradition concludes with the return of letters during the annual Feast of the Holy Family celebration.',
  },
]

export default function LettersToGod() {
  return (
    <>
      <PageHero
        eyebrow="A Personal Journey of Faith"
        title="Letters to God"
        subtitle="Bringing our hopes, prayers and intentions before God."
        breadcrumb="Letters to God"
        tone="marian"
        actions={
          <ButtonLink to="/contact" variant="light">
            Learn About the Tradition
            <ArrowRight size={15} aria-hidden="true" />
          </ButtonLink>
        }
        media={
          <div className="relative mx-auto w-full max-w-[330px] rotate-2 border border-white/40 bg-ivory p-7 text-center shadow-2xl shadow-black/25">
            <span
              className="absolute inset-3 border border-marian/10"
              aria-hidden="true"
            />

            <div className="relative">
              <BookOpen
                size={38}
                className="mx-auto text-crimson"
                strokeWidth={1.1}
                aria-hidden="true"
              />

              <p className="heading-serif mt-4 text-[2rem] leading-none text-marian">
                Letters of Faith
              </p>

              <div className="paper-lines mt-5 h-16" aria-hidden="true" />

              <p className="mt-4 text-[8px] font-semibold uppercase tracking-[0.18em] text-marian">
                Prayer · Hope · Trust
              </p>
            </div>
          </div>
        }
      />

      {/* The tradition */}
      <section className="section-padding bg-ivory">
        <div className="container-main grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-14">
          <div>
            <SectionHeading
              eyebrow="The tradition"
              title="A personal letter, held in prayer."
              description="The Letters to God tradition provides members with an opportunity to express their personal prayer intentions through written letters."
            />

            <p className="mt-4 text-sm leading-8 text-marian">
              According to the ministry’s tradition, members prepare letters
              containing their prayer intentions. These intentions are
              remembered in prayer during ministry gatherings, with the letters
              returned during the annual Feast of the Holy Family celebration.
            </p>

            <div className="mt-6">
              <Ornament tone="crimson" />
            </div>
          </div>

          <div className="relative border border-marian/10 bg-white p-6 shadow-sacred sm:p-8">
            <span
              className="absolute inset-3 border border-marian/15"
              aria-hidden="true"
            />

            <div className="relative">
              <PenLine
                size={24}
                className="text-crimson"
                strokeWidth={1.4}
                aria-hidden="true"
              />

              <p className="mt-4 font-heading text-[clamp(1.6rem,3vw,2.1rem)] italic leading-snug text-marian">
                “Bringing our hopes, prayers and intentions before God.”
              </p>

              <div className="paper-lines mt-6 h-24" aria-hidden="true" />

              <div className="mt-4 flex items-center justify-between gap-4">
                <span className="text-[8px] font-semibold uppercase tracking-[0.18em] text-marian">
                  A letter of faith
                </span>

                <Sparkles
                  size={16}
                  className="text-marian"
                  aria-hidden="true"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How the tradition unfolds */}
      <section className="section-padding bg-pale-blue/55">
        <div className="container-main">
          <SectionHeading
            eyebrow="A tradition of faith"
            title="A Tradition of Faith"
            description="The tradition invites members to place their intentions before God in a personal and prayerful way."
            align="center"
          />

          <div className="mt-9 grid gap-5 md:grid-cols-3">
            {steps.map((step) => {
              const Icon = step.icon

              return (
                <article
                  key={step.number}
                  className="relative border border-marian/10 bg-white p-6"
                >
                  <span className="absolute right-5 top-4 font-heading text-4xl text-crimson/25">
                    {step.number}
                  </span>

                  <div className="flex h-11 w-11 items-center justify-center bg-ivory text-crimson">
                    <Icon size={21} strokeWidth={1.5} aria-hidden="true" />
                  </div>

                  <h3 className="mt-5 font-heading text-2xl leading-tight text-marian">
                    {step.title}
                  </h3>

                  <p className="mt-2 text-sm leading-7 text-marian">
                    {step.text}
                  </p>
                </article>
              )
            })}
          </div>

          <p className="mt-6 text-center text-xs leading-6 text-marian">
            Participation arrangements are provided by the ministry. Please
            contact the ministry for guidance on taking part in the tradition.
          </p>
        </div>
      </section>

      {/* Closing prayer */}
      <section className="border-y border-marian/10 bg-ivory py-10 sm:py-12">
        <div className="container-narrow text-center">
          <span className="ornament justify-center" aria-hidden="true">
            <span className="ornament-diamond" />
          </span>

          <p className="mt-4 font-heading text-[clamp(1.8rem,3.6vw,2.7rem)] italic leading-snug text-marian">
            Jesus, Mary and Joseph, pray for us.
          </p>

          <p className="mt-3 text-[9px] font-semibold uppercase tracking-[0.18em] text-marian">
            The closing prayer of our community
          </p>
        </div>
      </section>

      <CallToAction
        eyebrow="Learn about the tradition"
        title="Learn About the Tradition"
        text="Contact the ministry to learn about participation and the arrangements for Letters to God."
        primary={{ to: '/contact', label: 'Contact the Ministry' }}
        secondary={{ to: '/novenas', label: 'Explore Novenas' }}
        variant="marian"
      />
    </>
  )
}
