import React, { useState, useEffect } from "react";
import SignIn from "./components/SignIn";
import LogIn from "./components/LogIn";
import Home from "./Home";
import ProtectedRoute from "./components/ProtectedRoute";
import UserAuthcontextProvider from "./context/UserAuthContext";
import { Routes, BrowserRouter, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <UserAuthcontextProvider>
        <BrowserRouter>
          <Routes>
            <Route
              path="/home"
              element={
                <ProtectedRoute>
                  <Home />
                </ProtectedRoute>
              }
            />
            <Route path="/" element={<SignIn />} />
            <Route path="/login" element={<LogIn />} />
          </Routes>
        </BrowserRouter>
      </UserAuthcontextProvider>
    </>
  );
};

export default App;
