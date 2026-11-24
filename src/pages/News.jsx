import {
  ArrowRight,
  Bell,
  CalendarDays,
  HeartHandshake,
  Megaphone,
  Newspaper,
  Users,
} from 'lucide-react'
import PageHero from '../components/ui/PageHero'
import SectionHeading from '../components/ui/SectionHeading'
import { ButtonLink } from '../components/ui/Button'
import CallToAction from '../components/ui/CallToAction'

const newsCategories = [
  {
    icon: CalendarDays,
    title: 'Upcoming Activities',
    text: 'Information about forthcoming prayer gatherings, retreats and ministry events will be published here.',
  },
  {
    icon: Megaphone,
    title: 'Ministry Announcements',
    text: 'Important notices and updates from the ministry will be shared with members and visitors.',
  },
  {
    icon: Users,
    title: 'Community Highlights',
    text: 'Stories and highlights celebrating the spiritual life and charitable activities of the community.',
  },
]

export default function News() {
  return (
    <>
      <PageHero
        eyebrow="Stay Connected"
        title="News and Updates"
        subtitle="Stay informed about the life of our prayer community."
        breadcrumb="News"
        tone="ivory"
        actions={
          <ButtonLink to="/contact">
            Contact the Ministry
            <ArrowRight size={15} aria-hidden="true" />
          </ButtonLink>
        }
      />

      <section className="section-padding bg-ivory">
        <div className="container-main grid gap-8 lg:grid-cols-[1.35fr_0.65fr] lg:gap-10">
          {/* Latest updates */}
          <div>
            <SectionHeading
              eyebrow="Latest updates"
              title="What Is Happening"
              description="This is where members and visitors can find announcements, ministry updates, upcoming activities and important information."
            />

            <div className="mt-7 border border-marian/10 bg-white p-6 sm:p-8">
              <div className="flex flex-col items-center py-6 text-center sm:py-8">
                <div className="flex h-14 w-14 items-center justify-center rounded-full border border-marian/30 text-crimson">
                  <Newspaper
                    size={26}
                    strokeWidth={1.2}
                    aria-hidden="true"
                  />
                </div>

                <h2 className="mt-4 font-heading text-[1.9rem] leading-tight text-marian">
                  No announcements have been published yet.
                </h2>

                <p className="mt-3 max-w-md text-sm leading-7 text-marian">
                  When the ministry publishes confirmed news or event details,
                  they will appear here. No dates or articles are listed until
                  they have been approved.
                </p>

                <ButtonLink to="/contact" variant="outline" className="mt-6">
                  Ask About Upcoming Activities
                </ButtonLink>
              </div>
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              {newsCategories.map((item) => {
                const Icon = item.icon

                return (
                  <article
                    key={item.title}
                    className="border border-marian/10 bg-white/70 p-5"
                  >
                    <Icon
                      size={21}
                      className="text-crimson"
                      strokeWidth={1.4}
                      aria-hidden="true"
                    />

                    <h3 className="mt-3 font-heading text-xl leading-tight text-marian">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-xs leading-6 text-marian">
                      {item.text}
                    </p>
                  </article>
                )
              })}
            </div>
          </div>

          {/* Sidebar */}
          <aside className="space-y-5">
            <div className="border border-marian/10 bg-marian p-6 text-white">
              <Bell
                size={22}
                className="text-white"
                strokeWidth={1.4}
                aria-hidden="true"
              />

              <h2 className="mt-4 font-heading text-2xl text-white">
                Stay Connected
              </h2>

              <p className="mt-2 text-sm leading-7 text-white/90">
                Reach out to the ministry for information about upcoming
                activities and announcements.
              </p>

              <ButtonLink
                to="/contact"
                variant="light"
                className="mt-5 w-full"
              >
                Contact Us
                <ArrowRight size={15} aria-hidden="true" />
              </ButtonLink>
            </div>

            <div className="border border-marian/10 bg-pale-blue/50 p-6">
              <HeartHandshake
                size={22}
                className="text-crimson"
                strokeWidth={1.4}
                aria-hidden="true"
              />

              <h2 className="mt-4 font-heading text-2xl text-marian">
                A Note on Updates
              </h2>

              <p className="mt-2 text-sm leading-7 text-marian">
                This page will be updated only with verified ministry
                information. Check back for confirmed announcements and event
                details.
              </p>
            </div>
          </aside>
        </div>
      </section>

      <CallToAction
        eyebrow="Stay connected"
        title="Stay Connected With Us"
        text="Reach out to the ministry for information about upcoming activities."
        primary={{ to: '/contact', label: 'Contact the Ministry' }}
        secondary={{ to: '/gallery', label: 'View the Gallery' }}
        variant="pale"
      />
    </>
  )
}
