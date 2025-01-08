import PropTypes from "prop-types";
import "./../styles/LogoUploader.css";

function LogoUploader({ onUpload }) {
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      onUpload(file);
    }
  };

  return (
    <div className="logo-uploader">
      <input
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        className="upload-input"
      />
    </div>
  );
}

LogoUploader.propTypes = {
  onUpload: PropTypes.func.isRequired,
};

export default LogoUploader;

