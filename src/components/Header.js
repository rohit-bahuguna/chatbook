import React from "react";
import "../css/header.css"
import { Link } from "react-router-dom";

const Header = () => {
    
    return (
        <>
            <div className="header">
                <div className="logo">NOTE TAKER</div>
                <div className="tonggle"><button>Change Mode</button></div>
               
                <div className="login"><button><Link to="/login">Login</Link></button></div>
            </div>
        </>
    )
}

export default Header;
