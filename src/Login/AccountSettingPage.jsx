import { useLocation } from "react-router-dom";
import userDefaultImage from "./assets/defaultUserImage.jpg";

const AccountSettings = () => {
  const location = useLocation();
  const {
    fullName = "User Name",
    email = "user@example.com",
    profileImage,
  } = location.state || {};

  return (
    <div className="w-full h-screen flex justify-center items-center pt-8 bg-neutral-100">
      <div className="w-96 h-screen max-h-screen border border-gray-300 bg-white rounded-lg shadow-md">
        <div className="p-4 border-b shadow-lg">
          <h2 className="text-gray-900 font-bold text-lg">Account Settings</h2>
        </div>

        <div className=" border-b-4 border-dotted">
          <div className="p-4 flex items-center gap-4">
            {/* user image */}
            <img
              src={profileImage || userDefaultImage}
              alt="User Profile"
              className="w-12 h-12 rounded-full border"
            />
            <div>
              <h3 className="text-gray-900 font-semibold">{fullName}</h3>
              <p className="text-gray-600 text-sm">{email}</p>
            </div>
          </div>

          {/* Description */}
          <div className="p-4 text-zinc-900 text-sm">
            Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam
            Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam
            Erat, Sed Diam.
          </div>
        </div>

        {/* Spacer for additional settings */}
        <div className="border-t h-64"></div>
      </div>
    </div>
  );
};

export default AccountSettings;
