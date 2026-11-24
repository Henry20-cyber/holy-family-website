import {
  ArrowRight,
  ChevronDown,
  CircleHelp,
  HeartHandshake,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Users,
} from 'lucide-react'
import PageHero from '../components/ui/PageHero'
import SectionHeading from '../components/ui/SectionHeading'
import { ButtonLink } from '../components/ui/Button'
import Ornament from '../components/ui/Ornament'

const helpTopics = [
  {
    icon: MessageCircle,
    title: 'General Enquiries',
    text: 'Contact us for information about the ministry, its mission and activities.',
  },
  {
    icon: HeartHandshake,
    title: 'Prayer and Novena Enquiries',
    text: 'Reach out to learn more about prayer arrangements and participation.',
  },
  {
    icon: Users,
    title: 'Joining the Community',
    text: 'Get in touch if you would like to learn how to become involved in the prayer group.',
  },
]

const contactChannels = [
  {
    icon: Mail,
    title: 'Email',
    detail: 'Official ministry email address to be confirmed.',
  },
  {
    icon: Phone,
    title: 'Phone',
    detail: 'Official ministry telephone number to be confirmed.',
  },
  {
    icon: MapPin,
    title: 'Address',
    detail: 'Ministry address and gathering location to be confirmed.',
  },
]

const faqs = [
  {
    question: 'How do I learn more about the prayer group?',
    answer:
      'The About Us and Our Ministry pages introduce the community, its mission and its spiritual foundation. You can also contact the ministry once official details are published.',
  },
  {
    question: 'How can I enquire about a novena?',
    answer:
      'The ministry provides guidance on novena arrangements. Contact details will be published on this page when they are confirmed.',
  },
  {
    question: 'Is online giving available?',
    answer:
      'No. This website does not process payments. Visit the Donate page for the current position on giving information or contact the ministry for confirmed details.',
  },
  {
    question: 'Can I contribute photographs to the gallery?',
    answer:
      'Yes. The ministry welcomes enquiries about sharing photographs from its gatherings. Please use the official contact details once they are published.',
  },
]

export default function Contact() {
  return (
    <>
      <PageHero
        eyebrow="We Would Love to Hear From You"
        title="Contact Us"
        subtitle="Connect with the Holy Family Novena Prayer Group."
        breadcrumb="Contact"
        tone="ivory"
        actions={
          <ButtonLink to="/about" variant="outline">
            About Our Ministry
            <ArrowRight size={15} aria-hidden="true" />
          </ButtonLink>
        }
      />

      <section className="section-padding bg-ivory">
        <div className="container-main grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start lg:gap-14">
          <div>
            <SectionHeading
              eyebrow="Contact details"
              title="Let Us Connect"
              description="Whether you want to learn about the ministry, participate in a program or make an enquiry, we welcome you to get in touch."
            />

            <p className="mt-4 text-sm leading-8 text-marian">
              You are welcome to contact the ministry with questions about
              prayer gatherings, novenas, consecration and community
              participation.
            </p>

            <div className="mt-6 space-y-3">
              {contactChannels.map((channel) => {
                const Icon = channel.icon

                return (
                  <div
                    key={channel.title}
                    className="flex items-start gap-4 border border-marian/10 bg-white p-5"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center bg-ivory text-crimson">
                      <Icon size={19} strokeWidth={1.5} aria-hidden="true" />
                    </div>

                    <div>
                      <h2 className="text-[10px] font-bold uppercase tracking-[0.16em] text-marian">
                        {channel.title}
                      </h2>

                      <p className="mt-1 text-sm leading-6 text-marian">
                        {channel.detail}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>

            <div className="mt-5 border border-marian/30 bg-pale-blue/40 px-4 py-3">
              <p className="text-xs leading-6 text-marian">
                Official contact information is awaiting organizational
                confirmation. This page intentionally does not display
                unverified phone numbers, email addresses or a physical
                address.
              </p>
            </div>

            <div className="mt-6">
              <Ornament tone="crimson" />
            </div>
          </div>

          <div>
            <div className="border border-marian/10 bg-white p-6 sm:p-7">
              <span className="eyebrow">How we can help</span>

              <div className="mt-5 divide-y divide-marian/10">
                {helpTopics.map((topic) => {
                  const Icon = topic.icon

                  return (
                    <div
                      key={topic.title}
                      className="flex items-start gap-4 py-4 first:pt-0 last:pb-0"
                    >
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-marian/10 text-crimson">
                        <Icon size={19} strokeWidth={1.5} aria-hidden="true" />
                      </div>

                      <div>
                        <h2 className="font-heading text-xl leading-tight text-marian">
                          {topic.title}
                        </h2>

                        <p className="mt-1 text-sm leading-6 text-marian">
                          {topic.text}
                        </p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            <div className="mt-5 border border-marian/10 bg-marian p-6 text-white">
              <div className="flex items-start gap-3">
                <Mail
                  size={20}
                  className="mt-0.5 shrink-0 text-white"
                  strokeWidth={1.4}
                  aria-hidden="true"
                />

                <div>
                  <h2 className="font-heading text-2xl text-white">
                    A Prayerful Welcome
                  </h2>

                  <p className="mt-2 text-sm leading-7 text-white/90">
                    We look forward to hearing from you. Prayer intentions and
                    enquiries will be welcomed once the ministry’s official
                    contact details are published.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-5 border border-marian/10 bg-pale-blue/50 p-6">
              <h2 className="font-heading text-2xl text-marian">
                Supporting the Mission
              </h2>

              <p className="mt-2 text-sm leading-7 text-marian">
                Donation details are also awaiting confirmation. The website
                does not process payments.
              </p>

              <ButtonLink to="/donate" variant="outline" className="mt-4">
                Donation Information
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding-sm bg-pale-blue/45">
        <div className="container-narrow">
          <SectionHeading
            eyebrow="Questions"
            title="Before You Get in Touch"
            description="A few answers to common questions about the ministry."
            align="center"
          />

          <div className="mt-7 divide-y divide-marian/10 border border-marian/10 bg-white">
            {faqs.map((faq) => (
              <details key={faq.question} className="group px-5 py-4 sm:px-6">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left font-heading text-xl leading-snug text-marian [&::-webkit-details-marker]:hidden">
                  {faq.question}

                  <ChevronDown
                    size={19}
                    className="shrink-0 text-crimson transition-transform duration-300 group-open:rotate-180"
                    aria-hidden="true"
                  />
                </summary>

                <p className="mt-3 text-sm leading-7 text-marian">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>

          <div className="mt-6 flex items-center justify-center gap-3 text-center">
            <CircleHelp
              size={18}
              className="shrink-0 text-crimson"
              strokeWidth={1.4}
              aria-hidden="true"
            />

            <p className="text-xs leading-6 text-marian">
              For matters not covered here, please contact the ministry directly
              using its official details once published.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
