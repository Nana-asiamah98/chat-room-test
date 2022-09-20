import React from 'react'
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";

const SendMessageTextArea = ({handleSubmit,message,setMessage})  => <div>
    <Form
      onSubmit={(e) => {
        handleSubmit(e);
      } }
    >
      <FloatingLabel controlId="floatingTextarea" className="mb-3">
        <InputGroup className="mb-3">
          <Form.Control
            as="textarea"
            placeholder="Enter Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)} />
          <Button type="submit" variant="outline-success">
            Send
          </Button>
        </InputGroup>
      </FloatingLabel>
    </Form>
  </div>;

export default SendMessageTextArea;