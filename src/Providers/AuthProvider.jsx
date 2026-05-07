import { createContext, useEffect, useState } from "react";
import axiosPublic from "@/api/axiosPublic";
import Swal from "sweetalert2";

export const AuthContext = createContext(null);

// Configure SweetAlert Toast
const Toast = Swal.mixin({
  toast: true,
  position: "top-end",
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.onmouseenter = Swal.stopTimer;
    toast.onmouseleave = Swal.resumeTimer;
//   }
// });

// export const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true);

//   /**
//    * 1. Fetch current user data from backend
//    * @param {string} email 
//    */
//   const fetchCurrentUser = async (email) => {
//     try {
//       setLoading(true);
//       const res = await axiosPublic.get(`/auth/current-user?email=${email}`);
      
//       if (res.data.success) {
//         setUser(res.data.data);
//       } else {
//         // If user not found in database
//         setUser(null);
//         localStorage.removeItem("user-email");
//       }
//     } catch (error) {
//       console.error("User fetch error:", error);
//       setUser(null);
//       localStorage.removeItem("user-email");
//     } finally {
//       setLoading(false);
//     }
//   };

//   /**
//    * 2. Login function (Called from SignIn page)
//    * @param {string} email 
//    */
//   const login = async (email) => {
//     if (!email) return;
    
//     setLoading(true);
//     // Save email to storage to persist data on refresh
//     localStorage.setItem("user-email", email);
//     await fetchCurrentUser(email);

//     // Success Toast for Login
//     Toast.fire({
//       icon: "success",
//       title: "Signed in successfully"
//     });
//   };

//   /**
//    * 3. Logout function
//    */
//   const logout = () => {
//     setLoading(true);
//     localStorage.removeItem("user-email");
//     setUser(null);
//     setLoading(false);
    
//     // Success Toast for Logout
//     Toast.fire({
//       icon: "success",
//       title: "Logged out successfully"
//     });
//   };

//   /**
//    * 4. Auto-login (Recovers data on page refresh)
//    */
//   useEffect(() => {
//     const savedEmail = localStorage.getItem("user-email");
//     if (savedEmail) {
//       fetchCurrentUser(savedEmail);
//     } else {
//       setLoading(false);
//     }
//   }, []);

//   // Context values to be shared across the app
//   const authInfo = {
//     user,
//     loading,
//     setLoading,
//     login,
//     logout,
//   };

//   return (
//     <AuthContext.Provider value={authInfo}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export default AuthProvider;