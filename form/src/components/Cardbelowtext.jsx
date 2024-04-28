const Cardbelowtext = () => {
	return (
		<>
		<div className='bg-teal-300 grid h-screen place-content-center'>
			<div className='p-4 rounded-2xl shadow-2xl bg-orange-100 hover:bg-orange-200'>
				<div className='shadow-2xl bg-gray-200 rounded-2xl hover:bg-white'>  
				<img className="h-20 w-20 ml-7 p-2" src='https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Physics_wallah_logo.svg/225px-Physics_wallah_logo.svg.png' />
			  </div>
			  <div className='mt-4 bg-slate-200 p-2 rounded-lg text-emerald-300 font-medium '>
				<p className='text-blue-800 '>
					Tailwind by
				</p>
				<p>
					Hitesh Chowdhary
				</p>
			  </div>
			</div>
			<button className='p-2  m-1 rounded-md'>Submit</button>
		</div>
			<div className='sm:text-white md:text-blue-700 text-center'>
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, temporibus.</p>
	    </div>
		
		</>
	)
}

export default Cardbelowtext
