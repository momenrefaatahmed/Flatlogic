import Container from "@mui/material/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Footer from "../../footer/Footer";

export default function Faq() {
  return (
    <div>
      <Container fixed>
        <Row>
          <Col xs={12} md={4} className="mt-5 mb-5">
            <div>
              <h3 className="fw-bold mb-3 ">FAQ</h3>
              <p style={{ fontSize: "14px" }}>
                Successful brands get into the mind slowly. A blurb in a
                magazine. A mention in a newspaper. A comment from a friend. A
                display in a retail
              </p>
              <ul>
                <li>
                  <a
                    href="#"
                    className="link-faq fw-bold mb-3 d-block text-decoration-none"
                  >
                    Company Policies
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="link-faq fw-bold mb-3 d-block text-decoration-none"
                  >
                    Payment Options
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="link-faq fw-bold mb-3 d-block text-decoration-none"
                  >
                    Terms & Conditions
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="link-faq fw-bold mb-3 d-block text-decoration-none"
                  >
                    Positioning
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="link-faq fw-bold mb-3 d-block text-decoration-none"
                  >
                    Efficient
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="link-faq fw-bold mb-3 d-block text-decoration-none"
                  >
                    Conditions
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="link-faq fw-bold mb-3 d-block text-decoration-none"
                  >
                    Mind Procedure
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="link-faq fw-bold mb-3 d-block text-decoration-none"
                  >
                    Delivery Job
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="link-faq fw-bold mb-3 d-block text-decoration-none"
                  >
                    Marketplace
                  </a>
                </li>
              </ul>
            </div>
          </Col>
          <Col xs={12} md={8} className="mt-5 mb-5">
            <div className="border-bottom mb-4">
              <h6
                className="fw-bold text-uppercase mb-3"
                style={{ color: "#bd744c", letterSpacing: "2px" }}
              >
                company Policies
              </h6>
              <p className="fw-bold fs-5 mb-3" style={{ lineHeight: "2" }}>
                You Can Learn About Company Policies Gide, Some Rules, and
                Useful Info
              </p>
              <p className="text-secondary " style={{ fontSize: "14px" }}>
                Company policies guide is useful information for clients. You
                can learn about company rules regarding payment methods,
                shipping, support, etc. If you have questions you can always
                study this guide to find necessary answers for you, or use a
                contact form.
              </p>
            </div>
            <div className="border-bottom mb-4">
              <h6
                className="fw-bold text-uppercase mb-3"
                style={{ color: "#bd744c", letterSpacing: "2px" }}
              >
                payment options
              </h6>
              <p className="fw-bold fs-5 mb-3" style={{ lineHeight: "2" }}>
                Do You Want To Know More About Payment Options? Here Is All You
                Need to Know
              </p>
              <p className="text-secondary " style={{ fontSize: "14px" }}>
                Here is some useful information about payment options. You can
                use your PayPal account to make a purchase. You need to know the
                email address to make a payment. You can also use your credit
                card to make a purchase. You can make a payment anywhere you
                want.
              </p>
            </div>
            <div className="border-bottom mb-4">
              <h6
                className="fw-bold text-uppercase mb-3"
                style={{ color: "#bd744c", letterSpacing: "2px" }}
              >
                terms & conditions
              </h6>
              <p className="fw-bold fs-5 mb-3" style={{ lineHeight: "2" }}>
                The Terms of this Agreement Concerns Everyone Who Has Access to
                the Website
              </p>
              <p className="text-secondary " style={{ fontSize: "14px" }}>
                Everyone who has access to the website need to be aware of these
                terms. You need to maintain your rights and obligations. Some
                guidelines facilitate the use of this wonderful website.
                Learning these guidelines can have some benefits.
              </p>
            </div>
            <div className="border-bottom mb-4">
              <h6
                className="fw-bold text-uppercase mb-3"
                style={{ color: "#bd744c", letterSpacing: "2px" }}
              >
                delivery job
              </h6>
              <p className="fw-bold fs-5 mb-3" style={{ lineHeight: "2" }}>
                Learn More About the Delivery Job We Provide. This Can Be Useful
                Information
              </p>
              <p className="text-secondary " style={{ fontSize: "14px" }}>
                Delivery is an important part of our daily routine. The key to
                success is the right timing. We pay attention to the speed, but
                what is most important, we care about the quality of our job. We
                can assure you that your order will be delivered in time.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
}
