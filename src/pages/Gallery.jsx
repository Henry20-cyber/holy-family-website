import { ArrowRight, Camera, Image as ImageIcon } from 'lucide-react'
import PageHero from '../components/ui/PageHero'
import SectionHeading from '../components/ui/SectionHeading'
import { ButtonLink } from '../components/ui/Button'
import ImagePlaceholder from '../components/ui/ImagePlaceholder'
import CallToAction from '../components/ui/CallToAction'

/**
 * Replace a placeholder by adding `src` and `alt` to an item:
 *   { label: '...', category: '...', src: '/images/photo.jpg', alt: '...' }
 * Layout classes then continue to work without further changes.
 */
const galleryItems = [
  {
    label: 'Prayer gathering',
    category: 'Prayer Gatherings',
    className: 'col-span-2 row-span-2 lg:col-span-2 lg:row-span-2',
  },
  {
    label: 'Eucharistic celebration',
    category: 'Eucharistic Devotion',
    className: 'col-span-1 row-span-1',
  },
  {
    label: 'Family consecration',
    category: 'Home Consecration',
    className: 'col-span-1 row-span-1',
  },
  {
    label: 'Community celebration',
    category: 'Celebrations',
    className: 'col-span-1 row-span-1',
  },
  {
    label: 'Youth and children',
    category: 'Faith Formation',
    className: 'col-span-1 row-span-1',
  },
  {
    label: 'Charitable outreach',
    category: 'Community Service',
    className: 'col-span-2 row-span-1',
  },
  {
    label: 'Feast of the Holy Family',
    category: 'Annual Celebration',
    className: 'col-span-1 row-span-1',
  },
  {
    label: 'Prayer and reflection',
    category: 'Prayer Gatherings',
    className: 'col-span-1 row-span-1',
  },
]

export default function Gallery() {
  return (
    <>
      <PageHero
        eyebrow="Moments of Faith"
        title="Our Gallery"
        subtitle="A glimpse into the life and activities of our community."
        breadcrumb="Gallery"
        tone="ivory"
        actions={
          <ButtonLink to="/contact" variant="outline">
            Share a Photograph
            <ArrowRight size={15} aria-hidden="true" />
          </ButtonLink>
        }
      />

      <section className="section-padding bg-ivory">
        <div className="container-main">
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <SectionHeading
              eyebrow="Community life"
              title="Our Community in Pictures"
              description="Every gathering is an opportunity to share faith, strengthen friendships and celebrate our commitment to God."
            />

            <div className="flex shrink-0 items-center gap-2 text-[9px] font-semibold uppercase tracking-[0.16em] text-marian">
              <ImageIcon size={15} aria-hidden="true" />
              Image placeholders
            </div>
          </div>

          <div className="mt-8 grid auto-rows-[150px] grid-cols-2 gap-3 sm:auto-rows-[190px] lg:grid-cols-4 lg:gap-4">
            {galleryItems.map((item) => (
              <figure
                key={item.label}
                className={`group relative overflow-hidden border border-marian/10 ${item.className}`}
              >
                <ImagePlaceholder
                  label={item.label}
                  src={item.src}
                  alt={item.alt}
                  className="h-full w-full transition-transform duration-500 group-hover:scale-[1.02]"
                  iconSize={34}
                />

                <figcaption className="pointer-events-none absolute left-2.5 top-2.5 bg-ivory/90 px-2.5 py-1 text-[8px] font-semibold uppercase tracking-[0.14em] text-marian">
                  {item.category}
                </figcaption>
              </figure>
            ))}
          </div>

          <div className="mt-6 flex items-start gap-3 border border-marian/10 bg-white/70 px-4 py-3">
            <Camera
              size={18}
              className="mt-0.5 shrink-0 text-crimson"
              strokeWidth={1.4}
              aria-hidden="true"
            />

            <p className="text-xs leading-6 text-marian">
              Authentic photographs of ministry gatherings will replace these
              placeholders as approved images become available. The ministry
              does not use stock images to represent its members or events.
            </p>
          </div>
        </div>
      </section>

      <CallToAction
        eyebrow="Share your memories"
        title="Share Your Memories"
        text="Have photographs from a ministry event? Contact us about contributing to the gallery."
        primary={{ to: '/contact', label: 'Contact the Ministry' }}
        secondary={{ to: '/news', label: 'News & Updates' }}
        variant="pale"
      />
    </>
  )
}
