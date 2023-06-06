import React from "react";
import { useState } from "react";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";

function AddNewUserForm(props) {
  const initialFormState = { id: null, name: "", username: "" };
  const [user, setUser] = useState(initialFormState);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.addNewUser(user);
    setUser(initialFormState);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          name="name"
          value={user.name}
          placeholder="Enter name.."
          onChange={handleInputChange}
        />
        <Form.Label>Username</Form.Label>
        <Form.Control
          type="text"
          name="username"
          value={user.username}
          placeholder="Enter username.."
          onChange={handleInputChange}
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Add User
      </Button>
    </Form>
  );
}

export default AddNewUserForm;
