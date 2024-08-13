import React from "react";
import { useRouteError, Link } from "react-router-dom";

function ErrorElement() {
  const error = useRouteError();
  console.log("Error : ", error);
  return (
    <div>
      <div>{error.message}</div>
      <Link>Go to the Home Page</Link>
    </div>
  );
}

export default ErrorElement;
