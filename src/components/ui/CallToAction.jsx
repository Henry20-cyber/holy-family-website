import { ArrowRight, Cross } from 'lucide-react'
import { ButtonLink } from './Button'

const variants = {
  pale: {
    section: 'bg-ivory',
    panel: 'bg-pale-blue/70 border-marian/10',
    eyebrow: 'text-crimson',
    title: 'text-marian',
    text: 'text-marian',
    icon: 'text-crimson',
    secondary: 'outline',
    ring: 'border-marian/5',
  },
  marian: {
    section: 'bg-ivory',
    panel: 'bg-marian border-white/15',
    eyebrow: 'eyebrow-light',
    title: 'text-white',
    text: 'text-white/90',
    icon: 'text-white',
    secondary: 'light',
    ring: 'border-white/10',
  },
  ivory: {
    section: 'bg-ivory',
    panel: 'bg-white border-marian/10',
    eyebrow: 'text-crimson',
    title: 'text-marian',
    text: 'text-marian',
    icon: 'text-crimson',
    secondary: 'outline',
    ring: 'border-marian/5',
  },
}

/**
 * Shared closing call to action. Each page supplies its own copy so the
 * invitation always matches the content above it.
 */
export default function CallToAction({
  eyebrow = 'Join our community',
  title,
  text,
  primary = { to: '/contact', label: 'Contact the Ministry' },
  secondary,
  variant = 'pale',
}) {
  const theme = variants[variant] || variants.pale

  return (
    <section className={`${theme.section} section-padding-sm`}>
      <div className="container-main">
        <div
          className={`relative overflow-hidden border px-6 py-9 sm:px-10 sm:py-11 lg:flex lg:items-center lg:justify-between lg:gap-10 lg:px-12 ${theme.panel}`}
        >
          <div
            className={`pointer-events-none absolute -right-16 -top-20 h-56 w-56 rounded-full border ${theme.ring}`}
            aria-hidden="true"
          />

          <div className="relative max-w-2xl">
            <div className="flex items-center gap-3">
              <Cross
                size={18}
                strokeWidth={1.4}
                className={theme.icon}
                aria-hidden="true"
              />
              <span className={`eyebrow ${theme.eyebrow}`}>{eyebrow}</span>
            </div>

            <h2
              className={`heading-serif mt-4 text-[clamp(1.9rem,4vw,3rem)] ${theme.title}`}
            >
              {title}
            </h2>

            {text && (
              <p className={`mt-3 text-sm leading-7 ${theme.text}`}>{text}</p>
            )}
          </div>

          <div className="relative mt-7 flex flex-wrap gap-3 lg:mt-0 lg:shrink-0">
            <ButtonLink to={primary.to}>
              {primary.label}
              <ArrowRight size={15} />
            </ButtonLink>

            {secondary && (
              <ButtonLink to={secondary.to} variant={theme.secondary}>
                {secondary.label}
              </ButtonLink>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
