import { useScroll,motion, useTransform, AnimatePresence } from 'framer-motion';
import { Scale } from 'lucide-react';
import React, { useEffect, useRef, useState } from 'react'

export const HeroPage: React.FC = () => {

    const [isClick, setIsClick] = useState(false);
    const divRef = useRef<HTMLDivElement>(null);

    const handleClick: EventListenerOrEventListenerObject = (event) => {
        if (divRef.current && !divRef.current.contains(event.target as Node)) {
            setIsClick(false);
        }
    }

    useEffect(() => {
        document.addEventListener('click', handleClick);
        return () => {
            document.removeEventListener('click', handleClick);
        }
    }, [divRef])


    // ANIMATION --------------------------------------------

    const imgRef = useRef<HTMLImageElement>(null);
    const {scrollYProgress} = useScroll({
        target : imgRef,
        offset : ['end end', 'end start'],
    });
    const scale = useTransform(scrollYProgress,[0,0.3,1],[1,1.2,1.5]);

    return (
        <div className="mb-20 bg-gradient-to-t from-slate-800 to-slate-500 w-screen relative overflow-hidden h-full">
            <motion.img
                ref={imgRef}
                style={{scale}}
                className='w-full h-full object-bottom object-cover absolute mix-blend-overlay'
                src='https://images.unsplash.com/photo-1654429525137-249ef52f4dff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80' />
            <motion.div 
            className='px-10 py-10 lg:px-20 lg:py-10'>
                <motion.div  className='flex justify-between'>

                    <motion.div 
                    initial={{opacity:0, x:'-100px'}}
                    animate={{opacity:1, x: '0'}}
                    transition={{delay:0.2, ease:'easeInOut'}}
                    className='flex gap-3 items-center'
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#fb7d00" className="w-6 h-6 font-white" >
                            <path fillRule="evenodd" d="M8.161 2.58a1.875 1.875 0 011.678 0l4.993 2.498c.106.052.23.052.336 0l3.869-1.935A1.875 1.875 0 0121.75 4.82v12.485c0 .71-.401 1.36-1.037 1.677l-4.875 2.437a1.875 1.875 0 01-1.676 0l-4.994-2.497a.375.375 0 00-.336 0l-3.868 1.935A1.875 1.875 0 012.25 19.18V6.695c0-.71.401-1.36 1.036-1.677l4.875-2.437zM9 6a.75.75 0 01.75.75V15a.75.75 0 01-1.5 0V6.75A.75.75 0 019 6zm6.75 3a.75.75 0 00-1.5 0v8.25a.75.75 0 001.5 0V9z" clipRule="evenodd" />
                        </svg>
                        <p className='text-white text-sm font-bold font-popins'>yourTravel.</p>
                    </motion.div>

                    <div ref={divRef} className="block z-10 lg:hidden lg:z-0 relative" onClick={() => setIsClick(!isClick)} >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#fff"
                            className="w-6 h-6 hover:scale-125 cursor-pointer">
                            <path fillRule="evenodd" d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm8.25 5.25a.75.75 0 01.75-.75h8.25a.75.75 0 010 1.5H12a.75.75 0 01-.75-.75z" clipRule="evenodd" />
                        </svg>
                        <AnimatePresence>
                        {
                            isClick ? (<motion.div 
                            initial ={{opacity:0}}
                            animate={{opacity:1}}
                            exit={{opacity:0}}
                            transition={{ when: "beforeChildren",
                                        staggerChildren: 0.6,}}
                            className='absolute h-96 w-40 bg-white py-5 rounded-sm flex flex-col gap-2 text-center right-0 top-8'>
                                {[
                                    ['Destinations', '#'],
                                    ['Members', '#'],
                                    ['About us', '#'],
                                    ['Testimonials', '#'],
                                    ['Gallery', '#'],
                                    ['Sign in', '#']
                                ].map(([title, link]) => (
                                    <motion.div 
                                    initial={{opacity:0}}
                                    animate={{opacity:1}}
                                    transition={{delay:0.1, staggerChildren:0.5}}
                                    className=' hover:bg-slate-100 cursor-pointer hover:text-orange-500 py-[10px] text-sm font-popins font-light'>{title}</motion.div>
                                ))}
                                <div className='flex gap-1 items-center justify-center mt-12'>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#ffb66c" className="w-4 h-4 font-white" >
                                        <path fillRule="evenodd" d="M8.161 2.58a1.875 1.875 0 011.678 0l4.993 2.498c.106.052.23.052.336 0l3.869-1.935A1.875 1.875 0 0121.75 4.82v12.485c0 .71-.401 1.36-1.037 1.677l-4.875 2.437a1.875 1.875 0 01-1.676 0l-4.994-2.497a.375.375 0 00-.336 0l-3.868 1.935A1.875 1.875 0 012.25 19.18V6.695c0-.71.401-1.36 1.036-1.677l4.875-2.437zM9 6a.75.75 0 01.75.75V15a.75.75 0 01-1.5 0V6.75A.75.75 0 019 6zm6.75 3a.75.75 0 00-1.5 0v8.25a.75.75 0 001.5 0V9z" clipRule="evenodd" />
                                    </svg>
                                    <p className='text-gray-500 text-xs font-semibold font-popins'>yourTravel.</p>
                                </div>
                            </motion.div>)
                           
                                :

                                (<div className='hidden'></div>)
                        }
                         </AnimatePresence>
                    </div>
                    <div className='hidden lg:flex z-10 flex-row gap-8 text-white font-popins'>
                        {[
                            ['Destinations', '#'],
                            ['Members', '#'],
                            ['About us', '#'],
                            ['Testimonials', '#'],
                            ['Gallery', '#'],
                            ['Sign in', '#']
                        ].map(([title, link]) => (
                            <a
                                href={link}
                                className="hover:text-orange-200 hover:scale-105"
                            >
                                <p>{title}</p>
                            </a>
                        ))}
                    </div>
                </motion.div>

                <div className='flex flex-col mt-28 lg:mt-40 gap-6 items-start'>
                    <motion.p
                    initial={{opacity:0}}
                    animate={{opacity:1}}
                    transition={{delay:0.2}}
                    className='text-4xl lg:text-7xl md:text-5xl text-white drop-shadow-md font-semibold font-popins'>Explore the World<br />with <motion.span initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.3}} className='bg-clip-text text-transparent bg-gradient-to-bl from-slate-50 to-orange-600'>exciting</motion.span> people.</motion.p>
                    <motion.p initial={{opacity:0 ,y:'-30px'}} animate={{opacity:1, y:'0'}} transition={{delay:0.2, ease:'linear'}} className='text-xs md:text-sm lg:text-lg lg:font-light text-white max-w-[90%] drop-shadow-sm'>we help people to find their ideal company for their next trip</motion.p>
                    <motion.button
                    initial={{opacity:0}}
                    animate={{opacity:1}}
                    transition={{delay:0.7, ease:'easeIn'}}
                    className='text-white font-semibold  px-3 py-2 rounded-full min-w-[40%] bg-[#ff9030]/[1]
                                    lg:min-w-[20%] lg:py-3 z-10
                '>Explore</motion.button>
                </div>

                <div className='flex flex-col lg:flex-row mt-24 lg:mt-[148px] gap-12'>
                    {[
                        ['01', 'Choose place, activity and time', 'Everyone can choose a root and activity according to his taste and possibilities'],
                        ['02', 'Find people who have the same travel plans', "You can find people with the same interests, who know the routes you've never traveled"],
                        ['03', 'Start chat and offer to go on a joint advenure', 'Discuss the details of your trip and have a great time! You might find a great friend for life']
                    ].map(([num, title, des]) => (
                        <motion.div 
                        initial={{opacity:0}}
                        animate={{opacity:1}}
                        transition={{delay:0.9, ease:'easeIn' , when:'beforeChildren', staggerChildren:2}}
                        className='flex flex-col gap-3'>
                            <p className='text-white font-popins text-2xl'>{num}</p>
                            <p className='text-white font-semibold'>{title}</p>
                            <p className='text-white text-sm mt-[-10px] font-light'>{des}</p>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </div>
    )
}