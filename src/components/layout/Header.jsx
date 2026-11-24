import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { ArrowUpRight, Cross, Menu, X } from 'lucide-react'

const navigation = [
  { label: 'Home', path: '/' },
  { label: 'About Us', path: '/about' },
  { label: 'Our Ministry', path: '/ministry' },
  { label: 'Programs', path: '/programs' },
  { label: 'Novenas', path: '/novenas' },
  { label: 'Gallery', path: '/gallery' },
  { label: 'News', path: '/news' },
]

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    if (!mobileMenuOpen) return undefined

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') setMobileMenuOpen(false)
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [mobileMenuOpen])

  // Prevent the page behind the open mobile menu from scrolling.
  useEffect(() => {
    if (!mobileMenuOpen) return undefined

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    return () => {
      document.body.style.overflow = previousOverflow
    }
  }, [mobileMenuOpen])

  // Close the menu if the viewport grows into the desktop layout.
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setMobileMenuOpen(false)
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const closeMobileMenu = () => setMobileMenuOpen(false)

  return (
    <header className="sticky top-0 z-50 w-full bg-marian shadow-lg shadow-marian/20">
      <div className="h-[2px] w-full bg-crimson" />

      <div className="container-main">
        <div className="flex h-[80px] items-center justify-between gap-4">
          {/* Brand */}
          <Link
            to="/"
            onClick={closeMobileMenu}
            className="flex shrink-0 items-center gap-3"
            aria-label="Holy Family Novena Prayer Group home"
          >
            <span className="flex h-11 w-11 items-center justify-center border border-white/70 text-white transition-colors duration-300 hover:bg-white hover:text-marian">
              <Cross size={23} strokeWidth={1.4} aria-hidden="true" />
            </span>

            <span className="flex flex-col">
              <span className="font-heading text-[20px] font-semibold leading-none text-white sm:text-[22px]">
                Holy Family
              </span>

              <span className="mt-1.5 whitespace-nowrap text-[8px] font-semibold uppercase tracking-[0.2em] text-white/90 sm:text-[9px]">
                Novena Prayer Group
              </span>
            </span>
          </Link>

          {/* Desktop navigation */}
          <nav
            aria-label="Main navigation"
            className="hidden min-w-0 flex-1 items-center justify-center lg:flex"
          >
            <ul className="flex items-center gap-1 xl:gap-3">
              {navigation.map((item) => (
                <li key={item.path}>
                  <NavLink
                    to={item.path}
                    end={item.path === '/'}
                    className={({ isActive }) =>
                      `group relative inline-flex items-center px-2 py-3 text-[11.5px] font-medium transition-colors duration-200 xl:px-2.5 xl:text-[12.5px] ${
                        isActive
                          ? 'font-semibold text-white'
                          : 'text-white/90 hover:text-white'
                      }`
                    }
                  >
                    {({ isActive }) => (
                      <>
                        {item.label}
                        <span
                          className={`absolute inset-x-1.5 bottom-0 h-[2px] origin-left bg-crimson transition-transform duration-300 ${
                            isActive
                              ? 'scale-x-100'
                              : 'scale-x-0 group-hover:scale-x-100'
                          }`}
                          aria-hidden="true"
                        />
                      </>
                    )}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          {/* Desktop call to action */}
          <Link
            to="/contact"
            className="hidden min-h-[42px] shrink-0 items-center justify-center gap-2 bg-crimson px-4 text-[10px] font-bold uppercase tracking-[0.08em] text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-white hover:text-marian xl:px-5 lg:inline-flex"
          >
            Join Our Community
            <ArrowUpRight size={15} aria-hidden="true" />
          </Link>

          {/* Mobile menu button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen((open) => !open)}
            className="flex h-11 w-11 shrink-0 items-center justify-center border border-white/25 text-white transition-colors hover:border-white lg:hidden"
            aria-label={
              mobileMenuOpen
                ? 'Close navigation menu'
                : 'Open navigation menu'
            }
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
          >
            {mobileMenuOpen ? (
              <X size={22} aria-hidden="true" />
            ) : (
              <Menu size={22} aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile navigation */}
      <div
        id="mobile-navigation"
        className={`overflow-y-auto border-t bg-marian transition-[max-height,opacity] duration-300 ease-in-out lg:hidden ${
          mobileMenuOpen
            ? 'max-h-[calc(100svh-82px)] border-white/10 opacity-100'
            : 'max-h-0 border-transparent opacity-0'
        }`}
        aria-hidden={!mobileMenuOpen}
      >
        <nav
          aria-label="Mobile navigation"
          className="container-main flex flex-col py-3"
        >
          {navigation.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === '/'}
              onClick={closeMobileMenu}
              tabIndex={mobileMenuOpen ? 0 : -1}
              className={({ isActive }) =>
                `flex items-center justify-between border-b border-white/10 py-3.5 text-sm transition-colors ${
                  isActive
                    ? 'font-semibold text-white'
                    : 'font-normal text-white/90 hover:text-white'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {item.label}
                  {isActive && (
                    <span
                      className="h-1.5 w-1.5 rounded-full bg-crimson"
                      aria-hidden="true"
                    />
                  )}
                </>
              )}
            </NavLink>
          ))}

          <div className="mt-4 grid grid-cols-1 gap-2 pb-2 sm:grid-cols-3">
            <Link
              to="/founder"
              onClick={closeMobileMenu}
              tabIndex={mobileMenuOpen ? 0 : -1}
              className="flex min-h-[44px] items-center justify-center border border-white/20 px-3 text-[10px] font-bold uppercase tracking-[0.1em] text-white/90 transition-colors hover:border-white hover:text-white"
            >
              Our Founder
            </Link>

            <Link
              to="/letters-to-god"
              onClick={closeMobileMenu}
              tabIndex={mobileMenuOpen ? 0 : -1}
              className="flex min-h-[44px] items-center justify-center border border-white/20 px-3 text-[10px] font-bold uppercase tracking-[0.1em] text-white/90 transition-colors hover:border-white hover:text-white"
            >
              Letters to God
            </Link>

            <Link
              to="/donate"
              onClick={closeMobileMenu}
              tabIndex={mobileMenuOpen ? 0 : -1}
              className="flex min-h-[44px] items-center justify-center border border-white/20 px-3 text-[10px] font-bold uppercase tracking-[0.1em] text-white/90 transition-colors hover:border-white hover:text-white"
            >
              Support Our Mission
            </Link>
          </div>

          <Link
            to="/contact"
            onClick={closeMobileMenu}
            tabIndex={mobileMenuOpen ? 0 : -1}
            className="mt-2 flex min-h-[48px] items-center justify-center gap-2 bg-crimson px-5 text-[11px] font-bold uppercase tracking-[0.1em] text-white transition-colors hover:bg-white hover:text-marian"
          >
            Join Our Community
            <ArrowUpRight size={16} aria-hidden="true" />
          </Link>
        </nav>
      </div>
    </header>
  )
}

export default Header
