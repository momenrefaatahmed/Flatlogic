import axios from "axios";
import { useContext } from "react";
import { ProductsContext } from "../../Context/ProductsContext";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export default function DeleteModal({ show, onHide, product }) {
  const { setProducts } = useContext(ProductsContext);

  const handleDelete = async () => {
    try {
      let url = "";

      // ✅ لو المنتج له firebaseKey → موجود في /products
      if (product?.firebaseKey) {
        url = `https://dream-store-f5025-default-rtdb.firebaseio.com/products/${product.firebaseKey}.json`;
      }
      // ✅ لو المنتج له id عادي → موجود في /data/products/response
      else if (product?.id) {
        url = `https://dream-store-f5025-default-rtdb.firebaseio.com/data/products/response/${
          product.id - 1
        }.json`;
      }

      if (!url) {
        console.error("❌ Product not found in Firebase paths");
        return;
      }

      await axios.delete(url);

      // تحديث الـ state بعد الحذف
      setProducts((prev) =>
        prev.filter(
          (p) => p.firebaseKey !== product.firebaseKey && p.id !== product.id
        )
      );

      onHide();
    } catch (error) {
      console.error("❌ Error deleting product:", error);
    }
  };

  return (
    <Modal
      show={show}
      onHide={onHide}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title>Confirm Delete</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
          Are you sure you want to delete{" "}
          <strong>{product?.title || product?.name || "this product"}</strong>?
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Cancel
        </Button>
        <Button variant="danger" onClick={handleDelete}>
          Delete
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
