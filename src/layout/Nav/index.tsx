import Link from "next/link";
import React, { useState } from "react";
import NavItem from "./NavItem";

const MENU_LIST = [
    { text: "Home", href: "/" },
    { text: "About Us", href: "/about" },
    { text: "Contact", href: "/contact" },
];
const Navbar = () => {
    const [navActive, setNavActive] = useState(false);
    const [activeIdx, setActiveIdx] = useState(-1);

    return (
            <div className="font-poppins container bg-amber-50 mx-auto flex items-center px-6 py-2 h-24">
                        <h1 className="font-bold text-amber-800">TINPET</h1>
                {/*<div*/}
                {/*    onClick={() => setNavActive(!navActive)}*/}
                {/*    className={`nav__menu-bar`}*/}
                {/*>*/}
                {/*</div>*/}
                {/*<div className={`${navActive ? "active" : ""} flex items-center just`}>*/}
                 <div className="grow">
                     <div className="flex items-center justify-center gap-2 md:gap-8">
                         {MENU_LIST.map((menu, idx) => (
                             <Link href={menu.href} key={idx}> {menu.text}</Link>
                         ))}
                     </div>
                     <div>
                         <Link href="register" className="mr-2 font-bold">Sign up</Link>
                         <Link href="login" className="font-bold">Login</Link>
                     </div>
                </div>
            </div>
    );
};

export default Navbar;