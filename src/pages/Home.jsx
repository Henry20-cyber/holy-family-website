import { Link } from 'react-router-dom'
import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  CalendarDays,
  Church,
  Cross,
  HandHeart,
  Heart,
  Sparkles,
  Users,
} from 'lucide-react'
import ImagePlaceholder from '../components/ui/ImagePlaceholder'
import SectionHeading from '../components/ui/SectionHeading'
import { ButtonLink } from '../components/ui/Button'
import Ornament from '../components/ui/Ornament'

const apostolates = [
  {
    icon: Church,
    title: 'Eucharistic Celebrations',
    description:
      'Gathering around the Holy Mass, Adoration and Benediction to deepen our relationship with Christ.',
  },
  {
    icon: Heart,
    title: 'Family Consecration',
    description:
      'Consecrating homes to the Sacred Heart of Jesus and the Immaculate Heart of Mary.',
  },
  {
    icon: Users,
    title: 'Family Formation',
    description:
      'Encouraging families, parents and young people to grow in Christian faith and values.',
  },
  {
    icon: HandHeart,
    title: 'Charitable Outreach',
    description:
      'Extending love and practical support to the poor, vulnerable and those in need.',
  },
]

const programs = [
  {
    number: '01',
    title: 'Home Consecration',
    description:
      'Welcoming Christ into the heart of family life through prayer and the consecration of the home.',
    icon: Church,
  },
  {
    number: '02',
    title: 'Novena Prayer',
    description:
      'A journey of prayer and spiritual commitment through nine-day, nine-week and nine-month novenas.',
    icon: Cross,
  },
  {
    number: '03',
    title: 'Parents’ Retreats',
    description:
      'Creating opportunities for couples to reflect on Christian marriage, love and family commitment.',
    icon: Heart,
  },
]

const missionPoints = [
  {
    icon: Heart,
    title: 'Strengthen Families',
    text: 'Building homes rooted in Christian love.',
  },
  {
    icon: Cross,
    title: 'Deepen Faith',
    text: 'Growing through prayer and the Sacraments.',
  },
  {
    icon: HandHeart,
    title: 'Serve Others',
    text: 'Sharing Christ’s love through charity.',
  },
]

export default function Home() {
  return (
    <>
      {/* HERO — WARM IVORY */}
      <section className="home-hero relative overflow-hidden bg-ivory">
        <div
          className="pointer-events-none absolute -right-40 -top-40 h-[28rem] w-[28rem] rounded-full border border-marian/5"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-pale-blue/50 blur-3xl"
          aria-hidden="true"
        />

        <div className="container-main relative z-10 grid items-center gap-10 lg:grid-cols-[1.04fr_0.96fr] lg:gap-14">
          <div className="relative z-10">
            <span className="eyebrow">Faith · Family · Consecration</span>

            <h1 className="heading-serif mt-5 max-w-2xl text-[clamp(2.7rem,6.4vw,4.9rem)] text-marian">
              Bringing the Church Back to the{' '}
              <span className="italic text-crimson">Family.</span>
            </h1>

            <p className="mt-5 max-w-xl text-sm leading-8 text-marian md:text-base">
              A Catholic family prayer community dedicated to strengthening
              Christian homes through consecration, prayer, spiritual formation
              and charitable service.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <ButtonLink to="/about">
                Discover Our Mission
                <ArrowRight size={16} aria-hidden="true" />
              </ButtonLink>

              <ButtonLink to="/contact" variant="outline">
                Connect With Us
              </ButtonLink>
            </div>

            <div className="mt-8 flex items-center gap-4 border-t border-marian/15 pt-5">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-crimson/40 text-crimson">
                <Heart size={17} aria-hidden="true" />
              </div>

              <p className="max-w-xs font-heading text-lg italic leading-snug text-marian">
                “There is truly no greater source of treasure for the family.”
              </p>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[500px]">
            <div
              className="absolute -inset-3 rounded-t-[48%] border border-crimson/30"
              aria-hidden="true"
            />

            <ImagePlaceholder
              label="Holy Family hero photograph"
              className="relative h-[clamp(280px,52vh,500px)] rounded-t-[48%] rounded-b-sm"
              iconSize={58}
            />

            <div className="absolute -bottom-4 left-3 hidden border border-marian/10 bg-white px-5 py-4 shadow-md shadow-marian/5 sm:block lg:-left-5">
              <p className="font-heading text-2xl leading-none text-marian">
                Faith
              </p>
              <p className="mt-1 text-[8px] font-semibold uppercase tracking-[0.18em] text-crimson">
                At the heart of every home
              </p>
            </div>

            <div
              className="absolute -right-2 top-6 flex h-12 w-12 items-center justify-center rounded-full border border-crimson/30 bg-ivory text-crimson sm:-right-4"
              aria-hidden="true"
            >
              <Cross size={20} strokeWidth={1.3} />
            </div>
          </div>
        </div>
      </section>

      {/* INTRODUCTION — IVORY */}
      <section className="section-padding bg-ivory">
        <div className="container-main grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="relative">
            <ImagePlaceholder
              label="Catholic family prayer gathering"
              className="h-[min(52vh,410px)] min-h-[260px] rounded-sm"
            />

            <div
              className="absolute -bottom-5 -right-4 hidden h-28 w-28 border-[7px] border-ivory bg-crimson/10 md:block"
              aria-hidden="true"
            />
          </div>

          <div className="lg:pl-5">
            <SectionHeading
              eyebrow="Welcome to our community"
              title="A Family United in Faith and Prayer"
              description="The Holy Family Novena Prayer Group brings Catholic families together to share the Word of God, grow in holiness and strengthen the spiritual foundation of their homes."
            />

            <p className="mt-4 text-sm leading-8 text-marian">
              Through monthly gatherings, Eucharistic celebrations, home
              consecration and family devotions, we seek to make faith an
              active and meaningful part of everyday family life.
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {['Prayer', 'Formation', 'Service'].map((item) => (
                <span
                  key={item}
                  className="border border-marian/15 px-3 py-1.5 text-[9px] font-semibold uppercase tracking-[0.14em] text-marian"
                >
                  {item}
                </span>
              ))}
            </div>

            <Link to="/about" className="text-link mt-6">
              Learn About Our Story
              <ArrowUpRight size={17} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* MISSION STRIP — MARIAN BLUE */}
      <section className="border-y border-white/10 bg-marian">
        <div className="container-main py-9 sm:py-11">
          <div className="grid gap-8 text-center sm:grid-cols-3 sm:gap-4 sm:divide-x sm:divide-white/10">
            {missionPoints.map((item) => {
              const Icon = item.icon

              return (
                <div
                  key={item.title}
                  className="flex flex-col items-center px-4"
                >
                  <Icon
                    size={25}
                    className="text-white"
                    strokeWidth={1.4}
                    aria-hidden="true"
                  />

                  <div
                    className="mt-3 h-[2px] w-7 bg-crimson"
                    aria-hidden="true"
                  />

                  <h2 className="mt-3 font-heading text-2xl text-white">
                    {item.title}
                  </h2>

                  <p className="mt-1.5 text-xs leading-6 text-white/90">
                    {item.text}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* APOSTOLATES — IVORY */}
      <section className="section-padding bg-ivory">
        <div className="container-main">
          <SectionHeading
            eyebrow="Our spiritual mission"
            title="Apostolates Rooted in Faith"
            description="Our ministry brings families together through spiritual devotion, formation and service to others."
            align="center"
          />

          <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {apostolates.map((item) => {
              const Icon = item.icon

              return (
                <article
                  key={item.title}
                  className="card-sacred group relative p-6"
                >
                  <div className="flex h-11 w-11 items-center justify-center bg-ivory text-crimson transition-colors duration-300 group-hover:bg-crimson group-hover:text-white">
                    <Icon size={21} strokeWidth={1.5} aria-hidden="true" />
                  </div>

                  <h3 className="mt-5 font-heading text-2xl leading-tight text-marian">
                    {item.title}
                  </h3>

                  <p className="mt-2.5 text-xs leading-7 text-marian">
                    {item.description}
                  </p>

                  <div
                    className="mt-5 h-px w-8 bg-crimson/40 transition-all duration-300 group-hover:w-14 group-hover:bg-crimson"
                    aria-hidden="true"
                  />
                </article>
              )
            })}
          </div>
        </div>
      </section>

      {/* HOME CONSECRATION — PALE BLUE */}
      <section className="overflow-hidden bg-pale-blue/55">
        <div className="grid lg:grid-cols-2">
          <ImagePlaceholder
            label="Home consecration ceremony"
            className="min-h-[300px] lg:min-h-[460px]"
          />

          <div className="flex items-center px-6 py-10 sm:px-10 lg:px-14 lg:py-12">
            <div className="max-w-lg">
              <span className="eyebrow">The heart of our charism</span>

              <h2 className="heading-serif mt-4 text-[clamp(2rem,4vw,3.2rem)] text-marian">
                Consecrating Our Homes to Christ
              </h2>

              <p className="mt-4 text-sm leading-8 text-marian">
                Through the enthronement of the Sacred Heart of Jesus and the
                Immaculate Heart of Mary, families are encouraged to establish
                a home sanctuary dedicated to prayer, devotion and Christian
                living.
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

              <ButtonLink to="/ministry" className="mt-7">
                Explore Home Consecration
                <ArrowRight size={16} aria-hidden="true" />
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>

      {/* PROGRAMS — IVORY */}
      <section className="section-padding bg-ivory">
        <div className="container-main">
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <SectionHeading
              eyebrow="Growing together"
              title="Our Spiritual Programs"
              description="Opportunities for individuals and families to strengthen their relationship with God."
            />

            <Link to="/programs" className="text-link shrink-0">
              All Programs
              <ArrowUpRight size={17} aria-hidden="true" />
            </Link>
          </div>

          <div className="mt-9 grid gap-5 md:grid-cols-3">
            {programs.map((program) => {
              const Icon = program.icon

              return (
                <article
                  key={program.number}
                  className="group border border-marian/10 border-t-[3px] border-t-crimson bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-sacred sm:p-7"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-heading text-4xl text-crimson/35">
                      {program.number}
                    </span>

                    <Icon
                      size={24}
                      className="text-marian"
                      strokeWidth={1.4}
                      aria-hidden="true"
                    />
                  </div>

                  <h3 className="mt-5 font-heading text-[1.75rem] leading-tight text-marian">
                    {program.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-marian">
                    {program.description}
                  </p>

                  <Link to="/programs" className="text-link mt-5">
                    Learn More
                    <ArrowRight size={15} aria-hidden="true" />
                  </Link>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      {/* LETTERS TO GOD — MARIAN BLUE */}
      <section className="relative overflow-hidden bg-marian py-12 text-white sm:py-14">
        <div
          className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full border border-white/10"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -bottom-24 left-1/4 h-56 w-56 rounded-full border border-white/10"
          aria-hidden="true"
        />

        <div className="container-main relative z-10 grid items-center gap-9 lg:grid-cols-[1fr_0.78fr] lg:gap-14">
          <div>
            <span className="eyebrow eyebrow-light">A journey of faith</span>

            <h2 className="heading-serif mt-4 text-[clamp(2.2rem,4.6vw,3.7rem)] text-white">
              The Annual Letters to God
            </h2>

            <div className="mt-4 h-[3px] w-14 bg-crimson" aria-hidden="true" />

            <p className="mt-4 max-w-xl text-sm leading-8 text-white/90">
              At the beginning of each year, members write personal letters
              expressing their intentions and pressing needs. These intentions
              become part of a shared journey of prayer throughout the year.
            </p>

            <ButtonLink to="/letters-to-god" className="mt-6">
              Discover This Tradition
              <ArrowRight size={16} aria-hidden="true" />
            </ButtonLink>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[290px] rotate-2 border border-white/40 bg-ivory p-7 text-center shadow-2xl shadow-black/20">
              <span
                className="absolute inset-3 border border-marian/10"
                aria-hidden="true"
              />

              <div className="relative">
                <BookOpen
                  size={42}
                  className="mx-auto text-crimson"
                  strokeWidth={1.1}
                  aria-hidden="true"
                />

                <p className="heading-serif mt-4 text-[2.15rem] leading-none text-marian">
                  Letters of Faith
                </p>

                <p className="mt-3 text-[8px] font-semibold uppercase tracking-[0.2em] text-marian">
                  Prayer · Hope · Trust
                </p>

                <Sparkles
                  className="mx-auto mt-4 text-crimson"
                  size={18}
                  aria-hidden="true"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOUNDER — IVORY */}
      <section className="section-padding bg-ivory">
        <div className="container-main grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <ImagePlaceholder
            label="Father Christopher Onyenobi portrait"
            className="h-[min(50vh,410px)] min-h-[260px] rounded-t-[140px] border border-marian/25"
          />

          <div>
            <span className="eyebrow">Spiritual leadership</span>

            <h2 className="heading-serif mt-4 text-[clamp(2rem,4vw,3.2rem)] text-marian">
              A Message from Our Founder
            </h2>

            <p className="mt-4 text-sm leading-8 text-marian">
              Father Christopher Onyenobi is associated with the founding and
              spiritual leadership of the Holy Family Novena Prayer Group. His
              approved biography and welcome message will be presented here.
            </p>

            <div className="mt-4 border-l-2 border-crimson bg-white/60 px-4 py-3">
              <p className="text-xs leading-6 text-marian">
                Founder biography pending organizational confirmation.
              </p>
            </div>

            <div className="mt-6">
              <Ornament tone="crimson" />
            </div>

            <ButtonLink to="/founder" variant="outline" className="mt-6">
              About Our Founder
              <ArrowRight size={16} aria-hidden="true" />
            </ButtonLink>
          </div>
        </div>
      </section>

      {/* DONATION CTA — IVORY */}
      <section className="bg-pale-blue/45 section-padding-sm">
        <div className="container-main">
          <div className="border border-marian/10 bg-white/70 px-6 py-9 text-center sm:px-10 sm:py-10">
            <HandHeart
              size={34}
              className="mx-auto text-crimson"
              strokeWidth={1.3}
              aria-hidden="true"
            />

            <span className="eyebrow mt-4 justify-center">
              Share in our mission
            </span>

            <h2 className="heading-serif mx-auto mt-3 max-w-2xl text-[clamp(2rem,4vw,3rem)] text-marian">
              Help Us Extend the Love of Christ
            </h2>

            <p className="mx-auto mt-3 max-w-xl text-sm leading-7 text-marian">
              Your generosity supports the spiritual programs and charitable
              activities of the ministry.
            </p>

            <ButtonLink to="/donate" className="mt-6">
              Learn How to Give
              <ArrowRight size={16} aria-hidden="true" />
            </ButtonLink>
          </div>
        </div>
      </section>

      {/* CONTACT CTA — IVORY */}
      <section className="border-t border-marian/10 bg-ivory py-10 sm:py-12">
        <div className="container-main flex flex-col items-center justify-between gap-5 text-center md:flex-row md:text-left">
          <div>
            <span className="eyebrow">You are welcome here</span>

            <h2 className="heading-serif mt-3 text-[clamp(1.8rem,3.4vw,2.5rem)] text-marian">
              Let Us Grow Together in Faith.
            </h2>
          </div>

          <ButtonLink to="/contact" className="shrink-0">
            Connect With Our Ministry
            <CalendarDays size={16} aria-hidden="true" />
          </ButtonLink>
        </div>
      </section>
    </>
  )
}
