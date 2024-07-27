

import React, { useState, useEffect } from "react";

export default function Button({ gmail }) {
  const [userData, setUserData] = useState();

  async function Get() {
    console.log("Gmail:", gmail);

    try {
      const response = await fetch("https://houserr3-3.onrender.com/api/users/getdata", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: gmail,
        }),
      });

      const data = await response.json();
      console.log("API Response:", data);

      if (response.ok) {
        setUserData([data]); 
       // console.log("Data set in state:", userData);
      } else {
        console.log("Error: Response not ok", response.status);
      }
    } catch (error) {
      console.log("Fetch error:", error.message);
    }
  }

  useEffect(() => {
    console.log("Current userData:", userData);

     

  }, [userData]);

  
  if (!userData) {
    return (
      <div>
        <button onClick={Get}>Get Data</button>
        <p>No data available</p>
      </div>
    );
  }

  return (
    <div>
      <button onClick={Get}>Get Data</button>

      <h1>{userData.name}</h1>
      <p>Email: {userData.email}</p>
      <p>Phone: {userData.phone}</p>

  

</div>

  )



}









