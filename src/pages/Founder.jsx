import { ArrowRight, Cross, Heart, Quote, Users } from 'lucide-react'
import PageHero from '../components/ui/PageHero'
import SectionHeading from '../components/ui/SectionHeading'
import CallToAction from '../components/ui/CallToAction'
import { ButtonLink } from '../components/ui/Button'
import ImagePlaceholder from '../components/ui/ImagePlaceholder'
import Ornament from '../components/ui/Ornament'

export default function Founder() {
  return (
    <>
      <PageHero
        eyebrow="Our Spiritual Leadership"
        title="Our Founder"
        subtitle="The priest behind the vision of the Holy Family Novena Prayer Group."
        breadcrumb="Our Founder"
        tone="marian"
        actions={
          <ButtonLink to="/ministry" variant="light">
            Our Ministry
            <ArrowRight size={15} aria-hidden="true" />
          </ButtonLink>
        }
        media={
          <div>
            <ImagePlaceholder
              label="Father Christopher Onyenobi portrait"
              className="h-[clamp(280px,48vh,420px)] rounded-t-[44%] border border-marian/25"
            />

            <p className="mt-3 text-center text-[9px] font-semibold uppercase tracking-[0.18em] text-marian">
              Approved portrait to be provided
            </p>
          </div>
        }
      />

      {/* Profile and welcome */}
      <section className="section-padding bg-ivory">
        <div className="container-main grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:gap-14">
          <aside className="h-fit border border-marian/10 bg-white p-6">
            <p className="eyebrow">At a glance</p>

            <h2 className="mt-3 font-heading text-3xl text-marian">
              Father Christopher Onyenobi
            </h2>

            <div className="mt-4 h-[2px] w-12 bg-crimson" aria-hidden="true" />

            <dl className="mt-5 space-y-4 text-sm">
              <div>
                <dt className="text-[9px] font-semibold uppercase tracking-[0.16em] text-marian">
                  Role
                </dt>
                <dd className="mt-1 leading-6 text-marian">
                  Associated with the founding and spiritual leadership of the
                  prayer group.
                </dd>
              </div>

              <div>
                <dt className="text-[9px] font-semibold uppercase tracking-[0.16em] text-marian">
                  Biography
                </dt>
                <dd className="mt-1 leading-6 text-marian">
                  Awaiting approval and organizational confirmation.
                </dd>
              </div>

              <div>
                <dt className="text-[9px] font-semibold uppercase tracking-[0.16em] text-marian">
                  Portrait
                </dt>
                <dd className="mt-1 leading-6 text-marian">
                  An approved photograph will be added here.
                </dd>
              </div>
            </dl>

            <ButtonLink
              to="/contact"
              variant="outline"
              className="mt-6 w-full"
            >
              Contact the Ministry
            </ButtonLink>
          </aside>

          <div>
            <SectionHeading
              eyebrow="The founding vision"
              title="A Message from Our Founder"
            />

            <p className="mt-5 text-sm leading-8 text-marian sm:text-base">
              Father Christopher Onyenobi is associated with the founding and
              spiritual leadership of the Holy Family Novena Prayer Group.
            </p>

            <p className="mt-3 text-sm leading-8 text-marian">
              The ministry grew from a desire to strengthen Christian homes
              through consecration, prayer and devotion to the Holy Family.
            </p>

            <div className="mt-6 border border-dashed border-marian/40 bg-white/60 px-5 py-6">
              <div className="flex items-start gap-3">
                <Quote
                  size={20}
                  className="mt-0.5 shrink-0 text-crimson"
                  strokeWidth={1.4}
                  aria-hidden="true"
                />

                <div>
                  <p className="font-heading text-xl italic text-marian">
                    The founder’s welcome message will be presented here once
                    the approved text is available.
                  </p>
                  <p className="mt-2 text-[10px] font-semibold uppercase tracking-[0.14em] text-marian">
                    Pending organizational confirmation
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-7">
              <Ornament tone="crimson" />
            </div>
          </div>
        </div>
      </section>

      {/* Origin story */}
      <section className="section-padding-sm bg-pale-blue/60">
        <div className="container-main">
          <SectionHeading
            eyebrow="The founding story"
            title="A ministry shaped around the family"
            description="The ministry places the family at the heart of Christian life, encouraging households to build their daily lives around prayer and faith."
            align="center"
          />

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            <article className="border border-marian/10 bg-white p-6">
              <div className="flex h-11 w-11 items-center justify-center bg-marian text-white">
                <Heart size={21} strokeWidth={1.4} aria-hidden="true" />
              </div>

              <h3 className="mt-4 font-heading text-2xl text-marian">
                The Inspiration
              </h3>

              <p className="mt-2 text-sm leading-7 text-marian">
                The ministry’s origin story describes a request from a mother
                whose house was on fire. The experience of home enthronement
                subsequently inspired requests from other families.
              </p>
            </article>

            <article className="border border-marian/10 bg-white p-6">
              <div className="flex h-11 w-11 items-center justify-center bg-marian text-white">
                <Users size={21} strokeWidth={1.4} aria-hidden="true" />
              </div>

              <h3 className="mt-4 font-heading text-2xl text-marian">
                A Ministry for Families
              </h3>

              <p className="mt-2 text-sm leading-7 text-marian">
                The ministry places the family at the heart of Christian life,
                encouraging households to build their daily lives around prayer
                and faith.
              </p>
            </article>
          </div>

          <div className="mt-8 text-center">
            <Cross
              size={22}
              className="mx-auto text-crimson"
              strokeWidth={1.4}
              aria-hidden="true"
            />
            <p className="mt-2 font-heading text-xl italic text-marian">
              Jesus, Mary and Joseph, pray for us.
            </p>
          </div>
        </div>
      </section>

      <CallToAction
        eyebrow="Continue the journey"
        title="Discover the Ministry"
        text="Learn more about the mission, activities and spiritual life of the prayer group."
        primary={{ to: '/ministry', label: 'Explore Our Ministry' }}
        secondary={{ to: '/about', label: 'About Us' }}
        variant="pale"
      />
    </>
  )
}
