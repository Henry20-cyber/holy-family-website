import {
  ArrowRight,
  BookOpen,
  Church,
  Cross,
  Heart,
  HeartHandshake,
  Sparkles,
} from 'lucide-react'
import PageHero from '../components/ui/PageHero'
import SectionHeading from '../components/ui/SectionHeading'
import CallToAction from '../components/ui/CallToAction'
import { ButtonLink } from '../components/ui/Button'
import ImagePlaceholder from '../components/ui/ImagePlaceholder'
import Ornament from '../components/ui/Ornament'

const ministryAreas = [
  {
    icon: Church,
    title: 'Eucharistic Devotion',
    text: 'The ministry promotes Eucharistic celebrations, Adoration, Benediction and opportunities for spiritual renewal.',
  },
  {
    icon: Heart,
    title: 'Prayer',
    text: 'Prayer gatherings, novenas and devotions help members grow in faith and strengthen their relationship with God.',
  },
  {
    icon: BookOpen,
    title: 'Spiritual Formation',
    text: 'Retreats and other spiritual activities encourage reflection, learning and a deeper commitment to Christian life.',
  },
  {
    icon: HeartHandshake,
    title: 'Charitable Service',
    text: 'Members are encouraged to express their faith through compassion, generosity and practical assistance to people in need.',
  },
]

export default function Ministry() {
  return (
    <>
      <PageHero
        eyebrow="Our Spiritual Work"
        title="Our Ministry"
        subtitle="Faith that begins in the home and reaches the wider community."
        breadcrumb="Our Ministry"
        tone="ivory"
        actions={
          <>
            <ButtonLink to="/programs">
              Explore Programs
              <ArrowRight size={15} aria-hidden="true" />
            </ButtonLink>
            <ButtonLink to="/contact" variant="outline">
              Get Involved
            </ButtonLink>
          </>
        }
        media={
          <ImagePlaceholder
            label="Ministry and Prayer"
            className="h-[clamp(260px,46vh,390px)] rounded-t-[46%] border border-marian/25"
          />
        }
      />

      {/* Introduction */}
      <section className="section-padding bg-ivory">
        <div className="container-main grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-14">
          <div>
            <SectionHeading
              eyebrow="Our calling"
              title="Bringing families together in prayer, formation and service."
              description="The Holy Family Novena Prayer Group brings families together through prayer, consecration, spiritual formation and charitable service."
            />

            <p className="mt-4 text-sm leading-8 text-marian">
              Our activities are designed to help individuals and families
              deepen their relationship with God and live out their Christian
              faith.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {['Prayer', 'Consecration', 'Formation', 'Service'].map(
                (item) => (
                  <span
                    key={item}
                    className="border border-marian/15 px-3 py-1.5 text-[9px] font-semibold uppercase tracking-[0.14em] text-marian"
                  >
                    {item}
                  </span>
                ),
              )}
            </div>
          </div>

          <div className="border border-marian/10 bg-pale-blue/50 p-6 sm:p-8">
            <Cross
              size={26}
              className="text-crimson"
              strokeWidth={1.3}
              aria-hidden="true"
            />

            <p className="mt-4 font-heading text-[clamp(1.5rem,2.7vw,2rem)] italic leading-snug text-marian">
              “Bringing the Church back to the family through consecration.”
            </p>

            <div className="mt-5">
              <Ornament tone="crimson" />
            </div>
          </div>
        </div>
      </section>

      {/* Home consecration feature */}
      <section className="overflow-hidden bg-pale-blue/55">
        <div className="grid lg:grid-cols-2">
          <ImagePlaceholder
            label="Home consecration ceremony"
            className="min-h-[300px] lg:min-h-[450px]"
          />

          <div className="flex items-center px-6 py-10 sm:px-10 lg:px-14 lg:py-12">
            <div className="max-w-lg">
              <span className="eyebrow">The heart of our charism</span>

              <h2 className="heading-serif mt-4 text-[clamp(2rem,4vw,3.2rem)] text-marian">
                Home Consecration
              </h2>

              <p className="mt-4 text-sm leading-8 text-marian">
                Families are encouraged to consecrate their homes to the Sacred
                Heart of Jesus and the Immaculate Heart of Mary, making their
                homes places of prayer and devotion.
              </p>

              <ul className="mt-5 space-y-3">
                {[
                  'Enthronement of the Sacred Heart of Jesus',
                  'Devotion to the Immaculate Heart of Mary',
                  'Prayer and faith at the centre of family life',
                ].map((point) => (
                  <li
                    key={point}
                    className="flex items-start gap-3 text-sm text-marian"
                  >
                    <Cross
                      size={14}
                      className="mt-1 shrink-0 text-crimson"
                      strokeWidth={1.6}
                      aria-hidden="true"
                    />
                    {point}
                  </li>
                ))}
              </ul>

              <ButtonLink to="/contact" className="mt-7">
                Enquire About Consecration
                <ArrowRight size={16} aria-hidden="true" />
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>

      {/* Ministry areas */}
      <section className="section-padding bg-ivory">
        <div className="container-main">
          <SectionHeading
            eyebrow="Ways we serve"
            title="A ministry of prayer, devotion and compassion"
            description="Each part of our ministry is intended to help families encounter Christ and live their faith with purpose."
            align="center"
          />

          <div className="mt-9 grid gap-5 sm:grid-cols-2">
            {ministryAreas.map((item) => {
              const Icon = item.icon

              return (
                <article key={item.title} className="card-sacred group p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center bg-ivory text-crimson transition-colors duration-300 group-hover:bg-crimson group-hover:text-white">
                      <Icon size={22} strokeWidth={1.5} aria-hidden="true" />
                    </div>

                    <div>
                      <h3 className="font-heading text-2xl leading-tight text-marian">
                        {item.title}
                      </h3>

                      <p className="mt-2 text-sm leading-7 text-marian">
                        {item.text}
                      </p>
                    </div>
                  </div>
                </article>
              )
            })}
          </div>

          <div className="mt-8 flex flex-col items-center justify-between gap-5 border border-marian/10 bg-white px-6 py-6 sm:flex-row">
            <div className="flex items-center gap-4">
              <Sparkles
                size={24}
                className="shrink-0 text-marian"
                strokeWidth={1.3}
                aria-hidden="true"
              />

              <p className="text-sm leading-7 text-marian">
                Every act of prayer and service is offered for the glory of God
                and the good of the family.
              </p>
            </div>

            <ButtonLink to="/programs" variant="outline" className="shrink-0">
              Our Programs
              <ArrowRight size={15} aria-hidden="true" />
            </ButtonLink>
          </div>
        </div>
      </section>

      <CallToAction
        eyebrow="Grow with us"
        title="Grow With Us in Faith"
        text="Discover the different ways to participate in the spiritual life of our community."
        primary={{ to: '/contact', label: 'Contact the Ministry' }}
        secondary={{ to: '/novenas', label: 'Explore Novenas' }}
        variant="marian"
      />
    </>
  )
}
