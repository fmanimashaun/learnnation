import React from 'react'
import { useDarkMode } from '../componets/DarkmodeContext';
import house from  '../assets/imgs/pexel-house.jpg'

const Hero = () => {
    const {darkMode, toggleDarkMode} = useDarkMode();
  return (
    <>
        <div className={`${darkMode ? 'dark bg-black' : 'light bg-white'}`}>
            <section className='w-[95%] h-[600px] m-auto bg-cover bg-center rounded-xl flex justify-center flex-col items-start lg:px-28 px-10 gap-7 z-20' style={{backgroundImage: `url(${house})`}}>
                <h1 className='text-6xl text-white font-semibold'> Find your home in Nigeria</h1>
            </section>
        </div>
    </>
  )
}

export default Hero