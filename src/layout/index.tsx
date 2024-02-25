import Nav from "@/layout/Nav";
import Footer from "@/layout/Footer";
import React from "react"

interface LayoutProps {
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <>
            <Nav/>
            <main>{children}</main>
            <Footer/>
        </>
    );
}

export default Layout