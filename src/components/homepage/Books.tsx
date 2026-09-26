import React from "react";
import BooksCard from "../shared/BooksCard";
import { IBook } from "@/types/BooksTypes";


const getBooks = async () => {
  const response = await fetch('http://localhost:3001/books')
  const data = await response.json();
  return data;
};

const Books = async () => {
  const booksData = await getBooks();
  return (
    <div className="container mx-auto px-5 py-8">
      <h1 className="text-3xl font-bold text-center ">Books</h1>
      <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {booksData.slice(0, 9).map((book:IBook) => (
          <BooksCard key={book.bookId} book={book} />
        ))}
      </div>
    </div>
  );
};

export default Books;
