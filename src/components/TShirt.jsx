import { useRef } from "react";
import PropTypes from "prop-types"; // Import PropTypes
import Draggable from "react-draggable";
import { toPng } from "html-to-image";
import tshirtImage from "../assets/t-shirt3.jpg"; // Import the t-shirt image
import "./../styles/TShirt.css";

function TShirt({ logo, logoSize, onResize, onRemoveLogo }) {
  const shirtRef = useRef(null);

  const handleDownload = () => {
    if (shirtRef.current) {
      toPng(shirtRef.current).then((dataUrl) => {
        const link = document.createElement("a");
        link.download = "final-tshirt.png";
        link.href = dataUrl;
        link.click();
      });
    }
  };

  return (
    <div className="tshirt-container" ref={shirtRef}>
      <div className="tshirt">
        <img src={tshirtImage} alt="T-Shirt" className="tshirt-image" />
        {logo && (
          <Draggable>
            <img
              src={logo}
              alt="Logo"
              className="logo"
              style={{
                width: `${logoSize}px`,
                height: "auto",
              }}
              onWheel={(e) => onResize(e.deltaY)}
            />
          </Draggable>
        )}
      </div>
      {logo && (
        <div className="button-group">
          <button className="download-btn" onClick={handleDownload}>
            Download Final Image
          </button>
          <button className="remove-btn" onClick={onRemoveLogo}>
            Remove Logo
          </button>
        </div>
      )}
    </div>
  );
}

// Add PropTypes for prop validation
TShirt.propTypes = {
  logo: PropTypes.string, // Logo is a string (base64 or URL)
  logoSize: PropTypes.number, // Logo size is a number
  onResize: PropTypes.func.isRequired, // Resize handler is required
  onRemoveLogo: PropTypes.func.isRequired, // Remove logo handler is required
};

export default TShirt;
