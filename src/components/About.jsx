import React, { useEffect } from "react";

function About() {
  // Displaying the example of unmounting and the cleanup function
  useEffect(() => {
    console.log("About section is mounted");
    return () => {
      console.log("About section is unmounted");
    };
  }, []);
  return <div>About Page</div>;
}

export default About;
