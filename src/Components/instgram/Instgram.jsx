import insta1 from "../../../public/image/e-commerce/home/insta1.AVIF";
import insta2 from "../../../public/image/e-commerce/home/insta2.AVIF";
import insta3 from "../../../public/image/e-commerce/home/insta3.AVIF";
import insta4 from "../../../public/image/e-commerce/home/insta4.AVIF";
import insta5 from "../../../public/image/e-commerce/home/insta5.AVIF";
import insta6 from "../../../public/image/e-commerce/home/insta6.AVIF";

export default function Instagram() {
  const instaGroup = [insta1, insta2, insta3, insta4, insta5, insta6];

  return (
    <div>
      <div className="mt-5 mb-5">
        <h4 className="text-center mb-3 fw-bold">Follow us on Instagram</h4>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
            gap: "10px",
          }}
        >
          {instaGroup.map((e, index) => (
            <img
              key={index}
              src={e}
              alt="insta"
              style={{
                width: "100%",
                height: "200px",
                objectFit: "cover",
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
