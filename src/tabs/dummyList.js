import React from "react";
import data from "../data/tabs.json";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";

const DummyList = () => {
  const tabs = data.sort((a, b) => a.order - b.order);
  return (
    <nav className="mt-10 ml-10 flex flex-col gap-4 w-40">
      {tabs.map((tab) => {
        if (tab.order === 0) {
          return (
            <Link
              key={tab.id}
              to="/"
              className="decoration-0 group hover:translate-x-2 transition-transform duration-300"
            >
              <span>{tab.title}</span>
              <BsArrowRight className=" ml-5 inline group-hover:translate-x-2 transition-transform duration-300" />
            </Link>
          );
        }
        return (
          <Link
            key={tab.id}
            to={`/${tab.id}`}
            className="decoration-0 group hover:translate-x-2 transition-transform duration-300"
          >
            <span>{tab.title}</span>
            <BsArrowRight className=" ml-5 inline group-hover:translate-x-2 transition-transform duration-300" />
          </Link>
        );
      })}
    </nav>
  );
};

export default DummyList;
