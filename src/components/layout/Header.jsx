// // Write all the code here
// import React from "react";
// import { IoFastFoodOutline } from "react-icons/io5";
// import { Link } from "react-router-dom";
// import { FiShoppingCart, FiLogIn } from "react-icons/fi";
// import { FaUser } from "react-icons/fa";
// import { motion } from "framer-motion";
// import DropdownMenu from './DropdownMenu';
// <nav>
//     <motion.div initial={{ x: "-100%" }} whileInView={{ x: 0 }}>
//     <IoFastFoodOutline />
//     </motion.div>
//     <div>
//         <Link to="/">Home</Link>
//         <Link to="/contact">Contact</Link>
//         <Link to="/about">About</Link>
//         <Link to="/cart">
//         <FiShoppingCart />
//         </Link>
//         <DropdownMenu />
//     </div>
// </nav>

// Header.jsx

import React from "react";
import { IoFastFoodOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import { FaUser } from "react-icons/fa";
import { motion } from "framer-motion";
import DropdownMenu from './DropdownMenu';

const Header = () => {
  return (
    <nav>
      <motion.div initial={{ x: "-100%" }} whileInView={{ x: 0 }}>
        <IoFastFoodOutline />
      </motion.div>
      <div>
        <Link to="/">Home</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/about">About</Link>
        <Link to="/cart">
          <FiShoppingCart />
        </Link>
        <DropdownMenu />
      </div>
    </nav>
  );
};

export default Header;
