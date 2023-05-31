import Nav from "@/layout/Nav";
import Footer from "@/layout/Footer";
import React from "react"

const Layout: React.FC= ({ children }) => {
    return (
        <>
            <Nav/>
            <main>{children}</main>
            <Footer/>
        </>
    );
}
export default Layout