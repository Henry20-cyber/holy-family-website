import {
  ArrowRight,
  BookOpen,
  CalendarDays,
  Church,
  HeartHandshake,
  Sparkles,
  Users,
} from 'lucide-react'
import PageHero from '../components/ui/PageHero'
import SectionHeading from '../components/ui/SectionHeading'
import CallToAction from '../components/ui/CallToAction'
import { ButtonLink } from '../components/ui/Button'
import ImagePlaceholder from '../components/ui/ImagePlaceholder'

const programs = [
  {
    icon: Users,
    title: 'Family Prayer Gatherings',
    text: 'Members come together for prayer, fellowship and spiritual encouragement, including gatherings hosted in members’ homes.',
  },
  {
    icon: Sparkles,
    title: 'Retreats and Spiritual Renewal',
    text: 'Retreats provide opportunities for reflection, confession, spiritual direction and renewed commitment to Christian life.',
  },
  {
    icon: Church,
    title: 'Eucharistic Celebrations',
    text: 'The ministry encourages participation in the Eucharist, Adoration and Benediction.',
  },
  {
    icon: BookOpen,
    title: 'Children and Youth Formation',
    text: 'Faith formation activities encourage younger generations to understand and practise Christian values.',
  },
  {
    icon: HeartHandshake,
    title: 'Family and Community Support',
    text: 'The ministry encourages parents, families and members to support one another and assist people experiencing hardship.',
  },
]

export default function Programs() {
  return (
    <>
      <PageHero
        eyebrow="Faith in Action"
        title="Our Programs"
        subtitle="Opportunities to pray, learn, serve and grow together."
        breadcrumb="Programs"
        tone="ivory"
        actions={
          <ButtonLink to="/contact">
            Ask About a Program
            <ArrowRight size={15} aria-hidden="true" />
          </ButtonLink>
        }
        media={
          <ImagePlaceholder
            label="Our Ministry Programs"
            className="h-[clamp(250px,44vh,370px)] rounded-t-[46%] border border-marian/25"
          />
        }
      />

      <section className="section-padding bg-ivory">
        <div className="container-main grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:gap-14">
          {/* Intro and schedule note */}
          <div className="lg:sticky lg:top-28 lg:h-fit">
            <SectionHeading
              eyebrow="Growing together"
              title="A rhythm of prayer, learning and service."
              description="Our programs bring individuals and families together to deepen their faith and strengthen their commitment to Christian living."
            />

            <p className="mt-4 text-sm leading-8 text-marian">
              From family prayer gatherings to retreats and charitable
              activities, each program supports our mission of bringing the
              Church back to the family.
            </p>

            <div className="mt-6 border border-marian/10 bg-pale-blue/50 p-5">
              <div className="flex items-start gap-3">
                <CalendarDays
                  size={19}
                  className="mt-0.5 shrink-0 text-crimson"
                  strokeWidth={1.5}
                  aria-hidden="true"
                />
                <div>
                  <p className="font-heading text-xl text-marian">
                    Dates and participation
                  </p>
                  <p className="mt-1.5 text-xs leading-6 text-marian">
                    Specific dates, venues and participation details will be
                    published when confirmed by the ministry.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6">
              <ButtonLink to="/contact" variant="outline">
                Contact the Ministry
              </ButtonLink>
            </div>
          </div>

          {/* Program list */}
          <div className="border-t border-marian/15">
            {programs.map((program, index) => {
              const Icon = program.icon
              const number = String(index + 1).padStart(2, '0')

              return (
                <article
                  key={program.title}
                  className="group border-b border-marian/15 py-6 transition-colors duration-300 hover:bg-white sm:px-4"
                >
                  <div className="flex items-start gap-4 sm:gap-6">
                    <span className="hidden w-10 shrink-0 pt-1 font-heading text-2xl text-crimson/45 sm:block">
                      {number}
                    </span>

                    <div className="flex h-11 w-11 shrink-0 items-center justify-center border border-marian/15 text-crimson transition-colors duration-300 group-hover:border-crimson group-hover:bg-crimson group-hover:text-white">
                      <Icon size={21} strokeWidth={1.5} aria-hidden="true" />
                    </div>

                    <div className="min-w-0">
                      <h2 className="font-heading text-[1.65rem] leading-tight text-marian sm:text-3xl">
                        {program.title}
                      </h2>

                      <p className="mt-2 max-w-2xl text-sm leading-7 text-marian">
                        {program.text}
                      </p>
                    </div>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <CallToAction
        eyebrow="Take part"
        title="Take Part in Our Programs"
        text="Connect with the ministry to learn more about its gatherings and activities."
        primary={{ to: '/contact', label: 'Contact the Ministry' }}
        secondary={{ to: '/novenas', label: 'Prayer and Novenas' }}
        variant="pale"
      />
    </>
  )
}
