// // Write all the code here
// import Popup from "reactjs-popup";
// <Popup trigger={<button type="button">Send</button>}></Popup>;

// Contact.jsx

import React from "react";
import Popup from "reactjs-popup";
 
import burgerImg from "../../assets/burger2.png";

const Contact = () => {
  return (
    <div className="contact">
      <form>
        <h2>CONTACT US</h2>
        <input type="text" placeholder="Your Name" />
        <input type="email" placeholder="Your Email" />
        <textarea placeholder="Your Message"></textarea>

        <Popup trigger={<button type="button">Send</button>}>
          message sent
        </Popup>
      </form>
      <div class="formBorder">
        <div>
          <img src={burgerImg} alt="Decorative" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
