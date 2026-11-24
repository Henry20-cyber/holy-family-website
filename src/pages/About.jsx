import { ArrowRight, Cross, Eye, Heart, Sparkles, Target } from 'lucide-react'
import PageHero from '../components/ui/PageHero'
import SectionHeading from '../components/ui/SectionHeading'
import CallToAction from '../components/ui/CallToAction'
import { ButtonLink } from '../components/ui/Button'
import ImagePlaceholder from '../components/ui/ImagePlaceholder'
import Ornament from '../components/ui/Ornament'

const identityCards = [
  {
    icon: Target,
    title: 'Our Mission',
    text: 'To encourage families to rediscover the importance of prayer, Christian values and spiritual commitment within their homes.',
  },
  {
    icon: Eye,
    title: 'Our Vision',
    text: 'Families strengthened by faith, united in prayer and guided by the example of the Holy Family.',
  },
  {
    icon: Heart,
    title: 'Our Charism',
    text: 'A devotion centred on the Sacred Heart of Jesus, the Immaculate Heart of Mary and the Holy Family as a model of Christian living.',
  },
]

const foundation = [
  {
    icon: Heart,
    title: 'Sacred Heart of Jesus',
    text: 'A devotion of trust in the love, mercy and companionship of Christ.',
  },
  {
    icon: Cross,
    title: 'Immaculate Heart of Mary',
    text: 'A devotion of maternal intercession and faithful discipleship.',
  },
  {
    icon: Sparkles,
    title: 'The Holy Family',
    text: 'The model of prayer, love and daily family life for every Christian home.',
  },
]

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="Who We Are"
        title="About Our Ministry"
        subtitle="A family rooted in faith, prayer and consecration."
        breadcrumb="About Us"
        tone="ivory"
        actions={
          <ButtonLink to="/contact">
            Connect With Us
            <ArrowRight size={15} aria-hidden="true" />
          </ButtonLink>
        }
        media={
          <ImagePlaceholder
            label="Our Prayer Community"
            className="h-[clamp(260px,46vh,390px)] rounded-t-[46%] border border-marian/25"
          />
        }
      />

      {/* Identity, mission and charism */}
      <section className="section-padding bg-ivory">
        <div className="container-main grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start lg:gap-14">
          <div className="lg:sticky lg:top-28">
            <SectionHeading
              eyebrow="Our identity"
              title="A Catholic prayer community at the service of the family."
              description="The Holy Family Novena Prayer Group is a Catholic prayer community committed to strengthening Christian families through prayer, spiritual formation and consecration."
            />

            <p className="mt-4 text-sm leading-8 text-marian">
              Our mission is to bring the Church back to the family by
              encouraging homes to become places of prayer, love, faith and
              devotion to the Sacred Heart of Jesus and the Immaculate Heart of
              Mary.
            </p>

            <blockquote className="mt-6 border-l-[3px] border-crimson bg-white px-5 py-4">
              <p className="font-heading text-[1.65rem] italic leading-snug text-marian">
                “Bringing the Church back to the family through consecration.”
              </p>
            </blockquote>

            <div className="mt-6">
              <Ornament tone="crimson" />
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            {identityCards.map((item) => {
              const Icon = item.icon

              return (
                <article key={item.title} className="card-sacred group p-5 sm:p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center bg-ivory text-crimson transition-colors duration-300 group-hover:bg-crimson group-hover:text-white">
                      <Icon size={21} strokeWidth={1.5} aria-hidden="true" />
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
        </div>
      </section>

      {/* Spiritual foundation */}
      <section className="section-padding bg-marian">
        <div className="container-main">
          <SectionHeading
            eyebrow="Our spiritual foundation"
            title="Rooted in the Sacred Heart and the Holy Family"
            description="Our devotion centres on the Sacred Heart of Jesus, the Immaculate Heart of Mary and the Holy Family as a model of Christian living."
            align="center"
            tone="dark"
          />

          <div className="mt-9 grid gap-5 sm:grid-cols-3">
            {foundation.map((item) => {
              const Icon = item.icon

              return (
                <article
                  key={item.title}
                  className="border border-white/15 bg-white/5 p-6 text-center transition-colors duration-300 hover:border-white/40"
                >
                  <Icon
                    size={28}
                    className="mx-auto text-white"
                    strokeWidth={1.3}
                    aria-hidden="true"
                  />

                  <div
                    className="mx-auto mt-4 h-[2px] w-8 bg-crimson"
                    aria-hidden="true"
                  />

                  <h3 className="mt-4 font-heading text-2xl text-white">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm leading-7 text-white/90">
                    {item.text}
                  </p>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <CallToAction
        eyebrow="Join our family"
        title="Become Part of Our Community"
        text="Join a community committed to prayer, family life and growing together in faith."
        primary={{ to: '/contact', label: 'Contact the Ministry' }}
        secondary={{ to: '/ministry', label: 'Our Ministry' }}
        variant="pale"
      />
    </>
  )
}
