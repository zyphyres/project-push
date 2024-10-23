import React from 'react'
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
import '@coreui/coreui/dist/css/coreui.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { menuMain, subMenu } from './MainMen';
import { NavLink } from 'react-router-dom';
import ProfilePage from '../../push/ProfilePage';






const MainMenu = () => {
  return (
    <>
             {menuMain.map((menu,index)=>(
                <NavLink to={menu.path} key={index}   style={({ isActive }) => 

                    isActive ? { border: '1px solid #ccc' } : {}
    
                }>
                 <CNavItem  className="c-nav-items" href="#">
                    <CIcon  customClassName="nav-icon" icon={menu.icon} />
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
                    {subMenu.map((menu,index)=>(
                        <CNavItem key={index} className="c-nav-items" href="#">
                            <span className="c-nav-item"> {menu.title}</span>
                        </CNavItem>

                     ))}
                    
                 </CNavGroup>
                


    </>
  )
}

export default MainMenu