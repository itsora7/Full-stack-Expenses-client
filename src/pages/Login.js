import React, { useRef } from "react";
import { Col, Container, Row, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { CustomField } from "../components/customField/CustomField";
import { MainLayout } from "../components/mainLayout/MainLayout";

const Login = () => {
  const emailRef = useRef("");
  const pinRef = useRef("");

  const handleOnSubmit = (e) => {
    e.preventDefault();
    // const email = emailRef.current.value
    // const pin = pinRef.current.value
    const loginObj = {
      email: emailRef.current.value,
      pin: pinRef.current.value,
    };
    console.log(email, pin);
  };
  const fields = [
    {
      label: "Email",
      placeholder: "SamSmith@gmail.com",
      name: "email",
      type: "name",
      required: true,
      forwardedref: emailRef,
    },
    {
      label: "Password",
      placeholder: "********",
      name: "password",
      type: "password",
      required: true,
      forwardedref: pinRef,
    },
    {
      label: "888",
      placeholder: "********",
      name: "password",
      type: "password",
      required: true,
      forwardedref: pinRef,
    },
  ];
  return (
    <MainLayout>
      <Container className="mt-5">
        <Row className="login-page shadow-lg">
          <Col className="bg-primary d-none d-md-flex direction-column justify-content-center aligh-item-center">
            <div className="info text-white p-2 pt-5">
              <h2>Welcome to our system</h2>
              <p className="mt-5">
                Manage your cost with this expenses tracker
              </p>
            </div>
          </Col>
          <Col className="p-5">
            <div className="form">
              <h2 className="text-primary">
                <i className="fa-solid fa-file-pen"> Login</i>{" "}
              </h2>
            </div>
            <Form>
              {fields.map((item, i) => (
                <CustomField key={i} forwardedref={forwardedref} {...item} />
              ))}

              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
              </Form.Group>
              <Button variant="primary" type="submit">
                Login
              </Button>
            </Form>
            <div className="text-end mt-5">
              have an account ? <Link to="/">Register Now</Link>
            </div>
          </Col>
        </Row>
      </Container>
    </MainLayout>
  );
};

export default Login;
