import React from "react";
import { Outlet } from "react-router-dom";
import ComplexNav from "./ComplexNav-component";
import ComplexFooter from "./ComplexFooter-component";
import ComplexDisplay from "./ComplexDisplay-component";
//
const ComplexLayout = ({ client }) => {
  return (
    <section className="bg-red-300 h-full w-full flex flex-col gap-1 p-1">
      <ComplexNav />
      <ComplexDisplay client={client} />
      <ComplexFooter />
    </section>
  );
};

export default ComplexLayout;
