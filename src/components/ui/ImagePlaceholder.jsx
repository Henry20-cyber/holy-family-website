import { Image as ImageIcon } from 'lucide-react'

/**
 * Branded image placeholder with an optional real image.
 *
 * Replacing a placeholder later is intentionally simple:
 *   <ImagePlaceholder label="..." src="/images/photo.jpg" alt="..." />
 * The same width/height classes continue to apply, so no layout changes
 * are needed when authentic photography becomes available.
 */
export default function ImagePlaceholder({
  label = 'Image placeholder',
  className = '',
  iconSize = 42,
  src,
  alt = '',
  loading = 'lazy',
}) {
  if (src) {
    return (
      <div className={`relative overflow-hidden ${className}`}>
        <img
          src={src}
          alt={alt || label}
          loading={loading}
          className="h-full w-full object-cover"
        />
      </div>
    )
  }

  return (
    <div
      className={`placeholder-image ${className}`}
      role="img"
      aria-label={label}
    >
      <div className="flex flex-col items-center gap-3 px-5 text-center">
        <ImageIcon size={iconSize} strokeWidth={1} aria-hidden="true" />
        <span className="text-[9px] font-semibold uppercase tracking-[0.18em] sm:text-[10px]">
          {label}
        </span>
      </div>
    </div>
  )
}
