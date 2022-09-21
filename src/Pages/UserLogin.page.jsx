import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { ButtonGroup } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";

const UserLogin = () => {
  const [username, setUsername] = useState("");
  const [users, setUsers] = useState([]);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const storedUsers = JSON.parse(localStorage.getItem("users") || "[]");
    const allUsers = [...storedUsers];
    if(username !== ""){
      allUsers.push(username.toLowerCase());
      setUsers([...allUsers]);
      localStorage.setItem("users", JSON.stringify(allUsers));
      navigate("chatRoom", { state: username });
    }else{
      alert("Enter Username");
      window.location.reload();
    }
    
  };

  return (
    <Container fluid="md">
      <Row>
        <Card>
          <Card.Header  as="h5">Welcome To Chat App</Card.Header>
          <Card.Body>
            <Col md={{ span: 6, offset: 3 }}>
              <Form onSubmit={(e) => handleSubmit(e)}>
                <Form.Group className="mb-3" controlId="formBasic">
                  <Form.Label>Username</Form.Label>
                  <Form.Control
                  required
                    placeholder="Enter your name"
                    type="text"
                    data-testid = "username-field"
                    value={username}
                    onChange={(e) => {
                      setUsername(e.target.value);
                    }}
                  />
                </Form.Group>
                <Button variant="primary" data-testid="username-button" type="submit">
                  Submit
                </Button>
              </Form>
            </Col>
          </Card.Body>
        </Card>
      </Row>
    </Container>
  );
};

export default UserLogin;
