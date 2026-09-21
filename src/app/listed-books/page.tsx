"use client";
import ListedBookCard from "@/components/shared/ListedBookCard";
import { BooksContext, BooksContextType } from "@/context/BooksContext";
import { IBook } from "@/types/BooksTypes";
import React, { useContext } from "react";

const ListedBookPage = () => {
  const { readBooks, wishList } = useContext<BooksContextType>(BooksContext);
  return (
    <div>
      <div className="rounded-2xl container mx-auto mt-6 bg-gray-100  py-11 text-center text-xl font-bold text-gray-900">
        Books
      </div>
      <div className="tabs container mx-auto mt-10 tabs-lift">
        <input
          type="radio"
          name="my_tabs_3"
          className="tab"
          aria-label={`Read Books (${readBooks.length})`}
        />
        <div className="tab-content bg-base-100 border-base-300 p-6">
         { readBooks.length> 0?(
           readBooks.map((book:IBook) => (  
             <ListedBookCard key={book.bookId} book={book} />
           ))
         ):(
           <h1 className="text-1xl text-gray-500 font-bold text-center">No Read Book Found</h1>
         )  
         }
        </div>

        <input
          type="radio"
          name="my_tabs_3"
          className="tab"
          aria-label={`WishList Books (${wishList.length})`}
          defaultChecked
        />
        <div className="tab-content bg-base-100 border-base-300 p-6">
         {wishList.length> 0? (
           wishList.map((book:IBook) => (  
             <ListedBookCard key={book.bookId} book={book} />
           ))
         ):(
           <h1 className="text-1xl text-gray-500 font-bold text-center">No WishList Book Found</h1>
         )
         }
        </div>

      
      </div>
    </div>
  );
};

export default ListedBookPage;
