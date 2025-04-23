import React from 'react';
import clients from '../data/clientsData';

const Clients = () => {
  const allClients = [...clients, ...clients]; // duplicate for smooth loop

  return (
    <div className="bg-slate-50 py-10 px-6 md:px-10 md:py-3 overflow-hidden relative">
      {/* Inline keyframe CSS */}
      <style>
        {`
          @keyframes slide {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
        `}
      </style>

      <div className="flex flex-col md:flex-row items-center md:items-start">
        {/* Left: Text */}
        <div className="w-full md:w-1/3 mb-6 md:mb-0">
          <h1 className="text-2xl md:text-2xl pt-5 font-mono justify-center items-center text-gray-700">
            Our Trusted Clients
          </h1>
        </div>

        {/* Right: Auto-sliding logos */}
        <div className="w-full md:w-2/3 overflow-hidden">
          <div
            className="flex space-x-6 w-max"
            style={{
              animation: 'slide 20s linear infinite',
            }}
          >
            {allClients.map((client, index) => (
              <img
                key={index}
                src={client.logo}
                alt={client.name}
                className="h-16 md:h-20 w-auto object-contain  hover:grayscale-0 transition duration-300 bg-transparent"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clients;
