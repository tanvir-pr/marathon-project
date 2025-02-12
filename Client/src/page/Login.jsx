import { useContext, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { sendPasswordResetEmail } from "firebase/auth";
import AuthContext from "../context/AuthContext";
import auth from "../firebase/firebase.init";
import { toast } from 'react-hot-toast';

const Login = () => {
  const { userLogin, setUser, signWithGoogle } = useContext(AuthContext);
  const [error, setError] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const emailRef = useRef();
  const location = useLocation();
  const from = location.state || "/";
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const email = form.get("email");
    const password = form.get("password");

    userLogin(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);
        e.target.reset();
        navigate(from);
        toast.success("Thank you! We will reach your destinatio.");
      })
      .catch((error) => {
        setError({ ...error, login: error.code });
      });
  };

  const handleGoogleSignIn = () => {
    signWithGoogle()
      .then(() => {
        navigate(from);
        toast.success("Thank you! We will reach your destinatio.");
      })
      .catch((error) => console.log("ERROR", error.message));
  };

  const handlePasswordReset = () => {
    const email = emailRef.current.value;
    if (!email) {
      console.log("Please provide an email");
    } else {
      sendPasswordResetEmail(auth, email)
        .then(() => {
          alert("Password reset email sent!");
        })
        .catch((error) => console.log("ERROR", error.message));
    }
  };

  return (
    <div>
      <div
        className="h-screen bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: "url('https://source.unsplash.com/1600x900/?winter,mountain')" }}
      >
        <div className="bg-white shadow-lg rounded-lg p-8 w-96">
          <h2 className="text-2xl font-bold text-gray-800 text-center mb-2">Login</h2>
          <p className="text-gray-600 text-center mb-6">Use your credentials to access your account.</p>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <input
                ref={emailRef}
                type="email"
                name="email"
                placeholder="Email"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div className="mb-4 relative">
              <input
                name="password"
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-500"
              >
                👁
              </button>
            </div>

            {error.login && <label className="label text-red-500">{error.login}</label>}

            <button
              type="button"
              onClick={handlePasswordReset}
              className="flex justify-end mb-4 text-sm text-blue-500 hover:underline"
            >
              Forgot Password?
            </button>

            <button
              type="submit"
              className="w-full py-3 bg-gradient-to-r from-orange-500 to-pink-500 text-white font-semibold rounded-md hover:opacity-90"
            >
              Login
            </button>

            <div className="flex flex-col space-y-3 mt-4">
              <button
                type="button"
                onClick={handleGoogleSignIn}
                className="flex items-center justify-center w-full py-2 border border-gray-300 rounded-md hover:bg-gray-100"
              >
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBmq5a2q57WMloc3KjsGLmKclzpRKW2dKB-g&s"
                  alt="Google"
                  className="w-5 h-5 mr-2"
                />
                <span className="text-gray-700">Continue with Google</span>
              </button>

              <button
                type="button"
                className="flex items-center justify-center w-full py-2 border border-gray-300 rounded-md hover:bg-gray-100"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/F_icon.svg/512px-F_icon.svg.png"
                  alt="Facebook"
                  className="w-5 h-5 mr-2"
                />
                <span className="text-gray-700">Continue with Facebook</span>
              </button>
            </div>

            <p className="text-center text-sm text-gray-600 mt-4">
              Don't have an account?{' '}
              <Link to="/auth/register" className="text-blue-500 hover:underline">Register here</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;