import { useState, useContext, useEffect } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  Tooltip,
  ResponsiveContainer,
  Pie,
  PieChart,
  Cell,
} from "recharts";
import {
  Card,
  CardContent,
  Typography,
  Box,
  Button,
  TextField,
  MenuItem,
  Select,
  InputLabel,
} from "@mui/material";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { ProductsContext } from "../../Context/ProductsContext";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import DeleteModal from "../modal/DeletModal";
import { MediaContext } from "../../Context/MediaContext";
import { NotificationContext } from "../../Context/NotificationContext";

function DashboardHome() {
  const { isMobile } = useContext(MediaContext);
  const [showRevenue, setShowRevenue] = useState(true);
  const [showProfit, setShowProfit] = useState(true);

  const data1 = [
    { month: "Jan", revenue: 4000 },
    { month: "Feb", revenue: 3000 },
    { month: "Mar", revenue: 2000 },
    { month: "Apr", revenue: 2780 },
    { month: "May", revenue: 1890 },
    { month: "Jun", revenue: 2390 },
    { month: "Jul", revenue: 3490 },
  ];
  const data2 = [
    { month: "Jan", revenue: 2000 },
    { month: "Feb", revenue: 2000 },
    { month: "Mar", revenue: 6000 },
    { month: "Apr", revenue: 4780 },
    { month: "May", revenue: 8890 },
    { month: "Jun", revenue: 6390 },
    { month: "Jul", revenue: 2490 },
  ];
  const data3 = [
    { month: "Jan", revenue: 8000 },
    { month: "Feb", revenue: 6000 },
    { month: "Mar", revenue: 5000 },
    { month: "Apr", revenue: 4780 },
    { month: "May", revenue: 3890 },
    { month: "Jun", revenue: 8390 },
    { month: "Jul", revenue: 9490 },
  ];
  const data4 = [
    { month: "Jan", revenue: 9000 },
    { month: "Feb", revenue: 1000 },
    { month: "Mar", revenue: 8000 },
    { month: "Apr", revenue: 3780 },
    { month: "May", revenue: 7890 },
    { month: "Jun", revenue: 5390 },
    { month: "Jul", revenue: 9490 },
  ];
  const data5 = [
    { month: "Jan", revenue: 4000, profit: 2400 },
    { month: "Feb", revenue: 3000, profit: 1398 },
    { month: "Mar", revenue: 2000, profit: 9800 },
    { month: "Apr", revenue: 2780, profit: 3908 },
    { month: "May", revenue: 1890, profit: 4800 },
    { month: "Jun", revenue: 2390, profit: 3800 },
    { month: "Jul", revenue: 3490, profit: 4300 },
  ];
  const data6 = [
    { name: "Electronics", value: 400 },
    { name: "Clothes", value: 300 },
    { name: "Books", value: 200 },
    { name: "Other", value: 100 },
  ];
  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

  return (
    <div className={`${isMobile ? "" : "p-3"}`}>
      <h2 className="mt-4 mb-3">Welcome, Admin!</h2>
      <p>Your role is admin</p>

      <div className="row g-3 mb-5">
        {[data1, data2, data3, data4].map((chartData, index) => (
          <div key={index} className="col-12 col-md-6 col-lg-3">
            <Card sx={{ borderRadius: 4, boxShadow: 3, height: 350 }}>
              <CardContent
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Box mb={2}>
                  <Typography variant="h6" fontWeight="bold">
                    Revenue Generated
                  </Typography>
                  <Box className="d-flex">
                    <Typography
                      variant="h4"
                      color="primary"
                      fontWeight="bold"
                      style={{
                        color: ["#4ccf7f", "#ca4155", "#d19c48", "#4392d5"][
                          index
                        ],
                      }}
                    >
                      $
                    </Typography>
                    <Typography
                      variant="h4"
                      color="primary"
                      fontWeight="bold"
                      style={{ color: "black" }}
                    >
                      {["24,300", "26,300", "26,300", "17,300"][index]}
                    </Typography>
                  </Box>
                </Box>
                <Box flex={1}>
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={chartData}>
                      <XAxis
                        dataKey="month"
                        axisLine={false}
                        tickLine={false}
                      />
                      <Tooltip
                        contentStyle={{
                          borderRadius: "12px",
                          border: "none",
                          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                        }}
                      />
                      <Area
                        type="monotone"
                        dataKey="revenue"
                        stroke={
                          ["#4ccf7f", "#ca4155", "#d19c48", "#4392d5"][index]
                        }
                        fill={`url(#color${index})`}
                      />
                      <defs>
                        <linearGradient
                          id={`color${index}`}
                          x1="0"
                          y1="0"
                          x2="0"
                          y2="1"
                        >
                          <stop
                            offset="5%"
                            stopColor={
                              ["#4ccf7f", "#ca4155", "#d19c48", "#4392d5"][
                                index
                              ]
                            }
                            stopOpacity={0.6}
                          />
                          <stop
                            offset="95%"
                            stopColor={
                              ["#4ccf7f", "#ca4155", "#d19c48", "#4392d5"][
                                index
                              ]
                            }
                            stopOpacity={0.05}
                          />
                        </linearGradient>
                      </defs>
                    </AreaChart>
                  </ResponsiveContainer>
                </Box>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>

      <div className="row mb-5">
        <div className="col-12">
          <Card sx={{ borderRadius: 4, boxShadow: 3, height: 400 }}>
            <CardContent
              sx={{ height: "100%", display: "flex", flexDirection: "column" }}
            >
              <Box mb={2}>
                <Typography variant="h6" fontWeight="bold">
                  Revenue & Profit
                </Typography>
              </Box>

              <Box mb={2} display="flex" gap={1} flexWrap="wrap">
                <Button
                  variant={showRevenue ? "contained" : "outlined"}
                  color="primary"
                  onClick={() => setShowRevenue(!showRevenue)}
                >
                  Toggle Revenue
                </Button>
                <Button
                  variant={showProfit ? "contained" : "outlined"}
                  color="secondary"
                  onClick={() => setShowProfit(!showProfit)}
                >
                  Toggle Profit
                </Button>
              </Box>

              <Box flex={1}>
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={data5}>
                    <XAxis dataKey="month" axisLine={false} tickLine={false} />
                    <Tooltip
                      contentStyle={{
                        borderRadius: "12px",
                        border: "none",
                        boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                      }}
                    />
                    {showRevenue && (
                      <Area
                        type="monotone"
                        dataKey="revenue"
                        stroke="#4ccf7f"
                        fill="url(#colorRevenue)"
                      />
                    )}
                    {showProfit && (
                      <Area
                        type="monotone"
                        dataKey="profit"
                        stroke="#ca4155"
                        fill="url(#colorProfit)"
                      />
                    )}
                    <defs>
                      <linearGradient
                        id="colorRevenue"
                        x1="0"
                        y1="0"
                        x2="0"
                        y2="1"
                      >
                        <stop
                          offset="5%"
                          stopColor="#4ccf7f"
                          stopOpacity={0.6}
                        />
                        <stop
                          offset="95%"
                          stopColor="#4ccf7f"
                          stopOpacity={0.05}
                        />
                      </linearGradient>
                      <linearGradient
                        id="colorProfit"
                        x1="0"
                        y1="0"
                        x2="0"
                        y2="1"
                      >
                        <stop
                          offset="5%"
                          stopColor="#ca4155"
                          stopOpacity={0.6}
                        />
                        <stop
                          offset="95%"
                          stopColor="#ca4155"
                          stopOpacity={0.05}
                        />
                      </linearGradient>
                    </defs>
                  </AreaChart>
                </ResponsiveContainer>
              </Box>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="row g-3">
        {/* Browser Statistics */}
        <div className="col-12 col-md-6 col-lg-6">
          <Card sx={{ borderRadius: 4, boxShadow: 3, height: "100%" }}>
            <CardContent>
              <h4 className="mt-3 mb-3">Browser Statistics</h4>
              <div className="d-flex flex-column gap-3">
                <div className="d-flex justify-content-between">
                  <span>Chrome</span>
                  <span>65%</span>
                </div>
                <div className="progress" style={{ height: "8px" }}>
                  <div
                    className="progress-bar bg-success"
                    role="progressbar"
                    style={{ width: "65%" }}
                  ></div>
                </div>

                <div className="d-flex justify-content-between">
                  <span>Firefox</span>
                  <span>20%</span>
                </div>
                <div className="progress" style={{ height: "8px" }}>
                  <div
                    className="progress-bar bg-warning"
                    role="progressbar"
                    style={{ width: "20%" }}
                  ></div>
                </div>

                <div className="d-flex justify-content-between">
                  <span>Safari</span>
                  <span>10%</span>
                </div>
                <div className="progress" style={{ height: "8px" }}>
                  <div
                    className="progress-bar bg-info"
                    role="progressbar"
                    style={{ width: "10%" }}
                  ></div>
                </div>

                <div className="d-flex justify-content-between">
                  <span>Others</span>
                  <span>5%</span>
                </div>
                <div className="progress" style={{ height: "8px" }}>
                  <div
                    className="progress-bar bg-danger"
                    role="progressbar"
                    style={{ width: "5%" }}
                  ></div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sales Distribution */}
        <div className="col-12 col-md-6 col-lg-6">
          <Card sx={{ borderRadius: 4, boxShadow: 3, height: "100%" }}>
            <CardContent sx={{ height: "100%" }}>
              <Typography variant="h6" fontWeight="bold" gutterBottom>
                Sales Distribution
              </Typography>
              <Box sx={{ height: 300 }}>
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={data6}
                      dataKey="value"
                      nameKey="name"
                      cx="50%"
                      cy="50%"
                      outerRadius={100}
                      fill="#8884d8"
                      label
                    >
                      {data6.map((entry, index) => (
                        <Cell
                          key={`cell-${index}`}
                          fill={COLORS[index % COLORS.length]}
                        />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </Box>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

function DashboardOrders() {
  return <h2>Orders Management</h2>;
}

function DashboardFeadBack() {
  return <h2>FeadBack Management</h2>;
}

function DashboardBlog() {
  return <h2>Blog Management</h2>;
}

function DashboardProducts() {
  const { products, setProducts } = useContext(ProductsContext);
  const [modalShow, setModalShow] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <div>
      <div>
        <h4 className="mb-3">Products</h4>
        <Link
          to="new"
          className="mb-3 d-block"
          style={{
            backgroundColor: "#bd744c",
            border: "none",
            color: "white",
            padding: "15px 35px",
            width: "fit-content",
          }}
        >
          New
        </Link>

        <input
          className="d-block w-100 p-2 mb-3"
          style={{
            outline: "none",
            border: "1px solid #ccc",
            borderRadius: "6px",
          }}
          type="text"
          placeholder="Search"
        />
      </div>

      {/* Desktop Table */}
      <div className="d-none d-md-block">
        <table
          className="mt-4 w-100 text-center"
          style={{ borderCollapse: "separate", borderSpacing: "0 10px" }}
        >
          <thead style={{ backgroundColor: "#bd744c", color: "white" }}>
            <tr className="text-uppercase">
              <th>image</th>
              <th>title</th>
              <th>price</th>
              <th>categories</th>
              <th>actions</th>
            </tr>
          </thead>
          <tbody>
            {products
              .filter(
                (product) =>
                  product &&
                  (product.id || product.firebaseKey) &&
                  (product.title || product.name) &&
                  product.image
              )
              .map((product) => (
                <tr
                  key={product.id || product.firebaseKey}
                  style={{
                    background: "white",
                    boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
                  }}
                >
                  <td>
                    <img
                      loading="lazy"
                      style={{ height: "75px", width: "75px" }}
                      src={product.image}
                      alt={product.title || "Untitled"}
                    />
                  </td>
                  <td>{product.title || product.name || "Untitled"}</td>
                  <td>{product.price || 0}</td>
                  <td>{product.categories || "N/A"}</td>
                  <td>
                    <Button
                      as={Link}
                      to={`/dashboard/edit/${
                        product.firebaseKey || product.id
                      }`}
                      className="bg-primary me-3"
                      style={{
                        color: "white",
                        padding: "3px 10px",
                        border: "none",
                      }}
                    >
                      edit
                    </Button>
                    <Button
                      onClick={() => {
                        setSelectedProduct(product);
                        setModalShow(true);
                      }}
                      className="bg-danger"
                      style={{
                        color: "white",
                        padding: "3px 10px",
                        border: "none",
                      }}
                    >
                      delete
                    </Button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Cards */}
      <div className="d-block d-md-none mt-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="p-3 mb-3 rounded shadow-sm"
            style={{ background: "white" }}
          >
            <div className="d-flex align-items-center mb-3">
              <img
                loading="lazy"
                src={product.image}
                alt=""
                style={{
                  height: "75px",
                  width: "75px",
                  borderRadius: "8px",
                  objectFit: "cover",
                }}
              />
              <div className="ms-3">
                <h6 className="mb-1">{product.title}</h6>
                <p className="mb-0 text-secondary">Price: {product.price}</p>
                <p className="mb-0 text-secondary">
                  Category: {product.categories}
                </p>
              </div>
            </div>
            <div>
              <Button
                as={Link}
                to={`/dashboard/edit/${product.firebaseKey}`}
                className="bg-primary me-2"
                style={{
                  color: "white",
                  padding: "5px 12px",
                  border: "none",
                }}
              >
                edit
              </Button>
              <Button
                onClick={() => {
                  setSelectedProduct(product);
                  setModalShow(true);
                }}
                className="bg-danger"
                style={{
                  color: "white",
                  padding: "5px 12px",
                  border: "none",
                }}
              >
                delete
              </Button>
            </div>
          </div>
        ))}
      </div>

      <DeleteModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        product={selectedProduct}
        onConfirm={(product) => {
          setProducts((prev) => prev.filter((p) => p.id !== product.id));
        }}
      />
    </div>
  );
}

function DashboardNewProduct() {
  const [image, setImage] = useState(null);
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [categories, setCategories] = useState("");
  const [brandes, setBrandes] = useState("");
  const [products, setProducts] = useState([]);
  const { showNotification } = useContext(NotificationContext);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      let imageUrl = "";

      if (image) {
        const formData = new FormData();
        formData.append("file", image);
        formData.append("upload_preset", "my_preset"); // preset name
        formData.append("cloud_name", "drjvnfcxi"); // cloud name

        const res = await fetch(
          "https://api.cloudinary.com/v1_1/drjvnfcxi/image/upload",
          {
            method: "POST",
            body: formData,
          }
        );

        const data = await res.json();
        imageUrl = data.secure_url;
      }

      const newProduct = {
        brands: brandes,
        categories,
        category: categories,
        id: Date.now(),
        image: imageUrl,
        price: Number(price),
        title,
        feadback: [
          {
            Comment: "",
            firstitle: "",
            lasttitle: "",
            rating: "",
          },
        ],
      };

      const response = await fetch(
        "https://dream-store-f5025-default-rtdb.firebaseio.com/products.json",
        {
          method: "POST",
          body: JSON.stringify(newProduct),
          headers: { "Content-Type": "application/json" },
        }
      );

      if (!response.ok) {
        throw new Error("❌ فشل في حفظ المنتج");
      }

      setProducts((prev) => [...prev, newProduct]);

      showNotification("✅ Saved:", newProduct);

      setTitle("");
      setPrice("");
      setCategories("");
      setBrandes("");
      setImage(null);
    } catch (err) {
      showNotification("Save error:", err);
    }
  };

  return (
    <div>
      <h4>Add Products</h4>
      <form onSubmit={handleSubmit}>
        <label className="mb-2 mt-3 d-block" htmlFor="upload">
          Image
        </label>
        <input
          type="file"
          id="upload"
          accept="image/*"
          className="mb-3"
          onChange={(e) => setImage(e.target.files[0])}
        />

        {image && (
          <div style={{ marginTop: "15px" }}>
            <img
              className="mb-3"
              loading="lazy"
              src={image instanceof File ? URL.createObjectURL(image) : ""}
              alt="preview"
              style={{ maxWidth: "150px", borderRadius: "8px" }}
            />
          </div>
        )}

        <TextField
          label="Title"
          variant="outlined"
          className="mb-4"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          fullWidth
        />

        <TextField
          label="Price"
          variant="outlined"
          className="mb-4"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          fullWidth
        />

        <InputLabel id="categories-label">Categories</InputLabel>
        <Select
          className="mb-4"
          labelId="categories-label"
          value={categories}
          onChange={(e) => setCategories(e.target.value)}
          fullWidth
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value="Furniture">Furniture</MenuItem>
          <MenuItem value="Lighting">Lighting</MenuItem>
          <MenuItem value="Decoration">Decoration</MenuItem>
          <MenuItem value="Bedding">Bedding</MenuItem>
          <MenuItem value="Bath & Shower">Bath & Shower</MenuItem>
          <MenuItem value="Curtains">Curtains</MenuItem>
          <MenuItem value="Toys">Toys</MenuItem>
        </Select>

        <InputLabel id="brands-label">Brands</InputLabel>
        <Select
          className="mb-4"
          labelId="brands-label"
          value={brandes}
          onChange={(e) => setBrandes(e.target.value)}
          fullWidth
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value="Poliform">Poliform</MenuItem>
          <MenuItem value="Roche Bobois">Roche Bobois</MenuItem>
          <MenuItem value="Edra">Edra</MenuItem>
          <MenuItem value="Kartell">Kartell</MenuItem>
        </Select>

        <Button
          type="submit"
          variant="contained"
          color="primary"
          sx={{ mt: 2 }}
        >
          Save Product
        </Button>
      </form>

      <div style={{ marginTop: "30px" }}>
        <h5>Saved Products:</h5>
        {products.map((p, index) => (
          <div key={index} style={{ marginBottom: "10px" }}>
            <p>
              <strong>{p.title}</strong> - ${p.price} <br />
              {p.categories} | {p.brands}
            </p>
            {p.image && (
              <img
                loading="lazy"
                src={p.image}
                alt={p.title}
                style={{ maxWidth: "100px" }}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
export default function DashboardEditProduct() {
  const { firebaseKey } = useParams();
  const [product, setProduct] = useState(null);
  const { showNotification } = useContext(NotificationContext);

  // form fields
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [categories, setCategories] = useState("");
  const [brands, setBrands] = useState("");

  useEffect(() => {
    async function fetchProduct() {
      try {
        const res = await axios.get(
          `https://dream-store-f5025-default-rtdb.firebaseio.com/products/${firebaseKey}.json`
        );

        const foundProduct = res.data;

        if (foundProduct) {
          setProduct(foundProduct);

          setTitle(foundProduct.title || "");
          setPrice(foundProduct.price || "");
          setCategories(foundProduct.categories || foundProduct.category || "");
          setBrands(foundProduct.brands || foundProduct.brand || "");
        }
      } catch (err) {
        showNotification("❌ Error fetching product: " + err.message);
      }
    }

    fetchProduct();
  }, [firebaseKey]);

  const handleUpdate = async () => {
    const updatedProduct = {
      ...product,
      title,
      price,
      categories,
      brands,
    };

    try {
      await axios.put(
        `https://dream-store-f5025-default-rtdb.firebaseio.com/products/${firebaseKey}.json`,
        updatedProduct
      );
      showNotification("✅ Product updated successfully!");
    } catch (err) {
      showNotification("❌ Error updating product: " + err.message);
    }
  };

  return (
    <div>
      <h4>Edit Product</h4>

      {product ? (
        <div>
          {product.image && (
            <img
              loading="lazy"
              style={{
                maxWidth: "150px",
                borderRadius: "8px",
                marginBottom: "15px",
              }}
              src={product.image}
              alt={product.title}
            />
          )}
        </div>
      ) : (
        <p>Loading product...</p>
      )}

      <div>
        <TextField
          label="Title"
          variant="outlined"
          className="mb-4"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          fullWidth
        />

        <TextField
          label="Price"
          type="number"
          variant="outlined"
          className="mb-4"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          fullWidth
        />

        <InputLabel id="categories-label">Categories</InputLabel>
        <Select
          className="mb-4"
          value={categories}
          onChange={(e) => setCategories(e.target.value)}
          labelId="categories-label"
          fullWidth
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value="Furniture">Furniture</MenuItem>
          <MenuItem value="Lighting">Lighting</MenuItem>
          <MenuItem value="Decoration">Decoration</MenuItem>
          <MenuItem value="Bedding">Bedding</MenuItem>
          <MenuItem value="Bath & Shower">Bath & Shower</MenuItem>
          <MenuItem value="Curtains">Curtains</MenuItem>
          <MenuItem value="Toys">Toys</MenuItem>
        </Select>

        <InputLabel id="brands-label">Brands</InputLabel>
        <Select
          className="mb-4"
          value={brands}
          onChange={(e) => setBrands(e.target.value)}
          labelId="brands-label"
          fullWidth
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value="Poliform">Poliform</MenuItem>
          <MenuItem value="Roche Bobois">Roche Bobois</MenuItem>
          <MenuItem value="Edra">Edra</MenuItem>
          <MenuItem value="Kartell">Kartell</MenuItem>
        </Select>

        <Button
          variant="contained"
          color="primary"
          onClick={handleUpdate}
          style={{ marginTop: "10px" }}
        >
          Save Changes
        </Button>
      </div>
    </div>
  );
}

function DashboardUsers() {
  return <h2>Users Management</h2>;
}
function DashboardCategories() {
  return <h2>Categories Management</h2>;
}

function DashboardProfile() {
  return <h2>Profile Management</h2>;
}

function DashboardPassword() {
  return <h2>Change Password Management</h2>;
}

export {
  DashboardProducts,
  DashboardOrders,
  DashboardUsers,
  DashboardHome,
  DashboardFeadBack,
  DashboardBlog,
  DashboardCategories,
  DashboardProfile,
  DashboardPassword,
  DashboardNewProduct,
  DashboardEditProduct,
};
