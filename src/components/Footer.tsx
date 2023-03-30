import React, { FC } from 'react'

interface FooterProps{
   footerProp : hyperlinks[]
}

interface hyperlinks {
   title : string,
   hyperlink : links[]
}

interface links{
  title : string,
  link : string
}

const Footer:FC<FooterProps> = ({footerProp})=> {
  console.log(footerProp);
  return (
    <div className='mt-28 bg-orange-400 text-white'>
      <div className='flex flex-col gap-3 p-5 lg:py-14'>
        <div className='flex flex-col lg:flex-row lg:justify-around'>
        <div className='flex justify-around items-center border-b-[1px] min-h-[180px] px-2'>
          <div className='flex gap-3 items-center pr-6'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#black" className="w-6 h-6 font-white" >
              <path fillRule="evenodd" d="M8.161 2.58a1.875 1.875 0 011.678 0l4.993 2.498c.106.052.23.052.336 0l3.869-1.935A1.875 1.875 0 0121.75 4.82v12.485c0 .71-.401 1.36-1.037 1.677l-4.875 2.437a1.875 1.875 0 01-1.676 0l-4.994-2.497a.375.375 0 00-.336 0l-3.868 1.935A1.875 1.875 0 012.25 19.18V6.695c0-.71.401-1.36 1.036-1.677l4.875-2.437zM9 6a.75.75 0 01.75.75V15a.75.75 0 01-1.5 0V6.75A.75.75 0 019 6zm6.75 3a.75.75 0 00-1.5 0v8.25a.75.75 0 001.5 0V9z" clipRule="evenodd" />
            </svg>
            <p className='text-white text-sm font-bold font-popins lg:text-xl'>yourTravel.</p>
          </div>
          <p className='text-xs max-w-[250px] border-l-[1px] pl-2 font-popins font-light lg:text-base'>
          At YourTravel, we value customer satisfaction above all else. We strive to provide exceptional customer service and support throughout the entire booking process, from the initial inquiry to the end of your trip.
          </p>
        </div>
        <div className='flex flex-col gap-4 border-b-[1px] px-6 py-7 pb-9'>
          <p className='font-popins text-sm text-black font-semibold lg:text-lg'>Newsletter.</p>
          <p className='max-w-[250px] font-popins text-2xl font-semibold mt-[-15px] md:max-w-[300px] lg:text-4xl lg:max-w-[400px]'>Stay updated with every travel related news.</p>
          <div className='flex items-center rounded-3xl overflow-hidden pl-2 drop-shadow-xl bg-white max-w-[269px]'>
            <input placeholder='email' className='min-h-[45px] pl-2 min-w-[80px] text-black outline-none'/>
            <button className='bg-orange-600 rounded-full py-4 px-4 min-w-[50px]'>
              <svg xmlns="http://www.w3.org/2000/svg" width="1rem" height="1rem" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14m-7-7l7 7l-7 7"></path></svg>
            </button>
          </div>
        </div>
        </div>
        <div className='mt-7 px-2'>
          <div className='flex justify-around lg:justify-center lg:gap-28'>
          {
            footerProp.map((item)=>(
              <div className='flex flex-col gap-2'>
              <div className='font-popins font-semibold'>{item.title}</div>
              <div>
              {
                item.hyperlink.map((e)=>(
                  <p className='mt-[2px] hover:cursor-pointer hover:underline'>{e.title}</p>
                ))
              }
              </div>
              </div>
            ))
          }
          </div>
          
        </div>
      </div>
      <p className='text-center mt-10 text-sm pb-3 font-semibold'>©yourTravel 2023.<span className='ml-12 text-xs font-light'>Support | Privacy Policies | Terms of use</span></p>
    </div>
  )
}

export default Footer;
