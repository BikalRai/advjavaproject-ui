import PrimaryButton from "../button/PrimaryButton";
import InputField from "../formFields/InputField";
import "./contactForm.scss";

const ContactForm = () => {
  return (
    <div className='contact__form'>
      <form action='' method='POST'>
        <h1>Send us a message</h1>
        <InputField inputPlaceholder='Your Name' />
        <InputField type='email' inputPlaceholder='Email' />
        <textarea
          name='contact__msg'
          id='contact__msg'
          placeholder='Message'
          rows='5'
        ></textarea>
        <PrimaryButton btnText='Submit' />
      </form>
    </div>
  );
};

export default ContactForm;
