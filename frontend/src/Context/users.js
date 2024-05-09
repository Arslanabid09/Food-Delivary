import { createContext , useEffect, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState([]);

  const getUser = async () => {
    try {
      const response = await fetch("http://localhost:8099/api/v1/crud/getuser");
      const result = await response.json();
      setUser(result);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  //  deleting user by id from database
  const deleteUser = async (id) => {
    try {
      const response =  await fetch(`http://localhost:8099/api/v1/crud/deleteuser/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json"
        }
      });
            if(response){
              getUser();
            }
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };
  // const updateUser = async (userId, updatedUserData) => {
  //   try {
  //     await fetch(`http://localhost:8099/api/v1/crud/updateuser/${userId}`, {
  //       method: "PUT",
  //       headers: {
  //         "Content-Type": "application/json"
  //       },
  //       body: JSON.stringify(updatedUserData)
  //     });
  //     getSingleUser(userId); // Refresh single user data after update
  //     getUser();  // Refresh user list (optional)
  //   } catch (error) {
  //     console.error("Error updating user:", error);
  //   }
  // };
  // useEffect(()=>{
  //   updateUser()
  // },[])

  return (
    <UserContext.Provider value={{ user, deleteUser, getUser}}>
      {children}
    </UserContext.Provider>
  );
};
