import React, { useEffect, useState } from 'react';
import startPageData from './startPageData.js';


const App = () => {

  const [currentTheme, setCurrentTheme] = useState(null);

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * startPageData.length)
    setCurrentTheme(startPageData[6])
  }, []);

  if (!currentTheme) {
    return (
      <div className='h-screen flex justify-center items-center bg-[#ffa058]'>Loading...</div>
    )
  }
  const { image, bgColor, boxColor, borderColor, headingColor, siteTextColor, focusColor, headingStrokeColor,} = currentTheme;

  return (
    <>
      <div className='h-screen flex justify-center items-center relative' style={{ backgroundColor: bgColor }}>
        <div className='shadow-[10px_10px_35px_rgba(0,0,0,0.3)] p-4 rounded-xl flex space-x-6' style={{ backgroundColor: boxColor }}>
          <div>
            <div className='border-4' style={{ borderColor: borderColor }}>
              <img className='w-86 h-54 p-1' src={image} alt="image" />
            </div>
            <form action="https://search.brave.com/search?q=" className='relative  border-gray-500 transition-colors duration-200 rounded-sm  border-2 mt-4' style={{ borderColor: borderColor, }}>
              <input className={`w-80 p-2 focus:bg-[${focusColor}] focus:outline-none transition-colors duration-200`} autoFocus type="search" name='q' aria-label='Seach for something on Brave' placeholder='Search on Brave...' />
              <button type='submit' className={`absolute  right-0 top-1/2 -translate-y-1/2 p-2 hover:bg-${focusColor} hover:text-black hover:cursor-pointer text-white`}>
                <span>
                  <svg className='w-6 h-6' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="11" cy="11" r="8" />
                    <path d="m21 21-4.3-4.3" />
                  </svg>
                </span>
              </button>
            </form>
          </div>

          <div className='w-80'>
            <div className='m-0 pb-3 leading-none underline underline-offset-8 [text-decoration-thickness:0.25rem] text-[2rem] tracking-[0.5rem]' style={{ color: headingColor,WebkitTextStroke: `2px ${headingStrokeColor}`}}>たたかえ</div>
            <div className='flex flex-col space-y-3'>

              <div className='mt-6 flex space-x-10'>
                <div className='text-sm flex flex-col relative top-2'>
                  <label className='absolute font-[500] tracking-wide  bottom-21 text-xl  mb-1' style={{ color: headingColor }}>apps</label>
                  <a href="https://youtube.com/" style={{ color: siteTextColor }}>youtube</a>
                  <a href="https://X.com/" style={{ color: siteTextColor }}>X (twitter)</a>
                  <a href="https://medium.com/" style={{ color: siteTextColor }}>medium</a>
                  <a href="https://pinterest.com/" style={{ color: siteTextColor }}>pinterest</a>
                </div>
                <div className='text-sm flex flex-col relative top-2 '>
                  <label className='absolute font-[500] tracking-wide  bottom-21  text-xl mt-2 mb-1' style={{ color: headingColor }}>tools</label>
                  <a href="https://github.com/" style={{ color: siteTextColor }}>github</a>
                  <a href="https://chatgpt.com/" style={{ color: siteTextColor }}>chatGPT</a>
                  <a href="https://bhindi.io/" style={{ color: siteTextColor }}>bhindiAi</a>
                  <a href="https://stackoverflow.com/" style={{ color: siteTextColor }}>stackoverflow</a>
                </div>
              </div>
              <div className='mt-4 flex space-x-10'>
                <div className='text-sm flex flex-col relative top-2 '>
                  <label className='absolute font-[500] tracking-wide  bottom-21  text-xl mt-2 mb-1' style={{ color: headingColor }}>libs</label>
                  <a href="https://react.dev/" style={{ color: siteTextColor }}>react</a>
                  <a href="https://tailwindcss.com/" style={{ color: siteTextColor }}>tailwind</a>
                  <a style={{ color: siteTextColor }} href="https://ui.aceternity.com/">aceternity</a>
                  <a style={{ color: siteTextColor }} href="https://ui.shadcn.com/docs/components">shadcn</a>
                </div>
                <div className='text-sm flex flex-col relative top-2 '>
                  <label className='absolute font-[500] tracking-wide  bottom-21  text-xl mb-1' style={{ color: headingColor }}>booster</label>
                  <a style={{ color: siteTextColor }} href="https://areyoulocked.in/">areyoulockedin</a>
                  <a style={{ color: siteTextColor }} href="https://forkyou.dev/leaderboard">forkyou</a>
                  <a style={{ color: siteTextColor }} href="">sex</a>
                </div>
              </div>
              <div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default App