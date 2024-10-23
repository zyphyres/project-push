import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import '@coreui/coreui/dist/css/coreui.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../navigation/sidebarStyle.css';
import Swal from 'sweetalert2';
import { MainLogo, PushLogo } from "../../assets";
import {
    CSidebar,
    CSidebarBrand,
    CSidebarHeader,
    CSidebarNav,
    CNavTitle,
    CNavItem,
    CImage,
    CSidebarToggler
} from '@coreui/react';
import MainMenu from "./menu/MainMenu";
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

    // Logout function with SweetAlert2 confirmation
    const handleLogout = async () => {
        Swal.fire({
            title: 'Are you sure?',
            text: "Do you want to logout?",
            icon: 'warning',
            position: 'top-end', // Position the modal in the top-right corner
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, logout!',
            toast: true,
            customClass: {
            popup: 'my-custom-swal' // Apply the custom size class here
            }
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    await axios.get("http://bac-dev08:3000/sanctum/csrf-cookie", {
                        withCredentials: true,
                    });

                    const response = await axios.post(
                        "http://bac-dev08:3000/api/logout",
                        {},
                        { withCredentials: true }
                    );

                    if (response.status === 200) {
                        localStorage.removeItem("isLoggedIn");
                        localStorage.removeItem("ntlogin");
                        navigate("/");
                    } else {
                        Swal.fire(
                            'Error!',
                            'Logout failed. Please try again.',
                            'error'
                        );
                    }
                } catch (error) {
                    Swal.fire(
                        'Error!',
                        'There was an error during logout. Please try again.',
                        'error'
                    );
                }
            }
        });
    };

    return (
        <CSidebar className={`border-end custom-sidebar ${theme}`}>
            <CSidebarHeader className="border-bottom">
                <div className="clearfix">
                    <CSidebarBrand>
                        <CImage align="start" src={MainLogo} width={70} height={70} />
                        <CImage align="start" src={PushLogo} width={100} height={100} />
                    </CSidebarBrand>
                </div>
            </CSidebarHeader>
            <CSidebarNav colorScheme="dark">
                <CNavTitle className="c-nav-title">Main Menu</CNavTitle>
                <MainMenu />
                <CNavItem className="c-nav-items" href="#" onClick={(e) => { e.preventDefault(); handleLogout(); }}>
                    <CIcon customClassName="nav-icon" icon={icon.cilExitToApp} />
                    <span className="c-nav-item"> Logout</span>
                </CNavItem>
            </CSidebarNav>
            <CSidebarHeader className="border-top"></CSidebarHeader>
        </CSidebar>
    );
};

export default Navigation;
