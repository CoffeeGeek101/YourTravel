import { FC, useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
interface CarousalProps {
    imgArr: ImgProps[]
}

interface ImgProps {
    link: string,
    alt?: string
}


export const Carousal: FC<CarousalProps> = ({ imgArr }) => {

    const [scrollWidth, setScrollWidth] = useState(0);
    const [currentSlide, setCurrentSlide] = useState(0);
    const caroRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (caroRef.current) {
            setScrollWidth(caroRef.current.scrollWidth - caroRef.current.offsetWidth);
        }
    }, [caroRef.current?.offsetWidth])

    const handlePrevious = () => {
        setCurrentSlide(currentSlide - 1);
      }
    
      const handleNext = () => {
        setCurrentSlide(currentSlide + 1);
      }

    return (
        <div className='mt-16 px-9'>
            <p className='text-sm font-monsrat font-medium'>WHERE TO GO</p>
            <div>
                <p className='text-3xl font-popins font-semibold mt-2'>Popular Destinations.</p>
                <div>
                    <p></p>
                    <p></p>
                </div>
            </div>
            <motion.div className='mt-5 overflow-hidden cursor-grab'>
                <motion.div
                    ref={caroRef}
                    drag='x'
                    dragConstraints={{ right: 0 , left: -scrollWidth}}
                    style={{ x: -currentSlide * 200 }} 
                    className='flex gap-3 p-3'>
                    {
                        imgArr.map((item) => (
                            <motion.div className='min-w-[200px]'>
                                <img className='pointer-events-none' src={item.link} />
                            </motion.div>
                        ))
                    }
                </motion.div>
            </motion.div>
            <div className='mt-5'>
        <button onClick={handlePrevious} disabled={currentSlide === 0}>Previous</button>
        <button onClick={handleNext} disabled={currentSlide === imgArr.length - 1}>Next</button>
      </div>
        </div>
    )
}
