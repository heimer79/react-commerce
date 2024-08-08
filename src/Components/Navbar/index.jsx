
import { NavLink } from "react-router-dom"  

export const Navbar = () => {
    const activeStyle = 'underline underline-offset-4'

    const navLinkClass = ({ isActive }) => {
        return isActive ? activeStyle : undefined
    }

    return (
        <nav className="flex justify-between items-center fixed z-10  top-0 w-full py-5 px-8 text-sm font-light">
            <ul className="flex items-center gap-3">
                <li className="font-semibold text-lg">
                    <NavLink to="/" >
                        Shopi
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/" className={navLinkClass}>
                        All
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/clothes" className={navLinkClass}>
                        Clothes
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/electronics" className={navLinkClass}>
                        Electronics
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/furnitures" className={navLinkClass}>
                        Furnitures
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/toys" className={navLinkClass}>
                        Toys
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/others" className={navLinkClass}>
                        Others
                    </NavLink>
                </li>
            </ul>

            <ul className="flex items-center gap-3" >
                <li>
                    <NavLink to="mailto:heimer79@gmail.com" className='text-black/60 '>
                        heimer79@gmail.com
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/my-orders" className={navLinkClass}>
                        My Orders 
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/my-account" className={navLinkClass}>
                        My Account 
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/electronics" className={navLinkClass}>
                        Sign In 
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/cart" className={navLinkClass}>
                        🛒 0
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}

