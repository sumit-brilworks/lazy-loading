import React, { Suspense } from "react";
import { Link, Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <div>
        <div className="h-32 bg-sky-500">
          <div className="text-purple-400 text-4xl">
            <Link to={"/"}>Home</Link>
          </div>
          <div className="text-purple-400 text-4xl">
            <Link to={"/about"}>About</Link>
          </div>
          <div className="text-purple-400 text-4xl">
            <Link to={"/contact"}>Contact</Link>
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
