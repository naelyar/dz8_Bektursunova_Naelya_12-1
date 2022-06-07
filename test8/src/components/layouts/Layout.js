import React from "react";
import { Outlet } from "react-router-dom";
import Menu from "../menu/Menu";

const Layout = (props) => (
    <div>
    <Menu/>
    <Outlet/>

    </div>

)


export default Layout