import React from "react";
import { useNavigate } from "react-router-dom";
import '@coreui/coreui/dist/css/coreui.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { MainLogo, PushLogo } from "../../assets";
import { 
    CSidebar,
    CSidebarBrand,
    CSidebarHeader,
    CSidebarNav, 
    CNavTitle,
    CNavItem ,
    CBadge ,
    CImage,
    CNavGroup,
    CSidebarToggler } from '@coreui/react';

import { CIcon } from '@coreui/icons-react';
import { cilSpeedometer, cilPuzzle, cilCloudDownload, cilLayers } from '@coreui/icons';

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


  return (

<CSidebar className="border-end">
  <CSidebarHeader className="border-bottom">
    <CSidebarBrand><CImage rounded thumbnail src={MainLogo} width={200} height={200} /></CSidebarBrand>
  </CSidebarHeader>
  <CSidebarNav>
    <CNavTitle>Main Menu</CNavTitle>
    <CNavItem href="#"><CIcon customClassName="nav-icon" icon={cilSpeedometer} /> Nav item</CNavItem>
    <CNavItem href="#"><CIcon customClassName="nav-icon" icon={cilSpeedometer} /> With badge <CBadge color="primary ms-auto">NEW</CBadge></CNavItem>
    <CNavGroup
      toggler={
        <>
          <CIcon customClassName="nav-icon" icon={cilPuzzle} /> Nav dropdown
        </>
      }
    >
      <CNavItem href="#"><span className="nav-icon"><span className="nav-icon-bullet"></span></span> Nav dropdown item</CNavItem>
      <CNavItem href="#"><span className="nav-icon"><span className="nav-icon-bullet"></span></span> Nav dropdown item</CNavItem>
    </CNavGroup>
    <CNavItem href="https://coreui.io"><CIcon customClassName="nav-icon" icon={cilCloudDownload} /> Download CoreUI</CNavItem>
    <CNavItem href="https://coreui.io/pro/"><CIcon customClassName="nav-icon" icon={cilLayers} /> Try CoreUI PRO</CNavItem>
  </CSidebarNav>
  <CSidebarHeader className="border-top">
    <CSidebarToggler />
  </CSidebarHeader>
</CSidebar>







/* <button onClick={handleLogout} style={logoutButtonStyle}>
        Logout
      </button> */
  );
};








export default Dashboard;
