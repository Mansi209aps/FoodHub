import React from 'react';
import './Signup.css'; // Import the CSS file for styling

const Signup = () => {
    return (
        <div className="flex">
            <div className="w-1/2  px-12 pt-4">
                <div className="flex px-10 bg-gray-300 py-2 lg:px-8">
                    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                        <div className="mt-10 sm:mx-8 sm:w-full sm:max-w-sm">
                            <h2 className="mt-5 sm:mx-auto sm:w-full sm:max-w-sm mb-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                                Create new account
                            </h2>
                        </div>


                        <form className="space-y-7" action="#" method="POST">
                            <div>
                                <label htmlFor="name" className="block text-lg font-medium leading-6 text-black">
                                    Username
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="name"
                                        name="name"
                                        type="name"
                                        autoComplete="name"
                                        required
                                        placeholder="Enter your username"
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-white placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-lg font-medium leading-6 text-black">
                                    Email address
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        autoComplete="email"
                                        required
                                        placeholder="Enter your email id"
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-white placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>

                            <div>
                                <div className="flex items-center justify-between">
                                    <label htmlFor="password" className="block text-lg font-medium leading-6 text-black">
                                        Password
                                    </label>
                                    {/* <div className="text-sm">
                                        <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                                            Forgot password?
                                        </a>
                                    </div> */}
                                </div>
                                <div className="mt-2">
                                    <input
                                        id="password"
                                        name="password"
                                        type="password"
                                        autoComplete="current-password"
                                        required
                                        placeholder="Enter your password"
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>

                            <div className='flex items-center justify-between'>
                                <button
                                    type="submit"
                                    className="w-full rounded-md bg-red-600  py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-800 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                >
                                    Sign in
                                </button>
                            </div>
                        </form>

                        <p className="mt-10 text-center text-sm text-gray-500">
                            Already a member?{' '}
                            <a href="/login" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                                Signin
                            </a>
                        </p>
                    </div>
                </div>
            </div>

            {/* side image */}

            <div className="inset-y-0 top-0 right-0 bottom-0 pb-0 w-full max-w-xl px-4 mx-auto  md:px-0 lg:pl-8 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-1/2 lg:max-w-full lg:absolute xl:px-0">
                <img
                    className="object-cover w-full h-56 rounded shadow-lg lg:rounded-none lg:shadow-none md:h-96 lg:h-full"
                    src="https://images.pexels.com/photos/12737918/pexels-photo-12737918.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                    alt=""
                />
            </div>
        </div>
    )
}

export default Signup;
