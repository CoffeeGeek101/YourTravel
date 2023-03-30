import { FC, useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import clsx from 'clsx'
interface CarousalProps {
    imgArr: ImgProps[]
}

interface ImgProps {
    place: string,
    country: string,
    link: string,
    frequency : string
}


export const Carousal: FC<CarousalProps> = ({ imgArr }) => {

    const [scrollWidth, setScrollWidth] = useState(0);
    const [currentSlide, setCurrentSlide] = useState(0);
    const caroRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (caroRef.current) {
            setScrollWidth(caroRef.current.scrollWidth - caroRef.current.offsetWidth);
        }
    }, [caroRef.current?.offsetWidth, currentSlide])

    const handlePrevious = () => {
        console.log("clicked")
        setCurrentSlide(currentSlide - 1);
      }
    
      const handleNext = () => {
        setCurrentSlide(currentSlide + 1);
      }

    //   ANIMATION -----------------------------------------------------------
    const carouselRef = useRef<HTMLDivElement>(null);
    const {scrollYProgress} = useScroll({
        target : carouselRef,
        offset : ['start start', 'start end']
    });

    const opacity = useTransform(scrollYProgress,[0,0.2,1],[1,1,0]);
    const x = useTransform(scrollYProgress,[0,0.2,0.5,1],[0,0,-200,-500])

    return (
        <motion.div ref={carouselRef} style={{opacity, x}} className='px-9 py-7 lg:px-20 lg:mt-28'>
            <motion.p className='text-sm font-monsrat font-medium'>WHERE TO GO</motion.p>
            <div className='flex gap-8 items-center lg:justify-between md:justify-between'>
                <motion.p className='text-3xl font-popins font-semibold mt-2 lg:text-5xl'>Popular Destinations.</motion.p>
                <div className='hidden md:flex lg:flex gap-1 lg:mr-7 md:mr-6'>
                    <button onClick={handlePrevious} disabled={currentSlide === 0} className={clsx('bg-orange-100 max-h-[40px] px-[2px] rounded-full border border-orange-200', {'opacity-30 bg-orange-300 scale-90' : currentSlide == 0})}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="35px" height="40px" viewBox="0 0 24 24"><path fill="none" stroke="orange" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m15 18l-6-6l6-6"></path></svg>
                    </button>
                    <button onClick={handleNext} disabled={currentSlide === imgArr.length - 2} className={clsx('bg-orange-100 max-h-[40px] px-[2px] border border-orange-200 rounded-full',{'opacity-30 bg-orange-300 scale-90' : currentSlide == imgArr.length -2})}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="35px" height="40px" viewBox="0 0 24 24"><path fill="none" stroke="orange" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m9 18l6-6l-6-6"></path></svg>
                    </button>
                </div>
            </div>
            <motion.div ref={carouselRef} style={{opacity}} className='mt-5 overflow-hidden cursor-grab'>
                <motion.div
                    ref={caroRef}
                    drag='x'
                    dragConstraints={{ right: 0 , left: -scrollWidth}}
                    // animate={{ x: -currentSlide * 218 }} 
                    transition={{ease:'easeIn', duration:'0.8'}}
                    className='flex lg:hidden md:hidden gap-3 p-3'>
                    {
                        imgArr.map((item) => (
                            <motion.div className='flex flex-col justify-end rounded-md text-center min-w-[200px] h-[300px] lg:min-w-[350px] lg:h-[500px] relative bg-gradient-to-b from-slate-300 to-slate-800 hover:scale-105 transition-all'>
                                <img className='pointer-events-none object-cover  rounded-md w-full h-full absolute mix-blend-overlay' src={item.link} />
                                <div className='flex flex-col pb-3'>
                                <p className='text-white text-xs font-monsrat'>{item.country}</p>
                                <p className='text-orange-300 text-2xl font-popins z-10'>{item.place}</p>
                                <p className='text-[10px] text-white font-thin mt-2'>{item.frequency} people have visited last month</p>
                                </div>
                            </motion.div>
                        ))
                    }
                </motion.div>
                <motion.div
                    // ref={caroRef}
                    // drag='x'
                    // dragConstraints={{ right: 0 , left: -scrollWidth}}
                    animate={{ x: -currentSlide * 300 }} 
                    transition={{ease:'easeInOut', duration:'0.5'}}
                    className='hidden lg:flex md:hidden gap-3 p-3'>
                    {
                        imgArr.map((item) => (
                            <motion.div className='flex flex-col justify-end rounded-md text-center min-w-[350px] h-[500px] relative bg-gradient-to-b from-slate-300 to-slate-800 hover:scale-105 transition-all'>
                                <img className='pointer-events-none object-cover  rounded-md w-full h-full absolute mix-blend-overlay' src={item.link} />
                                <div className='flex flex-col pb-3'>
                                <p className='text-white text-sm font-monsrat'>{item.country}</p>
                                <p className='text-orange-300 text-4xl font-popins z-10'>{item.place}</p>
                                <p className='text-[10px] text-white font-thin mt-2'>{item.frequency} people have visited last month</p>
                                </div>
                            </motion.div>
                        ))
                    }
                </motion.div>
                <motion.div
                    // ref={caroRef}
                    // drag='x'
                    // dragConstraints={{ right: 0 , left: -scrollWidth}}
                    animate={{ x: -currentSlide * 300 }} 
                    transition={{ease:'easeInOut', duration:'0.8'}}
                    className='hidden lg:hidden md:flex gap-3 p-3'>
                    {
                        imgArr.map((item) => (
                            <motion.div className='flex flex-col justify-end rounded-md text-center min-w-[250px] h-[350px] relative bg-gradient-to-b from-slate-300 to-slate-800 hover:scale-105 transition-all'>
                                <img className='pointer-events-none object-cover  rounded-md w-full h-full absolute mix-blend-overlay' src={item.link} />
                                <div className='flex flex-col pb-3'>
                                <p className='text-white text-xs font-monsrat'>{item.country}</p>
                                <p className='text-orange-300 text-2xl font-popins z-10'>{item.place}</p>
                                <p className='text-[10px] text-white font-thin mt-2'>{item.frequency} people have visited last month</p>
                                </div>
                            </motion.div>
                        ))
                    }
                </motion.div>
            </motion.div>
        </motion.div>
    )
}
