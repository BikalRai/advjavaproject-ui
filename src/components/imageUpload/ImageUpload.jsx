import { useState } from "react";
import { BiSolidImageAdd } from "react-icons/bi";
import PropType from "prop-types";
import "./imageUpload.scss";

const ImageUpload = ({ onImageUpload, onImageRemove }) => {
  const [img, setImg] = useState("");

  const handleImageUpload = ({ target }) => {
    const file = target.files[0];

    // Create a local URL for immediate display
    setImg(URL.createObjectURL(file));

    // Read the file as ArrayBuffer for sending to the server
    const reader = new FileReader();
    reader.onload = (event) => {
      const base64String = btoa(
        new Uint8Array(event.target.result).reduce(
          (data, byte) => data + String.fromCharCode(byte),
          ""
        )
      );
      // Pass the base64 string to the parent component
      onImageUpload(base64String);
    };
    reader.readAsArrayBuffer(file);
  };

  const handleImageRemove = () => {
    setImg("");
    onImageRemove();
  };

  return (
    <div className='image-upload-container'>
      <div className='image-upload-area' title='Click to upload image'>
        <input
          type='file'
          onChange={handleImageUpload}
          accept='image/*'
          className='file-input'
        />
        {img ? (
          <>
            <img src={img} alt='Uploaded image' className='uploaded-image' />
            <button className='remove-btn' onClick={handleImageRemove}>
              Remove
            </button>
          </>
        ) : (
          <BiSolidImageAdd className='upload-icon' />
        )}
      </div>
      {img && <p className='img_upload--msg'>Image uploaded successfully!</p>}
    </div>
  );
};

ImageUpload.propTypes = {
  onImageUpload: PropType.func,
  onImageRemove: PropType.func,
};

export default ImageUpload;
