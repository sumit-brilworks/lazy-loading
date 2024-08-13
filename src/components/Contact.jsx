import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

function Contact() {
  // Displaying the example of unmounting and the cleanup function
  useEffect(() => {
    console.log("Contact section is mounted");
    return () => {
      console.log("Contact section is unmounted");
    };
  }, []);
  // throw new Error("Contact page not working");
  const location = useLocation();
  console.log(location);
  return <div>Contact Page</div>;
}

export default Contact;
