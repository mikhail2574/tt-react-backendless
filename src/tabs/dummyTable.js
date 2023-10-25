import React from "react";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import data from "../data/tabs.json";

const DummyTable = () => {
  const tabs = data.sort((a, b) => a.order - b.order);

  return (
    <>
      <table className="mx-auto mt-20 w-80 text-center border-2 border-solid border-slate-400">
        <thead>
          <tr>
            <th className="border-2 border-solid border-slate-400">order</th>
            <th className="border-2 border-solid border-slate-400">name</th>
          </tr>
        </thead>
        <tbody>
          {tabs.map((tab) => (
            <tr className="hover:bg-indigo-100">
              <td className="border-2 border-solid border-slate-400">
                {tab.order}
              </td>
              <td className="border-2 border-solid border-slate-400">
                {tab.title}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Link to="/" className="ml-20 decoration-0 group">
        <span>Home</span>
        <BsArrowRight className="ml-5 inline group-hover:translate-x-2 transition-transform duration-300" />
      </Link>
    </>
  );
};

export default DummyTable;
