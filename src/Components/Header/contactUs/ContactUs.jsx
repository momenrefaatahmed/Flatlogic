import Container from "@mui/material/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Footer from "../../footer/Footer";
import Instagram from "../../instgram/Instgram";
import contactImg from "../../../../public/image/e-commerce/contact/img.AVIF";
import TextField from "@mui/material/TextField";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";

export default function ContactUs() {
  return (
    <div>
      <Container fixed>
        <Row>
          <Col
            xs={12}
            md={6}
            className="mt-5 mb-5 gap-5 d-flex justify-content-between align-items-center"
          >
            <div className="w-100">
              <h3 className="fw-bold mb-3">Contact Us</h3>
              <p className="text-secondary" style={{ width: "500px" }}>
                If you have any questions please fill out the form
              </p>
              <div>
                <TextField
                  variant="outlined"
                  type="text"
                  className="w-100"
                  id="outlined-basic"
                  label="Name"
                ></TextField>
                <div className="d-flex gap-3 mt-3 mb-3">
                  <TextField
                    fullWidth
                    variant="outlined"
                    type="text"
                    id="outlined-basic"
                    label="Email"
                  ></TextField>
                  <TextField
                    fullWidth
                    variant="outlined"
                    type="text"
                    id="outlined-basic"
                    label="Phone"
                  ></TextField>
                </div>
                <FloatingLabel controlId="floatingTextarea2" label="Comments">
                  <Form.Control
                    as="textarea"
                    placeholder="Leave a comment here"
                    style={{ height: "100px" }}
                  />
                </FloatingLabel>
                <button className="btn-home mt-3 text-uppercase">
                  Send Message
                </button>
              </div>
            </div>
          </Col>
          <Col xs={12} md={6}>
            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
                objectFit: "cover",
                flex: "1 1 auto",
              }}
            >
              <img
                loading="lazy"
                style={{
                  flex: "1 1 cover",
                  maxWidth: "100%",
                  objectFit: "cover",
                }}
                src={contactImg}
                alt="contactus"
              />
            </div>
          </Col>
        </Row>
      </Container>
      <Instagram />
      <Footer />
    </div>
  );
}
