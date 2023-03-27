import React, { useState } from 'react'

export const HeroPage: React.FC = () => {

    // const [ isClick, setIsClick] = useState(false);
    // console.log(isClick)

    return (
        <div className="bg-gradient-to-t from-slate-800 to-slate-500 w-screen relative overflow-hidden h-full">
            <img
                className='w-full h-full object-bottom object-cover absolute mix-blend-overlay'
                src='https://images.unsplash.com/photo-1654429525137-249ef52f4dff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80' />
            <div className='px-10 py-10 lg:px-20 lg:py-10'>
            <div className='flex justify-between'>
                <div className='flex gap-3 items-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#fb7d00" className="w-6 h-6 font-white" >
                        <path fillRule="evenodd" d="M8.161 2.58a1.875 1.875 0 011.678 0l4.993 2.498c.106.052.23.052.336 0l3.869-1.935A1.875 1.875 0 0121.75 4.82v12.485c0 .71-.401 1.36-1.037 1.677l-4.875 2.437a1.875 1.875 0 01-1.676 0l-4.994-2.497a.375.375 0 00-.336 0l-3.868 1.935A1.875 1.875 0 012.25 19.18V6.695c0-.71.401-1.36 1.036-1.677l4.875-2.437zM9 6a.75.75 0 01.75.75V15a.75.75 0 01-1.5 0V6.75A.75.75 0 019 6zm6.75 3a.75.75 0 00-1.5 0v8.25a.75.75 0 001.5 0V9z" clipRule="evenodd" />
                    </svg>
                    <p className='text-white text-sm font-bold font-popins'>yourTravel.</p>
                </div>

                <div className='block z-10 lg:hidden lg:z-0'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#fff"
                     className="w-6 h-6">
                <path fillRule="evenodd" d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm8.25 5.25a.75.75 0 01.75-.75h8.25a.75.75 0 010 1.5H12a.75.75 0 01-.75-.75z" clipRule="evenodd" />
                </svg>
                </div>

                <div className='hidden lg:block'>
                    
                </div>
            </div>
            
            <div className='flex flex-col mt-28 lg:mt-40 gap-6 items-start'>
                <p className='text-4xl lg:text-7xl md:text-5xl text-white drop-shadow-md font-semibold font-popins'>Explore the World<br/>with <span className='bg-clip-text text-transparent bg-gradient-to-bl from-slate-50 to-orange-600'>exciting</span> people.</p>
                <p className='text-xs md:text-sm lg:text-lg lg:font-light text-white max-w-[90%] drop-shadow-sm'>we help people to find their ideal company for their next trip</p>
                <button className='text-white font-semibold  px-3 py-2 rounded-full min-w-[40%] bg-[#ff9030]/[1]
                                    lg:min-w-[20%] lg:py-3 z-10
                '>Explore</button>
            </div>

            <div className='flex flex-col lg:flex-row mt-24 lg:mt-[148px] gap-12'>
                {[
                    ['01','Choose place, activity and time', 'Everyone can choose a root and activity according to his taste and possibilities'],
                    ['02', 'Find people who have the same travel plans', "You can find people with the same interests, who know the routes you've never traveled"],
                    ['03', 'Start chat and offer to go on a joint advenure', 'Discuss the details of your trip and have a great time! You might find a great friend for life']
                ].map(([num,title,des])=>(
                    <div className='flex flex-col gap-3'>
                    <p className='text-white font-popins text-2xl'>{num}</p>
                    <p className='text-white font-semibold'>{title}</p>
                    <p className='text-white text-sm mt-[-10px] font-light'>{des}</p>
                </div> 
                ))}
            </div>
            </div>

        </div>
    )
}


//                             ['Destinations', '#'],
//                             ['Members', '#'],
//                             ['About us', '#'],
//                             ['Testimonials', '#'],
//                             ['Gallery', '#'],
//                             ['Sign in', '#']