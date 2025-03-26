import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    if (!email) {
      alert("Please enter your email address");
      return;
    }
    if (!password) {
      alert("Please enter your Password");
      return;
    }
    const userData = JSON.parse(localStorage.getItem(email));
    if (userData && userData.password === password) {
      navigate("/account-settings", { state: userData });
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="w-full h-screen flex flex-col items-center gap-2 p-2 px-4 border-4">
      <div className="w-72 h-screen border-2 relative bg-neutral-100">
        <div className="absolute top-8 px-4">
          <h1 className="text-zinc-900 font-bold text-xl">
            Signin to Your <div>propX account</div>
          </h1>
          <p className="text-gray-600 text-md mt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <form
            className="flex flex-col gap-2 mt-6"
            onSubmit={(e) => e.preventDefault()}
          >
            {/* Email */}
            <label htmlFor="email" className="flex flex-col">
              <p className="text-blue-600 text-xs font-bold">Email Address</p>
              <input
                type="email"
                placeholder="Enter email addresss"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-2 py-1 border-2 border-gray-300"
                required
              />
            </label>
            {/*Password*/}

            <label htmlFor="password" className="flex flex-col">
              <p className="text-blue-600 text-xs font-bold">Password</p>
              <input
                type="password"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-2 py-1 border-2 border-gray-300"
                required
              />
            </label>

            {/* login Button */}
            <button
              onClick={handleLogin}
              className="p-1 bg-gray-400 text-white mt-4 font-semibold text-md rounded-lg cursor-pointer active:bg-blue-600"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
