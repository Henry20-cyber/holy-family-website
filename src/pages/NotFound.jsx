import { Link } from 'react-router-dom'
import { ArrowLeft, Cross } from 'lucide-react'

export default function NotFound() {
  return (
    <section className="flex min-h-[62vh] items-center justify-center bg-ivory px-6 py-16 text-center">
      <div>
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-crimson/40 text-crimson">
          <Cross size={24} strokeWidth={1.3} aria-hidden="true" />
        </div>

        <p className="mt-5 font-heading text-8xl leading-none text-marian">404</p>

        <h1 className="heading-serif mt-4 text-4xl text-marian">
          Page Not Found
        </h1>

        <p className="mx-auto mt-3 max-w-md text-sm leading-7 text-marian">
          The page you are looking for could not be found. You are welcome to
          return to the homepage or explore our ministry.
        </p>

        <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
          <Link to="/" className="btn btn-primary">
            <ArrowLeft size={15} aria-hidden="true" />
            Return Home
          </Link>

          <Link to="/contact" className="btn btn-outline">
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  )
}
