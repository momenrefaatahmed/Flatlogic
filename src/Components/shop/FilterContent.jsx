import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import Typography from "@mui/material/Typography";

function valuetext(value) {
  return `$${value}`;
}

// Component مستقل للفلاتر
export default function FilterContent({
  selectCategories,
  handleCategoryChange,
  value,
  handleChange,
  selectedBrands,
  handleBrandChange,
  theme,
}) {
  return (
    <div style={{ width: "250px", padding: "10px" }}>
      {/* Categories */}
      <div className="mb-4">
        <h4 className="fw-bold mb-4">Categories</h4>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                onChange={handleCategoryChange("Furniture")}
                checked={selectCategories.includes("Furniture")}
              />
            }
            label="Furniture"
          />
          <FormControlLabel
            control={
              <Checkbox
                onChange={handleCategoryChange("Lighting")}
                checked={selectCategories.includes("Lighting")}
              />
            }
            label="Lighting"
          />
          <FormControlLabel
            control={
              <Checkbox
                onChange={handleCategoryChange("Decoration")}
                checked={selectCategories.includes("Decoration")}
              />
            }
            label="Decoration"
          />
          <FormControlLabel
            control={
              <Checkbox
                onChange={handleCategoryChange("Bedding")}
                checked={selectCategories.includes("Bedding")}
              />
            }
            label="Bedding"
          />
          <FormControlLabel
            control={
              <Checkbox
                onChange={handleCategoryChange("Bath & Shower")}
                checked={selectCategories.includes("Bath & Shower")}
              />
            }
            label="Bath & Shower"
          />
          <FormControlLabel
            control={
              <Checkbox
                onChange={handleCategoryChange("Curtains")}
                checked={selectCategories.includes("Curtains")}
              />
            }
            label="Curtains"
          />
          <FormControlLabel
            control={
              <Checkbox
                onChange={handleCategoryChange("Toys")}
                checked={selectCategories.includes("Toys")}
              />
            }
            label="Toys"
          />
        </FormGroup>
      </div>

      {/* Price */}
      <div className="mb-4">
        <h4 className="fw-bold mb-4">PRICE</h4>
        <Box>
          <Typography gutterBottom>Price Range</Typography>
          <Slider
            getAriaLabel={() => "Price range"}
            value={value}
            sx={{
              color: "#bd744c",
              "& .MuiSlider-thumb": {
                backgroundColor: "#bd744c",
                border: "2px solid #bd744c",
              },
              "& .MuiSlider-track": {
                backgroundColor: "#bd744c",
              },
              "& .MuiSlider-rail": {
                backgroundColor: "#ccc",
              },
            }}
            onChange={handleChange}
            valueLabelDisplay="auto"
            getAriaValueText={valuetext}
            min={15}
            max={150}
            step={5}
          />
          <Typography>
            Selected: ${value[0]} - ${value[1]}
          </Typography>
        </Box>
      </div>

      {/* Brands */}
      <div className="mb-4">
        <h4 className="fw-bold mb-4">Brands</h4>
        <FormGroup theme={theme}>
          <FormControlLabel
            control={
              <Checkbox
                onChange={handleBrandChange("Poliform")}
                checked={selectedBrands.includes("Poliform")}
              />
            }
            label="Poliform"
          />
          <FormControlLabel
            control={
              <Checkbox
                onChange={handleBrandChange("Roche Bobois")}
                checked={selectedBrands.includes("Roche Bobois")}
              />
            }
            label="Roche Bobois"
          />
          <FormControlLabel
            control={
              <Checkbox
                onChange={handleBrandChange("Decoration")}
                checked={selectedBrands.includes("Decoration")}
              />
            }
            label="Decoration"
          />
          <FormControlLabel
            control={
              <Checkbox
                onChange={handleBrandChange("Edra")}
                checked={selectedBrands.includes("Edra")}
              />
            }
            label="Edra"
          />
          <FormControlLabel
            control={
              <Checkbox
                onChange={handleBrandChange("Kartell")}
                checked={selectedBrands.includes("Kartell")}
              />
            }
            label="Kartell"
          />
        </FormGroup>
      </div>

      {/* Availability */}
      <div className="mb-4">
        <h4 className="fw-bold mb-4">Availability</h4>
        <FormGroup theme={theme}>
          <FormControlLabel control={<Checkbox />} label="On Stock" />
          <FormControlLabel control={<Checkbox />} label="Out of Stock" />
        </FormGroup>
      </div>
    </div>
  );
}
