import React from "react";
import "./Header.css";


const Header = () => {
  return (
    <>
      <header className="flex items-center justify-around px-8 py-5 bg-[#0f4c36] text-white">
        <a href="/">Farm Visit Registration | Register Now</a>
        <a href="/">Free Shipping above ₹499 | All India Delivery</a>
        <a href="/">Franchise Enquiry</a>
      </header>
      <br />
    </>
  );
};

export default Header;
