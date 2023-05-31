import Link from "next/link";
import {Menu} from "react-feather";
import {useState} from "react";

const MENU_LIST = [
    {text: "Home", href: "/"},
    {text: "About Us", href: "/about"},
    {text: "Contact", href: "/contact"},
    {text: "Adopt Pets", href: "/adopt"},
];

const Navbar = () => {
    const [smallMenuOpen, setSmallMenuOpen] = useState(false)
    return (
        <>
            <div
                className="sticky top-0 text-amber-800  font-poppins bg-amber-50 flex items-center px-20 py-2 h-20 mx-0">
                <h1 className="font-bold ">TINPET</h1>
                <div className="grow">
                    <div className="hidden sm:flex items-center justify-center gap-2 md:gap-16">
                        {MENU_LIST.map((menu, idx) => (
                            <Link href={menu.href} key={idx}> {menu.text}</Link>
                        ))}
                    </div>
                </div>
                <div className="flex grow justify-end sm:hidden" onClick={() => {
                    setSmallMenuOpen(!smallMenuOpen)
                }}>
                    <Menu size={24} color="#92400e"/>
                </div>
                <div className="hidden sm:block">
                    <Link href="register" className="mr-8 font-bold">Sign up</Link>
                    <Link href="login" className="font-bold">Login</Link>
                </div>
            </div>
            {
                smallMenuOpen?
                    <div className="flex fixed w-screen flex-col grow items-center sm:hidden bg-amber-50 text-amber-800 gap-8">
                        {MENU_LIST.map((menu, idx) => (
                            <Link href={menu.href} key={idx} onClick={() => {
                                setSmallMenuOpen(!smallMenuOpen)
                            }}> {menu.text}</Link>
                        ))}
                        <Link href="register" className="font-bold" onClick={() => {
                            setSmallMenuOpen(!smallMenuOpen)
                        }}>Sign up</Link>
                        <Link href="login" className="font-bold" onClick={() => {
                            setSmallMenuOpen(!smallMenuOpen)
                        }}>Login</Link>
                    </div>
                    : null
            }
        </>

    );
};

export default Navbar;