"use client";

import { MagnifyingGlassIcon, InformationCircleIcon } from '@heroicons/react/24/solid'
import Image from 'next/image'
import React from 'react'
import Avatar from 'react-avatar'

function Header() {
  return (
    <header>
      <div className="flex flex-col md:flex-row items-center p-5 bg-gray-500/10 rounded-b-2xl">
        <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-br from-[#AAC8A7] to-[#FDFFAE] rounded-md filter blur-3xl opacity-60 -z-50"></div>

        <Image
          // src="https://links.papareact.com/c2cdd5"
          src="/fancytodo-header-logo.png"
          alt="Logo"
          width={300}
          height={100}
          className="w-44 md:w-56 pb-10 md:pb-0 object-contain"
        />

        <div className='flex items-center space-x-5 flex-1 justify-end w-full'>
          <form className='flex items-center space-x-5 bg-white rounded-md shadow-md p-2 flex-1 md:flex-initial'>
            <MagnifyingGlassIcon className="h-6 w-6 text-gray-400" />
            <input type="text" placeholder="Search" className='flex-1 outline-none p-2' />
            <button type="submit" hidden>Search</button>
          </form>

          <Avatar name="Faiz Hasif" round size='50' color='#5DB97C' />
        </div>
      </div>

      <div className='flex items-center justify-center px-5 py-3 md:py-5'>
        <p className='flex items-center text-sm font-light px-5 py-2 md:py-5 shadow-xl rounded-xl bg-white italic max-w-3xl text-secondary'>
          <InformationCircleIcon className='inline-block h-10 w-10 text-primary mr-1' />
          Summarising your tasks...
        </p>
      </div>
    </header>
  )
}

export default Header