import React from 'react';
import clients from '../data/clientsData';

const ClientsLogo = () => {
  return (
    <div className="bg-gray-100 py-8 lg:mb-14 m-2">
    <div className="flex items-center mb-4 px-5">
  <h2 className="text-gray-400 text-xs uppercase font-thin tracking-widest mr-2">
    Corporate&nbsp;&nbsp;Clients
  </h2>
  <div className="flex-grow border-t border-gray-300"></div>
</div>

      <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
        {clients.map((client, index) => (
          <div key={index} className="flex justify-center items-center p-4">
            <img
              src={client.logo}
              alt={`${client.name} logo`}
              className="h-14 opacity-70"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default ClientsLogo