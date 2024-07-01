import React from 'react'
import { Link } from 'react-router-dom'

const ProductSection = () => {
  return (
    <>
    <div className='h-max w-full bg-slate-100 mt-20 text-black'>
    <Link to={'/product'}>  <div className='font-bold text-3xl m-auto text-center hover:underline'> Featured Products</div>
    </Link>
      <div className='bg-slate-200 flex  shadow-sm h-fit w-full mt-7'>
      <div className="card focus-within:scale-125 w-96 bg-base-100 shadow-xl m-4">
  <figure className="px-10 pt-10">
    <img src="src\assets\products\TV\SAMSUNG Q Series 163 cm (65 inch) QLED Ultra HD (4K) Smart Tizen TV (65Q7FN) 3.webp" alt="Shoes" className="rounded-xl h-44" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Television</h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, ipsum magnam! Explicabo, dolorem dolore eaque est iure quam, quas. 
    </p>
    <div className="card-actions">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>

<div className="card w-96 bg-base-100 shadow-xl m-4">
  <figure className="px-10 pt-10">
    <img src="src\assets\products\mobile\SAMSUNG Galaxy Z Flip3 5G (Cream, 128 GB) (8 GB RAM) 2.webp" alt="Mobile" className="rounded-xl h-44 w-44" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Mobile</h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, ipsum magnam! Explicabo, dolorem dolore eaque est iure quam, quas.</p>
    <div className="card-actions">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>

<div className="card w-96 bg-base-100 shadow-xl m-4">
  <figure className="px-10 pt-10">
    <img src="src\assets\products\camera\Canon EOS 1500D 24.1 Digital SLR Camera (Black) with EF S18-55 is II Lens 4.jpg" alt="Shoes" className="rounded-xl h-44 w-h5" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Camera</h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, ipsum magnam! Explicabo, dolorem dolore eaque est iure quam, quas.</p>
    <div className="card-actions">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>

<div className="card w-96 bg-base-100 shadow-xl m-4">
  <figure className="px-10 pt-10">
    <img src="src\assets\products\airpodes\boAt Airdopes 121 v2 1.webp" alt="Earbuds" className="rounded-xl h-44 w-h5"/>
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Earbuds</h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, ipsum magnam! Explicabo, dolorem dolore eaque est iure quam, quas.</p>
    <div className="card-actions">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>

      </div>
    </div>
    </>
  )
}

export default ProductSection