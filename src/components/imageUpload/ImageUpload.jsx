import { useState } from "react";
import "./imageUpload.scss";

const ImageUpload = ({ onImageUpload }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);

  // Handles image selection
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedImage(file);
      setPreviewUrl(URL.createObjectURL(file));
      onImageUpload(file); // Call the callback function if provided
    }
  };

  // Clears the selected image
  const handleClearImage = () => {
    setSelectedImage(null);
    setPreviewUrl(null);
    onImageUpload(null); // Clear the callback data
  };

  return (
    <div className='image-upload'>
      <label htmlFor='imageInput' className='image-upload__label'>
        {previewUrl ? (
          <img
            src={previewUrl}
            alt='Preview'
            className='image-upload__preview'
          />
        ) : (
          <span>Click to upload an image</span>
        )}
      </label>
      <input
        type='file'
        id='imageInput'
        className='image-upload__input'
        accept='image/*'
        onChange={handleImageChange}
      />
      {previewUrl && (
        <button className='image-upload__clear' onClick={handleClearImage}>
          Remove Image
        </button>
      )}
    </div>
  );
};

export default ImageUpload;
