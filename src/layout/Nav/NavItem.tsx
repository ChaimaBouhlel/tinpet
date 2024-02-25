import Link from "next/link";

// @ts-ignore
const NavItem = ({text, href, active}) => {
    return (
        <Link href={href} className={`nav__item ${
            active ? "active" : ""
        }`}>
            {text}
        </Link>
    );
};

export default NavItem;