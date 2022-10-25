import React from "react";
import { FaSnapchat } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import { useGlobalContext } from "../Context-Reducer/Context";
//
// ABB7BC - gray -bg-[#ABB7BC]
// F88074 - Orange - bg-[#F88074]
// A55A42 - BRown (extra)
//
const ComplexNav = () => {
  const { focused } = useGlobalContext();
  //

  return (
    <div className=" w-full h-12 flex text-center gap-1 items-center p-2 text-xl  underline  border-black border-y-4 mt-3 font-navBarFont tracking-widest">
      <NavLink
        to={`/clientList/${focused.uniqueClient}`}
        end // for active class property matching
        className={({ isActive }) =>
          [
            "border-2 border-black w-1/4 rounded-lg",
            isActive ? "bg-[#ABB7BC] text-white" : "bg-white text-black",
          ]
            .filter(Boolean)
            .join(" ")
        }
      >
        NOTES
      </NavLink>
      <NavLink
        to={`debits`}
        className={({ isActive }) =>
          [
            "border-2 border-black w-1/4 rounded-lg",
            isActive ? "bg-[#ABB7BC] text-white" : null,
          ]
            .filter(Boolean)
            .join(" ")
        }
      >
        DEBIT
      </NavLink>
      <NavLink
        to={`credits`}
        className={({ isActive }) =>
          [
            "border-2 border-black w-1/4 rounded-lg",
            isActive ? "bg-[#ABB7BC] text-white" : null,
          ]
            .filter(Boolean)
            .join(" ")
        }
      >
        CREDIT
      </NavLink>
      <NavLink
        to={`receipts`}
        className={({ isActive }) =>
          [
            "border-2 border-black w-1/4 rounded-lg",
            isActive ? "bg-[#ABB7BC] text-white" : null,
          ]
            .filter(Boolean)
            .join(" ")
        }
      >
        <span className="pocket-ty:hidden">RECEIPTS</span>
        <span className="hidden pocket-ty:block">RCPTS</span>
      </NavLink>
    </div>
  );
};

export default ComplexNav;
