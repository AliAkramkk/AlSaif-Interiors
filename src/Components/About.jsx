import React from 'react'
import Navbar from './Navbar'
import ClientsLogo from './ClientsLogo'
import Footer from './Footer'
import BadgeImage from '../assets/excelence.jpg'
import Services from './Services'
import CountProjects from './CountProjects'

const About = () => {
  return (
    <>
      <Navbar />

      <section className="relative bg-white overflow-hidden mt-20">
        {/* Top Wave */}
        <div className="absolute top-0 left-0 w-full">
          <svg viewBox="0 0 1440 320" className="w-full h-auto rotate-360">
            <path fill="#F9FAEB" fillOpacity="1" d="M0,96L48,85.3C96,75,192,53,288,64C384,75,480,117,576,128C672,139,768,117,864,106.7C960,96,1056,96,1152,90.7C1248,85,1344,75,1392,69.3L1440,64L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
          </svg>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-24 lg:px-8">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-10">
            {/* Image Section */}
            <div className="flex-shrink-0 hidden sm:block">
              <img
                src={BadgeImage}
                alt="17 Years of Excellence"
                className="w-28 sm:w-32 md:w-40 h-auto object-contain"
              />
            </div>

            {/* Text Section */}
            <div className="text-gray-700 max-w-3xl">
              <h2 className="text-2xl sm:text-3xl font-mono text-black mb-4 sm:mb-6">
                Shape Your Space with Al Saif Decor
              </h2>

              {/* Short version for small screens */}
              <div className="block md:hidden text-sm space-y-3">
                <p>
                  Since 2006, Al Saif Decor has delivered quality and innovation across UAE interior design projects.
                </p>
                <p>
                  With a skilled team and strong partnerships, we provide timely, cost-effective solutions tailored to each client.
                </p>
              </div>

              {/* Full version for medium and larger screens */}
              <div className="hidden md:block space-y-4">
                <p>
                  Since our establishment in 2006, Al Saif Decor has been committed to delivering quality, integrity, and innovation across every project we undertake. Our unwavering focus on excellence has earned us the trust of a broad and loyal client base, positioning us as a key player in the contracting and interior design industry across the United Arab Emirates.
                </p>
                <p>
                  Over the years, our experience with major projects and partnerships has helped us master the intricacies of the business. We believe success is built on collaboration — that’s why we selectively build a team of skilled professionals who uphold our high standards in engineering and construction.
                </p>
                <p>
                  At Al Saif Decor, we continuously evolve by integrating cutting-edge project management systems and delivering timely, tailored solutions to meet each client’s needs. We prioritize transparency, regular progress updates, and cost-effective service — ensuring customer satisfaction at every step.
                </p>
                <p>
                  Our employees are the heart of our company. Their dedication, expertise, and professionalism drive us forward. With a grounded approach and a clear vision, we believe the only direction is ahead. And for us, the most powerful endorsement is a happy customer.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Wave (Inverted) */}
       
      <ClientsLogo />
      <Services />
<CountProjects />
      {/* <div className="absolute bottom-0 left-0 w-full md:mt-64">
          <svg viewBox="0 0 1440 320" className="w-full h-auto">
            <path fill="#F9FAFB" fillOpacity="1" d="M0,96L48,85.3C96,75,192,53,288,64C384,75,480,117,576,128C672,139,768,117,864,106.7C960,96,1056,96,1152,90.7C1248,85,1344,75,1392,69.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div> */}
      </section>
      <Footer />

    </>
  )
}

export default About
