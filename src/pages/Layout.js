import React from 'react'
import { Outlet } from 'react-router-dom'
import { menuList } from "../utils/constant.js";

import { Header } from '../components/headers/Header'
import { Footer } from '../components/footer/Footer'
const Layout = () => {
    return (
        <div>
            <Header companyName="Portfolio" menuList={menuList} />

            <Outlet />

            <Footer title="Pranav Portfolio" footerCopyRight="Pranav. All rights reserved" />

        </div>
    )
}

export default Layout