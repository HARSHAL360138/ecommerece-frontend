// // api.js
// export const refreshAccessToken = async () => {
//   try {
//     const refreshToken = localStorage.getItem("refreshToken");
//     if (!refreshToken) return false;

//     const res = await fetch(
//       "https://ecommerce-backend-y1bv.onrender.com/api/user/refresh",
//       {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ refreshToken }),
//       }
//     );

//     if (!res.ok) throw new Error("Refresh failed");

//     const data = await res.json();
//     if (data.accessToken) {
//       localStorage.setItem("accessToken", data.accessToken);
//       return true;
//     }
//     return false;
//   } catch (err) {
//     console.error("Token refresh failed:", err);
//     return false;
//   }
// };

// // Wrapper for fetch that automatically refreshes token
// export const fetchWithAuth = async (url, options = {}) => {
//   let token = localStorage.getItem("accessToken");
//   if (!token) throw new Error("You are not logged in.");

//   const defaultHeaders = {
//     "Content-Type": "application/json",
//     Authorization: `Bearer ${token}`,
//   };

//   let res = await fetch(url, {
//     ...options,
//     headers: { ...defaultHeaders, ...options.headers },
//   });

//   if (res.status === 401) {
//     const refreshed = await refreshAccessToken();
//     if (!refreshed) throw new Error("Unauthorized. Please log in again.");

//     token = localStorage.getItem("accessToken");
//     res = await fetch(url, {
//       ...options,
//       headers: { ...defaultHeaders, Authorization: `Bearer ${token}` },
//     });
//   }

//   if (!res.ok) {
//     const errorText = await res.text();
//     throw new Error(errorText || "Request failed");
//   }

//   return res.json();
// };

























// api.js

// This function automatically handles refreshing the access token if expired
export const fetchWithAuth = async (url, options = {}) => {
  const getAccessToken = async () => {
    // Try to get access token from localStorage
    let token = localStorage.getItem("accessToken");
    if (!token) throw new Error("You are not logged in.");

    return token;
  };

  const refreshTokenIfNeeded = async () => {
    const refreshToken = localStorage.getItem("refreshToken");
    if (!refreshToken) return false;

    try {
      const res = await fetch(
        "https://ecommerce-backend-y1bv.onrender.com/api/user/refresh-token",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ refreshToken }),
        }
      );

      if (!res.ok) return false;
      const data = await res.json();
      if (data.accessToken) {
        localStorage.setItem("accessToken", data.accessToken);
        return true;
      }
      return false;
    } catch (err) {
      console.error("Token refresh failed:", err);
      return false;
    }
  };

  let token = await getAccessToken();

  const defaultHeaders = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  };

  let response = await fetch(url, { ...options, headers: { ...defaultHeaders, ...options.headers } });

  if (response.status === 401) {
    const refreshed = await refreshTokenIfNeeded();
    if (!refreshed) throw new Error("Unauthorized. Please log in again.");

    // Retry the original request with the new token
    token = localStorage.getItem("accessToken");
    response = await fetch(url, { ...options, headers: { ...defaultHeaders, Authorization: `Bearer ${token}` } });
  }

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(errorText || "Request failed");
  }

  return response.json();
};
