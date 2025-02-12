import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import Banner from "../component/Banner";
import HowItWorks from "../component/HowItWorks";
import AboutMarathon from "../component/AboutMarathon";
import MarathonCommunity from "../component/MarathonCommunity";
import WhyJoin from "../component/WhyJoin";
const HomePage = () => {
  const [marathons, setMarathons] = useState([]);
  const [upcomingMarathons, setUpcomingMarathons] = useState([]);
  const navigate = useNavigate();

  // Fetch marathons for the Marathons Section
  const fetchMarathons = async () => {
    try {
      const response = await fetch("https://marathon-tau.vercel.app/marathonsort");
      const data = await response.json();
      setMarathons(data);
    } catch (error) {
      console.error("Error fetching marathons:", error);
    }
  };

  // Fetch upcoming marathons for the Upcoming Marathons Section
  const fetchUpcomingMarathons = async () => {
    try {
      const response = await fetch("https://marathon-tau.vercel.app/upcome");
      const data = await response.json();
      setUpcomingMarathons(data);
    } catch (error) {
      console.error("Error fetching upcoming marathons:", error);
    }
  };
  console.log(marathons)
  useEffect(() => {
    fetchMarathons();
    fetchUpcomingMarathons();
  }, []);



  console.log(marathons);
  return (
    <div className="home-page">
      <Banner></Banner>
      {/* <section className="marathons-section">
        <h2 className="text-xl font-bold mb-4">Marathons</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {marathons.map((marathon) => (
            <div key={marathon._id} className="card bg-white p-4 rounded shadow">
              <h3 className="font-semibold text-lg">{marathon.title}</h3>
              <p>Location: {marathon.location}</p>
              <p>
                Registration:{" "}
                {new Date(marathon.startDate).toLocaleDateString()}{" "}
                - {new Date(marathon.endDate).toLocaleDateString()}
              </p>
                  <button>
                  <Link to={`/marathon/${marathon._id}`} className="btn btn-primary">
                See Details
              </Link>
                
              </button>
            </div>
          ))}
        </div>
      </section> */}
      {/* <section className="marathons-section py-8 px-4">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Marathons</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {marathons.map((marathon) => (
          <div
            key={marathon._id}
            className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
          >
            <h3 className="text-2xl font-semibold text-gray-700 mb-4">
              {marathon.title}
            </h3>
            <p className="text-gray-600 mb-2">
              <span className="font-bold">Location:</span> {marathon.location}
            </p>
            <p className="text-gray-600 mb-4">
              <span className="font-bold">Registration:</span> {" "}
              {new Date(marathon.startDate).toLocaleDateString()} - {" "}
              {new Date(marathon.endDate).toLocaleDateString()}
            </p>
            <div className="flex justify-center mb-4">
              <CountdownCircleTimer
                isPlaying
                duration={
                  Math.max(
                    0,
                    Math.floor((new Date(marathon.startDate) - new Date()) / 1000)
                  )
                }
                colors={[["#4CAF50", 0.33], ["#FFEB3B", 0.33], ["#F44336"]]}
                size={100}
                trailColor="#d3d3d3"
              >
                {({ remainingTime }) => {
                  const days = Math.floor(remainingTime / (24 * 60 * 60));
                  const hours = Math.floor((remainingTime % (24 * 60 * 60)) / (60 * 60));
                  const minutes = Math.floor((remainingTime % (60 * 60)) / 60);
                  const seconds = remainingTime % 60;

                  return (
                    <div className="text-center">
                      <p className="text-sm font-bold text-gray-700">Starts In</p>
                      <p className="text-lg font-semibold text-gray-900">
                        {days}d {hours}h {minutes}m {seconds}s
                      </p>
                    </div>
                  );
                }}
              </CountdownCircleTimer>
            </div>
            <Link
              to={`/marathon/${marathon._id}`}
              className="block text-center bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600 transition-colors"
            >
              See Details
            </Link>
          </div>
        ))}
      </div>
    </section> */}
      <section className="marathons-section py-8 px-4 bg-gray-100">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Recent Marathons</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {marathons.map((marathon) => (
            <div
              key={marathon._id}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow border-t-4 border-gray-300"
            >
              <div>
                <img src={marathon.image} alt="" />
              </div>
              <h3 className="text-xl font-semibold text-gray-700 mb-4">
                {marathon.title}
              </h3>
              <p className="text-gray-600 mb-2">
                <span className="font-medium">Location:</span> {marathon.location}
              </p>
              <p className="text-gray-600 mb-4">
                <span className="font-medium">Registration:</span> {" "}
                {new Date(marathon.startDate).toLocaleDateString()} - {" "}
                {new Date(marathon.endDate).toLocaleDateString()}
              </p>
              <div className="flex justify-center mb-4">
                <CountdownCircleTimer
                  isPlaying
                  duration={Math.max(
                    0,
                    Math.floor((new Date(marathon.endDate).getTime() - new Date().getTime()) / 1000)
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


              </div>
              <Link
                to={`/marathon/${marathon._id}`}
                className="block text-center bg-blue-500 text-white font-medium py-2 px-4 rounded-md hover:bg-blue-600 transition-colors"
              >
                See Details
              </Link>
            </div>
          ))}
        </div>
      </section>




      <section className="marathons-section py-8 px-4 bg-gray-100">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Upcoming Marathons</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {upcomingMarathons.map((marathon) => (
            <div
              key={marathon._id}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow border-t-4 border-gray-300"
            >
              <div>
                <img src={marathon.image} alt="" />
              </div>
              <h3 className="text-xl font-semibold text-gray-700 mb-4">
                {marathon.title}
              </h3>
              <p className="text-gray-600 mb-2">
                <span className="font-medium">Location:</span> {marathon.location}
              </p>
              <p className="text-gray-600 mb-4">
                <span className="font-medium">Registration:</span> {" "}
                {new Date(marathon.startDate).toLocaleDateString()} - {" "}
                {new Date(marathon.endDate).toLocaleDateString()}
              </p>

              <Link

                className="block text-center bg-blue-500 text-white font-medium py-2 px-4 rounded-md hover:bg-blue-600 transition-colors"
              >
                See Details
              </Link>
            </div>
          ))}
        </div>
      </section>



      <HowItWorks></HowItWorks>
      <AboutMarathon></AboutMarathon>
      <MarathonCommunity></MarathonCommunity>
      <WhyJoin></WhyJoin>






    </div>
  );
};

export default HomePage;
