import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { Helmet } from 'react-helmet-async'

import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Founder from './pages/Founder'
import Ministry from './pages/Ministry'
import Programs from './pages/Programs'
import Novenas from './pages/Novenas'
import Gallery from './pages/Gallery'
import News from './pages/News'
import Donate from './pages/Donate'
import Contact from './pages/Contact'
import LettersToGod from './pages/LettersToGod'
import NotFound from './pages/NotFound'

const SITE_NAME = 'Holy Family Novena Prayer Group'

const pageRoutes = [
  {
    path: '/about',
    Component: About,
    title: 'About Us',
    description:
      'Learn about the identity, mission, vision and spiritual foundation of the Holy Family Novena Prayer Group.',
  },
  {
    path: '/founder',
    Component: Founder,
    title: 'Our Founder',
    description:
      'The founding story and spiritual leadership of the Holy Family Novena Prayer Group.',
  },
  {
    path: '/ministry',
    Component: Ministry,
    title: 'Our Ministry',
    description:
      'Home consecration, Eucharistic devotion, prayer, spiritual formation and charitable service.',
  },
  {
    path: '/programs',
    Component: Programs,
    title: 'Programs',
    description:
      'Prayer gatherings, retreats, Eucharistic celebrations, youth formation and family support.',
  },
  {
    path: '/novenas',
    Component: Novenas,
    title: 'Novenas',
    description:
      'The Catholic tradition of novena prayer in nine-day, nine-week and nine-month formats.',
  },
  {
    path: '/gallery',
    Component: Gallery,
    title: 'Gallery',
    description:
      'A glimpse into the prayer, celebrations and community life of the Holy Family Novena Prayer Group.',
  },
  {
    path: '/news',
    Component: News,
    title: 'News and Updates',
    description:
      'Announcements, ministry updates and community highlights from the Holy Family Novena Prayer Group.',
  },
  {
    path: '/donate',
    Component: Donate,
    title: 'Support Our Mission',
    description:
      'Information about supporting the spiritual programs and charitable work of the ministry.',
  },
  {
    path: '/contact',
    Component: Contact,
    title: 'Contact Us',
    description:
      'Contact the Holy Family Novena Prayer Group for enquiries about prayer, novenas and community life.',
  },
  {
    path: '/letters-to-god',
    Component: LettersToGod,
    title: 'Letters to God',
    description:
      'The Letters to God tradition of bringing personal prayer intentions before God.',
  },
]

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  }, [pathname])

  return null
}

export default function App() {
  return (
    <>
      <ScrollToTop />

      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      <Header />

      <main id="main-content" tabIndex={-1}>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Helmet>
                  <title>{SITE_NAME} | Faith and Family</title>
                  <meta
                    name="description"
                    content="Discover the Holy Family Novena Prayer Group, a Catholic family community dedicated to prayer, home consecration and spiritual growth."
                  />
                </Helmet>
                <Home />
              </>
            }
          />

          {pageRoutes.map(({ path, Component, title, description }) => (
            <Route
              key={path}
              path={path}
              element={
                <>
                  <Helmet>
                    <title>{title} | {SITE_NAME}</title>
                    <meta name="description" content={description} />
                  </Helmet>
                  <Component />
                </>
              }
            />
          ))}

          <Route
            path="*"
            element={
              <>
                <Helmet>
                  <title>Page Not Found | {SITE_NAME}</title>
                  <meta
                    name="description"
                    content="The page you are looking for could not be found."
                  />
                </Helmet>
                <NotFound />
              </>
            }
          />
        </Routes>
      </main>

      <Footer />
    </>
  )
}
