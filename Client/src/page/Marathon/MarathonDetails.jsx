import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { CountdownCircleTimer } from "react-countdown-circle-timer";

const MarathonDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [marathon, setMarathon] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMarathon = async () => {
      try {
        const { data } = await axios.get(`https://marathon-tau.vercel.app/marathon/${id}`);
        setMarathon(data);
      } catch (error) {
        console.error("Failed to fetch marathon details", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMarathon();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!marathon) {
    return <div>Marathon not found</div>;
  }
  console.log(marathon);
  return (
    // <div className="marathon-details">
    //   <h1>{marathon.title}</h1>
    //   <p>Location: {marathon.location}</p>
    //   <p>Start Date: {new Date(marathon.startDate).toDateString()}</p>
    //   <p>Total Registrations: {marathon.totalRegistrations}</p>
    //   <button
    //     onClick={() => navigate(`/registration/${id}`)}
    //     className="btn btn-primary"
    //   >
    //     Register
    //   </button>
    // </div>
    <div className="marathon-details bg-yellow-50 p-6 rounded-lg shadow-lg max-w-lg mx-auto mt-12">
      <div>
        <img className="w-[420px] rounded-lg" src={marathon.image} alt="" />
      </div>
      <h1 className="text-3xl font-bold text-yellow-600 mb-4">{marathon.title}</h1>
      <p className="text-lg text-gray-700 mb-2">
        <strong>Location:</strong> {marathon.location}
      </p>
      <p className="text-lg text-gray-700 mb-2">
        <strong>Start Date:</strong> {new Date(marathon.startDate).toDateString()}
      </p>
      <p className="text-lg text-gray-700 mb-4">
        <strong>Total Registrations:</strong> {marathon.totalRegistrationCount}
      </p>

      <CountdownCircleTimer
        isPlaying
        duration={Math.max(
          0,
          Math.floor((new Date(marathon.startDate).getTime() - new Date().getTime()) / 1000)
        )}
        colors={[
          ["#4CAF50", 0.33],
          ["#FFEB3B", 0.33],
          ["#F44336", 0.33]
        ]}
        size={100}
        trailColor="#E5E7EB"
      >
        {({ remainingTime }) => {
          if (remainingTime <= 0) {
            return (
              <div className="text-center">
                <p className="text-sm font-medium text-gray-600">Marathon Started!</p>
              </div>
            );
          }

          const days = Math.floor(remainingTime / (24 * 60 * 60));
          const hours = Math.floor((remainingTime % (24 * 60 * 60)) / (60 * 60));
          const minutes = Math.floor((remainingTime % (60 * 60)) / 60);
          const seconds = remainingTime % 60;


          return (
            <div className="text-center">
              <p className="text-sm font-medium text-gray-600">Starts In</p>
              <p className="text-lg font-bold text-gray-800">
                {days}d {hours}h {minutes}m {seconds}s
              </p>
            </div>
          );
        }}
      </CountdownCircleTimer>

      <div className="flex justify-center">
        <button
          onClick={() => navigate(`/registration/${id}`)}
          className="px-6 py-2 bg-yellow-600 text-white rounded-md hover:bg-yellow-700 transition duration-300"
        >
          Register
        </button>
      </div>
    </div>

  );
};

export default MarathonDetails;
