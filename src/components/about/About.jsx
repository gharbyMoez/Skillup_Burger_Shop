// // Write all the code here
// import React from "react";
// import { Link } from "react-router-dom";
// import { RiFindReplaceLine } from "react-icons/ri";
// import me from "../../assets/skj.jpg";

// <><h1>About Us</h1><article>
//     <h4>Burger Shop</h4>
//     <p>
//         This is Burger Shop. The place for the most tasty burgers on the
//         entire earth.
//     </p>
//     <p>
//         Explore the various types of food and burgers. Click below to see the
//         menu.
//     </p>
// </article><div>
//         <h2>Founder</h2>
//         <article>
//             <div>
//                 <img src={me} alt="Founder" />
//                 <h3>Nelson</h3>
//             </div>
//             <p>
//                 I am Nelson, the founder of Burger Shop. Affiliated to
//                 God Taste...
//             </p>
//         </article>
//     </div></>
// export default About;


// Import necessary dependencies
import React from "react";
import { RiFindReplaceLine } from "react-icons/ri";
import me from "../../assets/skj.jpg";

// Create the About component
const About = () => {
  return (
    <div className="about">
      <main>
        <h1>About Us</h1>
        <article>
          <h4>Burger Shop</h4>
          <p>
            This is Burger Shop. The place for the most tasty burgers on the
            entire earth.
          </p>
          <p>
            Explore the various types of food and burgers. Click below to see
            the menu.
          </p>
        </article>
        <div>
          <h2>Founder</h2>
          <article>
            <div>
              <img src={me} alt="Founder" />
              <h3>Nelson</h3>
            </div>
            <p>
              I am Nelson, the founder of Burger Shop. Affiliated to God
              Taste...
            </p>
          </article>
        </div>
      </main>
    </div>
  );
};

// Export the About component
export default About;


