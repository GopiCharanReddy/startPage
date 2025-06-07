import React from 'react';

const App = () => {
  return (
    <>
      <div className='h-screen flex justify-center items-center bg-[#eaeaea] relative'>
        <div className='shadow-[10px_10px_35px_rgba(0,0,0,0.3)] p-4 rounded-xl bg-[#f7f7f7] flex space-x-6'>
          <div>
            <div className='border-gray-500 border-4'>
              <img className='w-86 h-54 p-1' src='/image-1.jpg' alt="eren-mikasa." />
            </div>
            <form action="https://search.brave.com/search?q=" className='relative border-gray-500 focus-within:border-gray-500 rounded-sm border-3 mt-4'>
              <input className='w-80 p-2 focus:outline-none' autoFocus type="search" name='q' aria-label='Seach for something on Brave' placeholder='Search on Brave...' />
              <button type='submit' className='absolute  right-0 top-1/2 -translate-y-1/2 p-2 focus:border-red-500 hover:bg-[#eaeaea] hover:text-white hover:cursor-pointer'>
                <span>
                  <svg className='w-6 h-6' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="11" cy="11" r="8" />
                    <path d="m21 21-4.3-4.3" />
                  </svg>
                </span>
              </button>
            </form>
          </div>

          <div className= 'w-80'>
            <div className='text-4xl m-0 pb-3 tracking-[0.5] leading-none text-black underline underline-offset-8 [text-decoration-thickness:0.25rem]'>たたかえ</div>
          <div className='flex flex-col space-y-3'>
            
            <div className='mt-6 flex space-x-30'>
              <div className='text-sm flex flex-col relative text-gray-800'>
                <label className='absolute bottom-19 left-0 text-xl text-black mt-2 mb-1 '>apps</label>
                <a href="https://youtube.com/">youtube</a>
                <a href="https://X.com/">X (twitter)</a>
                <a href="https://medium.com/">medium</a>
                <a href="https://pinterest.com/">pinterest</a>
              </div>
              <div className='text-sm flex flex-col relative text-gray-800'>
                <label className='absolute bottom-19 left-0 text-xl text-black mt-2 mb-1 '>tools</label>
                <a href="https:/github.com/">github</a>
                <a href="https:/chatgpt.com/">chatGPT</a>
                <a href="https:/bhindi.io/">bhindiAi</a>
                <a href="https:/coolify.io/">coolify</a>
              </div>
            </div>
            <div className='mt-6 flex space-x-30'>
              <div className='text-sm flex flex-col relative text-gray-800'>
                <label className='absolute bottom-19 left-0 text-xl text-black mt-2 mb-1 '>libs</label>
                <a href="https:/react.dev/index/">react</a>
                <a href="https:/tailwindcss.com/">tailwind</a>
                <a href="https:/ui.aceternity.com/">aceternity</a>
                <a href="https://ui.shadcn.com/docs/components">shadcn</a>
              </div>
              <div className='text-sm flex flex-col relative text-gray-800'>
                <label className='absolute bottom-19 left-0 text-xl text-black mt-2 mb-1 '>booster</label>
                <a href="https://areyoulocked.in/">areyoulockedin</a>
                <a href="https://forkyou.dev/leaderboard">forkyou</a>
                <a href="https://x.com/Spikey_twt">sex</a>
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