const Login = () => {
	return (
		<>
		<div className="bg-gray-200 grid place-content-center h-screen" >
			<h1 className="text-yellow-400 text-4xl m-6">
				Hello Shivam
			</h1>
			<div className="p-4 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4">
				<div>
					<img className="h-12 w-12" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Physics_wallah_logo.svg/225px-Physics_wallah_logo.svg.png" alt=""/>
				</div>
					<div className="text-2xl font-medium text-black">
					Tailwind CSS by
						<p className="text-slate-500 text-base">Hitesh Chowdhary</p>
					</div>
			</div>
		</div>
		</>
	)
}

export default Login
