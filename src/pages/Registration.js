import React, { useState } from "react";
import { Col, Container, Row, Form, Button } from "react-bootstrap";
import { CustomField } from "../components/customField/CustomField";
import { MainLayout } from "../components/mainLayout/MainLayout";
import { toast } from "react-toastify";
import { postUser } from "../helper/axiosHelper";
import { Link } from "react-router-dom";

const initialState = {
  name: "",
  email: "",
  pin: "",
  confirmPin: "",
};
const Registration = () => {
  const [form, setForm] = useState(initialState);
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    if (value && (name === "pin" || name === "confirmPin")) {
      if (!+value) {
        return alert("Only number allowed");
      }
    }
    setForm({
      ...form,
      [name]: value,
    });
    console.log(name, value);
  };
  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const { confirmPin, ...rest } = form;
    if (confirmPin !== rest.pin) {
      toast.error("Pin do not match");
    }
    const { status, message } = await postUser(rest);
    toast[status](message);
  };
  const fields = [
    {
      label: "Full Name",
      placeholder: "Sam Smith",
      name: "name",
      type: "name",
      required: true,
      value: form.name,
    },
    {
      label: "Email",
      placeholder: "SamSmith@gmail.com",
      name: "email",
      type: "name",
      required: true,
      value: form.email,
    },
    {
      label: "Pin",
      placeholder: "1234",
      name: "pin",
      type: "password",
      required: true,
      maxlength: "4",
      minlength: "4",
      value: form.pin,
    },
    {
      label: "Confirm Pin",
      placeholder: "1234",
      name: "confirmPin",
      type: "password",
      required: true,
      maxlength: "4",
      minlength: "4",
      value: form.confirmPin,
    },
  ];
  return (
    <MainLayout>
      <Container className="mt-5">
        <Row className="login-page shadow-lg">
          <Col className="bg-primary d-none d-md-flex direction-column justify-content-center aligh-item-center">
            <div className="info text-white p-2 pt-5">
              <h2> Welcome to our system</h2>
              <p className="mt-5">
                Manage your cost with this expenses tracker
              </p>
            </div>
          </Col>
          <Col className="p-5">
            <div className="form">
              <h2 className="text-primary">
                <i className="fa-solid fa-file-pen"> Register</i>{" "}
              </h2>
            </div>
            <Form onSubmit={handleOnSubmit}>
              {fields.map((item, i) => (
                <CustomField key={i} {...item} onChange={handleOnChange} />
              ))}

              {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
              </Form.Group> */}
              <Button variant="primary" type="submit">
                Register
              </Button>
            </Form>
            <div className="text-end mt-5">
              click here to <Link to="/"> Register</Link>
            </div>
          </Col>
        </Row>
      </Container>
    </MainLayout>
  );
};

export default Registration;
