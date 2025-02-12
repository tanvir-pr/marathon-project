import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthContext from "../context/AuthContext";

import { toast } from 'react-hot-toast';

const Registation = () => {

  const { createNewUser, setUser,updateUserProfile} = useContext(AuthContext);
  const [error, setError] = useState({});
  const navigate = useNavigate();


  const handleSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const name = form.get("name");
   
    const email = form.get("email");
    const photo = form.get("photo");
    
    const password = form.get("password");
    if ( !/[A-Z]/.test(password) ||  
    !/[a-z]/.test(password) ||  
    !/\d/.test(password) ||   
    password.length <= 6 )
      {
         setError({ ...error, password: "Must have an Uppercase,a Lowercase and must be at least 6 character" });
         return;
       }
    

    createNewUser(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user)
        updateUserProfile({ displayName: name, photoURL: photo })
       
          .then(() => {
            e.target.reset();
            navigate("/");
            toast.success("Thank you! We will reach your destinatio.");
          })
          
       
      })
      .catch((error) => {
        setError({ ...error, login: error.code });
      });
    
  }
    return (
        <div>
           <div
      className="h-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: "url('https://source.unsplash.com/1600x900/?winter,snow')" }}
    >
      <div className="bg-white shadow-lg rounded-lg p-8 w-96">
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-2">Register</h2>
        <p className="text-gray-600 text-center mb-6">Create your account to get started.</p>
        <form onSubmit={handleSubmit}>
          {/* Name */}
          <div className="mb-4">
            <input
                  type="text"
                  name="name"
              placeholder="Name"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Email */}
          <div className="mb-4">
                <input
                  name="email"
              type="email"
              placeholder="Email"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Photo URL */}
          <div className="mb-4">
                <input
                  name="photo"
              type="text"
              placeholder="Photo URL"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Password */}
          <div className="mb-4 relative">
                <input
                  name="password"
              type="password"
              placeholder="Password"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <span className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-500">
              👁
            </span>
              </div>
              {error.password && <label className="label">{error.password }</label>
                
              }

          {/* Register Button */}
          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-orange-500 to-pink-500 text-white font-semibold rounded-md hover:opacity-90"
          >
            Register
          </button>

          {/* Redirect to Login */}
          <p className="text-center text-sm text-gray-600 mt-4">
            Already have an account?{' '}
            <a href="#" className="text-blue-500 hover:underline">
            <Link to="/auth/login">Login here</Link>
            </a>
          </p>
        </form>
      </div>
    </div>
        </div>
    );
};

export default Registation;