import React from "react";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <>
      <footer className=" flex justify-between px-10 py-5 bg-black/45 font-bold">
        <p>Kelvin blog</p>
        <p>{year}</p>
      </footer>
    </>
  );
};

export default Footer;
