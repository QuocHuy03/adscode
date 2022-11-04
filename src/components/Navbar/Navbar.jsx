import React, { Fragment } from "react";
import { FaUserCircle } from "react-icons/fa";
import { FaShoppingBag } from "react-icons/fa";
import { useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { auth } from "../../firebase";

const Navbar = (props) => {
  const [open, setOpen] = React.useState(false);
  // const [flyer, setFlyer] = React.useState(false);
  // const [flyerTwo, setFlyerTwo] = React.useState(false);
  const state = useSelector((state) => state.addHandleCart);
  // đăng xuất
  // async function handleLogout() {
  //   setLoading(true);
  //   try {
  //     await logout();
  //   } catch (error) {
  //     alert("error!");
  //   }
  // }
  const navigate = useNavigate();
  const handleLogout = () => {
    auth.signOut();
    navigate("/signin");
  };
  return (
    <div className="relative bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <NavLink to={`/`}>
              <span className="sr-only">Workflow</span>
              <img
                className="h-8 w-auto sm:h-10"
                src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                alt=""
              />
            </NavLink>
          </div>

          <div className="-mr-2 -my-2 md:hidden">
            <button
              type="button"
              className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              onClick={() => setOpen(!open)}
            >
              <span className="sr-only">Open menu</span>
              {/* Heroicon name: outline/menu */}
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>

          <nav className="hidden md:flex space-x-10">
            <NavLink
              to={`/`}
              className="text-base font-medium text-gray-500 hover:text-gray-900"
            >
              Home
            </NavLink>
            <NavLink
              to={`/product`}
              className="text-base font-medium text-gray-500 hover:text-gray-900"
            >
              Products
            </NavLink>

            <NavLink
              to={`/cart`}
              className="text-base font-medium text-gray-500 hover:text-gray-900"
            >
              <FaShoppingBag /> ({state.length})
            </NavLink>
          </nav>

          <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
            {props.email ? (
              <Fragment>
                <FaUserCircle className="pr-1 text-xl" />
                <p> {props.email}</p>
                <button
                  className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </Fragment>
            ) : (
              <Fragment>
                <NavLink
                  to={`/signin`}
                  className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900"
                >
                  Sign in
                </NavLink>
                <NavLink
                  to={`/signup`}
                  className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                >
                  Sign up
                </NavLink>
              </Fragment>
            )}
          </div>
        </div>
      </div>
      {/*
    Mobile menu, show/hide based on mobile menu state.

    Entering: "duration-200 ease-out"
      From: ""
      To: ""
    Leaving: "duration-100 ease-in"
      From: "opacity-100 scale-100"
      To: "opacity-0 scale-95"
  */}

      <div
        className={
          open
            ? "z-10 opacity-100 scale-100 transition ease-out duration-200 absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
            : "opacity-0 scale-95 absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
        }
      >
        <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
          <div className="pt-5 pb-6 px-5">
            <div className="flex items-center justify-between">
              <div>
                <img
                  className="h-8 w-auto"
                  src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                  alt="Workflow"
                />
              </div>
              <div className="-mr-2">
                <button
                  type="button"
                  className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                  onClick={() => setOpen(!open)}
                >
                  <span className="sr-only">Close menu</span>
                  {/* Heroicon name: outline/x */}
                  <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div className="mt-6">
              <nav className="grid gap-y-8">
                <NavLink
                  to={`/`}
                  className="-m-3 flex items-center rounded-md hover:bg-gray-50"
                >
                  <span className="ml-3 text-base font-medium text-gray-900">
                    Home
                  </span>
                </NavLink>
                <NavLink
                  to={`/product`}
                  className="-m-3 flex items-center rounded-md hover:bg-gray-50"
                >
                  <span className="ml-3 text-base font-medium text-gray-900">
                    Product
                  </span>
                </NavLink>
                <NavLink
                  to={`/cart`}
                  className="-m-3 flex items-center rounded-md hover:bg-gray-50"
                >
                  <span className="ml-3 text-base font-medium text-gray-900">
                    <FaShoppingBag /> ({state.length})
                  </span>
                </NavLink>
              </nav>
            </div>
          </div>
          <div className="pb-2 px-5 space-y-6">
            <div>
              {props.email ? (
                <Fragment>
                  <p className="w-full flex items-center justify-center px-4 pb-5">
                    {" "}
                    {props.email}
                  </p>
                  <button
                    onClick={handleLogout}
                    className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                  >
                    Logout
                  </button>
                </Fragment>
              ) : (
                <Fragment>
                  <NavLink
                    to="/signup"
                    className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                  >
                    Sign Up
                  </NavLink>
                  <p className="mt-3 text-center text-base font-medium text-gray-500">
                    Existing customer ?{" "}
                    <NavLink
                      to="signin"
                      className="text-indigo-600 hover:text-indigo-500"
                    >
                      Sign In
                    </NavLink>
                  </p>
                </Fragment>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
