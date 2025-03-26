import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import WelcomePage from "./Login/WelcomePage";
import LoginPage from "./Login/LoginPage";
import CreateAccount from "./Login/CreateAccountPage";
import AccountSettings from "./Login/AccountSettingPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/create-account" element={<CreateAccount />} />
        <Route path="/account-settings" element={<AccountSettings />} />
      </Routes>
    </Router>
  );
};

export default App;
