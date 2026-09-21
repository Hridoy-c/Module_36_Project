import Image from 'next/image'
import { Playfair_Display } from 'next/font/google'
import { IBook } from '@/types/BooksTypes'
import Link from 'next/link'

const playfair = Playfair_Display({ subsets: ['latin'], weight: ['700'] })

interface IBookCardProps {
    book: IBook
}   

const BookCard = ({ book }: IBookCardProps) => {
  const { bookName, author, image, rating, category, tags } = book

  return (
    <div className="">
      <Link href={`/books/${book.bookId}`} >
    <div className="rounded-2xl border border-gray-200 bg-white p-5">

      {/* Cover */}
      <div className="flex h-56 items-center justify-center rounded-2xl bg-gray-100">
        <Image
          src={image}
          alt={bookName}
          width={140}
          height={180}
          className="h-44 w-auto object-contain drop-shadow-md"
        />
      </div>

      {/* Tags */}
      <div className="mt-5 flex flex-wrap gap-3">
        {tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-green-50 px-4 py-1 text-sm font-medium text-green-600"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Title & author */}
      <h3 className={`${playfair.className} mt-4 text-xl font-bold text-gray-900`}>
        {bookName}
      </h3>
      <p className="mt-2 text-sm font-medium text-gray-700">By : {author}</p>

      {/* Category & rating */}
      <div className="mt-4 flex items-center justify-between border-t border-dashed border-gray-300 pt-4 text-sm text-gray-700">
        <span>{category}</span>

        <span className="flex items-center gap-2">
          {rating.toFixed(2)}
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinejoin="round"
          >
            <path d="M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1L3.2 9.5l6.1-.9L12 3z" />
          </svg>
        </span>
      </div>

    </div>
    </Link>
    </div>
  )
}

export default BookCard