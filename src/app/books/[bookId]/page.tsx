import Image from 'next/image'
import { notFound } from 'next/navigation'
import React from 'react'
import { Playfair_Display } from 'next/font/google'
import { IBook } from '@/types/BooksTypes'
import ReadButton from '@/components/bookDetails/ReadButton'
import WishlistButton from '@/components/bookDetails/WishlistButton'

const playfair = Playfair_Display({ subsets: ['latin'], weight: ['700'] })

interface IBookDetailsPageProps {
  params: Promise<{
    bookId: string
  }>
}


const getBooks = async () => {
  const response = await fetch('http://localhost:3001/books')
  const data = await response.json()
  return data
}

const BookDetailsPage = async ({ params }: IBookDetailsPageProps) => {
  const { bookId } = await params
  const booksData = await getBooks()
  const book: IBook | undefined = booksData.find(
    (book: IBook) => book.bookId === Number(bookId)
  )

  if (!book) notFound()

  const {
    bookName,
    author,
    image,
    review,
    totalPages,
    rating,
    category,
    tags,
    publisher,
    yearOfPublishing,
  } = book

  const details = [
    { label: 'Pages', value: totalPages },
    { label: 'Rating', value: rating },
    { label: 'Publisher', value: publisher },
    { label: 'Year', value: yearOfPublishing },
  ]

  return (
    <section className="container mx-auto px-5 py-10">
      <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2 lg:gap-12">

        {/* Cover */}
        <div className="flex items-center justify-center rounded-2xl bg-gray-100 p-8 md:p-12">
          <Image
            src={image}
            alt={bookName}
            width={420}
            height={560}
            priority
            className="h-auto w-full max-w-xs object-contain drop-shadow-xl"
          />
        </div>

        {/* Info */}
        <div>
          <h1 className={`${playfair.className} text-3xl font-bold text-gray-900 md:text-4xl`}>
            {bookName}
          </h1>
          <p className="mt-3 text-sm font-medium text-gray-700">By : {author}</p>

          <p className="mt-4 border-y border-gray-200 py-3 text-sm text-gray-700">
            {category}
          </p>

          <p className="mt-4 text-sm leading-relaxed text-gray-600">
            <span className="font-bold text-gray-900">Review : </span>
            {review}
          </p>

          {/* Tags */}
          <div className="mt-5 flex flex-wrap items-center gap-3">
            <span className="text-sm font-bold text-gray-900">Tag</span>
            {tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-green-50 px-4 py-1 text-sm font-medium text-green-600"
              >
                #{tag}
              </span>
            ))}
          </div>

          {/* Details */}
          <dl className="mt-5 grid grid-cols-[150px_1fr] gap-y-3 border-t border-gray-200 pt-5 text-sm">
            {details.map(({ label, value }) => (
              <React.Fragment key={label}>
                <dt className="text-gray-600">{label}</dt>
                <dd className="font-bold text-gray-900">{value}</dd>
              </React.Fragment>
            ))}
          </dl>

          {/* Actions */}
          <div className="mt-6 flex gap-4">
            <ReadButton book={book} />
           <WishlistButton book={book} /> 

          </div>
        </div>

      </div>
    </section>
  )
}

export default BookDetailsPage