import React, { useState, useEffect, useContext } from "react";
import AuthContext from "../context/AuthContext";
import Pagetittle from "../component/Pagetittle";
import axios from "axios";

const MyApplypage = () => {
  const [registrations, setRegistrations] = useState([]);
  const [modalData, setModalData] = useState(null);
  const [deleteModal, setDeleteModal] = useState(null); // State for delete confirmation modal
  const [error, setError] = useState("");
  const [searchQuery, setSearchQuery] = useState(""); // State for search query
  const { user } = useContext(AuthContext);

  // Fetch registrations for the logged-in user with optional search query
  const fetchRegistrations = async () => {
    try {
      const response = await axios(`https://marathon-tau.vercel.app/registration?email=${user.email}&searchQuery=${searchQuery}`, { withCredentials: true });
      // const data = await response.json();
      setRegistrations(response.data);
    } catch (err) {
      console.error("Error fetching registrations:", err);
      setError("Failed to fetch registrations.");
    }
  };

  // Fetch registrations when the component is mounted, when user email changes, or when search query changes
  useEffect(() => {
    fetchRegistrations();
  }, [user.email, searchQuery]);

  // Handle updating registration data
  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`https://marathon-tau.vercel.app/registration/${modalData._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(modalData),
      });

      if (response.ok) {
        fetchRegistrations(); // Refresh registrations list
        setModalData(null); // Close modal
      } else {
        setError("Failed to update registration.");
      }
    } catch (err) {
      console.error("Error updating registration:", err);
      setError("An error occurred while updating the registration.");
    }
  };

  // Handle deleting a registration with confirmation
  const handleDelete = async () => {
    try {
      const response = await fetch(`https://marathon-tau.vercel.app/registration/${deleteModal._id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        fetchRegistrations(); // Refresh registrations list after deletion
        setDeleteModal(null); // Close delete confirmation modal
      } else {
        setError("Failed to delete registration.");
      }
    } catch (err) {
      console.error("Error deleting registration:", err);
      setError("An error occurred while deleting the registration.");
    }
  };
  console.log(user);
  return (
    <div>
      <Pagetittle
        favicon="/assets/favicon.png"
        title="My Apply List"></Pagetittle>
      <div className="my-apply-list p-4 pt-16">
        <h1 className="text-xl font-bold mb-4">My Apply List</h1>
        {error && <p className="text-red-500">{error}</p>}

        {/* Search Input */}
        <div className="mb-4">
          <input
            type="text"
            placeholder="Search by Marathon Title"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
        </div>

        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr>
              <th className="border border-gray-300 px-4 py-2">Marathon Title</th>
              <th className="border border-gray-300 px-4 py-2">Start Date</th>
              <th className="border border-gray-300 px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {registrations.map((registration) => (
              <tr key={registration._id}>
                <td className="border border-gray-300 px-4 py-2">{registration.marathonTitle}</td>
                <td className="border border-gray-300 px-4 py-2">
                  {new Date(registration.marathonStartDate).toLocaleDateString()}
                </td>
                <td className="border border-gray-300 px-4 py-2 flex gap-2">
                  <button
                    className="bg-blue-500 text-white px-2 py-1 rounded"
                    onClick={() => setModalData({ ...registration })}
                  >
                    Update
                  </button>
                  <button
                    className="bg-red-500 text-white px-2 py-1 rounded"
                    onClick={() => setDeleteModal(registration)} // Set the registration for deletion
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Delete Confirmation Modal */}
        {deleteModal && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded-lg w-96">
              <h2 className="text-lg font-bold mb-4">Are you sure you want to delete this registration?</h2>
              <p className="mb-4">
                This action cannot be undone. Please confirm your decision.
              </p>
              <div className="flex justify-end gap-2">
                <button
                  className="bg-red-500 text-white px-4 py-2 rounded"
                  onClick={handleDelete}
                >
                  Delete
                </button>
                <button
                  className="bg-gray-500 text-white px-4 py-2 rounded"
                  onClick={() => setDeleteModal(null)} // Close the modal without deleting
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Modal for updating registration */}
        {modalData && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded-lg w-96">
              <h2 className="text-lg font-bold mb-4">Update Registration</h2>
              {/* The update form remains the same */}
              <form onSubmit={handleUpdate}>

                <div className="mb-4">
                  <label className="block mb-1">User Name:</label>
                  <input
                    type="text"
                    readOnly
                    value={user.displayName || ""}

                    className="w-full border border-gray-300 rounded px-3 py-2"
                  />
                </div>


                {/* first and last name */}
                {/* <div className="mb-4">
                <label className="block mb-1">First Name:</label>
                <input
                  type="text"
                  value={modalData.firstName || ""}
                  onChange={(e) =>
                    setModalData({ ...modalData, firstName: e.target.value })
                  }
                  className="w-full border border-gray-300 rounded px-3 py-2"
                />
              </div>
              <div className="mb-4">
                <label className="block mb-1">Last Name:</label>
                <input
                  type="text"
                  value={modalData.lastName || ""}
                  onChange={(e) =>
                    setModalData({ ...modalData, lastName: e.target.value })
                  }
                  className="w-full border border-gray-300 rounded px-3 py-2"
                />
                              </div> */}



                <div className="mb-4">
                  <label className="block mb-1">Contact Number:</label>
                  <input
                    type="text"
                    value={modalData.contactNumber || ""}
                    onChange={(e) =>
                      setModalData({ ...modalData, contactNumber: e.target.value })
                    }
                    className="w-full border border-gray-300 rounded px-3 py-2"
                  />
                </div>
                <div className="mb-4">
                  <label className="block mb-1">User Email:</label>
                  <input
                    type="text"
                    readOnly
                    value={user.email || ""}

                    className="w-full border border-gray-300 rounded px-3 py-2"
                  />
                </div>




                <div className="mb-4">
                  <label className="block mb-1">Additional Info:</label>
                  <textarea
                    value={modalData.additionalInfo || ""}
                    onChange={(e) =>
                      setModalData({ ...modalData, additionalInfo: e.target.value })
                    }
                    className="w-full border border-gray-300 rounded px-3 py-2"
                  />
                </div>
                <div className="flex justify-end gap-2">
                  <button
                    type="submit"
                    className="bg-green-500 text-white px-4 py-2 rounded"
                  >
                    Save
                  </button>
                  <button
                    type="button"
                    onClick={() => setModalData(null)}
                    className="bg-gray-500 text-white px-4 py-2 rounded"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyApplypage;
