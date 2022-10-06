import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export function Login() {
  const topPad = window.innerHeight / 8;
  return (
    <div style={{ paddingTop: topPad }}>
      <Row className="gx-0">
        <Col></Col>{" "}
        <Col>
          <h1>Login</h1>
          <form id="newtask" role="form">
            <div class="modal-body">
              <div class="form-group">
                <label for="Username">Username</label>
                <input
                  type="text"
                  class="form-control"
                  id="username"
                  placeholder="Enter username"
                />
              </div>
              <div class="form-group">
                <label for="Password">Password</label>
                <input
                  type="password"
                  class="form-control"
                  id="password"
                  placeholder="Enter password"
                />
              </div>
            </div>
            <div class="modal-footer">
              <button
                type="submit"
                class="btn btn-success btn-default pull-left"
              >
                <span class="glyphicon glyphicon-off"></span> Log In
              </button>
            </div>
          </form>
        </Col>
        <Col></Col>
      </Row>
    </div>
  );
}
