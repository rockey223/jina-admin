import React, { useState } from 'react';
import {
    FaTh,
    FaBars,
    FaUserAlt,
    FaRegChartBar,
    FaCommentAlt,
    FaShoppingBag,
    FaThList
}from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import './sidebar.css'
import logo from "../assets/logow.png"


const Sidebar = ({children}) => {
    const[isOpen ,setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);
    const menuItem=[
        {
            path:"/",
            name:"Dashboard",
            icon:<FaTh/>
        },
        {
            path:"/categories",
            name:"Categories",
            icon:<FaUserAlt/>
        },
        {
            path:"/faq",
            name:"faq",
            icon:<FaRegChartBar/>
        },
        {
            path:"/platform",
            name:"platform",
            icon:<FaCommentAlt/>
        },
        {
            path:"/products",
            name:"Products",
            icon:<FaShoppingBag/>
        },
        {
            path:"/userDetails",
            name:"User Details",
            icon:<FaThList/>
        }
    ]
    return (
        <div className="pra-sidebar-container">
           <div style={{width: isOpen ? "250px" : "50px"}} className="pra-sidebar">
               <div className="pra-top_section">
                   <h1 style={{display: isOpen ? "block" : "none"}} className="pra-logo"><img src={logo} alt="" /></h1>
                   <div style={{marginLeft: isOpen ? "50px" : "0px"}} className="pra-bars">
                       <FaBars onClick={toggle}/>
                   </div>
               </div>
               {
                   menuItem.map((item, index)=>(
                       <NavLink to={item.path} key={index} className="pra-link" activeclassName="pra-active">
                           <div className="pra-icon">{item.icon}</div>
                           <div style={{display: isOpen ? "block" : "none"}} className="pra-link_text">{item.name}</div>
                       </NavLink>
                   ))
               }
           </div>
           <main>{children}</main>
        </div>
    );
};

export default Sidebar;