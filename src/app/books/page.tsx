 
import BookCard from "@/components/shared/BooksCard";
import { IBook } from "@/types/BooksTypes";

const getBooks = async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/booksData.json`)
  const data = await response.json();
  return data;
};

const AllBooks = async () => {
  const booksData = await getBooks();
  return (
    <div className="container mx-auto px-5 py-8">
      <h1 className="text-3xl font-bold text-center ">Books</h1>
      <h1 className="text-4xl pt-4 pb-7 underline font-bold text-center ">Explore All Books</h1>
      <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {booksData.map((book:IBook) => (
          <BookCard key={book.bookId} book={book} />
        ))}
      </div>
    </div>
  );
};

export default AllBooks;
