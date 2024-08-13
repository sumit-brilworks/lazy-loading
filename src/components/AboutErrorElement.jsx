import React from "react";
import { useRouteError, Link } from "react-router-dom";

function AboutErrorElement() {
  const error = useRouteError();
  console.log("Error : ", error);
  return (
    <div>
      <div>This is a about page error element</div>
      <div>{error.message}</div>
      <Link>Go to the Home Page</Link>
    </div>
  );
}

export default AboutErrorElement;
