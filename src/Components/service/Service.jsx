import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import HeadsetMicIcon from "@mui/icons-material/HeadsetMic";
import LoopIcon from "@mui/icons-material/Loop";
import Container from "@mui/material/Container";
import { useContext } from "react";
import { MediaContext } from "../../Context/MediaContext";

export default function Service() {
  const { isMobile } = useContext(MediaContext);
  return (
    <>
      <hr />
      <Container fixed>
        <div
          className={`d-flex  h-100 w-100 ${
            isMobile ? "flex-column align-items-start" : ""
          }`}
          style={{ gap: "" }}
        >
          <div
            className="d-flex align-items-center justify-content-center"
            style={{ gap: "15px", flex: "1", height: "150px" }}
          >
            <LocalShippingIcon style={{ color: "#bd744c", fontSize: "50px" }} />
            <div>
              <h4>free shipping</h4>
              <p>On all orders of $ 150</p>
            </div>
          </div>
          <div
            className="d-flex align-items-center justify-content-center "
            style={{
              gap: "15px",
              flex: "1",
              height: "150px",
              borderLeft: `${isMobile ? "none" : "1px solid #ddd"}`,
              borderRight: `${isMobile ? "none" : "1px solid #ddd"}`,
            }}
          >
            <HeadsetMicIcon style={{ color: "#bd744c", fontSize: "50px" }} />
            <div>
              <h4>24/7 support</h4>
              <p>Get help when you need it</p>
            </div>
          </div>
          <div
            className="d-flex align-items-center justify-content-center"
            style={{ gap: "15px", flex: "1", height: "150px" }}
          >
            <LoopIcon style={{ color: "#bd744c", fontSize: "50px" }} />
            <div>
              <h4>100% money back</h4>
              <p>30 day money back guarantee</p>
            </div>
          </div>
        </div>
      </Container>
      <hr />
    </>
  );
}
