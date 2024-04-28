import React from 'react'

const Log = () => {
	return (
		<>
			<div className='bg-black grid'>
				<div className='m-2 p-1 shadow-xl rounded-xl bg-white mx-auto max-w-sm'>
					<h2 className='text-blue-600 font-semibold text-xl'>cloudFusion</h2>
				</div>
				<div className=' max-w-sm mx-auto rounded-lg bg-gray-800 ' >
				  <div className='p-4 rounded-2xl'>
				    <div className='text-left mb-4'>
					    <h2 className='p-1 text-xl font-semibold text-sky-400'>Sign-In</h2>
					    <p className=' text-white p-1 font-small '>Access to our member dashboard using your email and password. Or easy login using your Facebook, Google, Twitter or LinkedIn..    </p>
				    </div>
				    <div>
					    <label htmlfor="name" className="text-sm font-medium leading-8 text-white">Email or Username</label>
                <div className="mt-2 rounded-md shadow-sm">
						      <input type="text email" name="name" id="name" className="block w-full rounded-md p-1 text-gray-900 sm:text-sm" placeholder="Enter your email address or username "/>
            </div>
					    <label htmlfor="pass" className="text-sm font-medium leading-6 text-white">Password</label>
              <div class="mt-2 rounded-md shadow-sm">
						    <input type="password" name="pass" id="pass" className="block w-full rounded-md p-1 text-gray-900 sm:text-sm" placeholder="Enter your password"/>
            </div>
          </div>
				  <div class="mt-6 rounded-md shadow-sm text-center p-1 text-white bg-indigo-500 hover:bg-blue-600 font-bold">
						<button type="submit"/>Sign In<button/>
          </div>
				  <div className='rounded-md text-center mt-2 text-gray-600'>
					  <h4 className='font-semibold'>- &nbsp; OR &nbsp;-</h4>
					  <h5 className=''>Sign in with</h5>
				  </div>
			    <div className='text-white font-bold text-center  shadow-sm '>
				    <div class="mt-6 p-1 rounded-md shadow-sm bg-red-500 hover:bg-red-600 
					   font-bold">
						  <button type="submit"/>Google<button/>
            </div>
				    <div class="mt-2 p-1 rounded-md  bg-blue-600 hover:bg-blue-700 ">
						  <button type="submit"/>Facebook<button/>
            </div>
				  </div>
					<div className='text-center text-gray-300 m-4'>
						<p>Account pending activation? <a src="#" className='text-blue-500'>Activate your account</a>
						</p>
						<p>Are you new?</p>
						<p>Create a new account for free.<a src="#" className='text-blue-500'> Register</a></p>
					</div>
        </div>
			</div>
	  </div>
		</>
	)
}

export default Log
