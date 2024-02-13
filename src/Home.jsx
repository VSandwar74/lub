import React from 'react'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Yay from './yay'
import MovingButton from './button'
import Typewriter from 'typewriter-effect'


const Home = ({setHappy}) => {
  return (
    <main className='overflow-hidden min-h-screen left-0 top-0 bg-gradient-to-r from-red-500 to-pink-500 flex flex-col items-center justify-center'>
      <h1 className='text-7xl text-center text-white fond bold'>
      <Typewriter
        onInit={(typewriter) => {
          typewriter.typeString('Dear Ms. Aditi Baghel,')
            .pauseFor(2500)
            .deleteAll()
            .typeString('I love you so so so much')
            .pauseFor(2500)
            .deleteAll()
            .typeString('So would you do me the ultimate honor of being my valentine? ❤')
            .pauseFor(2500)
            .deleteAll()
            .start();
        }}
      />
      </h1>
      <div className="card mt-10 w-[60%] flex flew-row justify-around text-black  text-lg font-semibold">
          <button onClick={() => setHappy(true)} className='rounded-xl bg-white py-0 px-4 hover:bg-black hover:text-white'>
            YESS, I LOVE YOUUU
          </button>
        <MovingButton />
      </div>
    </main>
  )
}

export default Home
