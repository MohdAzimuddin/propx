import { useNavigate } from "react-router-dom";
const WelcomePage = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full h-screen flex flex-col items-center gap-2 p-2 px-4 border-4">
      <div className="w-72 h-screen border-2 relative bg-neutral-100">
        <div className="absolute bottom-12 px-4">
          <h1 className="text-zinc-900 font-bold text-xl">Welcome to propX</h1>
          <p className="text-gray-600 text-md">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>

          <div className="flex flex-col gap-2 mt-6">
            {/* Create Account Button */}
            <button
              onClick={() => navigate("/create-account")}
              className="p-1 bg-purple-700 text-white font-semibold text-md rounded-lg cursor-pointer active:bg-purple-100"
            >
              Create Account
            </button>

            {/* login button */}
            <button
              onClick={() => navigate("/login")}
              className="p-1 bg-gray-300 text-zinc-800 font-semibold text-md rounded-lg cursor-pointer active:bg-gray-100"
            >
              Already Registered? Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;
