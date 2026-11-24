import { ArrowRight, CalendarDays, Clock, Cross, Sparkles } from 'lucide-react'
import PageHero from '../components/ui/PageHero'
import SectionHeading from '../components/ui/SectionHeading'
import CallToAction from '../components/ui/CallToAction'
import { ButtonLink } from '../components/ui/Button'
import ImagePlaceholder from '../components/ui/ImagePlaceholder'
import Ornament from '../components/ui/Ornament'

const novenaFormats = [
  {
    icon: Clock,
    duration: 'Nine days',
    title: 'Nine-Day Novena',
    text: 'A focused period of nine consecutive days of prayer and devotion.',
  },
  {
    icon: CalendarDays,
    duration: 'Nine weeks',
    title: 'Nine-Week Novena',
    text: 'A longer period of prayer that allows participants to develop a consistent spiritual routine.',
  },
  {
    icon: Sparkles,
    duration: 'Nine months',
    title: 'Nine-Month Novena',
    text: 'An extended period of prayer and spiritual commitment, arranged through the ministry.',
  },
]

export default function Novenas() {
  return (
    <>
      <PageHero
        eyebrow="A Journey of Prayer"
        title="Novenas"
        subtitle="Nine days, weeks or months of prayer and devotion."
        breadcrumb="Novenas"
        tone="marian"
        actions={
          <ButtonLink to="/contact" variant="light">
            Enquire About Novenas
            <ArrowRight size={15} aria-hidden="true" />
          </ButtonLink>
        }
        media={
          <ImagePlaceholder
            label="Holy Family Novena"
            className="h-[clamp(260px,46vh,390px)] rounded-t-[46%] border border-marian/25"
          />
        }
      />

      {/* The tradition */}
      <section className="section-padding bg-ivory">
        <div className="container-main grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-14">
          <div>
            <SectionHeading
              eyebrow="The tradition"
              title="What is a novena?"
              description="A novena is a traditional Catholic devotion involving nine consecutive days or another designated period of prayer for a particular intention."
            />

            <p className="mt-4 text-sm leading-8 text-marian">
              The Holy Family Novena Prayer Group encourages devotion through
              novena prayer and spiritual commitment. Novenas may be arranged in
              different formats according to the ministry’s guidance.
            </p>

            <div className="mt-6">
              <Ornament tone="crimson" />
            </div>
          </div>

          <div className="border border-marian/10 bg-pale-blue/55 p-6 text-center sm:p-8">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-marian/30 text-crimson">
              <Cross size={26} strokeWidth={1.3} aria-hidden="true" />
            </div>

            <p className="mt-5 font-heading text-[clamp(1.7rem,3vw,2.2rem)] italic leading-snug text-marian">
              “Nine days of prayer, offered with faith and trust.”
            </p>

            <p className="mt-3 text-[9px] font-semibold uppercase tracking-[0.18em] text-marian">
              A traditional Catholic devotion
            </p>
          </div>
        </div>
      </section>

      {/* Formats */}
      <section className="section-padding bg-white">
        <div className="container-main">
          <SectionHeading
            eyebrow="Ways to pray"
            title="Different Ways to Pray a Novena"
            description="The ministry encourages novena prayer in formats that suit different seasons of spiritual commitment."
            align="center"
          />

          <div className="mt-9 grid gap-5 md:grid-cols-3">
            {novenaFormats.map((item) => {
              const Icon = item.icon

              return (
                <article
                  key={item.title}
                  className="group border border-marian/10 border-t-[3px] border-t-crimson bg-ivory p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-sacred"
                >
                  <div className="flex items-center justify-between">
                    <Icon
                      size={24}
                      className="text-crimson"
                      strokeWidth={1.4}
                      aria-hidden="true"
                    />

                    <span className="text-[9px] font-semibold uppercase tracking-[0.16em] text-marian">
                      {item.duration}
                    </span>
                  </div>

                  <h3 className="mt-5 font-heading text-[1.8rem] leading-tight text-marian">
                    {item.title}
                  </h3>

                  <p className="mt-2.5 text-sm leading-7 text-marian">
                    {item.text}
                  </p>
                </article>
              )
            })}
          </div>

          <div className="mt-8 border border-marian/10 bg-pale-blue/40 px-5 py-5 text-center">
            <p className="text-sm leading-7 text-marian">
              For current arrangements and guidance, please contact the
              ministry. Novena schedules and participation details are confirmed
              by the ministry.
            </p>
          </div>
        </div>
      </section>

      <CallToAction
        eyebrow="Begin your journey"
        title="Begin Your Prayer Journey"
        text="Contact the ministry to enquire about novena arrangements and participation."
        primary={{ to: '/contact', label: 'Contact the Ministry' }}
        secondary={{ to: '/letters-to-god', label: 'Letters to God' }}
        variant="marian"
      />
    </>
  )
}
