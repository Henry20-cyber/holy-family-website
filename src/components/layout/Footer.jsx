import { Link } from 'react-router-dom'
import {
  ArrowUpRight,
  Cross,
  Mail,
  MapPin,
  Phone,
} from 'lucide-react'

const currentYear = new Date().getFullYear()

const exploreLinks = [
  { label: 'About Us', path: '/about' },
  { label: 'Our Founder', path: '/founder' },
  { label: 'Our Ministry', path: '/ministry' },
  { label: 'Programs', path: '/programs' },
  { label: 'Novenas', path: '/novenas' },
]

const ministryLinks = [
  { label: 'Letters to God', path: '/letters-to-god' },
  { label: 'Gallery', path: '/gallery' },
  { label: 'News & Updates', path: '/news' },
  { label: 'Support Our Mission', path: '/donate' },
  { label: 'Contact Us', path: '/contact' },
]

function Footer() {
  return (
    <footer className="footer-pattern relative overflow-hidden bg-marian text-white">
      <div className="h-[3px] w-full bg-crimson" />

      <div
        className="pointer-events-none absolute -right-24 top-10 h-72 w-72 rounded-full border border-white/5"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -left-20 bottom-16 h-56 w-56 rounded-full border border-white/10"
        aria-hidden="true"
      />

      <div className="container-main relative z-10 py-12 sm:py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          {/* Ministry identity */}
          <div className="lg:col-span-4">
            <Link
              to="/"
              className="inline-flex items-center gap-3"
              aria-label="Holy Family Novena Prayer Group home"
            >
              <span className="flex h-12 w-12 items-center justify-center border border-white/70 text-white">
                <Cross size={25} strokeWidth={1.4} aria-hidden="true" />
              </span>

              <span className="flex flex-col">
                <span className="font-heading text-2xl font-semibold leading-none">
                  Holy Family
                </span>
                <span className="mt-1.5 text-[8px] font-semibold uppercase tracking-[0.2em] text-white/90 sm:text-[9px]">
                  Novena Prayer Group
                </span>
              </span>
            </Link>

            <p className="mt-5 max-w-xs text-sm leading-7 text-white/90">
              Bringing the Church back to the family through consecration to
              the Sacred Heart of Jesus and the Immaculate Heart of Mary.
            </p>

            <Link
              to="/about"
              className="mt-5 inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.14em] text-white underline decoration-white/40 decoration-1 underline-offset-4 transition-colors hover:decoration-white"
            >
              Discover Our Mission
              <ArrowUpRight size={15} aria-hidden="true" />
            </Link>
          </div>

          {/* Explore */}
          <div className="lg:col-span-2">
            <h3 className="font-heading text-xl font-semibold text-white">
              Explore
            </h3>

            <div className="mt-4 h-[2px] w-8 bg-crimson" aria-hidden="true" />

            <ul className="mt-4 space-y-2.5">
              {exploreLinks.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="text-sm text-white/90 transition-colors hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Ministry */}
          <div className="lg:col-span-3">
            <h3 className="font-heading text-xl font-semibold text-white">
              Our Ministry
            </h3>

            <div className="mt-4 h-[2px] w-8 bg-crimson" aria-hidden="true" />

            <ul className="mt-4 space-y-2.5">
              {ministryLinks.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="text-sm text-white/90 transition-colors hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3">
            <h3 className="font-heading text-xl font-semibold text-white">
              Get in Touch
            </h3>

            <div className="mt-4 h-[2px] w-8 bg-crimson" aria-hidden="true" />

            <p className="mt-4 text-sm leading-6 text-white/90">
              We welcome your questions, prayer intentions and enquiries about
              becoming part of our prayer community.
            </p>

            <ul className="mt-5 space-y-3.5">
              <li className="flex items-start gap-3">
                <Mail
                  size={16}
                  className="mt-0.5 shrink-0 text-white"
                  aria-hidden="true"
                />
                <Link
                  to="/contact"
                  className="text-sm text-white/90 transition-colors hover:text-white"
                >
                  Contact the Ministry
                </Link>
              </li>

              <li className="flex items-start gap-3">
                <Phone
                  size={16}
                  className="mt-0.5 shrink-0 text-white"
                  aria-hidden="true"
                />
                <span className="text-sm text-white/90">
                  Phone details to be confirmed
                </span>
              </li>

              <li className="flex items-start gap-3">
                <MapPin
                  size={16}
                  className="mt-0.5 shrink-0 text-white"
                  aria-hidden="true"
                />
                <span className="text-sm text-white/90">
                  Ministry address to be confirmed
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Closing message */}
        <div className="mt-11 border-t border-white/15 pt-8 text-center">
          <span className="ornament mx-auto text-white" aria-hidden="true">
            <span className="ornament-diamond" />
          </span>

          <p className="mt-4 font-heading text-2xl italic text-white sm:text-3xl">
            Jesus, Mary and Joseph, pray for us.
          </p>
        </div>
      </div>

      {/* Copyright bar */}
      <div className="relative z-10 border-t border-white/15 bg-marian">
        <div className="container-main flex flex-col items-center justify-between gap-3 py-5 text-center sm:flex-row sm:text-left">
          <p className="text-xs text-white/90">
            © {currentYear} Holy Family Novena Prayer Group. All rights reserved.
          </p>

          <Link
            to="/contact"
            className="text-xs font-medium text-white/90 transition-colors hover:text-white"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer
