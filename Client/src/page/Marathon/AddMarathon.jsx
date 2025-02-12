

import axios from 'axios';
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../../context/AuthContext';
import Pagetittle from '../../component/Pagetittle';
import { toast } from 'react-hot-toast';
const AddMarathon = () => {
  const { user } = useContext(AuthContext);
  const [formData, setFormData] = useState({
    email: user?.email || "",
    title: '',
    location: '',
    startDate: '',
    endDate: '',
    marathonDate: '',
    distance: '',
    description: '',
    image: '',
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('https://marathon-tau.vercel.app/marathon', formData);
      alert('Marathon added successfully!');
      navigate('/marathon');
      toast.success("Marathon added successfully!");
    } catch (error) {
      console.error(error);
      alert('Failed to add marathon.');
    }
  };

  return (
    <div>
      <Pagetittle
        favicon="/assets/favicon.png"
        title="Add Marathon"></Pagetittle>
      <div className="p-8 pt-16">
        <h1 className="text-2xl font-bold mb-4">Add Marathon</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="title"
            placeholder="Marathon Title"
            value={formData.title}
            onChange={handleChange}
            required
            className="input input-bordered w-full"
          />
          <input
            type="text"
            name="location"
            placeholder="Location"
            value={formData.location}
            onChange={handleChange}
            required
            className="input input-bordered w-full"
          />
          <input
            type="date"
            name="startDate"
            placeholder="Start Registration Date"
            value={formData.startDate}
            onChange={handleChange}
            required
            className="input input-bordered w-full"
          />
          <input
            type="date"
            name="endDate"
            placeholder="End Registration Date"
            value={formData.endDate}
            onChange={handleChange}
            required
            className="input input-bordered w-full"
          />
          <input
            type="date"
            name="marathonDate"
            placeholder="Marathon Date"
            value={formData.marathonDate}
            onChange={handleChange}
            required
            className="input input-bordered w-full"
          />
          <select
            name="distance"
            value={formData.distance}
            onChange={handleChange}
            required
            className="select select-bordered w-full"
          >
            <option value="">Select Distance</option>
            <option value="25k">25k</option>
            <option value="10k">10k</option>
            <option value="3k">3k</option>
          </select>
          <textarea
            name="description"
            placeholder="Description"
            value={formData.description}
            onChange={handleChange}
            required
            className="textarea textarea-bordered w-full"
          ></textarea>
          <input
            type="text"
            name="image"
            placeholder="Image URL"
            value={formData.image}
            onChange={handleChange}
            required
            className="input input-bordered w-full"
          />
          <button type="submit" className="btn btn-primary w-full">
            Add Marathon
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddMarathon;
