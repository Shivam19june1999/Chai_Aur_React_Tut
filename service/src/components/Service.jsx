import "../components/Service.css";
import React from "react";
const Service = () => {
  const ServiceCarddetails = [
    {
        id: 1,
        sub: "Cloud Storage",
        image: "../../src/images/threeD_cloud.png",
        description: "With our Cloud infrastructure deployment and management experience, we believe in making reliable IT infrastructure accessible to Startups. We have also taken another step forward, by being not just a Cloud infra provider, but a solution provider for your business.",
    },
    {
      id: 2,
			sub:"Virtual Private Network",
      image: "src/images/vpn.png",
      description:
        "With our Cloud infrastructure deployment and management experience, we believe in making reliable IT infrastructure accessible to Startups. We have also taken another step forward, by being not just a Cloud infra provider, but a solution provider for your business.",
    },
    {
      id: 3,
			sub:"Virtual Machine",
      image: "src/images/VMimg.png",
      description:
        "With our Cloud infrastructure deployment and management experience, we believe in making reliable IT infrastructure accessible to Startups. We have also taken another step forward, by being not just a Cloud infra provider, but a solution provider for your business.",
    },
  ];
  
  return (
    <>
		{/* header */}
		<div className="bgcurve flex flex-col items-center p-4">
      <h1 className="text-indigo-200 font-bold text-3xl md:text-4xl">Our Services</h1>
      <div className="w-36 h-1 border-b-2 border-yellow-400 mt-2 rounded-2xl md:mt-4 mb-12"></div>
		</div>
		{/* header end */}
    <div className="flex flex-col md:flex-row lg:flex-row justify-around text-cyan-800 text-center ">
      {ServiceCarddetails.map((item, index) => (
      <div key={index} className="flex flex-row justify-around m-auto p-4">
        <div className="w-7/12 flex flex-col shadow-2xl col4 rounded-3xl relative overflow-hidden">
          <img src={item.image} alt="image" className="imgcol4 shadow-2xl m-auto rounded-3xl"/>
          <h3 className="text-2xl font-bold m-auto text-gray-700">{item.sub}</h3>
          <p className="font-sans font-semibold m-auto p-2">{item.description}</p>
        </div>
      </div>))}
    </div>
		{/* service card ends here */}
    <div className="h-24"></div>
    {/* cloud service starts here */}
      <div className=" flex flex-col md:flex-row sm:flex-row items-center justify-evenly bg-gray-600 shadow-2xl" id="con1">
        <div className="font-mono font-bold text-2xl w-6/12 text-white p-4 text-center">
          <p>
            With our Cloud infrastructure deployment and management
            experience, we believe in making reliable IT infrastructure
            accessible to Startups. We have also taken another step forward,
            by being not just a Cloud infra provider, but a solution provider
            for your business.
          </p>
        </div>
        <div className="con2">
          <img className="img h-[100%]" src="src/images/threeD_cloud.png" alt="img"/>
        </div>
      </div>
        {/* end here. */}
      <div className="  h-12"></div>
      {/* vpn starts here */}
        <div className="  flex flex-col md:flex-row sm:flex-row items-center justify-evenly bg-gray-600 rounded-3xl" id="con1">
          <div className="con3">
            <img className="img h-[100%]" src="src/images/vm.png" alt="img" />
          </div>
          <div className="font-mono font-bold  text-2xl w-6/12 text-white p-4 text-center">
            <p>
              With our Cloud infrastructure deployment and management
              experience, we believe in making reliable IT infrastructure
              accessible to Startups. We have also taken another step forward,
              by being not just a Cloud infra provider, but a solution provider
              for your business.
            </p>
          </div>
        </div>
        {/* vpn ends here */}
        <div className="  h-12"></div>
        {/* vm starts here */}
        <div
          className="  flex flex-col md:flex-row sm:flex-row items-center justify-evenly bg-gray-600 rounded-3xl"
          id="con1"
        >
          <div className="font-mono font-bold  text-2xl w-6/12 text-white p-4 text-center">
            <p>
              With our Cloud infrastructure deployment and management
              experience, we believe in making reliable IT infrastructure
              accessible to Startups. We have also taken another step forward,
              by being not just a Cloud infra provider, but a solution provider
              for your business.
            </p>
          </div>
          <div className="con2">
            <img className="img " src="src/images/VMimg.png" alt="img" />
          </div>
        </div>
        {/* vm ends here */}
    </>
  );
};

export default Service;
