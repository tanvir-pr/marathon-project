import React, { useState, useEffect, useContext } from "react";
import AuthContext from "../context/AuthContext";
import Pagetittle from "../component/Pagetittle";
import axios from "axios";

const MyMarathonPage = () => {
  const [marathons, setMarathons] = useState([]);
  const [modalData, setModalData] = useState(null);
  const [error, setError] = useState("");
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const { user } = useContext(AuthContext);

  // Fetch marathons created by the logged-in user
  const fetchMarathons = async () => {
    try {
      const response = await axios(`https://marathon-tau.vercel.app/marathons?email=${user.email}`, { withCredentials: true });
      // const data = await response.json();
      setMarathons(response.data);
    } catch (err) {
      console.error("Error fetching marathons:", err);
      setError("Failed to fetch marathons.");
    }
  };

  // Fetch marathons when the component is mounted or when user email changes
  useEffect(() => {
    fetchMarathons();
  }, [user.email]);

  // Handle updating marathon data
  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`https://marathon-tau.vercel.app/marathon/${modalData._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(modalData),
      });

      if (response.ok) {
        fetchMarathons(); // Refresh marathons list
        setModalData(null); // Close modal
        setIsUpdateModalOpen(false);
      } else {
        setError("Failed to update marathon.");
      }
    } catch (err) {
      console.error("Error updating marathon:", err);
      setError("An error occurred while updating the marathon.");
    }
  };

  // Handle deleting a marathon
  const handleDelete = async () => {
    try {
      const response = await fetch(`https://marathon-tau.vercel.app/marathon/${modalData._id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        fetchMarathons(); // Refresh marathons list after deletion
        setModalData(null); // Close delete modal
        setIsDeleteModalOpen(false);
      } else {
        setError("Failed to delete marathon.");
      }
    } catch (err) {
      console.error("Error deleting marathon:", err);
      setError("An error occurred while deleting the marathon.");
    }
  };
  console.log(marathons)
  return (
    <div>
      <Pagetittle
        favicon="/assets/favicon.png"
        title="My Marathons"></Pagetittle>
      <div className="my-marathons-list p-4 pt-16">
        <h1 className="text-xl font-bold mb-4">My Marathons</h1>
        {error && <p className="text-red-500">{error}</p>}
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr>
              <th className="border border-gray-300 px-4 py-2">Marathon Title</th>
              <th className="border border-gray-300 px-4 py-2">Start Date</th>
              <th className="border border-gray-300 px-4 py-2">Actions</th>
              <th className="border border-gray-300 px-4 py-2">Total application</th>
            </tr>
          </thead>
          <tbody>
            {marathons.map((marathon) => (
              <tr key={marathon._id}>
                <td className="border border-gray-300 px-4 py-2">{marathon.title}</td>
                <td className="border border-gray-300 px-4 py-2">
                  {new Date(marathon.startDate).toLocaleDateString()}
                </td>
                <td className="border border-gray-300 px-4 py-2 flex gap-2">
                  <button
                    className="bg-blue-500 text-white px-2 py-1 rounded"
                    onClick={() => {
                      setModalData({ ...marathon });
                      setIsUpdateModalOpen(true);
                    }}
                  >
                    Update
                  </button>
                  <button
                    className="bg-red-500 text-white px-2 py-1 rounded"
                    onClick={() => {
                      setModalData({ ...marathon });
                      setIsDeleteModalOpen(true);
                    }}
                  >
                    Delete
                  </button>
                </td>
                <td className="border border-gray-300 px-4 py-2">{marathon?.totalRegistrationCount ?? 0}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Update Modal */}
        {isUpdateModalOpen && modalData && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-96">
              <h2 className="text-lg font-semibold mb-4">Update Marathon</h2>
              <form onSubmit={handleUpdate}>
                <label className="block mb-2">
                  Title:
                  <input
                    type="text"
                    value={modalData.title || ""}
                    onChange={(e) => setModalData({ ...modalData, title: e.target.value })}
                    className="w-full border border-gray-300 rounded px-2 py-1 mt-1"
                  />
                </label>
                <label className="block mb-2">
                  Start Date:
                  <input
                    type="date"
                    value={
                      modalData.startDate
                        ? new Date(modalData.startDate).toISOString().split("T")[0]
                        : ""
                    }
                    onChange={(e) =>
                      setModalData({ ...modalData, startDate: e.target.value })
                    }
                    className="w-full border border-gray-300 rounded px-2 py-1 mt-1"
                  />
                </label>
                <label className="block mb-2">
                  Description:
                  <textarea
                    value={modalData.description || ""}
                    onChange={(e) => setModalData({ ...modalData, description: e.target.value })}
                    className="w-full border border-gray-300 rounded px-2 py-1 mt-1"
                  ></textarea>
                </label>
                <div className="flex justify-end gap-4 mt-4">
                  <button
                    type="submit"
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                  >
                    Save
                  </button>
                  <button
                    type="button"
                    onClick={() => setIsUpdateModalOpen(false)}
                    className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* Delete Confirmation Modal */}
        {isDeleteModalOpen && modalData && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-96">
              <h2 className="text-lg font-semibold mb-4">Confirm Delete</h2>
              <p>Are you sure you want to delete the marathon titled "{modalData.title}"?</p>
              <div className="flex justify-end gap-4 mt-4">
                <button
                  onClick={handleDelete}
                  className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                >
                  Delete
                </button>
                <button
                  onClick={() => setIsDeleteModalOpen(false)}
                  className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyMarathonPage;
