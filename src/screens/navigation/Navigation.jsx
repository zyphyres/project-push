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


    return (
        <div className='navWrapper'>
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
            </CSidebarNav>
            <CSidebarHeader className="border-top"></CSidebarHeader>
        </CSidebar>
        </div>
    );
};

export default Navigation;
