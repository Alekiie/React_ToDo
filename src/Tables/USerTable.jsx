import React from "react";
import { Button } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import "../index.css";

function USerTable({ users,deleteUser,editRow}) {
  return (
    <Table
      bordered
      className="user-table"
      style={{ color: "white", textAlign: "center" }}
    >
      <thead>
        <tr>
          <th>Name</th>
          <th>Username</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {users.length > 0 ? (
          users.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>
                <Button variant="primary" onClick={()=>editRow(user)} className="edit">
                  Edit
                </Button>
                <Button variant="danger" onClick={()=>deleteUser(user.id)} >Delete</Button>
              </td>
            </tr>
          ))
        ) : (
          <tr id="empty">
            <td colSpan={3} style={{ color: "red" }}>
              No User
            </td>
          </tr>
        )}
      </tbody>
    </Table>
  );
}

export default USerTable;
