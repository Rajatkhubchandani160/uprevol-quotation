import React from 'react';
import { BsDatabase } from "react-icons/bs";
import { IoCodeSlashOutline } from "react-icons/io5";
import { LuCheckCircle } from "react-icons/lu";
import { FaProjectDiagram } from "react-icons/fa";
import { TbHomeUp } from "react-icons/tb";

const About = () => {
  return (
    <div className='w-full h-full overflow-hidden'>
      <div className="relative w-screen h-screen">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="https://cdn.alsgp0.fds.api.mi-img.com/discover-videos/HyperOS%E4%B8%B2%E7%83%A7_%E5%9B%BD%E9%99%85%E7%89%88_2k.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className='w-full mt-16'>
        
        <div className='flex mt-10'>
          <div className='w-[50%] h-[600px]'>
            <img
              src="https://imgs.search.brave.com/zcKnl2mthPv6Lelk3M3CiEJSgrMvyBKW7qqa_-NBulA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuYWRzdHRjLmNv/bS9tZWRpYS9pbWFn/ZXMvNjFmMy9jMTAy/LzNlNGIvMzE4NC9i/NjAwLzAwMTYvbWVk/aXVtX2pwZy8wM19Y/aWFvbWlfU2hlbnpo/ZW5fSW50ZXJuYXRp/b25hbF9IZWFkcXVh/cnRlcnNfUGhvdG9f/Y291cnRlc3lfb2Zf/RW5uZWFkX0FyY2hp/dGVjdHMuanBnPzE2/NDMzNjQ1NzA"
              alt="MI Headquater"
              className='w-[50vw] p-4 rounded-full h-[600px]'
            />
          </div>
          <div className='flex flex-col justify-evenly text-xl w-[50%] h-[530px] px-5 my-10'>
          <div className='text-center text-5xl font-bold text-slate-800  hover:border-b-2 hover:border-black hover:transition-all max-w-fit '>
          Who is Xiaomi
        </div>
            Xiaomi Inc., founded in April 2010 and headquartered in Beijing, China, is a global leader in consumer electronics and smart hardware. Known for its innovative products and competitive pricing, Xiaomi's mission is to make high-quality technology accessible to everyone. The company's diverse ecosystem includes smartphones, smart home devices, wearables, lifestyle products, and IoT hardware, all designed to enhance everyday life. With over 33,000 employees and a presence in more than 100 countries and regions worldwide, Xiaomi continues to push the boundaries of technology and innovation, making it a significant player in the tech industry. The company's commitment to user feedback and community engagement ensures that its products continuously evolve to meet the needs of its customers.
          </div>
        </div>
      </div>
      <div className='w-full overflow-hidden'>
      <div className="relative w-screen overflow-hidden">
        <div className="absolute top-1/2 left-1/2 w-full h-full object-cover transform -translate-x-1/2 -translate-y-1/2 z-[0.4px]">
          <img src="https://www-file.huawei.com/-/media/corp2020/abouthuawei/what_we_offer.jpg" alt="Background" className="w-full h-full object-cover" />
        </div>
        <div className="relative z-10 flex flex-col items-center gap-24 text-white text-center">
      <div>
        <h3 className="text-5xl font-bold mt-4">Walking the Walk for Steady, Long-term Growth</h3>
      </div>
      <div className="flex gap-10 px-4">
        <div className="py-3 px-6 flex flex-col items-center gap-5  rounded-lg shadow-md">
          <div className="flex justify-center"><BsDatabase size={60} /></div>
          <h3 className="text-2xl font-bold">Laying the groundwork for an intelligent world.</h3>
        </div>
        <div className="py-3 px-6 flex flex-col items-center gap-5  rounded-lg shadow-md">
          <div className="flex justify-center"><IoCodeSlashOutline size={60} /></div>
          <h3 className="text-2xl font-bold">Delving deep into basic research and driving technological innovation.</h3>
        </div>
        <div className="py-3 px-6 flex flex-col items-center gap-5  rounded-lg shadow-md">
          <div className="flex justify-center"><LuCheckCircle size={60} /></div>
          <h3 className="text-2xl font-bold">Prioritizing security and trustworthiness, succeeding through quality.</h3>
        </div>
        <div className="py-3 px-6 flex flex-col items-center gap-5  rounded-lg shadow-md">
          <div className="flex justify-center"><FaProjectDiagram size={60} /></div>
          <h3 className="text-2xl font-bold">Building up thriving ecosystems for a more dynamic industry.</h3>
        </div>
        <div className="py-3 px-6 flex flex-col items-center gap-5  rounded-lg shadow-md">
          <div className="flex justify-center"><TbHomeUp size={60} /></div>
          <h3 className="text-2xl font-bold">Powering sustainable development with technology.</h3>
        </div>
      </div>
    </div>
      </div>
    </div>
    <div className="flex my-2 ">
      <div className="max-w-3xl p-6  mx-auto">
        <h1 className="text-3xl text-slate-800 font-bold text-center mb-6">Quality Policy of Xiaomi</h1>
        <ul className="list-disc list-inside space-y-4">
          <li>We precisely communicate our customers’ requirements and expectations throughout our entire value chain, ensuring that we build quality together with our partners and suppliers.</li>
          <li>We respect and adhere to established rules and processes, ensuring that we do things right the first time. This dedication to process integrity guarantees the consistent quality of our products and services.</li>
          <li>We believe in the continuous improvement of our global workforce. By leveraging the full potential of our employees, we strive to enhance our operations and deliver superior products.</li>
          <li>We work collaboratively with our customers to balance opportunities and risks, responding swiftly to their needs and achieving sustainable growth.</li>
          <li>We are committed to providing our customers with quality-assured products, services, and solutions. This commitment is demonstrated through our ongoing efforts to create value for each customer, ensuring their satisfaction and loyalty.</li>
        </ul>
      </div>
      <div className="flex-1">
        <img src="https://i02.appmifile.com/295_operator_global/27/06/2023/517b1430e7b8c0aae0fa41ba578cae57!823x269.png" className="w-full h-full object-cover rounded-lg " alt="Xiaomi Image" />
      </div>
    </div>

    </div>
  );
}

export default About;
