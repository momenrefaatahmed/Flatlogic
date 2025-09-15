import { Outlet, Link, useLocation, useNavigate } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import RecommendIcon from "@mui/icons-material/Recommend";
import DiscountIcon from "@mui/icons-material/Discount";
import PersonIcon from "@mui/icons-material/Person";
import CategoryIcon from "@mui/icons-material/Category";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import SettingsIcon from "@mui/icons-material/Settings";
import image from "../../../public/image/e-commerce/team/person1.AVIF";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

function DashboardLayout() {
  const location = useLocation();
  const [anchorEl, setAnchorEl] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate();

  const open = Boolean(anchorEl);

  const handleClick = (event) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);

  const handleLogout = () => {
    localStorage.removeItem("isAdmin");
    localStorage.removeItem("token");
    setAnchorEl(null);
    navigate("/");
  };

  return (
    <div className="container-fluid">
      <div className="row">
        {/* Sidebar */}
        <div
          className={`sidebar p-3 ${sidebarOpen ? "open" : ""}`}
          style={{
            backgroundColor: "white",
            boxShadow: "4px 0 10px rgba(0,0,0,0.2)",
            position: "fixed",
            top: 0,
            left: sidebarOpen ? 0 : "-250px",
            height: "100vh",
            width: "250px",
            transition: "left 0.3s ease-in-out",
            zIndex: 1000,
          }}
        >
          <h4 className="fw-bold mb-5">Flatlogic.</h4>
          <ul className="list-unstyled p-3">
            <li className="d-flex align-items-center mb-4">
              <Link className="fw-bold w-100 d-flex" to="home">
                <HomeIcon className="me-2" /> Home
              </Link>
            </li>
            <li className="d-flex align-items-center mb-4">
              <Link className="fw-bold w-100 d-flex" to="products">
                <DiscountIcon className="me-2" /> Products
              </Link>
            </li>
            <li className="d-flex align-items-center mb-4">
              <Link className="fw-bold w-100 d-flex" to="orders">
                <FileDownloadIcon className="me-2" /> Orders
              </Link>
            </li>
            <li className="d-flex align-items-center mb-4">
              <Link className="fw-bold w-100 d-flex" to="feadback">
                <RecommendIcon className="me-2" /> Feadback
              </Link>
            </li>
            <li className="d-flex align-items-center mb-4">
              <Link className="fw-bold w-100 d-flex" to="blog">
                <FileDownloadIcon className="me-2" /> Blog
              </Link>
            </li>
            <li className="d-flex align-items-center mb-4">
              <Link className="fw-bold w-100 d-flex" to="users">
                <PersonIcon className="me-2" /> Users
              </Link>
            </li>
            <li className="d-flex align-items-center mb-4">
              <Link className="fw-bold w-100 d-flex" to="categories">
                <CategoryIcon className="me-2" /> Categories
              </Link>
            </li>
            <li className="d-flex align-items-center mb-4">
              <Link className="fw-bold w-100 d-flex" to="profile">
                <AssignmentIndIcon className="me-2" /> My Profile
              </Link>
            </li>
            <li className="d-flex align-items-center mb-4">
              <Link
                className="fw-bold w-100 d-flex"
                style={{ fontSize: "14px" }}
                to="password"
              >
                <SettingsIcon className="me-2" /> Change Password
              </Link>
            </li>
          </ul>
        </div>

        {sidebarOpen && (
          <div
            onClick={() => setSidebarOpen(false)}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: "rgba(0,0,0,0.3)",
              zIndex: 999,
            }}
          ></div>
        )}

        {/* Main Content */}
        <div className="col p-4" style={{ marginLeft: "0" }}>
          <div className="d-flex align-items-center justify-content-between w-100 mb-4 flex-wrap">
            {/* Left side: Menu + Search */}
            <div className="d-flex align-items-center mb-2 mb-md-0">
              <MenuIcon
                className="me-3"
                style={{ cursor: "pointer", fontSize: "28px" }}
                onClick={() => setSidebarOpen(!sidebarOpen)}
              />
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  maxWidth: "250px",
                }}
              >
                <input
                  type="text"
                  placeholder="Search..."
                  style={{
                    width: "100%",
                    padding: "8px 8px 8px 35px",
                    borderRadius: "6px",
                    border: "1px solid #ccc",
                    fontSize: "14px",
                  }}
                />
                <SearchIcon
                  style={{
                    position: "absolute",
                    left: "10px",
                    top: "50%",
                    transform: "translateY(-50%)",
                    color: "#888",
                    fontSize: "18px",
                  }}
                />
              </div>
            </div>

            {/* Right side: Profile */}
            <div className="d-flex align-items-center">
              <img
                loading="lazy"
                src={image}
                alt="profile"
                style={{
                  width: "45px",
                  height: "45px",
                  borderRadius: "50%",
                  objectFit: "cover",
                }}
              />
              <p className="m-0 mx-2 fw-bold">Admin</p>
              <SettingsIcon
                id="basic-button"
                aria-controls={open ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
                style={{ cursor: "pointer" }}
              />
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>My account</MenuItem>
                <MenuItem onClick={handleLogout}>Logout</MenuItem>
              </Menu>
            </div>
          </div>

          {/* Breadcrumb */}
          <div className="text-secondary mt-4">
            <span>{location.pathname}</span>
          </div>
          <hr />
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default DashboardLayout;
