import React, { useState, useEffect } from "react";
import Navigation from "../../navigation/Navigation";
import { useNavigate, useLocation  } from "react-router-dom";
import Swal from 'sweetalert2';
import ProfileImg from "../../../assets/profile.png";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/styles.css';
import axios from "axios";
import BackToTopButton from './BackToTopButton';
import { useToast } from "@chakra-ui/react";


const MasterLayout = ({ children }) => {
    const toast = useToast();
    const navigate = useNavigate();
    const [name, setEmployeeName] = useState(null);
    const [menuOpen, setMenuOpen] = useState(false);

    // Fetch the employee name from localStorage or API
    useEffect(() => {
        const storedName = localStorage.getItem("name");
        if (storedName) {
            setEmployeeName(storedName);
        } else {
            console.error("Employee Name not found in localStorage.");
        }
    }, []);

    // Toggle the menu on profile image click
    const toggleMenu = () => {
        setMenuOpen(prevState => !prevState);
    };

    // Navigate to the ProfilePage
    const MyProfile = () => {
        navigate('/profile'); 
    };

    // Handle logout
    const handleLogout = async () => {
        Swal.fire({
            title: 'Are you sure?',
            text: "Do you want to logout?",
            icon: 'warning',
            position: 'top-end',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, logout!',
            toast: true,
            customClass: {
                popup: 'my-custom-swal'
            }
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    toast({
                        position: "top-right",
                        title: "Logout",
                        description: "Logging out..",
                        status: "error",
                        duration: 800,
                        isClosable: true,
                      });

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
    const location = useLocation();

    
    const getTitleFromPath = (path) => {
      if (path === "/") return " ";
      return path
        .replace("/", "")
        .replace("-", " ")
        .split("/") 
        .map((segment) => segment.toUpperCase())
        .join(" "); 
    };
  
    const title = getTitleFromPath(location.pathname);

    return (
        <>
            
                <div className="main-content">
                    <Navigation />
                    <div className="Main-wrapper">
                        <div className="wrap">
                            <h1 className="pageTitle">
                                {title ? title : ""}
                            </h1>
                            <div className="employee-info">
                            
                                <h4>Welcome,</h4>
                                <h3>{name ? name : "Loading..."}</h3>
                            </div>
                            <div className="profile-menu-wrapper">

                                <img
                                    className="profileImg"
                                    src={ProfileImg}
                                    alt="Profile Image"
                                    onClick={toggleMenu}
                                    style={{ cursor: "pointer" }}
                                />
                                {menuOpen && (
                                    <div className="profile-menu">
                                        <ul>
                                            <li onClick={(e) => { e.preventDefault(); MyProfile(); }}>My Profile</li>
                                            <li onClick={(e) => { e.preventDefault(); handleLogout(); }}>Logout</li>
                                        </ul>
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className="content-Wrapper">
                        <BackToTopButton />
                            {children}
                        </div>
                    </div>
                </div>
        </>
    );
};

export default MasterLayout;
