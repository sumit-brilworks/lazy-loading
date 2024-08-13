import React, { Suspense } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import { cn } from "./utilities/cn";

function Layout() {
  return (
    <>
      <div>
        <div className="h-32 bg-sky-500">
          <div className="text-purple-400 text-4xl">
            <NavLink to={"/"}>Home</NavLink>
          </div>
          <div className="text-purple-400 text-4xl">
            <NavLink
              className={cn(({ isActive, isPending }) => {
                return isActive
                  ? "text-5xl text-red-600 animate-bounce h-24"
                  : "";
              }, "text-yellow-600")}
              to={"/about"}
            >
              About
            </NavLink>
          </div>
          <div className="text-purple-400 text-4xl">
            <NavLink to={"/contact"}>Contact</NavLink>
          </div>
        </div>
      </div>
      <div>
        <Suspense fallback={<p>Loading ...</p>}>
          <Outlet />
        </Suspense>
      </div>
    </>
  );
}

export default Layout;
