import React from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/home');  // Navigate to a new route
  };

  return (
    <div className="flex h-screen font-sans">
      {/* Left Section with the Image */}
      <div className="w-3/5 my-5">
        <img
          src="/assets/IITbuilding.jpg"
          alt="IIT Building"
          className="w-full h-full object-cover rounded-tr-2xl rounded-br-2xl filter grayscale border-r-2 border-t-2 border-b-2  border-black"
        />
      </div>

      {/* Right Section with the Form */}
      <div className="w-2/5">
        <div className="pt-6 relative">
            <img src='/assets/IITlogo.png' alt="IIT Logo" className="absolute right-10 w-28 object-contain" />
        </div>
        
        <div className="flex flex-col items-center justify-center bg-white p-8 pt-36">
            
            <h1 className="text-orange-500 text-2xl font-bold mb-4">
            Mess Management System
            </h1>
            <h2 className="text-xl font-semibold mb-2 flex items-center">
            Welcome <span className="ml-2">👋</span>
            </h2>
            <p className="text-gray-600 text-sm mb-6">Please login here</p>
            <form className="w-full max-w-sm">
            {/* Kerberos ID */}
            <div className="mb-4">
                <label
                htmlFor="kerberos-id"
                className="block text-sm font-medium text-gray-700 mb-1"
                >
                Kerberos ID
                </label>
                <input
                type="email"
                id="kerberos-id"
                placeholder="mathew.west@ienetworksolutions.com"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
                required
                />
            </div>

            {/* Password */}
            <div className="mb-4">
                <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 mb-1"
                >
                Password
                </label>
                <input
                type="password"
                id="password"
                placeholder="********"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
                required
                />
            </div>

            {/* Remember Me and Forgot Password */}
            <div className="flex items-center justify-between mb-6">
                <div className="flex items-center">
                <input
                    type="checkbox"
                    id="remember-me"
                    className="h-4 w-4 text-orange-500 focus:ring-orange-400 border-gray-300 rounded"
                />
                <label
                    htmlFor="remember-me"
                    className="ml-2 text-sm text-gray-700"
                >
                    Remember Me
                </label>
                </div>
                <a
                href="/forgot-password"
                className="text-sm text-blue-500 hover:underline"
                >
                Forgot Password?
                </a>
            </div>

            {/* Submit Button */}
            <button
                type="submit" onClick={handleClick}
                className="w-full py-2 px-4 bg-orange-500 text-white text-lg font-semibold rounded-lg hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-400"
            >
                Login With Kerberos
            </button>
            </form>
        </div>
      </div>
      
    </div>
  );
};

export default Login;
