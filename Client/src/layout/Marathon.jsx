import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Pagetittle from '../component/Pagetittle';

const Marathons = () => {
  const [marathons, setMarathons] = useState([]);

  useEffect(() => {
    const fetchMarathons = async () => {
      try {
        const response = await axios.get('https://marathon-tau.vercel.app/marathon', { withCredentials: true });
        setMarathons(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchMarathons();
  }, []);

  return (
    //   <div>
    //      <Pagetittle
    //           favicon="/assets/favicon.png"
    //               title="Marathon"></Pagetittle>
    //       <div className="p-8">
    //     <h1 className="text-2xl font-bold mb-4">Marathons</h1>
    //     <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
    //       {marathons.map((marathon) => (
    //         <div key={marathon._id} className="card shadow-lg">
    //           <img src={marathon.image} alt={marathon.title} className="h-[300px] rounded-lg p-2" />
    //           <div className="card-body">
    //             <h2 className="card-title">{marathon.title}</h2>
    //             <p>{marathon.location}</p>
    //             <p>Registration: {marathon.startDate} - {marathon.endDate}</p>
    //             <Link to={`/marathon/${marathon._id}`} className="btn btn-primary">
    //               See Details
    //             </Link>
    //           </div>
    //         </div>
    //       ))}
    //     </div>
    //   </div>
    // </div>
    <div>
      <Pagetittle favicon="/assets/favicon.png" title="Marathon" />
      <div className="p-8">
        <h1 className="text-2xl font-bold mb-4">Marathons</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {marathons.map((marathon) => (
            <div
              key={marathon._id}
              className="bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-500 hover:scale-105"
            >
              <img
                src={marathon.image}
                alt={marathon.title}
                className="w-full h-[280px] object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-bold text-gray-800 mb-2">
                  {marathon.title}
                </h2>
                <p className="text-gray-600 mb-2">{marathon.location}</p>
                <p className="text-gray-600 mb-4">
                  Registration: {marathon.startDate} - {marathon.endDate}
                </p>
                <Link
                  to={`/marathon/${marathon._id}`}
                  className="block font-bold text-center bg-gradient-to-r from-yellow-200 to-green-100 text-white py-2 rounded-md hover:opacity-90"
                >
                  See Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>

  );
};

export default Marathons;
