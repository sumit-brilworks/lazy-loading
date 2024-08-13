import React, { useEffect } from "react";

function About() {
  // Displaying the example of unmounting and the cleanup function
  useEffect(() => {
    console.log("About section is mounted");
    return () => {
      console.log("About section is unmounted");
    };
  }, []);
  throw new Error("Page does not available");
  return <div>About Page</div>;
}

export default About;
