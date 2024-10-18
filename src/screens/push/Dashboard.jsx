import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Dashboard = () => {
  const navigate = useNavigate(); // Use useNavigate for redirecting

  // Logout function
  const handleLogout = async () => {
    try {
      // Get the CSRF token by hitting the sanctum/csrf-cookie endpoint
      await axios.get("http://bac-dev08:3000/sanctum/csrf-cookie", {
        withCredentials: true, // Ensures that cookies are sent in requests
      });

      // Now make the API request to log out
      const response = await axios.post(
        "http://bac-dev08:3000/api/logout", 
        {}, // No body content needed
        {
          withCredentials: true, // Ensures the CSRF token is sent in the cookies
        }
      );

      // Handle successful logout
      if (response.status === 200) {
        // Remove local storage data after logout
        localStorage.removeItem("isLoggedIn"); // Remove login status from localStorage
        localStorage.removeItem("ntlogin"); // Remove ntlogin if stored
        navigate("/"); // Redirect to login page
      } else {
        console.error("Logout failed");
      }
    } catch (error) {
      console.error("Error during logout:", error);
    }
  };

  return (
    <div>
      <h1>Welcome to the Dashboard!</h1>
      <button onClick={handleLogout} style={logoutButtonStyle}>
        Logout
      </button>
    </div>
  );
};

// Add some simple styling to the logout button
const logoutButtonStyle = {
  padding: "10px 20px",
  backgroundColor: "#056a94",
  color: "#ffffff",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
  fontSize: "16px",
};

export default Dashboard;
