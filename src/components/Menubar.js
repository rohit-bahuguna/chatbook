import React from 'react'
import {useUserAuth} from "../context/UserAuthContext";
import { useNavigate } from "react-router-dom"

const Menubar = ({handleToggleDarkMode}) => {

    const { logOut, user } = useUserAuth();
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };
    return (
        <div className="header">
             {/*the heading of our notes app*/}
        <h1><span style={{color:"#308d46"}}>React</span> Notes</h1>
         {/*this is our toggle button 
        using this button we can change the background theme for our application*/}
       
         <div className="user"> {user && user.email}</div>
        <button onClick={handleLogout}>Log Out</button>
        <button onClick={()=>handleToggleDarkMode((previousDarkMode)=>!previousDarkMode)} className="save">Change Mode</button>
        </div>
    )
}

export default Menubar