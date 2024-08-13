import React from "react";
import { useRouteError, Link, isRouteErrorResponse } from "react-router-dom";

function ErrorElement() {
  const error = useRouteError();

  console.log(
    "This is a test for isRouteErrorResponse method :",
    isRouteErrorResponse(error)
  );

  console.log("Error : ", error);
  return (
    <div>
      <div>{error.message}</div>
      <Link>Go to the Home Page</Link>
    </div>
  );
}

export default ErrorElement;
