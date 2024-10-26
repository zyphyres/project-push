import React, { useState, useEffect } from "react";
import axios from 'axios';
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
import '@coreui/coreui/dist/css/coreui.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { menuMain, subMenu } from './MainMen';
import { menuDevMain, subDevMenu } from './DevMen';
import { NavLink } from 'react-router-dom';
import LoaderPush from "../../../assets/loader.gif";

const MainMenu = () => {
    const [DevData, setDevData] = useState(null);
    const ntlogin = localStorage.getItem("ntlogin"); // Assuming ntlogin is stored in localStorage.

    useEffect(() => {
        const fetchUsersAdmin = async () => {
            try {
                const response = await axios.get(`http://bac-dev08:3000/api/GetUsersAdmin/${ntlogin}`, {
                    withCredentials: true,  // Ensures credentials are included with the request
                });
                setDevData(response.data);
            } catch (error) {
                console.error("Error fetching profile data:", error);
            }
        };

        if (ntlogin) {
            fetchUsersAdmin();
        } else {
            console.error("Admin not found.");
        }
    }, [ntlogin]);

    if (!DevData) {
        return (
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100vw', height: '100vh' }}>
                <img src={LoaderPush} style={{ width: '300px', height: '180px' }} alt="Loading..." />
            </div>
        );
    }

    // Check if usersAdmin exists and if ntlogin matches
    const showDevMenu = DevData.usersAdmin && DevData.usersAdmin.ntlogin === ntlogin;

    return (
        <>
            {/* Programmers Menu */}
            {showDevMenu && (  // Correctly wrap with parentheses
                <>
                    {menuDevMain.map((menuDev, index) => (
                        <NavLink to={menuDev.path} key={index} style={({ isActive }) => isActive ? { border: '1px solid #ccc' } : {}}>
                            <CNavItem className="c-nav-items" href="#">
                                <CIcon customClassName="nav-icon" icon={menuDev.icon} />
                                <span className="c-nav-item"> {menuDev.title}</span>
                            </CNavItem>
                        </NavLink>
                    ))}
                    <CNavGroup className="c-nav-items"
                        toggler={
                            <>
                                <CIcon customClassName="nav-icon" icon={icon.cilNotes} /><span className="c-nav-item"> IT Tools</span>
                            </>
                        }
                    >
                        {subDevMenu.map((menuDev, index) => (
                            <CNavItem key={index} className="c-nav-items" href="#">
                                <span className="c-nav-item"> {menuDev.title}</span>
                            </CNavItem>
                        ))}
                    </CNavGroup>
                </>
            )}


            {/* Main Menu */}
            {menuMain.map((menu, index) => (
                <NavLink to={menu.path} key={index} style={({ isActive }) => isActive ? { border: '1px solid #ccc' } : {}}>
                    <CNavItem className="c-nav-items" href="#">
                        <CIcon customClassName="nav-icon" icon={menu.icon} />
                        <span className="c-nav-item"> {menu.title}</span>
                    </CNavItem>
                </NavLink>
            ))}
            <CNavGroup className="c-nav-items"
                toggler={
                    <>
                        <CIcon customClassName="nav-icon" icon={icon.cilNotes} /><span className="c-nav-item"> Readable Documents</span>
                    </>
                }
            >
                {subMenu.map((menu, index) => (
                    <CNavItem key={index} className="c-nav-items" href="#">
                        <span className="c-nav-item"> {menu.title}</span>
                    </CNavItem>
                ))}
            </CNavGroup>

            

        </>
    );
}

export default MainMenu;
