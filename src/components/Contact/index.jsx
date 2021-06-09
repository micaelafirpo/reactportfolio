import "./style.css";

const Contact = () => {
  return (
    <div className="contact">
      <h1>Contactame!</h1>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13140.454178993365!2d-58.54620052246708!3d-34.57599341968514!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb77160243783%3A0x5e21a2d3c0a65957!2sSan%20Mart%C3%ADn%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1623257588905!5m2!1ses-419!2sar"

        frameBorder="0"
        allowfullscreen=""
        aria-hidden="false"
        tabIndex="0"
      ></iframe>

      <h4>Linkedin</h4>
      <p>Micaela Dato Firpo</p>

      <h4>Email</h4>
      <p>mdatofirpo@gmail.com</p>

      <h4>Dirección</h4>
      <p>General San Martín, Buenos Aires, Argentina.</p>
    </div>
  );
};

export default Contact;
