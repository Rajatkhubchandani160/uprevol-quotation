import React from 'react'
import { Link } from 'react-router-dom'

const Coursel = () => {
  return (
    <> 
    <div className="carousel   w-full h-[80vh]">
    <div id="slide1" className="carousel-item relative w-full">
    <img src="src\assets\banner\banner\banner-img-1.webp" className="w-full    px-4" />
    <div className='absolute flex justify-between transform -translate-y-[60%] left-24 right-5 top-1/2'>
    <div>
      <h2 className='font-bold text-4xl my-4 capitalize'>Redmi 13 5G</h2>
      <p className='font-bold text-xl capitalize'>the 5G star</p>
      <p className='capitalize font-bold text-md'>launching on  <strong className='text-blue-500'>09.07.24</strong> | 12 Noon</p>
      <button className='bg-black px-3 py-1 rounded-full mt-16 text-white '>Learn More</button>
    </div>
    </div>
      <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        <a href="#slide6" className="btn btn-circle">❮</a> 
        <a href="#slide2" className="btn btn-circle">❯</a>
      </div>
    </div> 
    <div id="slide2" className="flex  carousel-item relative w-full ">
    <img src="src\assets\banner\banner\banner-img-6.webp" className="w-full  bg-slate  px-3 "/>
    <div className='absolute flex justify-between transform -translate-y-[60%] left-24 right-5 top-1/2'>
    <div className='text-white'>
      <h2 className='font-bold text-4xl my-4 capitalize'>Redmi Note 13 Pro 5G </h2>
      <p className='font-bold text-xl capitalize'>now in <strong className='text-red-700'>scarlet</strong> red</p>
      <p className='capitalize font-bold text-md'>1.5K 120Hz Amoled</p>
      <button className='bg-white px-3 py-1 rounded-full mt-16 text-black '>Learn More</button>
    </div>
    </div>
      <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        <a href="#slide1" className="btn btn-circle">❮</a> 
        <a href="#slide3" className="btn btn-circle">❯</a>
      </div>
    </div> 
    <div id="slide3" className="flex  carousel-item relative w-full ">
    <img src="src\assets\banner\banner\banner-img-2.webp" className="w-full  bg-slate  px-3 "/>
      
      <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        <a href="#slide2" className="btn btn-circle">❮</a> 
        <a href="#slide4" className="btn btn-circle">❯</a>
      </div>
    </div> 
    <div id="slide4" className="flex  carousel-item relative w-full ">
    <img src="src\assets\banner\banner\banner-img-4.webp" className="w-full  bg-slate  px-3 "/>
    <div className='absolute flex justify-between transform -translate-y-[60%] left-24 right-5 top-1/2'>
    <div className='text-black'>
      <h2 className='font-bold text-4xl my-4 capitalize'>Xiaomi Air Fryer 6L </h2>
      <p className='font-bold text-xl '>Sale is Live</p>
      <p className='capitalize font-bold text-md'>Special Launch Price <strong className='text-amber-800'>$31.05*</strong></p>
      <button className='bg-white px-3 py-1 rounded-full mt-16 text-black '>Learn More</button>
    </div>
    </div>
      <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        <a href="#slide3" className="btn btn-circle">❮</a> 
        <a href="#slide5" className="btn btn-circle">❯</a>
      </div>
    </div> 
    <div id="slide5" className="flex  carousel-item relative w-full ">
    <img src="src\assets\banner\banner\banner-img-5.webp" className="w-full  bg-slate  px-3 "/>
    <div className='absolute flex justify-between transform -translate-y-[60%] left-24 right-5 top-1/2'>
    <div className='text-white'>
      <h2 className='font-bold text-4xl my-4 capitalize'>Redmi Smart Fire TV 32 </h2>
      <p className='font-bold text-xl '>2024 Edition</p>
      <p className='capitalize font-bold text-md'>Special Launch Price <strong className='text-red-600'>$138.00*</strong> </p>
      <button className='bg-white px-3 py-1 rounded-full mt-16 text-black '>Learn More</button>
    </div>
    </div>
      <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        <a href="#slide4" className="btn btn-circle">❮</a> 
        <a href="#slide6" className="btn btn-circle">❯</a>
      </div>
    </div> 
    <div id="slide6" className="flex  carousel-item relative w-full ">
    <img src="src\assets\banner\banner\banner-img-3.webp" className="w-full  bg-slate  px-3 "/>
    <div className='absolute flex justify-between transform -translate-y-[60%] left-24 right-5 top-1/2'>
    <div className='text-white'>
      <h2 className='font-bold text-4xl my-4 capitalize'>Xiaomi Smart TV A 32 2024 </h2>
      <p className='font-bold text-xl '>Edition</p>
      <p className='capitalize font-bold text-md'>Special Launch Price $146.43*</p>
      <button className='bg-white px-3 py-1 rounded-full mt-16 text-black '>Learn More</button>
    </div>
    </div>
      <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        <a href="#slide5" className="btn btn-circle">❮</a> 
        <a href="#slide7" className="btn btn-circle">❯</a>
      </div>
    </div> 
    <div id="slide7" className="flex  carousel-item relative w-full ">
    <img src="src\assets\banner\banner\banner-img-7.webp" className="w-full  bg-slate  px-3 "/>
    <div className='absolute flex justify-between transform -translate-y-[40%] left-48 right-5 top-1/2'>
    <div className='text-black'>
      <h2 className='font-bold text-4xl my-1 capitalize'>Special Launch Price $<strong className='text-green-300'>487.80</strong>*</h2>
      
      <p className='capitalize font-bold text-xl text-red-400 animate-pulse'>Sale is Live</p>
      <button className='bg-black px-3 py-1 rounded-full mt-16 text-white '>Learn More</button>
    </div>
    </div>
      <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        <a href="#slide6" className="btn btn-circle">❮</a> 
        <a href="#slide1" className="btn btn-circle">❯</a>
      </div>
    </div> 
  </div>
    </>
  )
}

export default Coursel