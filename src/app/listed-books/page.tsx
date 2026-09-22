"use client";
import ListedBookCard from "@/components/shared/ListedBookCard";
import { BooksContext, BooksContextType } from "@/context/BooksContext";
import { IBook } from "@/types/BooksTypes";
import React, { useContext, useState } from "react";

const ListedBookPage = () => {
  const { readBooks, wishList } = useContext<BooksContextType>(BooksContext);
  const [sortBy, setSortBy] = useState<'rating' | 'pages' | 'year'>("rating");

const sortBooks = (books:IBook[]):IBook[]=>{
  const sortedBooks = [...books]

  if (sortBy === "rating") {
    sortedBooks.sort((a, b) => b.rating - a.rating);
  } else if (sortBy === "pages") {
    sortedBooks.sort((a, b) => b.totalPages - a.totalPages);
  } else if (sortBy === "year") {
    sortedBooks.sort((a, b) => b.yearOfPublishing - a.yearOfPublishing);
  }

  return sortedBooks

}
   
const sortedReadBooks = sortBooks(readBooks) 
const sortedWishList =  sortBooks(wishList)
  return (
    <div>
      <div className="rounded-2xl container mx-auto mt-6 bg-gray-100  py-11 text-center text-xl font-bold text-gray-900">
        Books
      </div>

      <div className="text-center mt-10 ">
        <select
        value={sortBy}
         onChange={(e) => setSortBy(e.target.value as 'rating' | 'pages' | 'year')} 
         defaultValue="Color scheme" className="select select-accent">
          <option disabled={true}>Sort By</option>
          <option value={"rating"}>Rating </option>
          <option value={"pages"}>Number of pages</option>
          <option value={"year"}>Published</option>
        </select>
      </div>

      <div className="tabs container mx-auto mt-10 tabs-lift">
        <input
          type="radio"
          name="my_tabs_3"
          className="tab"
          aria-label={`Read Books (${readBooks.length})`}
        />
        <div className="tab-content bg-base-100 border-base-300 p-6">
          {sortedReadBooks.length > 0 ? (
            sortedReadBooks.map((book: IBook) => (
              <ListedBookCard key={book.bookId} book={book} />
            ))
          ) : (
            <h1 className="text-1xl text-gray-500 font-bold text-center">
              No Read Book Found
            </h1>
          )}
        </div>

        <input
          type="radio"
          name="my_tabs_3"
          className="tab"
          aria-label={`WishList Books (${wishList.length})`}
          defaultChecked
        />
        <div className="tab-content bg-base-100 border-base-300 p-6">
          {sortedWishList.length > 0 ? (
            sortedWishList.map((book: IBook) => (
              <ListedBookCard key={book.bookId} book={book} />
            ))
          ) : (
            <h1 className="text-1xl text-gray-500 font-bold text-center">
              No WishList Book Found
            </h1>
          )}
        </div>
      </div>
    </div>
  );
};

export default ListedBookPage;
