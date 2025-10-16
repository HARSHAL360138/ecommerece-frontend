import React, { useEffect, useState } from "react";
import CreateProfile from "./CreateProfile";
import GetProfile from "./GetProfile";
import { fetchWithAuth } from "../refreshtoken/api";

function ProfileWrapper() {
  const [hasProfile, setHasProfile] = useState(null); // null = loading, true/false = profile exists
  const [loading, setLoading] = useState(true);

  // Callback to be called after profile creation
  const handleProfileCreated = () => {
    setHasProfile(true);
  };

  useEffect(() => {
    const checkProfile = async () => {
      try {
        const data = await fetchWithAuth(
          "https://ecommerce-backend-y1bv.onrender.com/api/user/get-profile"
        );
        if (data && data.profile) {
          setHasProfile(true);
        } else {
          setHasProfile(false);
        }
      } catch (err) {
        setHasProfile(false);
      } finally {
        setLoading(false);
      }
    };

    checkProfile();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen text-lg font-medium">
        Loading...
      </div>
    );
  }

  return hasProfile ? <GetProfile /> : <CreateProfile onProfileCreated={handleProfileCreated} />;
}

export default ProfileWrapper;
