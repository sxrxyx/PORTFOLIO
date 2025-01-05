import React from "react";

const Footer = () => {
  const Year = new Date().getFullYear();
  return <footer id="contact">&copy; MS Prakash {Year}</footer>;
};

export default Footer;
