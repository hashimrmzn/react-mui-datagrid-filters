import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { FetchUser } from "../services/fetchUser";

function Profile() {
  const { accessToken } = useSelector((state) => state.auth);
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (accessToken) {
      FetchUser(accessToken)
        .then((data) => {
          setUser(data.user); 
        })
        .catch((err) => console.error("Error fetching user:", err));
    }
  }, [accessToken]);

  return (
    <div>
      {user ? (
        <h1>Welcome {user.firstname}!</h1>
      ) : (
        <h1>Loading user...</h1>
      )}
    </div>
  );
}

export default Profile;
