import { useState } from "react"

const CloudNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

	return (
		<>
		<nav className="w-full h-12 bg-black flex justify-between items-center ">
			<div className="text-4xl text-blue-600 font-semibold bg-white px-2 shadow-sm rounded-lg ml-4  ">cloudFusion</div>
			<div>
				<ul className="md:flex hidden text-white space-x-5 items-center ">
					<li className="hover:text-blue-500">Home</li>
					<li className="hover:text-blue-500">Services</li>
					<li className="hover:text-blue-500">Pricing</li>
					{/* <li className="hover:text-blue-500">Login</li> */}
				</ul>
			</div>
			<div className="hidden md:block p-2 bg-indigo-700 text-white rounded font-bold mr-4"> Login/Signup</div>
			<div className="md:hidden text-white p-2 mb-2"><a className="text-4xl" href="#">&#8801;</a></div>
		</nav>
		</>
	)
}

export default cloudNav
