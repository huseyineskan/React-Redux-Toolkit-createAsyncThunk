import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers } from "../redux/userSlice";

function UserList() {
  const dispatch = useDispatch();

  const { users } = useSelector((store) => store.user);
  console.log(users);
  useEffect(() => {
    dispatch(getAllUsers());
  }, []);

  return (
    <div>
      <h3>ALL USERS</h3>
      <table>
        <thead>
          <tr>
            <th>No</th>
            <th>Username</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Website</th>
          </tr>
        </thead>
        <tbody>
          {users &&
            users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>{user.website}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default UserList;
