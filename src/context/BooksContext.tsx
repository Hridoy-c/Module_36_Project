"use client"

import { IBook } from '@/types/BooksTypes';
import React, { createContext } from 'react'

export type BooksContextType = {
    readBooks: IBook[],
    setReadBooks: React.Dispatch<React.SetStateAction<IBook[]>>,
    wishList: IBook[],
    setWishList: React.Dispatch<React.SetStateAction<IBook[]>>

}


export const BooksContext = createContext<BooksContextType> ({
    readBooks: [],
    setReadBooks: () => {} ,  
    wishList: [],
    setWishList: () => {}

});

const BooksContextProvider = ({children}:{children: React.ReactNode}) => {
    const [readBooks, setReadBooks] = React.useState<IBook[]> ([]);
    const [wishList, setWishList] = React.useState<IBook[]> ([]);

    const sharedData = {
        readBooks,
        setReadBooks,
        wishList,
        setWishList
    }

  return (
    <BooksContext.Provider value={sharedData}>
      {children}
    </BooksContext.Provider>

  )
}

export default BooksContextProvider
