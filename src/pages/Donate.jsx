import {
  ArrowRight,
  BookOpen,
  Church,
  HandHeart,
  HeartHandshake,
  Info,
  ShieldCheck,
} from 'lucide-react'
import PageHero from '../components/ui/PageHero'
import SectionHeading from '../components/ui/SectionHeading'
import { ButtonLink } from '../components/ui/Button'
import CallToAction from '../components/ui/CallToAction'
import ImagePlaceholder from '../components/ui/ImagePlaceholder'

const supportAreas = [
  {
    icon: Church,
    title: 'Support Spiritual Activities',
    text: 'Help sustain prayer gatherings, retreats, celebrations and other spiritual programs.',
  },
  {
    icon: HeartHandshake,
    title: 'Support Charitable Work',
    text: 'Contribute towards practical assistance and acts of compassion for people experiencing hardship.',
  },
  {
    icon: BookOpen,
    title: 'Support the Community',
    text: 'Your generosity helps the ministry continue its mission of strengthening Christian families.',
  },
]

export default function Donate() {
  return (
    <>
      <PageHero
        eyebrow="Support Our Mission"
        title="Give With a Generous Heart"
        subtitle="Your generosity helps support the work of the ministry."
        breadcrumb="Donate"
        tone="pale"
        actions={
          <ButtonLink to="/contact">
            Ask About Giving
            <ArrowRight size={15} aria-hidden="true" />
          </ButtonLink>
        }
      />

      <section className="section-padding bg-ivory">
        <div className="container-main grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start lg:gap-14">
          <div>
            <SectionHeading
              eyebrow="Giving with purpose"
              title="Your Support Makes a Difference"
              description="The work of a prayer community is strengthened by the generosity, commitment and support of its members and friends."
            />

            <p className="mt-4 text-sm leading-8 text-marian">
              Contributions can help sustain ministry activities, spiritual
              programs and charitable assistance to people in need.
            </p>

            <div className="mt-7 space-y-4">
              {supportAreas.map((item) => {
                const Icon = item.icon

                return (
                  <article
                    key={item.title}
                    className="flex items-start gap-4 border border-marian/10 bg-white p-5"
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center bg-ivory text-crimson">
                      <Icon size={21} strokeWidth={1.5} aria-hidden="true" />
                    </div>

                    <div>
                      <h2 className="font-heading text-2xl leading-tight text-marian">
                        {item.title}
                      </h2>

                      <p className="mt-1.5 text-sm leading-7 text-marian">
                        {item.text}
                      </p>
                    </div>
                  </article>
                )
              })}
            </div>
          </div>

          {/* Giving information — intentionally contains no unverified details */}
          <aside className="lg:sticky lg:top-28">
            <div className="border border-marian/10 border-t-[3px] border-t-crimson bg-white p-6 sm:p-7">
              <div className="flex items-start gap-3">
                <Info
                  size={20}
                  className="mt-0.5 shrink-0 text-crimson"
                  strokeWidth={1.5}
                  aria-hidden="true"
                />
                <div>
                  <h2 className="font-heading text-2xl leading-tight text-marian">
                    Giving Information
                  </h2>
                  <p className="mt-1 text-[9px] font-semibold uppercase tracking-[0.16em] text-marian">
                    Awaiting organizational confirmation
                  </p>
                </div>
              </div>

              <div className="mt-5 space-y-3 text-sm leading-7 text-marian">
                <p>
                  Online giving is not available on this website. The ministry
                  has not yet published verified donation account details,
                  payees or payment instructions.
                </p>

                <p>
                  Please contact the ministry before making a contribution, and
                  use only details confirmed directly by the ministry.
                </p>
              </div>

              <div className="mt-5 flex items-start gap-3 border border-marian/10 bg-pale-blue/45 px-4 py-3">
                <ShieldCheck
                  size={18}
                  className="mt-0.5 shrink-0 text-marian"
                  strokeWidth={1.5}
                  aria-hidden="true"
                />

                <p className="text-xs leading-6 text-marian">
                  This website does not process payments or collect financial
                  information.
                </p>
              </div>

              <ButtonLink to="/contact" className="mt-5 w-full">
                Contact the Ministry
                <ArrowRight size={15} aria-hidden="true" />
              </ButtonLink>
            </div>

            <div className="mt-5 flex items-center gap-4 border border-marian/10 bg-pale-blue/45 p-5">
              <HandHeart
                size={26}
                className="shrink-0 text-crimson"
                strokeWidth={1.3}
                aria-hidden="true"
              />

              <p className="font-heading text-lg italic leading-snug text-marian">
                “Give, and it will be given to you.”
              </p>
            </div>
          </aside>
        </div>
      </section>

      {/* Quiet stewardship panel */}
      <section className="section-padding-sm bg-pale-blue/45">
        <div className="container-main grid items-center gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <ImagePlaceholder
            label="Supporting Our Ministry"
            className="h-[240px] rounded-sm sm:h-[280px]"
          />

          <div>
            <span className="eyebrow">Stewardship</span>

            <h2 className="heading-serif mt-3 text-[clamp(1.9rem,3.6vw,2.8rem)] text-marian">
              Giving should always be clear and trustworthy.
            </h2>

            <p className="mt-3 max-w-2xl text-sm leading-7 text-marian">
              Confirmed giving instructions will be added to this page after
              approval by the ministry. Until then, please do not send
              contributions to unverified account details.
            </p>

            <ButtonLink to="/contact" variant="outline" className="mt-5">
              Request Confirmed Details
            </ButtonLink>
          </div>
        </div>
      </section>

      <CallToAction
        eyebrow="Would you like to contribute?"
        title="Would You Like to Contribute?"
        text="Contact the ministry for confirmed donation instructions and information about supporting its work."
        primary={{ to: '/contact', label: 'Contact the Ministry' }}
        secondary={{ to: '/ministry', label: 'Our Ministry' }}
        variant="marian"
      />
    </>
  )
}
