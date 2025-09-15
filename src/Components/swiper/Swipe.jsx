import { Swiper, SwiperSlide } from "swiper/react";
import { ProductsContext } from "../../Context/ProductsContext";
import { useContext } from "react";
import { Link } from "react-router-dom";

export default function Swipe() {
  const { products } = useContext(ProductsContext);

  return (
    <div>
      <div className="mt-5 mb-5">
        <h5 className="fw-bold mb-3">You may also like:</h5>
        <div>
          <Swiper
            spaceBetween={50}
            slidesPerView={4}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              576: {
                slidesPerView: 2,
                spaceBetween: 15,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 30,
              },
            }}
          >
            {products.map((product) => {
              const id = product.id || product.firebaseKey;
              const image =
                product.image ||
                "https://via.placeholder.com/300x200?text=No+Image";
              const title = product.title || product.name || "Untitled";
              const category = product.category || product.categories || "";
              const price = product.price || 0;

              return (
                <SwiperSlide key={id}>
                  <Link to="/ActiveProduct" state={{ product }}>
                    <div>
                      <img
                        loading="lazy"
                        className="w-100"
                        src={image}
                        alt={title}
                      />
                    </div>
                    <div>
                      <p className="mb-1">{category}</p>
                      <h5 className="mb-1">{title}</h5>
                      <span>${price}</span>
                    </div>
                  </Link>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
