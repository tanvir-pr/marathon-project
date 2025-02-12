import React, { useState, useEffect, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import { toast } from 'react-hot-toast';
const RegisterPage = () => {
  const { id } = useParams(); // Marathon ID from the route
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  console.log(user)

  const [marathon, setMarathon] = useState(null); // Marathon details
  const [formData, setFormData] = useState({
    email: user?.email || "",
    firstName: "",
    lastName: "",
    contactNumber: "",
    additionalInfo: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // Fetch marathon details
  useEffect(() => {
    const fetchMarathon = async () => {
      try {
        const response = await fetch(`https://marathon-tau.vercel.app/marathon/${id}`);
        const data = await response.json();
        setMarathon(data);
        console.log(data)
      } catch (err) {
        console.error("Error fetching marathon details:", err);
      }
    };

    fetchMarathon();
  }, [id]);
  console.log(marathon);
  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.email || !formData.firstName || !formData.lastName || !formData.contactNumber) {
      setError("Please fill in all required fields.");
      return;
    }

    try {
      const response = await fetch("https://marathon-tau.vercel.app/registration", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          marathonId: id,
          marathonTitle: marathon.title,
          marathonStartDate: marathon.startDate,
        }),

      });

      console.log(response);
      if (response.ok) {
        setSuccess("Successfully registered!");
        toast.success("Successfully registered!");
        navigate("/applypage"); // Redirect to the "My Apply" page
      } else {
        setError("Registration failed. Please try again.");
      }
    } catch (err) {
      console.error("Error during registration:", err);
      setError("An error occurred. Please try again.");
    }

  };

  if (!marathon) {
    return <div>Loading...</div>;
  }

  return (
    // <div className="registration-page">
    //   <h1>Register for {marathon.title}</h1>
    //   <p>
    //     <strong>Start Date:</strong> {new Date(marathon.startDate).toLocaleDateString()}
    //   </p>
    //   <p>
    //     <strong>Description:</strong> {marathon.description}
    //   </p>
    //   <form onSubmit={handleSubmit}>
    //     <label>
    //       Email (Read Only):
    //       <input
    //         type="email"
    //         name="email"
    //         value={formData.email}
    //         readOnly

    //                 //   defaultValue={user.email}
    //         onChange={handleChange}
    //       />
    //     </label>
    //     <label>
    //       First Name:
    //       <input
    //         type="text"
    //         name="firstName"
    //         value={formData.firstName}
    //         placeholder="Enter your first name"
    //         onChange={handleChange}
    //       />
    //     </label>
    //     <label>
    //       Last Name:
    //       <input
    //         type="text"
    //         name="lastName"
    //         value={formData.lastName}
    //         placeholder="Enter your last name"
    //         onChange={handleChange}
    //       />
    //     </label>
    //     <label>
    //       Contact Number:
    //       <input
    //         type="text"
    //         name="contactNumber"
    //         value={formData.contactNumber}
    //         placeholder="Enter your contact number"
    //         onChange={handleChange}
    //       />
    //     </label>
    //     <label>
    //       Additional Info:
    //       <textarea
    //         name="additionalInfo"
    //         value={formData.additionalInfo}
    //         placeholder="Enter any additional information"
    //         onChange={handleChange}
    //       ></textarea>
    //     </label>
    //     <button type="submit">Register</button>
    //   </form>
    //   {error && <p className="error">{error}</p>}
    //   {success && <p className="success">{success}</p>}
    // </div>
    <div className="registration-page bg-yellow-50 p-6 rounded-lg shadow-md max-w-lg mx-auto mt-12">
      <h1 className="text-3xl font-semibold text-yellow-600 text-center mb-4">Register for {marathon.title}</h1>
      <p className="text-lg text-gray-700 mb-2">
        <strong>Start Date:</strong> {new Date(marathon.startDate).toLocaleDateString()}
      </p>
      <p className="text-lg text-gray-700 mb-6">
        <strong>Description:</strong> {marathon.description}
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <label className="block text-lg font-semibold text-gray-700">
          Email (Read Only):
          <input
            type="email"
            name="email"
            value={formData.email}
            readOnly
            className="w-full p-3 border border-yellow-300 rounded-md mt-1 bg-yellow-100 text-gray-700"
            onChange={handleChange}
          />
        </label>

        <label className="block text-lg font-semibold text-gray-700">
          First Name:
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            placeholder="Enter your first name"
            className="w-full p-3 border border-yellow-300 rounded-md mt-1 focus:ring-2 focus:ring-yellow-500"
            onChange={handleChange}
          />
        </label>

        <label className="block text-lg font-semibold text-gray-700">
          Last Name:
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            placeholder="Enter your last name"
            className="w-full p-3 border border-yellow-300 rounded-md mt-1 focus:ring-2 focus:ring-yellow-500"
            onChange={handleChange}
          />
        </label>

        <label className="block text-lg font-semibold text-gray-700">
          Contact Number:
          <input
            type="text"
            name="contactNumber"
            value={formData.contactNumber}
            placeholder="Enter your contact number"
            className="w-full p-3 border border-yellow-300 rounded-md mt-1 focus:ring-2 focus:ring-yellow-500"
            onChange={handleChange}
          />
        </label>

        <label className="block text-lg font-semibold text-gray-700">
          Additional Info:
          <textarea
            name="additionalInfo"
            value={formData.additionalInfo}
            placeholder="Enter any additional information"
            className="w-full p-3 border border-yellow-300 rounded-md mt-1 focus:ring-2 focus:ring-yellow-500"
            onChange={handleChange}
          ></textarea>
        </label>

        <div className="flex justify-center">
          <button
            type="submit"
            className="px-6 py-2 bg-yellow-600 text-white rounded-md hover:bg-yellow-700 transition duration-300"
          >
            Register
          </button>
        </div>
      </form>

      {/* Display Error or Success Messages */}
      {error && <p className="text-red-500 text-center mt-4">{error}</p>}
      {success && <p className="text-green-500 text-center mt-4">{success}</p>}
    </div>

  );
};

export default RegisterPage;
