// General Imports
import { Routes, Route } from "react-router-dom";
import "./App.css";

// Pages Imports
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import LogoutPage from "./pages/Logout/LogoutPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import SocialfeedPage from "./pages/SocialfeedPage/SocialfeedPage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import EditInfoPage from "./pages/EditInfoPage/EditInfoPage";
import EditPostPage from "./pages/EditPostPage/EditPostPage";
import EditNonRecommendationPage from "./pages/EditNonRecommedation/EditNonRecommendation";
import EditRecommendationPage from "./pages/EditRecommendation/EditRecommendation";
import DirectMessage from "./pages/DirectMessage/DirectMessage";

// Component Imports
import Navbar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";

// Util Imports
import PrivateRoute from "./utils/PrivateRoute";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <HomePage />
            </PrivateRoute>
          }
        />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/logout" element={<PrivateRoute><LogoutPage /></PrivateRoute>} />
        <Route path="/socialfeed" element={<PrivateRoute><SocialfeedPage /></PrivateRoute>} />
        <Route path="/DM" element={<PrivateRoute><DirectMessage /></PrivateRoute>} />
        <Route path="/profile/:id" element={<PrivateRoute><ProfilePage /></PrivateRoute>} />
        <Route path="/profile/editinfo/:id" element={<PrivateRoute><EditInfoPage /></PrivateRoute>} />
        <Route path="/editpost/:id" element={<PrivateRoute><EditPostPage /></PrivateRoute>} />
        <Route path="/editnonrecommendation/:id" element={<PrivateRoute><EditNonRecommendationPage /></PrivateRoute>} />
        <Route path="/editrecommendation/:id" element={<PrivateRoute><EditRecommendationPage /></PrivateRoute>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
