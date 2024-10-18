import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import '@coreui/coreui/dist/css/coreui.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../navigation/sidebarStyle.css';
import { MainLogo, PushLogo } from "../../assets";
import {
    CSidebar,
    CSidebarBrand,
    CSidebarHeader,
    CSidebarNav,
    CNavTitle,
    CNavItem,
    CBadge,
    CImage,
    CNavGroup,
    CSidebarToggler
} from '@coreui/react';

import { CIcon } from '@coreui/icons-react';
import * as icon from '@coreui/icons';

import axios from "axios";



const Navigation = () => {
    const navigate = useNavigate(); // Use useNavigate for redirecting

    const [theme, setTheme] = useState("light");

    // On component mount, check localStorage for the saved theme mode
    useEffect(() => {
        const savedTheme = localStorage.getItem("theme") || "light";
        setTheme(savedTheme);
        document.body.className = savedTheme; // Apply the saved theme to body
    }, []);

    // Function to toggle between light and dark mode
    const toggleTheme = () => {
        const newTheme = theme === "light" ? "dark" : "light";
        setTheme(newTheme);
        document.body.className = newTheme; // Apply the new theme to body
        localStorage.setItem("theme", newTheme); // Save the new theme in localStorage
    };

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


        <CSidebar className={`border-end custom-sidebar ${theme}`}>
            <CSidebarHeader className="border-bottom">
                <div className="clearfix">
                    <CSidebarBrand><CImage align="start" src={MainLogo} width={70} height={70} /><CImage align="start" src={PushLogo} width={100} height={100} /></CSidebarBrand>
                </div>
            </CSidebarHeader>
            <CSidebarNav colorScheme="dark">
                <CNavTitle className="c-nav-title">Main Menu</CNavTitle>
                <CNavItem className="c-nav-items" href="#"><CIcon customClassName="nav-icon" icon={icon.cilUser} /><span className="c-nav-item"> My Profile</span> </CNavItem>
                <CNavItem className="c-nav-items" href="#"><CIcon customClassName="nav-icon" icon={icon.cilFeaturedPlaylist} /><span className="c-nav-item"> Announcements</span></CNavItem>
                <CNavItem className="c-nav-items" href="#"><CIcon customClassName="nav-icon" icon={icon.cilVideo} /><span className="c-nav-item"> Reel Skills </span></CNavItem>
                <CNavItem className="c-nav-items" href="#"><CIcon customClassName="nav-icon" icon={icon.cilEnvelopeClosed} /><span className="c-nav-item"> Inbox</span></CNavItem>
                <CNavGroup className="c-nav-items"
                    toggler={
                        <>
                            <CIcon customClassName="nav-icon" icon={icon.cilNotes} /><span className="c-nav-item"> Readable Documents</span>
                        </>
                    }
                >
                    <CNavItem className="c-nav-items" href="#"><span className="c-nav-item"> AVAYA One-X Guide</span></CNavItem>
                    <CNavItem className="c-nav-items" href="#"><span className="c-nav-item"> Paid Leaves</span></CNavItem>
                    <CNavItem className="c-nav-items"href="#"><span className="c-nav-item"> Company Manuals</span></CNavItem>
                    <CNavItem className="c-nav-items"href="#"><span className="c-nav-item"> IT Security Policy</span></CNavItem>
                    <CNavItem className="c-nav-items"href="#"><span className="c-nav-item"> IT Training Modules</span></CNavItem>
                </CNavGroup>
                <CNavItem className="c-nav-items" href="#"><CIcon customClassName="nav-icon" icon={icon.cilNewspaper} /><span className="c-nav-item"> Newsletter</span></CNavItem>
                <CNavItem className="c-nav-items" href="#"><CIcon customClassName="nav-icon" icon={icon.cilSpeak} /><span className="c-nav-item"> Training Documents</span></CNavItem>
                <CNavItem className="c-nav-items" href="#"><CIcon customClassName="nav-icon" icon={icon.cilFeaturedPlaylist} /><span className="c-nav-item"> CSAW 2024</span></CNavItem>
                <CNavItem className="c-nav-items" href="#"><CIcon customClassName="nav-icon" icon={icon.cilJustifyLeft} /><span className="c-nav-item"> Scripts</span></CNavItem>
                <CNavItem className="c-nav-items" href="#"><CIcon customClassName="nav-icon" icon={icon.cilKeyboard} /><span className="c-nav-item"> Typing Test</span></CNavItem>
                <CNavItem className="c-nav-items" href="#"><CIcon customClassName="nav-icon" icon={icon.cilContact} /><span className="c-nav-item"> Grammar Test</span></CNavItem>
                <CNavItem className="c-nav-items" href="#" onClick={(e) => { e.preventDefault(); handleLogout(); }}>
                    <CIcon customClassName="nav-icon" icon={icon.cilExitToApp} /><span className="c-nav-item"> Logout</span>
                </CNavItem>
               {/* <div className="theme-toggle">
                <button onClick={toggleTheme} className="btn btn-outline-primary">
                    Switch to {theme === "light" ? "Dark" : "Light"} Mode
                </button>
                </div>  */}
            </CSidebarNav>
            <CSidebarHeader className="border-top"></CSidebarHeader>
        </CSidebar>

    );

};

export default Navigation;