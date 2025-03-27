import React from "react";
import VehiclesCards from "./VehiclesCards";
import Category from "./Category";

function Home() {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* <div className="justify-center text-center ">
        <h1 className="text-2xl font-bold p-4">trending ads</h1>
      </div> */}
      <div className="flex">
        <div className="w-1/4 bg-white shadow-md p-4">
          <Category />
        </div>
        <div className="container mx-auto">
          <VehiclesCards />
        </div>
      </div>
    </div>
  );
}

export default Home;
