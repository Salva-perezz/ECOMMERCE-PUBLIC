import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";

const AdminUsers = () => {
  const token = localStorage.getItem("token");
  const currentUser = useSelector((state) => state.currentUser);
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    if(currentUser)axios.get(`/api/users/admin/all/${currentUser.id}/${currentUser.isAdmin}`).then((users) => setUserList(users.data));
  }, [currentUser]);

  useEffect(() => {}, [userList]);

  const adminHandler = (e, id, isAdmin) => {
    e.preventDefault();
    axios
      .put("/api/users/admin/updateuser", { token, id, isAdmin })
      .then(({ data }) => {
        setUserList(
          userList.map((user) => {
            if (user.id != data.id) {
              return user;
            } else {
              user.isAdmin = data.isAdmin;
              return user;
            }
          })
        );
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      {userList.length &&
        userList.map((user) => {
          return (
            <div key={user.id}>
              <div>
                <h3>{`${user.name} ${user.lastName}`}</h3>
              </div>
              <div>
                <p>{user.email}</p>
              </div>
              <div>
                {user.isAdmin ? (
                  <button
                    type="submit"
                    onClick={(e) => adminHandler(e, user.id, user.isAdmin)}
                  >
                    Remove admin
                  </button>
                ) : (
                  <button
                    onClick={(e) => adminHandler(e, user.id, user.isAdmin)}
                  >
                    Give admin
                  </button>
                )}
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default AdminUsers;
