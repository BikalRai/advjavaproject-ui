import { useState } from "react";
import PropType from "prop-types";
import "./image.scss";

const ImageUploader = ({ setImage }) => {
  const [imagePreview, setImagePreview] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      // Set image preview using Object URL
      setImagePreview(URL.createObjectURL(file));

      const reader = new FileReader();
      reader.onloadend = (event) => {
        // Convert the ArrayBuffer to a Base64 string
        const base64String = btoa(
          new Uint8Array(event.target.result).reduce(
            (data, byte) => data + String.fromCharCode(byte),
            ""
          )
        );

        // Pass the Base64 string (without prefix) to the parent component
        setImage(base64String); // No need to strip anything, it's clean Base64
      };

      // Read the file as an ArrayBuffer
      reader.readAsArrayBuffer(file);
    }
  };

  const handleRemoveImage = () => {
    setImage(null); // Clear image in parent
    setImagePreview(null); // Clear image preview
  };

  return (
    <div className='image-upload'>
      <label htmlFor='imgUpload' className='upload__label'>
        Click to upload image
      </label>
      <input
        type='file'
        id='imgUpload'
        name='imgUpload'
        accept='image/*'
        onChange={handleImageChange}
      />
      {imagePreview && (
        <div className='imagePreview'>
          <img
            src={imagePreview}
            alt='Image Preview'
            style={{ height: "100px", width: "200px" }}
          />
          <button className='remove__btn' onClick={handleRemoveImage}>
            Remove Image
          </button>
        </div>
      )}
    </div>
  );
};

ImageUploader.propTypes = {
  setImage: PropType.func,
};

export default ImageUploader;
