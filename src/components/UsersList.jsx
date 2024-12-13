import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers } from "../redux/usersSlice";

function UserList() {
  const dispatch = useDispatch();

  const { users, loading } = useSelector((store) => store.user);

  useEffect(() => {
    dispatch(getAllUsers());
  }, []);

  if (loading) {
    return (
      <div id="loading-gif-div">
        <img src="./src/assets/img/loading.gif" alt="loading" />
      </div>
    );
  }

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
