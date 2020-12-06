import React  from 'react';
import './index';
import logo from "./images/logo.jpg"

const Header =()=>{
    return (
    <>
        <div className="header">
            <img src={logo} alt="logo" width='70' height='50' />
            <h1>Notes</h1>
        </div>
    </>
    )
 }
        
    

export default Header;