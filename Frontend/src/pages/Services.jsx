import React from 'react';
import { FaPaintBrush, FaCode, FaSearchengin } from 'react-icons/fa';

const ServiceCard = () => {
  return (
    <section className="container mx-auto p-8">
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Card 1 */}
        <div className="card__bx relative bg-green-400 rounded-lg overflow-hidden shadow-lg transform transition duration-500 hover:scale-105">
          <div className="card__data flex flex-col justify-center items-center text-center h-full p-6 text-white">
            <div className="card__icon bg-green-600 p-4 rounded-full">
              <FaPaintBrush className="text-3xl" />
            </div>
            <div className="card__content mt-4">
              <h3 className="text-xl font-semibold">Designing</h3>
              <p className="text-sm">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              </p>
              <a
                href="#"
                className="inline-block mt-2 text-white bg-green-600 px-4 py-2 rounded-lg transition duration-300 hover:bg-green-500"
              >
                Read More
              </a>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="card__bx relative bg-purple-400 rounded-lg overflow-hidden shadow-lg transform transition duration-500 hover:scale-105">
          <div className="card__data flex flex-col justify-center items-center text-center h-full p-6 text-white">
            <div className="card__icon bg-purple-600 p-4 rounded-full">
              <FaCode className="text-3xl" />
            </div>
            <div className="card__content mt-4">
              <h3 className="text-xl font-semibold">Development</h3>
              <p className="text-sm">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              </p>
              <a
                href="#"
                className="inline-block mt-2 text-white bg-purple-600 px-4 py-2 rounded-lg transition duration-300 hover:bg-purple-500"
              >
                Read More
              </a>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="card__bx relative bg-blue-400 rounded-lg overflow-hidden shadow-lg transform transition duration-500 hover:scale-105">
          <div className="card__data flex flex-col justify-center items-center text-center h-full p-6 text-white">
            <div className="card__icon bg-blue-600 p-4 rounded-full">
              <FaSearchengin className="text-3xl" />
            </div>
            <div className="card__content mt-4">
              <h3 className="text-xl font-semibold">SEO</h3>
              <p className="text-sm">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              </p>
              <a
                href="#"
                className="inline-block mt-2 text-white bg-blue-600 px-4 py-2 rounded-lg transition duration-300 hover:bg-blue-500"
              >
                Read More
              </a>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default ServiceCard;
