import React, { useContext, useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { app } from "../../firebase"; // مسار ملف firebase.jsx
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import bgImage from "../../../public/image/e-commerce/register/bg.AVIF";
import TextField from "@mui/material/TextField";
import { Link } from "react-router-dom";
import { MediaContext } from "../../Context/MediaContext";
import { NotificationContext } from "../../Context/NotificationContext";

export default function Signup() {
  const { showNotification } = useContext(NotificationContext);

  const { isMobile } = useContext(MediaContext);
  const auth = getAuth(app);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      showNotification("✅ Logged in successfully!");
    } catch (error) {
      showNotification(error.message);
    }
  };

  return (
    <div style={{ height: "100vh" }}>
      <Row style={{ height: "100%" }}>
        <Col
          style={{
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          xs={12}
          md={6}
        >
          <Form
            style={{ display: "flex", flexDirection: "column", width: "60%" }}
          >
            <h2 className="mb-4">Flatlogic</h2>
            <h3 className="mb-4">Sign up</h3>
            <TextField
              className="mb-3"
              id="outlined-basic"
              label="Emall"
              variant="outlined"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              id="outlined-basic"
              label="Password"
              variant="outlined"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className="d-flex align-items-center justify-content-between mt-3">
              <Link to="/Login">Login</Link>
              <button
                className="btn-home"
                style={{ padding: "15px 20px" }}
                onClick={handleLogin}
              >
                SIGN UP
              </button>
            </div>
          </Form>
        </Col>
        <Col xs={6} style={{ height: "100%", display: isMobile ? "none" : "" }}>
          <div
            style={{
              backgroundImage: `url(${bgImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: "100%",
              width: "100%",
            }}
          ></div>
        </Col>
      </Row>
    </div>
  );
}
