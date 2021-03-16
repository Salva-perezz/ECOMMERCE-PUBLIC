import React, { useEffect, useState } from "react";
import { useSelector } from 'react-redux';
import axios from 'axios';

const AdminUsers = () => {
    const token = localStorage.getItem('token');
    const currentUser = useSelector((state) => state.currentUser);
    const [userList, setUserList] = useState([]);


useEffect(() => {
       axios.get(`/api/users/admin`)
    .then(users => setUserList(users.data))
    console.log(userList)
}, []);

const adminHandler = (e) => {
    e.preventDefault();

}

return(
<div>
     {
     userList.length && userList.map(user => {
       return(
           <>
            <div>
                <h3>{`${user.name} ${user.lastName}`}</h3>
            </div>
            <div>
                <p>{user.email}</p>
            </div>
            <div>
                {user.isAdmin ? <button>Remove admin</button> : <button>Give admin</button>}
            </div>
           </>
       )
    })} 
</div>
)};

export default AdminUsers;