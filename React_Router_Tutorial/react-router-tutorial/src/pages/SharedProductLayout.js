
import { Outlet } from "react-router-dom";
import Navbar from "../components/StyledNavbar";

import React from 'react'

const SharedProductLayout = () => {
    return (
        <>
          <h2>Products</h2>
          <Outlet />
        </>
      );
}

export default SharedProductLayout