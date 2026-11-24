/**
 * Small decorative divider used to bring a sacred, editorial rhythm
 * to headings and quiet sections.
 *
 * `tone="crimson"` is for ivory and white surfaces; `tone="light"` is for
 * Marian Blue surfaces, where cardinal red would not read.
 */
export default function Ornament({ className = '', tone = 'crimson' }) {
  return (
    <span
      className={`ornament ${
        tone === 'light' ? 'text-white' : 'text-crimson'
      } ${className}`}
      aria-hidden="true"
    >
      <span className="ornament-diamond" />
    </span>
  )
}
