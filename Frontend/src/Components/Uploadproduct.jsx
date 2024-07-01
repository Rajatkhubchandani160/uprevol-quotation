import React, { useState } from 'react';
import { IoClose } from "react-icons/io5";
import Productcategory from "../helper/Productcategory";
import { AiOutlineCloudUpload } from "react-icons/ai";
import Uploadimage from '../helper/Uploadimage';
import Displayimage from './Displayimage';
import { MdDelete } from "react-icons/md";
import SummaryApi from '../common';
import { toast } from 'react-toastify';

const Uploadproduct = ({ onclose , fetchdata}) => {
  const [data, setdata] = useState({
    productName: "",
    brandName: "",
    category: "",
    productImage: [],
    description: "",
    price: "",
    selling: ""
  });
  const [Focusimage, setFocusimage] = useState("");
  const [openfullscreenimage, setopenfullscreenimage] = useState(false);

  const Handleproduct = (e) => {
    const { name, value } = e.target;
    setdata((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleUploadProduct = async (e) => {
    const file = e.target.files[0];
    try {
      const uploadcloudnaryimage = await Uploadimage(file);
      setdata((prev) => ({
        ...prev,
        productImage: [...prev.productImage, uploadcloudnaryimage.url]
      }));
    } catch (error) {
      console.error('Image upload failed', error);
      toast.error('Image upload failed');
    }
  };

  const Handledeleteproductimage = (index) => {
    const productImageCopy = [...data.productImage];
    productImageCopy.splice(index, 1);
    setdata((prev) => ({
      ...prev,
      productImage: productImageCopy
    }));
  };

  const HandleSubmitButton = async (e) => {
    e.preventDefault();
    console.log('Submitting data:', data); // Log the data before sending
    try {
      const response = await fetch(SummaryApi.product.url, {
        method: SummaryApi.product.method,
        credentials: 'include',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      });
      const responseData = await response.json();
      console.log('Server response:', responseData); // Log the response

      if (responseData.success) {
        toast.success(responseData.message);
        onclose();
        fetchdata();
      } else {
        toast.error(responseData.message);
      }
    } catch (error) {
      console.error('Submission failed', error);
      toast.error('Submission failed');
    }
  };

  return (
    <div className='fixed bottom-0 top-0 left-0 right-0  flex justify-center items-center'>
    {/* <div className='z-10 opacity-1 w-full h-full flex items-start justify-center'> */}
      <div className='bg-white overflow-y-scroll mt-20 h-[70%] ml-[22%]  shadow-lg w-[45%] text-lg capitalize'>
        <div className='text-2xl font-semibold p-3 flex bg-white border-b-2 border-black h-10 w-full items-center justify-between'>
          <div>Upload Product Details</div>
          <button onClick={onclose}><IoClose /></button>
        </div>
        <form className='grid p-3 w-full gap-1 capitalize' onSubmit={HandleSubmitButton}>
          <label htmlFor="productName">Product Name :</label>
          <input required className='bg-slate-200 rounded px-2'
            type="text"
            name='productName'
            id='productName'
            placeholder='Enter Product Name'
            value={data.productName}
            onChange={Handleproduct} />

          <label htmlFor="brandName">Brand Name :</label>
          <input required className='bg-slate-200 rounded px-2'
            type="text"
            name='brandName'
            id='brandName'
            placeholder='Enter Brand Name'
            value={data.brandName}
            onChange={Handleproduct} />

          <label htmlFor="category">Category :</label>
          <select className='bg-slate-200 rounded px-2 h-8' onChange={Handleproduct} value={data.category} name="category">
            <option value={""}>Select Category</option>
            {Productcategory.map((el, id) => (
              <option value={el.value} key={el.value + id}>{el.label}</option>
            ))}
          </select>

          <label htmlFor="productImage">Product Image :</label>
          <label htmlFor="uploadImageproduct">
            <div className='bg-slate-200 rounded flex flex-col justify-center items-center px-2 py-4 h-48'>
              <AiOutlineCloudUpload size={40} />
              <p className='text-sm'>Upload product Image</p>
              <input type="file" className='hidden' id="uploadImageproduct" onChange={handleUploadProduct} />
            </div>
          </label>

          <div>
            {data.productImage.length > 0 ? (
              <div className='flex items-center flex-wrap gap-4 mt-1'>
                {data.productImage.map((el, id) => (
                  <div className='relative' key={id}>
                    <img src={el} alt={el} height={95} width={90}
                      onClick={() => {
                        setFocusimage(el);
                        setopenfullscreenimage(true);
                      }}
                      className='bg-slate-100 rounded' />
                    <div className='absolute right-0 bottom-0 hover:text-red-600 rounded-full' onClick={() => Handledeleteproductimage(id)}>
                      <MdDelete />
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className='text-red-600 text-xs '>*Please upload product</p>
            )}

            <label htmlFor="price">Price :</label>
            <input required className='bg-slate-200 rounded px-2 w-full mt-1'
              type="number"
              name='price'
              id='price'
              placeholder='Enter Product Price'
              value={data.price}
              onChange={Handleproduct} />

            <label className='mt-2' htmlFor="selling">Selling Price :</label>
            <input required className='bg-slate-200 rounded px-2 w-full mt-1'
              type="number"
              name='selling'
              id='selling'
              placeholder='Enter Product Selling Price'
              value={data.selling}
              onChange={Handleproduct} />

            <label htmlFor="description">
              Product Description :</label>
            <textarea name="description"
              onChange={Handleproduct}
              id="description"
              placeholder='Enter Product Description' rows={3} className='mt-1  hover:bg-slate-300 bg-slate-200 p-1 px-2 rounded-lg w-full resize-none'></textarea>

            <button className='mt-5 hover:bg-slate-300 bg-slate-200 px-2 py-1 rounded-xl ml-56 text-center '>Upload Product</button>
          </div>
        </form>
      </div>
      {openfullscreenimage &&
        <Displayimage onclose={() => { setopenfullscreenimage(false); }} imgurl={Focusimage} />
      }
    </div>
  );
}

export default Uploadproduct;
