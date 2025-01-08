import { useState } from "react";
import TShirt from "./components/TShirt";
import LogoUploader from "./components/LogoUploader";
import "./styles/App.css";

function App() {
  const [logo, setLogo] = useState(null);
  const [logoSize, setLogoSize] = useState(100); // Default logo size

  const handleUpload = (file) => {
    const reader = new FileReader();
    reader.onload = (e) => setLogo(e.target.result);
    reader.readAsDataURL(file);
  };

  const handleResize = (deltaY) => {
    setLogoSize((prevSize) => Math.max(50, prevSize - deltaY * 0.1)); // Prevent logo size < 50
  };

  const handleRemoveLogo = () => {
    setLogo(null);
    setLogoSize(100); // Reset logo size
  };

  return (
    <div className="app">
      <div className="left-panel">
        <TShirt
          logo={logo}
          logoSize={logoSize}
          onResize={handleResize}
          onRemoveLogo={handleRemoveLogo}
        />
      </div>
      <div className="right-panel">
        <LogoUploader onUpload={handleUpload} />
      </div>
    </div>
  );
}

export default App;



