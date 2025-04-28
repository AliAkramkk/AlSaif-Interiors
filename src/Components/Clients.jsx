import React from 'react';
import clients from '../data/clientsData'; // Big clients
// import normalClients from '../data/normalClientsData'; // Normal clients

const Clients = () => {
  const allClients = [...clients, ...clients]; // duplicate for smooth loop
  // const allNormalClients = [...normalClients, ...normalClients]; // duplicate for normal clients

  return (
    <div className="bg-slate-50 py-10 px-6 md:px-10 md:py-3 overflow-hidden relative space-y-10">
      {/* Inline keyframe CSS */}
      <style>
        {`
          @keyframes slideLeft {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          @keyframes slideRight {
            0% { transform: translateX(-50%); }
            100% { transform: translateX(0); }
          }
          .slider:hover {
            animation-play-state: paused;
          }
        `}
      </style>

      {/* Title */}
      <div className="flex flex-col md:flex-row items-center md:items-start">
        <div className="w-full text-center">
          <h1 className="text-2xl md:text-3xl pt-5 font-mono text-gray-700">
            Our Trusted Clients
          </h1>
        </div>
      </div>

      {/* First Slider (Big Clients - Right to Left) */}
      <div className="w-full overflow-hidden">
        <div
          className="flex space-x-10 w-max hover:animate-none"
          style={{
            animation: 'slideLeft 40s linear infinite ',
          }}
        >
          {allClients.map((client, index) => (
            <img
              key={index}
              src={client.logo}
              alt={client.name}
              className="h-16 md:h-28 w-auto object-contain hover:grayscale-0 transition duration-300 bg-transparent"
            />
          ))}
        </div>
      </div>

      {/* Second Slider (Normal Clients - Left to Right) */}
      <div className="w-full overflow-hidden">
        <div
          className="flex space-x-10 w-max slider"
          style={{
            animation: 'slideRight 20s linear infinite',
          }}
        >
          {allClients.map((client, index) => (
            <img
              key={index}
              src={client.logo}
              alt={client.name}
              className="h-10 md:h-16 w-auto object-contain hover:grayscale-0 transition duration-300 bg-transparent"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Clients;
