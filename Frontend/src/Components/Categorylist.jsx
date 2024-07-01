import React, { useEffect, useState } from 'react'
import SummaryApi from '../common'
import { Link } from 'react-router-dom'

const Categorylist = () => {
  const [category, setcategory] = useState([])
  const [loading, setloading] = useState(false)
  const categoryLoading=new Array(12).fill(null)
  const fetchcategorygroup =async()=>{
    setloading(true)
    const response =await fetch(SummaryApi.categoryProduct.url)
    const jsonresponse= await response.json()
    console.log("json",jsonresponse)
    setloading(false)
    setcategory(jsonresponse.data)
  }
  useEffect(()=>{
    fetchcategorygroup()
  },[])
  return (
    <div className='container  mx-auto py-4 px-6 mt-1 overflow-scroll scrollbar-none'>
     <div className='flex items-center justify-between  sm:gap-10'>
      {loading ?(
      categoryLoading.map((el,index)=>{
        return(
          <div className='h-19 w-16 md:h-20 md:w-20 rounded-full overflow-hidden bg-slate-200 border-2 border-black animate-spin' key={"categoryLoading"+index}>
      </div>
        )
      }))
     :(
        category.map((product,index)=>{
          return(
        <Link to={"/product-category/"+product?.category} className='cursor-pointer' key={product?.category}>
        <div className='w-16 h-16 md:w-20 md:h-20 border-black border-2 flex rounded-full  items-center bg-contain bg-center overflow-hidden mix-blend-multiply p-2'>
        <img src={product?.productImage[0]} alt={product?.category} className='h-full block mx-auto p-1   object-scale-down hover:scale-150 transition-all'/>
        </div>
        <p className='text-center text-sm md:text-base capitalize hover:scale-105 font-semibold'>{product.category}</p>
        </Link>
  )
})
        
      )}
     

     </div>



    </div>
  )
}

export default Categorylist