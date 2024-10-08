import { useContext } from "react";
import { NavLink } from "react-router-dom";
 
import { AuthContext } from "../../components/Provider/Authprovider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaShoppingCart } from "react-icons/fa";

const NavBar = () => {
    const {user,userSignOut} =useContext(AuthContext);
    console.log(user);
    const handleLogout =() =>{
        userSignOut()
        .then(()=>{})
        .catch(error =>console.error(error))
          
    }

    const navOptions = <>
        <li>
            <NavLink to="/">Home</NavLink>
        </li>
        <li>
            <NavLink to="/contact-us">Contact Us</NavLink>
        </li>
        <li>
            <NavLink to="/dashboard">Dashboard</NavLink>
        </li>
        <li>
            <NavLink to="/menu">Our Menu</NavLink>
        </li>   
        <li>
            <NavLink to="/order/salad">Order Food</NavLink>
        </li>
        <li>
            <NavLink to="/"> 
            <FaShoppingCart className="mr-2"></FaShoppingCart>
            <div className="badge badge-secondary"> 
            +4</div>
            </NavLink>
        </li>

       <li>

      
       
        {
          
            user? <> <div>
                
                
            <button onClick={handleLogout}>Sign Out</button>
            {
                user?.displayName
            }
            {
                user?.photo
            }

            </div>
              
            </> : 
            <>
              <li>
                <NavLink to="/login">Login</NavLink>
              </li>
            
            </>
        }
         </li>
    </>

    return (
        <div className="navbar bg-black text-white bg-opacity-30 z-10 fixed max-w-[1280px]">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52">
                        {navOptions}
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl">Bistro Boss</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu bg-transparent menu-horizontal px-1">
                    {navOptions}
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn">Button</a>
            </div>
        </div>
    );
};

export default NavBar;