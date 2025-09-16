import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useState, useContext } from "react";

import Rating from "@mui/material/Rating";
import TextField from "@mui/material/TextField";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import axios from "axios";
import { NotificationContext } from "../../Context/NotificationContext";

export default function MyVerticallyCenteredModal(props) {
  const { product, onHide } = props;
  const [value, setValue] = useState(2);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [comment, setComment] = useState("");
  const { showNotification } = useContext(NotificationContext);

  function handleFeedbackClick() {
    const newFeedback = {
      firstName,
      lastName,
      comment,
      rating: value,
    };

    const productIndex = product.id - 1;

    axios
      .post(
        `https://dream-store-f5025-default-rtdb.firebaseio.com/data/products/response/${productIndex}/feedback.json`,
        newFeedback
      )
      .then((res) => {
        console.log("✅ Feedback added:", res.data);
        onHide();
      })
      .catch((err) => {
        console.error("❌ Error:", err);
      });
  }

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="example-modal-sizes-title-lg"
      centered
    >
      <div style={{ padding: "30px" }}>
        <h3>Leave Your Feedback</h3>
        <hr />
        <div style={{ display: "flex" }}>
          <img
            style={{ height: "100px", marginRight: "15px" }}
            src={product?.image}
            alt={product?.title}
          />
          <div>
            <p>{product?.title}</p>
            <h5>{product?.name}</h5>
          </div>
        </div>
        <hr />
        <div className="pt-3 pb-3">
          <h5>Rating</h5>
          <Rating
            name="simple-controlled"
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
          />
        </div>
        <div>
          <form className="mb-3" action="">
            <div className="mb-3" style={{ display: "flex", gap: "15px" }}>
              <TextField
                className="w-100"
                label="First Name"
                onChange={(e) => setFirstName(e.target.value)}
                variant="outlined"
                type="text"
                value={firstName}
              />
              <TextField
                className="w-100"
                label="Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                variant="outlined"
                type="text"
              />
            </div>
            <div>
              <FloatingLabel controlId="floatingTextarea2" label="Comments">
                <Form.Control
                  as="textarea"
                  placeholder="Leave a comment here"
                  style={{ height: "100px" }}
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                />
              </FloatingLabel>
            </div>
          </form>
          <div className="w-100 d-flex justify-content-center align-items-center">
            <button
              style={{
                width: "300px",
                height: "50px",
                backgroundColor: "#bd744c",
                color: "white",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "7px",
                border: "none",
                fontWeight: "bold",
              }}
              onClick={() => {
                handleFeedbackClick();
                showNotification("Feedback Submitted!", "success");
              }}
            >
              LEAVE FEEDBACK
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
}
