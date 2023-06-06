import React from "react";
import { useState } from "react";
import { Button } from "react-bootstrap";
import { Form } from "react-bootstrap";

function EditForm(props) {
  const [user, setUser] = useState(props.currentUser);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };
  return (
    <Form
      onSubmit={(e) => {
        e.preventDefault();
        props.updateUser(user.id,user)
      }}
    >
        <Form.Group>
            <Form.Label>Name</Form.Label>
            <Form.Control
            value={user.name}
            onChange={handleInputChange}
            ></Form.Control>
            <Form.Label>Username</Form.Label>
            <Form.Control
            value={user.username}
            onChange={handleInputChange}
            ></Form.Control>
        </Form.Group>
        <Button className="update">Update User</Button>
        <Button variant="danger" type="submit"
        onClick={()=>props.setEditing(false)}
        >
        cancel
      </Button>
    </Form>
  );
}

export default EditForm;
