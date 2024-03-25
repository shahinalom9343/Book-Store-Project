import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="mb-4">
      <div className="navbar shadow-xl z-10">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>Listed Books</a>
              </li>
              <li>
                <a>Pages to Reload</a>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl lg:text-3xl">Book Vibe</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 font-semibold space-x-8">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-primary font-bold" : "font-bold"
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/listed_books"
              className={({ isActive }) =>
                isActive ? "text-primary font-bold" : "font-bold"
              }
            >
              Listed Books
            </NavLink>
            <NavLink
              to="/pages"
              className={({ isActive }) =>
                isActive ? "text-primary font-bold " : "font-bold "
              }
            >
              Pages to Read
            </NavLink>
          </ul>
        </div>
        <div className="navbar-end flex gap-3">
          <a className="btn btn-success text-white">Sign In</a>
          <a className="btn btn-accent text-white">Sign Up</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
