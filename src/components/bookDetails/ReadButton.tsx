"use client";
import { BooksContext, BooksContextType } from "@/context/BooksContext";
import { IBook } from "@/types/BooksTypes";
import React, { useContext } from "react";
import { Bounce, toast } from "react-toastify";

interface IReadButtonProps {
  book: IBook;
}

const ReadButton = ({ book }: IReadButtonProps) => {
  const { readBooks, setReadBooks } =
    useContext<BooksContextType>(BooksContext);

  const handleReadBook = () => {
    const updatedReadBooks = [...readBooks, book];
    setReadBooks(updatedReadBooks);
    toast.success(`${book.bookName} added to your read list!`, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
  };

  return (
    <div>
      <button
        onClick={handleReadBook}
        className="rounded-lg border cursor-pointer border-gray-300 px-6 py-3 text-sm font-semibold text-gray-900 transition hover:bg-gray-50"
      >
        Read
      </button>
    </div>
  );
};

export default ReadButton;
