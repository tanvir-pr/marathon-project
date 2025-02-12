import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import { Menu, X } from "lucide-react";

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-blue-500 text-white w-full fixed top-0 left-0 z-50">
            <div className="container mx-auto px-6 md:px-12 flex justify-between items-center py-3">
                {/* Logo */}
                <div className="flex items-center gap-2">
                    <img className="h-8" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYLDQVOgk6-6zU1nfRukhbpvOOUiIbdQt3iQ&s" alt="Logo" />
                    <Link to="/" className="text-xl font-bold">Ruibinner</Link>
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex gap-6">
                    <NavLink to="/" className={({ isActive }) => isActive ? "text-yellow-400" : "hover:text-orange-500"}>Home</NavLink>
                   
                    <NavLink to="/marathon" className={({ isActive }) => isActive ? "text-yellow-400" : "hover:text-orange-500"}>Marathon</NavLink>
                    <NavLink to="/contuctus" className={({ isActive }) => isActive ? "text-yellow-400" : "hover:text-orange-500"}>Contuct Us</NavLink>
                    <NavLink to="/aboutus" className={({ isActive }) => isActive ? "text-yellow-400" : "hover:text-orange-500"}>About Us</NavLink>
                    {user && <NavLink to="/dashboard" className={({ isActive }) => isActive ? "text-yellow-400" : "hover:text-orange-500"}>Dashboard</NavLink>}
                </div>

                {/* User Dropdown */}
                <div className="relative flex items-center gap-2">
                    {user ? (
                        <div className="flex items-center gap-2">
                            <img className="h-8 w-8 rounded-full" src={user?.photoURL} alt="User" />
                            <button onClick={logOut} className="bg-red-500 px-3 py-1 rounded-md">Logout</button>
                        </div>
                    ) : (
                        <Link to="/auth/login" className="bg-blue-500 px-3 py-1 rounded-md">Login</Link>
                    )}
                </div>

                {/* Mobile Menu Button */}
                <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-gray-700 py-3 px-6">
                    <NavLink to="/" className="block py-2 text-lg hover:text-yellow-400">Home</NavLink>
                    <NavLink to="/marathon" className="block py-2 text-lg hover:text-yellow-400">Marathon</NavLink>
                    {user && <NavLink to="/dashboard" className="block py-2 text-lg hover:text-yellow-400">Dashboard</NavLink>}
                </div>
            )}
        </nav>
    );
};

export default Navbar;
