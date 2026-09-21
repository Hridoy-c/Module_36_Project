import Image from 'next/image'
import React from 'react'
import { Playfair_Display } from 'next/font/google'
import BannerImg from '@/assets/hero_img.jpg'

const playfair = Playfair_Display({ subsets: ['latin'], weight: ['700'] })

const Banner = () => {
  return (
    <section className="container mx-auto px-5 py-8">
      <div className="flex flex-col items-center justify-between gap-8 rounded-2xl bg-gray-100 px-8 py-10 md:flex-row md:px-16 md:py-16">

        {/* Text */}
        <div className="w-full text-center md:w-auto md:text-left">
          <h1
            className={`${playfair.className} max-w-sm text-3xl font-bold leading-snug text-gray-900 md:text-4xl`}
          >
            Books to freshen up your bookshelf
          </h1>

          <button className="mt-8 rounded-lg bg-green-600 px-6 py-3 text-[17px] font-semibold text-white transition hover:bg-green-700">
            View The List
          </button>
        </div>

        {/* Book image */}
        <Image
          src={BannerImg}
          alt="Featured book"
          width={560}
          height={460}
          priority
          className="h-auto w-full max-w-xs drop-shadow-xl md:w-72 md:max-w-none lg:w-96 xl:w-120"
        />

      </div>
    </section>
  )
}

export default Banner