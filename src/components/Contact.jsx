import React, { useEffect } from "react";

function Contact() {
  // Displaying the example of unmounting and the cleanup function
  useEffect(() => {
    console.log("Contact section is mounted");
    return () => {
      console.log("Contact section is unmounted");
    };
  }, []);
  return <div>Contact Page</div>;
}

export default Contact;
