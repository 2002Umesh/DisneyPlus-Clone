import React from "react";
import { NavLink, Navigate, Outlet } from "react-router-dom";
import { FaClipboardUser, FaMessage } from "react-icons/fa6";
import { FaHome } from "react-icons/fa";
import { useAuth } from "../../mystore/auth";

function AdminLayout() {
  const { isLoading, isAdmin } = useAuth();
  console.log("admin:",isAdmin);
  if (isLoading) {
    return <h1 className="h-screen text-center">Loading ...</h1>;
  }
  if (!isAdmin) {
    return <Navigate to="/" />;
  }

  return (
    <>
      <header className=" bg-gradient-to-r from-emerald-500 to-green-600 text-white py-4 sticky top-0 z-50">
        <div className="container mx-auto">
          <nav>
            <ul className="flex justify-center space-x-6">
              <NavLink
                to="/admin/users"
                className="flex items-center hover:text-teal-200"
              >
                <li className="flex items-center">
                  <FaClipboardUser size={21} className="mr-2" />
                  Users
                </li>
              </NavLink>
              <NavLink
                to="/admin/contacts"
                className="flex items-center hover:text-teal-200"
              >
                <li className="flex items-center">
                  <FaMessage size={21} className="mr-2" />
                  Contacts
                </li>
              </NavLink>
              <NavLink to="/" className="flex items-center hover:text-teal-200">
                <li className="flex items-center">
                  <FaHome size={21} className="mr-2" />
                  Home
                </li>
              </NavLink>
            </ul>
          </nav>
        </div>
      </header>
      <Outlet />
    </>
  );
}

export default AdminLayout;
