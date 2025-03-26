import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreateAccount = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    fullName: "",
    email: "",
    phone: "",
    password: "",
    company: "",
    agency: "",
  });

  // Handle form input changes
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!user.fullName || !user.email || !user.phone || !user.password) {
      alert("Please fill all required fields.");
      return;
    }

    localStorage.setItem(user.email, JSON.stringify(user));
    navigate("/account-settings", { state: user });
  };

  return (
    <div className="w-full h-screen flex justify-center items-center p-4 border-4">
      <div className="w-80 border-2 bg-neutral-100 p-6 rounded-lg shadow-lg">
        <h1 className="text-zinc-900 font-bold text-xl mb-6">
          Create Your <div>propX account</div>
        </h1>

        <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
          {/* Full Name */}
          <label htmlFor="fullName" className="flex flex-col">
            <p className="text-blue-600 text-xs font-bold relative">
              Full Name{" "}
              <span className="text-red-600 absolute bottom-1">&#9733;</span>
            </p>
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              value={user.fullName}
              onChange={handleChange}
              className="w-full px-3 py-1 border-2 border-gray-300 rounded"
              required
            />
          </label>

          {/* Phone Number */}
          <label htmlFor="phone" className="flex flex-col">
            <p className="text-blue-600 text-xs font-bold relative">
              Phone Number{" "}
              <span className="text-red-600 absolute bottom-1">&#9733;</span>
            </p>
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={user.phone}
              onChange={handleChange}
              className="w-full px-3 py-1 border-2 border-gray-300 rounded"
              required
            />
          </label>

          {/* Email */}
          <label htmlFor="email" className="flex flex-col">
            <p className="text-blue-600 text-xs font-bold relative">
              Email address{" "}
              <span className="text-red-600 absolute bottom-1">&#9733;</span>
            </p>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={user.email}
              onChange={handleChange}
              className="w-full px-3 py-1 border-2 border-gray-300 rounded"
              required
            />
          </label>
          {/* Password */}

          <label htmlFor="password" className="flex flex-col">
            <p className="text-blue-600 text-xs font-bold relative">
              Password{" "}
              <span className="text-red-600 absolute bottom-1">&#9733;</span>
            </p>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={user.password}
              onChange={handleChange}
              className="w-full px-3 py-1 border-2 border-gray-300 rounded"
              required
            />
          </label>

          {/* Company Name */}
          <label htmlFor="company" className="flex flex-col">
            <p className="text-blue-600 text-xs font-bold relative">
              Company name
            </p>
            <input
              type="text"
              name="company"
              placeholder="Company Name (Optional)"
              value={user.company}
              onChange={handleChange}
              className="w-full px-3 py-1 border-2 border-gray-300 rounded"
            />
          </label>

          {/* Agency */}
          <div className="flex flex-col">
            <p className="text-sm font-semibold relative">
              Are you an Agency?{" "}
              <span className="text-red-600 absolute bottom-2">&#9733;</span>
            </p>
            <div className="flex items-center gap-6 mt-1">
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="agency"
                  value="yes"
                  checked={user.agency === "yes"}
                  onChange={handleChange}
                  required
                />
                <span className="text-sm">Yes</span>
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="agency"
                  value="no"
                  checked={user.agency === "no"}
                  onChange={handleChange}
                  required
                />
                <span className="text-sm">No</span>
              </label>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full p-2 bg-purple-600 text-white font-semibold text-md rounded-lg cursor-pointer active:bg-blue-400 mt-16"
          >
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateAccount;
