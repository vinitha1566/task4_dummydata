import React, { useEffect, useState } from 'react';
const UsersTable = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://dummyjson.com/users')
      .then((response) => response.json())
      .then((data) => {
        if (Array.isArray(data.users)) {
          setUsers(data.users);
        }
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4"> User Records </h2>
      <table className="table table-striped" border="1">
        <thead className="thead-dark">
          <tr>
            <th>ID</th>
            <th> First Name </th>
            <th> Last Name </th>
            <th> Age </th>
            <th> Gender </th>
            <th>Email</th>
            <th> Phone Number </th>
            <th> User Name </th>
            <th> Birth Date</th>
            <th> Height </th>
            <th> Weight </th>
            <th> Address </th>
            <th> Bank </th>
            <th> Company </th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td> {user.firstName}</td>
              <td> {user.lastName} </td>
              <td> {user.age} </td>
              <td> {user.gender} </td>
              <td>{user.email}</td>
              <td> {user.phone} </td>
              <td> {user.username} </td>
              <td> {user.birthDate} </td>
              <td> {user.height} </td>
              <td> {user.weight} </td>
              <td> {user.address.address} </td>
              <td> {user.bank.cardExpire} </td>
              <td> {user.company.name} </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UsersTable;
