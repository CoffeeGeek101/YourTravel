import { useScroll, useTransform, motion } from 'framer-motion';
import React, { FC, useRef } from 'react'

export const Aboutus : FC = () => {

    const aboutRef = useRef<HTMLDivElement | HTMLImageElement>(null);
    const {scrollYProgress} = useScroll({
        target : aboutRef,
        offset :['start end', 'end start']
    });

const opacity = useTransform(scrollYProgress,[0,0.5,1],[0, 2,1])
const y = useTransform(scrollYProgress,[0,1],[-150,0]);
const paraopacity = useTransform(scrollYProgress,[0.2,0.5],[0,1]);
const title_x = useTransform(scrollYProgress,[0,0.2,0.3,0.5,1],[-250,-50,0,0,0]);
const img_x = useTransform(scrollYProgress,[0,0.5,1],[100,50,0]);

  return (
    <div className='mt-28'>
        <motion.div ref={aboutRef} style={{opacity,y}} className='bg-slate-100 py-20 px-10 lg:px-28 lg:py-25 flex flex-col gap-8 items-center md:flex-row lg:flex-row lg:gap-x-16'>
            <div className='flex flex-col gap-5 flex-6'>
            <div className='flex flex-col items-start gap-2'>
                <motion.p ref={aboutRef} style={{opacity}}  className='text-[11px] w-[250px] lg:w-full font-popins font-light'><span className='font-bold'>yourTavel</span> helps you find your best company for your next destination.</motion.p>
                <motion.p ref={aboutRef} style={{opacity, x:title_x}} className='text-4xl lg:text-6xl font-popins'>About us.</motion.p>
                <motion.p 
                ref={aboutRef} style={{opacity:paraopacity}}
                className='text-sm lg:text-base font-popins font-extralight'>
                    Welcome to YourTravel, a company dedicated to helping travelers like you find the perfect partner for your next adventure. We understand that planning a trip can be overwhelming and time-consuming, which is why we're here to make the process easy and enjoyable.<br/>
                    At YourTravel, we value customer satisfaction above all else. We strive to provide exceptional customer service and support throughout the entire booking process, from the initial inquiry to the end of your trip. Our team is always available to answer any questions or concerns you may have, so you can travel with peace of mind.
                    </motion.p>
            </div>
            <div className='flex justify-between'>
                <div className='flex flex-col text-center gap-1'>
                    <p className='text-2xl lg:text-5xl font-popins font-semibold text-orange-500'>10K+</p>
                    <p className='text-sm lg:text-base lg:w-20 font-semibold'>Happy wanderlusts</p>
                </div>
                <div className='flex flex-col text-center'>
                    <p className='text-2xl lg:text-5xl font-popins font-semibold text-orange-500'>45</p>
                    <p className='text-sm lg:text-base lg:w-20 font-semibold'>types of activies</p>
                </div>
                <div className='flex flex-col text-center'>
                    <p className='text-2xl lg:text-5xl font-popins font-semibold text-orange-500'>29</p>
                    <p className='text-sm lg:text-base lg:w-12 font-semibold'>countries available</p>
                </div>
            </div>
            </div>
            <img className='w-[400px] h-[250px] object-cover rounded-lg drop-shadow-lg flex-2 lg:w-[600px] lg:h-[350px]' src='https://images.unsplash.com/photo-1505202197309-26d03a44e08a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80'/>
        </motion.div>
    </div>
  )
}
