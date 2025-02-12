import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import AuthContext from "../context/AuthContext";



const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);


    return (
        <div className="overflow-x-clip">
            <div
                className={
                    location.pathname === '/'
                        ? 'flex flex-wrap items-center justify-around border-white bg-white px-4 sm:px-10 md:px-20 mx-4 sm:mx-8 md:mx-16 rounded-t-xl mt-2'
                        : 'mt-2 flex flex-wrap items-center justify-around border-white px-4 sm:px-10 md:px-20 mx-4 sm:mx-8 md:mx-16'
                }
            >
                <div className="flex flex-col sm:flex-row justify-center items-center gap-2">
                    <div>
                        <img className="h-[30px]" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYLDQVOgk6-6zU1nfRukhbpvOOUiIbdQt3iQ&s" alt="" />
                    </div>
                    <div>
                        <a className="btn btn-ghost text-lg sm:text-xl">Ruibinner</a>
                    </div>
                </div>

                <div className="flex flex-wrap justify-center items-center gap-2">
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            `font-bold text-sm sm:text-base border-2 rounded-2xl p-2 px-4 ${isActive ? 'text-warning bg-slate-200' : 'hover:text-orange-500'
                            }`
                        }
                    >
                        Home
                    </NavLink>


                    <NavLink
                        to="/marathon"
                        className={({ isActive }) =>
                            `font-bold text-sm sm:text-base border-2 rounded-2xl p-2 px-4 ${isActive ? 'text-warning bg-slate-200' : 'hover:text-orange-500'
                            }`
                        }
                    >
                        Marathon
                    </NavLink>
                    
                   
                    
                    <NavLink
                        to="/dashboard"
                        className={({ isActive }) =>
                            `font-bold text-sm sm:text-base border-2 rounded-2xl p-2 px-4 ${isActive ? 'text-warning bg-slate-200' : 'hover:text-orange-500'
                            }`
                        }
                    >
                        Dashboard
                    </NavLink>
                </div>

                <div className="flex flex-col sm:flex-row items-center bg-gray-300 p-2 rounded-lg gap-2">
                    {user && user?.email ? (
                        <div>
                            <img className="h-[30px] rounded-full" src={user?.photoURL} alt="" />
                        </div>
                    ) : (
                        <button className="btn btn-ghost btn-circle">
                            <i className="fa-regular fa-user"></i>
                        </button>
                    )}

                    <div>
                        {user && user?.email ? (
                            <button onClick={logOut}>Logout</button>
                        ) : (
                            <Link to="/auth/login">Login</Link>
                        )}
                    </div>
                </div>
            </div>
        </div>


    );
};

export default Navbar;