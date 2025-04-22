import React from 'react'
import Navbar from './Navbar'
import { portfolio,portfolioDetail } from '../data/clientsData'
import homeCard from '../assets/homecard5.webp';
import Footer from '../Components/Footer'
const Portfolio = () => {
  return (
    <>
      <Navbar />
      <section className="px-6 py-12 md-py-4 bg-white">
        <div className="max-w-7xl mx-auto">
            <div className='md:w-1/2'>
            <h1 className="text-xl md:text-2xl md:text-start font-mono  mt-4 px-2 md:px-1 text-gray-600">
            Portfolio
          </h1>
    <hr className="hidden md:block border-t-2 border-gray-500 md:w-1/4 w-1/2 md:-mt-1 ml-1" />
          <h2 className="text-3xl font-mono text-gray-800 mt-2">
            Our Creations Speak for Themselves
          </h2>
          <p className="text-gray-600 mt-2 mb-6 max-w-xl font-mono">
            Explore our diverse range of projects showcasing innovation, elegance,
            and functionality.
          </p>
        
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            <div className="lg:col-span-2 object-contain">
              <img
                src={portfolio[1].image}
                alt={portfolio[1].title}
                className="w-full md:h-[450px] object-cover "
              />
              <p className="mt-2 text-lg font-medium text-gray-700">
                {portfolio[1].title}
              </p>
            </div>
            <div className="flex flex-col gap-6 md:-mt-36">
              <div>
                <img
                  src={portfolio[0].image}
                  alt={portfolio[0].title}
                  className="w-full h-36 object-cover  md:h-[550px]"
                />
                <p className="mt-2 text-lg font-medium text-gray-700">
                  {portfolio[0].title}
                </p>
              </div>
              <div>
                <img
                  src={portfolio[2].image}
                  alt={portfolio[2].title}
                  className="w-full h-36 object-cover  md:h-[350px]"
                />
                <p className="mt-2 text-lg font-medium text-gray-700">
                  {portfolio[2].title}
                </p>
              </div>
            </div>
            <div className="flex lg:col-span-2 md:w-full gap-6 md:-mt-34">
              <div>
              <img
                src={portfolio[3].image}
                alt={portfolio[3].title}
                className="w-full h-72 object-cover  md:h-[350px] md:w-[750px] md:-mt-52"
              />
              <p className="mt-2 text-lg font-medium text-gray-700">
                {portfolio[3].title}
              </p>
              </div>
              <div>
              <img
                src={portfolio[4].image}
                alt={portfolio[3].title}
                className="w-full h-72 object-cover  md:h-[350px] md:w-[2050px] md:-mt-52"
              />
              <p className="mt-2 text-lg font-medium text-gray-700">
                {portfolio[4].title}
              </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="text-center font-mono">
      <h3 className="text-sm uppercase text-gray-400 mb-2">How it Works</h3>
      <h2 className="text-3xl md:text-4xl font-bold mb-6">How We Bring Your Vision to Life</h2>
      <p className="text-gray-600 max-w-2xl mx-auto mb-12">
        A simple, seamless process to create stunning architectural and interior designs.
      </p>
      <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {portfolioDetail.map((step, index) => (
          <div key={index} className="bg-white p-6  shadow-inner">
            <p className="text-sm text-gray-500 mb-2">Step {index + 1}</p>
            <h3 className="text-xl font-semibold mb-2 text-left">{step.title}</h3>
            <p className="text-gray-600 text-left">{step.description}</p>
          </div>
        ))}
      </div>
      <div className="mt-16 max- mx-auto">
        <img
          src={homeCard}
          alt="Interior Design Showcase"
          className=" w-full object-cover"
        />
      </div>
    </section>
    <Footer />
    </>
  )
}

export default Portfolio
