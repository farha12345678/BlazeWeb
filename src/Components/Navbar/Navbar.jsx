
import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { Tooltip } from "react-tooltip";
import { AuthContext } from "../../Providers/AuthProvider";

const Navbar = () => {
    const {user , logOut} = useContext(AuthContext)
    
    const links = <>
    <NavLink className={({ isActive }) => isActive ? 'border-x-2 border-purple-400 text-purple-800 text-xl ' : 'text-xl border-x-2 '} to='/'><li>Home</li></NavLink>
    <NavLink className={({ isActive }) => isActive ? 'border-x-2 border-purple-400 text-purple-800 text-xl ' : 'text-xl border-x-2  '} to='/add'><li>Add Blogs</li></NavLink>
    <NavLink className={({ isActive }) => isActive ? 'border-x-2 border-purple-400 text-purple-800 text-xl ' : 'text-xl border-x-2  '} to='/all'><li>All Blogs</li></NavLink>
    <NavLink className={({ isActive }) => isActive ? 'border-x-2 border-purple-400 text-purple-800 text-xl ' : 'text-xl border-x-2  '} to='/featured'><li>Featured Blogs</li></NavLink>
    <NavLink className={({ isActive }) => isActive ? 'border-x-2 border-purple-400 text-purple-800 text-xl ' : 'text-xl border-x-2  '} to='/wishlist'><li>Wishlist</li></NavLink>
    



  </>




  return (
    <div>
    <div>
      <div className=" bg-purple-100">
      
  
  <div className="navbar-center">
  <div className="flex items-center justify-center ">
            <img className="w-12 "  src="/icon.ico" alt="" />
            <a className="text-4xl font-extrabold gap-0 ">Blaze<span className="text-purple-600">Web</span></a>
          </div>

  </div>
  
  </div>
</div>
     
      <div className="navbar bg-purple-200">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[2] p-2 shadow bg-base-100 rounded-box w-52">
              {links}
            </ul>
          </div>
          {/* <div className="flex">
            <img className="w-12 "  src="/icon.ico" alt="" />
            <a className="text-4xl font-extrabold gap-0">Blaze<span className="text-purple-600">Web</span></a>
          </div> */}

          {/* <div className="navbar hidden lg:flex mt-2 ml-10">
            <ul className="menu menu-horizontal font-normal gap-x-2">
              {links}
            </ul>
          </div> */}
          
        </div>
        <div className="navbar-center hidden lg:flex mt-2 ">
            <ul className=" menu-horizontal font-normal gap-x-8">
              {links}
            </ul>
          </div>
        <div className="navbar-end">
        {/* <div className=" hidden lg:flex mt-2 ">
            <ul className=" menu-horizontal font-normal gap-x-4">
              {links}
            </ul>
          </div> */}
         
          {
            user ? <>

              <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                  <div data-tooltip-id="my-tooltip" >
                    <img data-tooltip-id="my-tooltip" data-tooltip-place="bottom" data-tooltip-content={user.displayName} className=" h-10 w-10 rounded-full"  src={user.photoURL} alt="" />
                  </div>
                </div>
                {/* <a data-tooltip-id="my-tooltip" data-tooltip-content="Hello world!">
                  
                </a> */}
                
                <Tooltip id="my-tooltip" />
                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[2] p-2 shadow bg-base-100 rounded-box w-20 md:w-20">
                  <div className="tooltip" data-tip={user.displayName}>
                    <img className="tooltip h-10 w-10 rounded-full" data-tip={user.displayName} src={user.photoURL} alt="" />
                  </div>


                  <button onClick={logOut}>Log Out</button>
                </ul>
              </div>
              <div className=" hidden md:hidden lg:flex">
                <ul className="menu menu-horizontal ">
                <div data-tooltip-id="my-tooltip" >
                    <img data-tooltip-id="my-tooltip" data-tooltip-place="bottom" data-tooltip-content={user.displayName} className="mr-2 h-10 w-10 rounded-full"  src={user.photoURL} alt="" />
                  </div>
                  <Tooltip id="my-tooltip" />
               
                  <Link><li onClick={logOut} className="font-bold   text-xl text-blue-500">Log Out</li></Link>

                </ul>
              </div>



            </>
              : <>
                <Link to='/login'><button className="font-medium text-xl ml-4 text-purple-600">Log In</button></Link>
                <Link to='/register'><button className="font-medium  text-xl ml-4 text-purple-600">Register</button></Link>
              </>
          }
        </div>
      </div>
    </div>
    );
};

export default Navbar;