import { useState } from "react";
import InputField from "../../inputfield/InputField";
import "./addservice.scss";
import ImageUpload from "../../imageUpload/ImageUpload";

const AddService = () => {
  const [inputValue, setInputValue] = useState("");

  const handleInputValue = ({ target: { value } }) => {
    setInputValue(value);
  };

  return (
    <div className='addService'>
      <h1>Add a service</h1>
      <form action='' className='addService__form'>
        <InputField
          name='Service name'
          handleOnChange={handleInputValue}
          value={inputValue}
        />
        <InputField
          name='Description'
          handleOnChange={handleInputValue}
          value={inputValue}
          multiLine={true}
          rows={2}
        />
        <ImageUpload />
      </form>
    </div>
  );
};

export default AddService;
