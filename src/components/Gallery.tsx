import React, { FC } from 'react'
export const Gallery:FC = () => {
  return (
    <div className='mt-20 px-10 py-10 flex flex-col gap-6 justify-center items-center'>
        <div className='text-center'>
            <p className='text-sm font-popins lg:text-base'>Gallery of our trips</p>
            <p className='text-3xl font-popins lg:text-6xl lg:mb-3'>Compeleted Journeys</p>
        </div>
        <div className='flex flex-col gap-2'>
           <div className='relative min-w-[400px] min-h-[200px] md:w-[700px] lg:w-[1200px] lg:h-[400px] flex items-end bg-gradient-to-bl from-slate-300 to-slate-900'>
            <img className='w-full h-full object-cover absolute mix-blend-overlay' src='https://images.unsplash.com/photo-1501179691627-eeaa65ea017c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80'/>
           <div className='flex justify-end items-center p-5'>
            <p className='text-white font-semibold lg:text-3xl'>Bail, Indonesia</p>
            <svg xmlns="http://www.w3.org/2000/svg" width="35px" height="35px" viewBox="0 0 24 24"><path fill="none" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m15 18l6-6l-6-6"></path></svg>
           </div>
           </div>
           <div className='flex flex-col lg:flex-row gap-2'>
                <div className='relative min-w-[400px] h-[200px] lg:w-[594px] lg:h-[250px] flex items-end bg-gradient-to-bl from-slate-300 to-slate-900'>
                    <img className='w-full h-full object-cover absolute mix-blend-overlay' src='https://images.unsplash.com/photo-1576924542622-772281b13aa8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80'/>
                    <div className='flex justify-end items-center p-5'>
                        <p className='text-white font-semibold lg:text-2xl'>Amsterdam, Netherlands</p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" viewBox="0 0 24 24"><path fill="none" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m15 18l6-6l-6-6"></path></svg>
                    </div>
                </div>
                <div className='relative min-w-[400px] h-[200px] lg:w-[599px] lg:h-[250px] flex items-end bg-gradient-to-bl from-slate-300 to-slate-900'>
                    <img className='w-full h-full object-cover absolute mix-blend-overlay' src='https://images.unsplash.com/photo-1601047095317-25a0ad9933f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80'/>
                    <div className='flex justify-end items-center p-5'>
                        <p className='text-white font-semibold lg:text-2xl'>Kashmir, India</p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" viewBox="0 0 24 24"><path fill="none" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m15 18l6-6l-6-6"></path></svg>
                    </div>
                </div>
           </div>
        </div>
    </div>
  )
}