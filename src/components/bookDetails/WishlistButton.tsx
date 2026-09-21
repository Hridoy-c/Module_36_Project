'use client'
import { BooksContext, BooksContextType } from '@/context/BooksContext'
import { IBook } from '@/types/BooksTypes'
import React, { useContext } from 'react'
import { Bounce, toast } from 'react-toastify'

interface IWishlistButtonProps { 
     book: IBook

}

const WishlistButton = ({book}: IWishlistButtonProps) => {
  const { wishList, setWishList }= useContext<BooksContextType>(BooksContext);
    
   const handleWishlistBook = () => {
    const updatedWishList = [...wishList, book];
    setWishList(updatedWishList);
    toast.success(`${book.bookName} added to your wish  list!`, {
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
    
    
   }

  return (
    <div>
       <button
       onClick={ handleWishlistBook}
        className="rounded-lg cursor-pointer bg-cyan-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-cyan-600">
            add  Wishlist
    </button>
    </div>
  )
}

export default WishlistButton
