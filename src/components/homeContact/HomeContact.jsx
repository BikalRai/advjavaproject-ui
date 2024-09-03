import ContactForm from "../form/ContactForm";
import "./homeContact.scss";

const HomeContact = () => {
  return (
    <div className='homeContact'>
      <iframe
        src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3534.51091077649!2d85.3176198113444!3d27.639660428373936!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb178eb2e53cf5%3A0x1b8e736fce618d54!2sBinayak%20Sports%20Complex!5e0!3m2!1sen!2snp!4v1725364570485!5m2!1sen!2snp'
        // width='600'
        // height='394'
        style={{ border: 0 }}
        allowFullScreen=''
        loading='lazy'
        referrerPolicy='no-referrer-when-downgrade'
      ></iframe>

      <ContactForm />
    </div>
  );
};

export default HomeContact;
