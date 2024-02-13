import React from 'react'
import useWindowSize from 'react-use'
import Confetti from 'react-confetti'

const Yay = () => {
  const { width, height } = useWindowSize()
  return (
    <main className='overflow-hidden min-h-screen left-0 top-0 bg-gradient-to-r from-red-500 to-pink-500 flex flex-col items-center justify-center'>
        <Confetti
        width={width}
        height={height}
        />
        <h1 className='text-8xl text-white font-bold'>YIPEEEEEE!!!</h1>
    </main>
  )
}

export default Yay
