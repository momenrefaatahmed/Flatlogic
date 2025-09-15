import React, { useContext, useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "../../firebase";
import { Link, useNavigate } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import bgImage from "../../../public/image/e-commerce/login/bg.svg";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { MediaContext } from "../../Context/MediaContext";
import { NotificationContext } from "../../Context/NotificationContext";

export default function Login() {
  const { showNotification } = useContext(NotificationContext);
  const { isMobile } = useContext(MediaContext);

  const auth = getAuth(app);

  // default values
  const [email, setEmail] = useState("Admin@gmail.com");
  const [password, setPassword] = useState("0123456");
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      localStorage.setItem("token", user.accessToken || user.uid);

      if (user.email.toLowerCase() === "admin@gmail.com") {
        showNotification("✅ Logged in as Admin!");
        localStorage.setItem("isAdmin", "true");
        navigate("/dashboard/home");
      } else {
        showNotification("✅ Logged in as User!");
        localStorage.setItem("isAdmin", "false");
        navigate("/");
      }
    } catch (error) {
      showNotification("❌ " + error.message);
    }
  };

  return (
    <div style={{ height: "100vh" }}>
      <Row style={{ height: "100%" }}>
        <Col
          xs={12}
          md={6}
          style={{
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Form
            onSubmit={handleLogin}
            style={{ display: "flex", flexDirection: "column", width: "60%" }}
          >
            <h2 className="mb-4">Flatlogic</h2>
            <h3 className="mb-4">Login</h3>

            {/* Email */}
            <TextField
              className="mb-3"
              label="Email"
              variant="outlined"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            {/* Password with toggle */}
            <TextField
              label="Password"
              variant="outlined"
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={() => setShowPassword(!showPassword)}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />

            <div className="d-flex align-items-center justify-content-between mt-3">
              <Link to="/Signup">Create An Account</Link>
              <button
                type="submit"
                className="btn-home"
                style={{ padding: "15px 20px" }}
              >
                LOGIN
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
