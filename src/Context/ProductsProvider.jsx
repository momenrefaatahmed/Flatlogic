import { useEffect, useState } from "react";
import axios from "axios";
import { ProductsContext } from "./ProductsContext";

export default function ProductsProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [iconsHover, setIconsHover] = useState({ productId: null, icon: null });
  const [hoveredProduct, setHoveredProduct] = useState(null);

  // ----------------- Events -----------------
  function handleIconsHover(productId, iconName) {
    setIconsHover({ productId, icon: iconName });
  }

  function handleIconsLeave() {
    setIconsHover({ productId: null, icon: null });
  }

  function handleProductHover(productId) {
    setHoveredProduct(productId);
  }

  function handleProductLeave() {
    setHoveredProduct(null);
  }

  // ----------------- Fetch Products -----------------
  useEffect(() => {
    async function fetchProducts() {
      try {
        const [res1, res2] = await Promise.all([
          axios.get(
            "https://dream-store-f5025-default-rtdb.firebaseio.com/data/products/response.json"
          ),
          axios.get(
            "https://dream-store-f5025-default-rtdb.firebaseio.com/products.json"
          ),
        ]);

        let loadedProducts = [];

        // ✅ Normalize res1
        if (res1.data) {
          if (Array.isArray(res1.data)) {
            // لو Array مباشرة
            loadedProducts = res1.data.map((p, index) => ({
              firebaseKey: p?.firebaseKey || `res1-${index}`,
              ...p,
            }));
          } else if (typeof res1.data === "object") {
            // لو Object
            const arr = Object.keys(res1.data).map((key) => ({
              firebaseKey: key,
              ...res1.data[key],
            }));
            loadedProducts = [...loadedProducts, ...arr];
          }
        }

        // ✅ Normalize res2
        if (res2.data) {
          const newProducts = Object.keys(res2.data).map((key) => ({
            firebaseKey: key,
            ...res2.data[key],
          }));
          loadedProducts = [...loadedProducts, ...newProducts];
        }

        // ✅ إزالة المنتجات المكررة (حسب firebaseKey)
        const uniqueProducts = Object.values(
          loadedProducts.reduce((acc, product) => {
            acc[product.firebaseKey] = product;
            return acc;
          }, {})
        );

        setProducts(uniqueProducts);
      } catch (err) {
        console.error("❌ Error fetching products:", err);
      }
    }

    fetchProducts();
  }, []);

  // ----------------- Context Provider -----------------
  return (
    <ProductsContext.Provider
      value={{
        products,
        setProducts,
        iconsHover,
        hoveredProduct,
        handleIconsHover,
        handleIconsLeave,
        handleProductHover,
        handleProductLeave,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
}
