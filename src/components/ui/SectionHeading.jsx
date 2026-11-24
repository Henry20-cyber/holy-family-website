/**
 * Consistent section heading used across the site.
 * `tone="dark"` is for Marian Blue backgrounds.
 */
export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  tone = 'light',
  className = '',
  titleClassName = '',
}) {
  const dark = tone === 'dark'
  const centered = align === 'center'

  return (
    <div className={`${centered ? 'mx-auto text-center' : ''} ${className}`}>
      {eyebrow && (
        <span
          className={`eyebrow ${dark ? 'eyebrow-light' : 'text-crimson'} ${
            centered ? 'justify-center' : ''
          }`}
        >
          {eyebrow}
        </span>
      )}

      <h2
        className={`heading-serif mt-4 text-[clamp(2rem,4vw,3.35rem)] ${
          dark ? 'text-white' : 'text-marian'
        } ${titleClassName}`}
      >
        {title}
      </h2>

      {description && (
        <p
          className={`mt-4 text-sm leading-7 sm:text-[15px] ${
            dark ? 'text-white/90' : 'text-marian'
          } ${centered ? 'mx-auto max-w-2xl' : 'max-w-2xl'}`}
        >
          {description}
        </p>
      )}
    </div>
  )
}
