import { Link } from 'react-router-dom'

const variantClasses = {
  primary: 'btn-primary',
  outline: 'btn-outline',
  light: 'btn-light',
  marian: 'btn-marian',
}

/**
 * Shared call-to-action link. Use `to` for internal routes.
 * Keeps button styling consistent across every page.
 */
export function ButtonLink({
  to,
  variant = 'primary',
  className = '',
  children,
  ...props
}) {
  const classes = `btn ${variantClasses[variant] || variantClasses.primary} ${className}`.trim()

  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {children}
      </Link>
    )
  }

  return (
    <a className={classes} {...props}>
      {children}
    </a>
  )
}

export default ButtonLink
