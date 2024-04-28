const Card = () => {
	return (
		<>
			<div className='mt-4 grid place-content-center'>
				<div className='flex p-4 items-center space-x-4 max-w-sm mx-auto'>
					<div className="">
						<img className="h-30 w-30" src='https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Physics_wallah_logo.svg/225px-Physics_wallah_logo.svg.png' />
          </div>
					<div className=' rounded-lg bg-teal-500 p-2'>
						<h1 className='font-extralight   '>About me</h1>
						<p className='font-bold text-cyan-300'>If you undertand the tailwind then you can make a responsive website</p>
					</div>
				</div>
			</div>

			<div className='mt-3'>
				<div className='max-w-sm mx-auto bg-amber-50 rounded-xl overflow-hidden 
				md:max-w-2xl'>
					<div className='md:flex'>
					  <div className="">
							<img  className="h-50 w-full object-cover md:h-full md:w-48 shadow-lg" src='https://images.pexels.com/photos/2522657/pexels-photo-2522657.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load' />
					  </div>
					  <div className="p-8">
							<div className='uppercase text-sm text-indigo-300 hover:text-indigo-500 shadow-lg'>
							Tailwind CSS by : Hitesh Choudhary
							</div>
							<a href='#' className='block mt-2 text-large text-red-300 font-medium hover:text-red-600 shadow-sm'>If you undertand the tailwind then you can make a responsive website. So, learn power of tailwind css with keen eyes.</a>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default Card
