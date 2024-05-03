const webpage = () => {
	return (
		<>
			<div className="bg-slate-900">
				{/* navbar starts here */}
				<nav className="w-full h-14 bg-indigo-200 flex justify-between  md:px-4 ">
					<div className="text-2xl text-indigo-700 font-bold">PW Skills</div>
					<ul className="md:flex hidden font-semibold" >
						<li className="mx-2 cursor-pointer">Home</li>
						<li className="mx-2 cursor-pointer">Services</li>
						<li className="mx-2 cursor-pointer">Pricing</li>
						<li className="mx-2 cursor-pointer">About Us</li>
						<li className="mx-2 cursor-pointer">Contact Us</li>
					</ul>
					<div className="hidden md:block p-2 bg-indigo-700 text-white rounded font-bold cursor-pointer"> Login/Signup</div>
					<div className="md:hidden"><a className="text-4xl" href="#">&#8801;</a></div>
				</nav>
				{/* navbar ends here */}
				{/* header starts here */}rafce
				<div className="header w-full h-auto">
					<img className="w-full hidden md:block" src="https://physicwallah.me/wp-content/uploads/2023/07/pw-skills-min.jpg" />
					<img className="w-full md:hidden"
						src="https://media.licdn.com/dms/image/C4D22AQGwV0EhQyvFtg/feedshare-shrink_800/0/1664514645141?e=1716422400&v=beta&t=mAyLBljhFsiJUXyxn7ChHxlBZZ8QdaqANdImgjfZs8A" />
				</div>
				{/* header ends here */}

				{/* our student section starts here */}
				<div className="h-auto w-100 flex flex-wrap flex-col items-center text-center p-10">
					<div className="w-full flex flex-wrap flex-col items-center">
						<p className="text-indigo-200 font-bold text-3xl md:text-4xl">"Pure Hardwork, No Shortcuts!"</p>
						<div className="w-36 h-1 border-b-2 border-yellow-400 mt-2 rounded-2xl md:mt-4 mb-12">
						</div>
					</div>
					<div className="w-full flex flex-wrap justify-evenly ">
						<div className="w-40 flex flex-col items-center mb-12">
							<img className="" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Physics_wallah_logo.svg/225px-Physics_wallah_logo.svg.png" />
							<p className="text-white text-3xl">600+</p>
							<p className="text-gray-500 text-3xl">Different Courses</p>
						</div>
						<div className="w-40 flex flex-col items-center mb-12">
							<img className="" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Physics_wallah_logo.svg/225px-Physics_wallah_logo.svg.png" />
							<p className="text-white text-3xl">600+</p>
							<p className="text-gray-500 text-3xl">Different Courses</p>
						</div>
						<div className="w-40 flex flex-col items-center mb-12">
							<img className="" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Physics_wallah_logo.svg/225px-Physics_wallah_logo.svg.png" />
							<p className="text-white text-3xl">600+</p>
							<p className="text-gray-500 text-3xl">Different Courses</p>
						</div>
						<div className="w-40 flex flex-col items-center mb-12">
							<img className="" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Physics_wallah_logo.svg/225px-Physics_wallah_logo.svg.png" />
							<p className="text-white text-3xl">600+</p>
							<p className="text-gray-500 text-3xl">Different Courses</p>
						</div>
					</div>
				</div>
				{/* student section ends here */}

				{/* Our Products section */}
				<div className="w-full flex flex-wrap flex-col items-center text-center p-10">
					<p className="text-indigo-200 font-bold text-3xl md:text-4xl">Our Products</p>
					<div className="w-36 h-1 border-b-2 border-yellow-400 mt-2 rounded-2xl md:mt-4 mb-12">
					</div>
					<div className="w-[100%] h-auto flex flex-wrap justify-around">
						<div className="w-64 flex flex-col items-center mb-12 bg-white rounded-xl p-2 border-2 ">
							<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Physics_wallah_logo.svg/225px-Physics_wallah_logo.svg.png" />
							<p>PW Skills Lab</p>
							<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, corrupti.</p>
						</div>
						<div className="w-64 flex flex-col items-center mb-12 bg-white rounded-xl p-2 ">
							<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Physics_wallah_logo.svg/225px-Physics_wallah_logo.svg.png" />
							<p>PW Skills Lab</p>
							<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, corrupti.</p>
						</div>
						<div className="w-64 flex flex-col items-center mb-12 bg-white rounded-xl p-2 ">
							<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Physics_wallah_logo.svg/225px-Physics_wallah_logo.svg.png" />
							<p>PW Skills Lab</p>
							<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, corrupti.</p>
						</div>
						<div className="w-64 flex flex-col items-center mb-12 bg-white rounded-xl p-2 ">
							<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Physics_wallah_logo.svg/225px-Physics_wallah_logo.svg.png" />
							<p>PW Skills Lab</p>
							<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, corrupti.</p>
						</div>
					</div>
				</div>
				{/* Products section ends here */}
			</div>
			<footer className="w-full flex flex-col flex-wrap text-white pt-8 px-4 bg-gray-900 md:flex-row justify-between md:px-12 place-content-center">
				<div >
					<img className="h-16" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Physics_wallah_logo.svg/225px-Physics_wallah_logo.svg.png" />
					<p>Email us: support@pwskills.com</p>
					<img className="h-16" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Physics_wallah_logo.svg/225px-Physics_wallah_logo.svg.png" />
				</div>
				<div>
					<p className="font-bold text-xl">PW Skills</p>
					<div className="w-32 h-1 border-b-2 border-yellow-400 mt-2 rounded-2xl md:mt-4 mb-2">
					</div>
					<ul>
						<li>About Us</li>
						<li>Privacy Policy</li>
						<li>FAQs</li>
					</ul>
				</div>
				<div>
					<p className="font-bold text-xl">PW Skills</p>
					<div className="w-32 h-1 border-b-2 border-yellow-400 mt-2 rounded-2xl md:mt-4 mb-2">
					</div>
					<ul>
						<li>About Us</li>
						<li>Privacy Policy</li>
						<li>FAQs</li>
					</ul>
				</div>
				<div>
					<p className="font-bold text-xl">PW Skills</p>
					<div className="w-32 h-1 border-b-2 border-yellow-400 mt-2 rounded-2xl md:mt-4 mb-2">
					</div>
					<ul>
						<li>About Us</li>
						<li>Privacy Policy</li>
						<li>FAQs</li>
					</ul>
				</div>
			</footer>
		</>
	)
}

export default webpage
