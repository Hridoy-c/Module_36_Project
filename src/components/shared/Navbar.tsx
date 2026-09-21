"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useState } from 'react'

const links = [
  { href: '/', label: 'Home' },
  { href: '/books', label: 'Books' },
  { href: '/listed-books', label: 'Listed Books' },
  { href: '/read-books', label: 'Read Books' },
]

const Navbar = () => {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href)

  const linkClass = (href: string) =>
    `rounded-lg border px-4 py-3 text-[17px] transition ${
      isActive(href)
        ? 'border-green-500 font-medium text-green-600'
        : 'border-transparent text-gray-600 hover:text-green-600'
    }`

  return (
    <nav className="sticky top-0 z-50 border-b border-gray-500 bg-white">
      <div className="container mx-auto px-5">

        {/* Top row */}
        <div className="flex items-center justify-between py-4">

          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-gray-900 lg:text-[28px]">
            Book Vibe
          </Link>

          {/* Navigation (desktop) */}
          <ul className="hidden cursor-pointer items-center gap-4 lg:flex">
            {links.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  aria-current={isActive(href) ? 'page' : undefined}
                  className={linkClass(href)}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Authentication (desktop) */}
          <div className="hidden items-center gap-4 lg:flex">
            <button className="rounded-lg bg-green-600 px-7 py-4 text-[17px] font-semibold text-white transition hover:bg-green-700">
              Sign In
            </button>

            <button className="rounded-lg bg-cyan-500 px-7 py-4 text-[17px] font-semibold text-white transition hover:bg-cyan-600">
              Sign Up
            </button>
          </div>

          {/* Menu toggle (mobile / tablet) */}
          <button
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen(!open)}
            className="rounded-lg border cursor-pointer border-gray-300 p-2 text-gray-800 lg:hidden"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            >
              {open ? (
                <path d="M6 6l12 12M18 6L6 18" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile / tablet menu */}
        {open && (
          <div className="flex flex-col gap-3 pb-5 lg:hidden">
            {links.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                aria-current={isActive(href) ? 'page' : undefined}
                className={linkClass(href)}
              >
                {label}
              </Link>
            ))}

            <div className="mt-2 flex gap-3">
              <button className="flex-1 rounded-lg bg-green-600 py-3 text-[17px] font-semibold text-white transition hover:bg-green-700">
                Sign In
              </button>

              <button className="flex-1 rounded-lg bg-cyan-500 py-3 text-[17px] font-semibold text-white transition hover:bg-cyan-600">
                Sign Up
              </button>
            </div>
          </div>
        )}

      </div>
    </nav>
  )
}

export default Navbar