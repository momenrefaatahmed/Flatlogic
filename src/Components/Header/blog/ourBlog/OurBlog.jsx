import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";

import article1 from "../../../../../public/image/e-commerce/blog/article1.AVIF";
import article2 from "../../../../../public/image/e-commerce/blog/article2.AVIF";
import article3 from "../../../../../public/image/e-commerce/blog/article3.AVIF";

export default function OurBlog() {
  const articles = [
    {
      id: 1,
      to: "/FirstHearo",
      img: article1,
      date: "March 12, 2020",
      title: "What is Lorem Ipsum?",
    },
    {
      id: 2,
      to: "/SecondHearo",
      img: article2,
      date: "March 12, 2020",
      title: "Best Examples of Maximalism",
    },
    {
      id: 3,
      to: "/ThirdBlog",
      img: article3,
      date: "March 12, 2020",
      title: "Modern Design Inspirations",
    },
  ];

  return (
    <div>
      <Row className="mb-5">
        {articles.map((article) => (
          <Col key={article.id} xs={12} md={4} className="mb-3 text-center">
            <Link to={article.to} className="text-decoration-none">
              <img
                loading="lazy"
                src={article.img}
                alt=""
                className="img-fluid w-100 mb-2"
              />
              <div>
                <span className="text-secondary">{article.date}</span>
                <p className="fw-bold mb-1">{article.title}</p>
                <p className="fw-bold" style={{ color: "#bd744c" }}>
                  Read More
                </p>
              </div>
            </Link>
          </Col>
        ))}
      </Row>
    </div>
  );
}
