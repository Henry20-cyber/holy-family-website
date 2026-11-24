import { Link } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'

const tones = {
  ivory: {
    section: 'bg-ivory',
    title: 'text-marian',
    subtitle: 'text-marian',
    eyebrow: 'text-crimson',
    crumb: 'text-marian',
    crumbHover: 'hover:text-crimson',
    current: 'text-marian',
    ring: 'border-marian/5',
    ringAccent: 'border-crimson/20',
  },
  marian: {
    section: 'bg-marian',
    title: 'text-white',
    subtitle: 'text-white',
    eyebrow: 'eyebrow-light',
    crumb: 'text-white/90',
    crumbHover: 'hover:text-white',
    current: 'text-white',
    ring: 'border-white/10',
    ringAccent: 'border-white/20',
  },
  pale: {
    section: 'bg-pale-blue',
    title: 'text-marian',
    subtitle: 'text-marian',
    eyebrow: 'text-crimson',
    crumb: 'text-marian',
    crumbHover: 'hover:text-crimson',
    current: 'text-marian',
    ring: 'border-marian/5',
    ringAccent: 'border-crimson/25',
  },
}

/**
 * Shared inner-page hero. Layouts vary between pages through the optional
 * media panel, actions and tone, while breadcrumbs and typography stay
 * consistent throughout the site.
 */
export default function PageHero({
  eyebrow,
  title,
  subtitle,
  breadcrumb,
  tone = 'ivory',
  media,
  actions,
  className = '',
}) {
  const theme = tones[tone] || tones.ivory

  return (
    <section
      className={`page-hero relative overflow-hidden border-b border-marian/10 ${theme.section} ${className}`}
    >
      <div
        className={`pointer-events-none absolute -right-28 -top-28 h-80 w-80 rounded-full border ${theme.ring}`}
        aria-hidden="true"
      />
      <div
        className={`pointer-events-none absolute -right-10 -top-10 h-56 w-56 rounded-full border ${theme.ringAccent}`}
        aria-hidden="true"
      />

      <div
        className={`container-main relative z-10 grid items-center gap-10 ${
          media ? 'lg:grid-cols-[1.05fr_0.95fr] lg:gap-14' : ''
        }`}
      >
        <div>
          <nav aria-label="Breadcrumb">
            <ol className={`flex flex-wrap items-center gap-1.5 text-[10px] font-semibold uppercase tracking-[0.16em] ${theme.crumb}`}>
              <li>
                <Link to="/" className={`transition-colors ${theme.crumbHover}`}>
                  Home
                </Link>
              </li>
              <li aria-hidden="true">
                <ChevronRight size={12} strokeWidth={2} />
              </li>
              <li className={theme.current} aria-current="page">
                {breadcrumb || title}
              </li>
            </ol>
          </nav>

          {eyebrow && (
            <p className={`eyebrow mt-5 ${theme.eyebrow}`}>{eyebrow}</p>
          )}

          <h1
            className={`heading-serif mt-4 text-[clamp(2.7rem,6vw,4.6rem)] ${theme.title}`}
          >
            {title}
          </h1>

          {subtitle && (
            <p
              className={`mt-3 max-w-2xl font-heading text-[clamp(1.25rem,2.4vw,1.75rem)] italic leading-snug ${theme.subtitle}`}
            >
              {subtitle}
            </p>
          )}

          {actions && (
            <div className="mt-7 flex flex-wrap items-center gap-3">
              {actions}
            </div>
          )}
        </div>

        {media && <div className="relative">{media}</div>}
      </div>
    </section>
  )
}
