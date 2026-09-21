import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Playfair_Display } from 'next/font/google'
import { IBook } from '@/types/BooksTypes'

const playfair = Playfair_Display({ subsets: ['latin'], weight: ['700'] })

const iconProps = {
  width: 20,
  height: 20,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.6,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
  className: 'shrink-0 text-gray-500',
}

const PinIcon = () => (
  <svg {...iconProps}>
    <path d="M12 21s-7-6.2-7-11a7 7 0 1 1 14 0c0 4.8-7 11-7 11z" />
    <circle cx="12" cy="10" r="2.5" />
  </svg>
)

const PeopleIcon = () => (
  <svg {...iconProps}>
    <circle cx="9" cy="8" r="3.2" />
    <path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6" />
    <path d="M16 5.2a3.2 3.2 0 0 1 0 5.6M18 14.3c2 .8 3 2.6 3 5.7" />
  </svg>
)

const PageIcon = () => (
  <svg {...iconProps}>
    <path d="M6 3h8l4 4v14H6z" />
    <path d="M14 3v4h4" />
    <path d="M9 17v-3M12 17v-5M15 17v-2" />
  </svg>
)

const ListedBookCard = ({ book }: { book: IBook }) => {
  const {
    bookId,
    bookName,
    author,
    image,
    totalPages,
    rating,
    category,
    tags,
    publisher,
    yearOfPublishing,
  } = book

  return (
    <div className="flex flex-col gap-6 rounded-2xl border border-gray-200 bg-white p-5 sm:flex-row">

      {/* Cover */}
      <div className="flex h-56 w-full shrink-0 items-center justify-center rounded-2xl bg-gray-100 sm:h-auto sm:w-56">
        <Image
          src={image}
          alt={bookName}
          width={140}
          height={190}
          className="h-44 w-auto object-contain drop-shadow-md"
        />
      </div>

      {/* Info */}
      <div className="flex-1">
        <h3 className={`${playfair.className} text-2xl font-bold text-gray-900`}>
          {bookName}
        </h3>
        <p className="mt-3 text-[15px] font-medium text-gray-700">By : {author}</p>

        {/* Tags & year */}
        <div className="mt-4 flex flex-wrap items-center gap-3">
          <span className="text-[15px] font-bold text-gray-900">Tag</span>
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-green-50 px-4 py-1.5 text-[15px] font-medium text-green-600"
            >
              #{tag}
            </span>
          ))}
          <span className="flex items-center gap-2 text-[15px] text-gray-600">
            <PinIcon />
            Year of Publishing: {yearOfPublishing}
          </span>
        </div>

        {/* Publisher & pages */}
        <div className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-2 text-[15px] text-gray-500">
          <span className="flex items-center gap-2">
            <PeopleIcon />
            Publisher: {publisher}
          </span>
          <span className="flex items-center gap-2">
            <PageIcon />
            Page {totalPages}
          </span>
        </div>

        {/* Category, rating & action */}
        <div className="mt-4 flex flex-wrap items-center gap-3 border-t border-gray-200 pt-4">
          <span className="rounded-full bg-blue-50 px-5 py-2 text-[15px] text-blue-500">
            Category: {category}
          </span>
          <span className="rounded-full bg-orange-50 px-5 py-2 text-[15px] text-orange-400">
            Rating: {rating}
          </span>
          <Link
            href={`/books/${bookId}`}
            className="rounded-full bg-green-600 px-5 py-2 text-[15px] font-medium text-white transition hover:bg-green-700"
          >
            View Details
          </Link>
        </div>
      </div>

    </div>
  )
}

export default ListedBookCard