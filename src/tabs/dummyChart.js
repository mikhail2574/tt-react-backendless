import React from "react";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";

const DummyChart = () => {
  return (
    <>
      <p className="text-xl text-center">Hello! It is a dummy chart!</p>
      <Link to="/" className="ml-20 decoration-0 group">
        <span>Home</span>
        <BsArrowRight className="ml-5 inline group-hover:translate-x-2 transition-transform duration-300" />
      </Link>
    </>
  );
};

export default DummyChart;
