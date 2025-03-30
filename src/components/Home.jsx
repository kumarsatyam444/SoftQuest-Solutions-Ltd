import React from "react";
import VehiclesCards from "./VehiclesCards";
import Category from "./Category";

function Home() {
  return (
    <div className=" min-h-screen">
      <div className="container mx-auto px-4">
        <div className="flex mx-[70px]">
          <div className="w-1/5 bg-white shadow-md p-4 mr-4">
            <Category />
          </div>
          <div className="w-4/5">
           
            <VehiclesCards />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;