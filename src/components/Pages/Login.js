import React from 'react';


export const Login = () => {
    return (
        // <div>
        //     {/* <Navbar /> */}

        //     <div className='relative flex flex-col-reverse py-16 lg:py-0 lg:flex-col'>

        //         <div className="flex px-10  py-8 lg:px-8">
        //             {/* <div className="sm:mx-auto sm:w-full sm:max-w-sm"> */}
        //             <div className="mt-10 sm:mx-8 sm:w-full sm:max-w-sm">
        //                 <h2 className="mt-5 sm:mx-auto sm:w-full sm:max-w-sm mb-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
        //                     Sign in to your account
        //                 </h2>
        //                 {/* </div> */}


        //                 <form className="space-y-6" action="#" method="POST">
        //                     <div>
        //                         <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
        //                             Email address
        //                         </label>
        //                         <div className="mt-2">
        //                             <input
        //                                 id="email"
        //                                 name="email"
        //                                 type="email"
        //                                 autoComplete="email"
        //                                 required
        //                                 className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        //                             />
        //                         </div>
        //                     </div>

        //                     <div>
        //                         <div className="flex items-center justify-between">
        //                             <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
        //                                 Password
        //                             </label>
        //                             <div className="text-sm">
        //                                 <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
        //                                     Forgot password?
        //                                 </a>
        //                             </div>
        //                         </div>
        //                         <div className="mt-2">
        //                             <input
        //                                 id="password"
        //                                 name="password"
        //                                 type="password"
        //                                 autoComplete="current-password"
        //                                 required
        //                                 className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        //                             />
        //                         </div>
        //                     </div>

        //                     <div>
        //                         <button
        //                             type="submit"
        //                             className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        //                         >
        //                             Sign in
        //                         </button>
        //                     </div>
        //                 </form>

        //                 <p className="mt-10 text-center text-sm text-gray-500">
        //                     Not a member?{' '}
        //                     <a href="#" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
        //                         Start a 14 day free trial
        //                     </a>
        //                 </p>
        //             </div>
        //         </div>
        //         <div className="inset-y-0 top-0 right-0 w-full max-w-xl px-4 mx-auto mb-6 md:px-0 lg:pl-8 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-1/2 lg:max-w-full lg:absolute xl:px-0">
        //             <img
        //                 className="object-cover w-1/2 h-full"
        //                 src="https://images.pexels.com/photos/2336676/pexels-photo-2336676.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
        //                 alt=""
        //             />
        //         </div>
        //     </div>

        // </div>
        <div className="flex">
            <div className="w-1/2  p-12">
                <div className="flex px-10 bg-gray-300 py-8 lg:px-8">
                    {/* <div className="sm:mx-auto sm:w-full sm:max-w-sm"> */}
                    <div className="mt-10 sm:mx-8 sm:w-full sm:max-w-sm">
                        <h2 className="mt-5 sm:mx-auto sm:w-full sm:max-w-sm mb-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                            Sign in to your account
                        </h2>
                        {/* </div> */}


                        <form className="space-y-7" action="#" method="POST">
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
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-white placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>

                            <div>
                                <div className="flex items-center justify-between">
                                    <label htmlFor="password" className="block text-lg font-medium leading-6 text-black">
                                        Password
                                    </label>
                                    <div className="text-sm">
                                        <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                                            Forgot password?
                                        </a>
                                    </div>
                                </div>
                                <div className="mt-2">
                                    <input
                                        id="password"
                                        name="password"
                                        type="password"
                                        autoComplete="current-password"
                                        required
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>

                            <div className='flex items-center justify-between'>
                                <button
                                    type="submit"
                                    className="w-full rounded-md bg-red-600  py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-white hover:text-black  hover:border-5 border-black  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                >
                                    Sign in
                                </button>
                            </div>
                        </form>

                        <p className="mt-10 text-center text-sm text-gray-500">
                            Not a member?{' '}
                            <a href="/signup" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                                Signup
                            </a>
                        </p>
                    </div>
                </div>
            </div>

            {/* side image */}

            <div className="inset-y-0 top-0 right-0 bottom-0 pb-0 w-full max-w-xl px-4 mx-auto  md:px-0 lg:pl-8 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-1/2 lg:max-w-full lg:absolute xl:px-0">
                <img
                    className="object-cover w-full h-56 rounded shadow-lg lg:rounded-none lg:shadow-none md:h-96 lg:h-full"
                    src="https://images.pexels.com/photos/13354532/pexels-photo-13354532.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                    alt=""
                />
            </div>
        </div>
    )
}
