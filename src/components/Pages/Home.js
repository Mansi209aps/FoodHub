import React from "react";
import { Navbar } from "../Shared/Navbar";
import { Footer } from "../Shared/Footer";

export const Home = () => {
    return (

        <div>
            <Navbar />
            <div className="relative">
                <img
                    src="https://images.pexels.com/photos/3184183/pexels-photo-3184183.jpeg?auto=compress&cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                    className="absolute inset-0 object-cover w-full h-full"
                    alt=""
                />
                <div className="relative bg-gray-900 bg-opacity-75">
                    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                        <div className="flex flex-col items-center justify-between xl:flex-row">
                            <div className="w-full max-w-xl mb-12 xl:mb-0 xl:pr-16 xl:w-7/12">
                                <h2 className="max-w-lg mb-12 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
                                    Where every <br className="hidden md:block" />
                                    flavour{' '}
                                    <span className="text-red-500">tells a story</span>
                                </h2>
                                <p className="max-w-xl mb-12 text-base text-white md:text-lg">
                                    From the vibrant spices of Indian cuisine to the comforting indulgence of burgers, the awakening aroma of coffee, the joy embodied in pizza, the celebratory sweetness of cakes to the  the syrupy bliss of a rasgulla, each flavor tells a unique story that delights the senses.
                                </p>
                                <a
                                    href="/ordernow"
                                    class="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide transition duration-200 rounded shadow-md text-white bg-red-500 hover:bg-white hover:text-red-800 hover:border-4 border-red-600 focus:shadow-outline focus:outline-none "
                                    aria-label="Order now"
                                    title="Order now"
                                >
                                    Order now
                                </a>
                            </div>

                            {/* search bar */}
                            {/* <div className="relative mx-auto text-gray-600 lg:block hidden">
                                <input className="border-2 border-gray-300 bg-white h-10 pl-2 pr-8 rounded-lg text-sm focus:outline-none" type="search" name="search" placeholder="Search" />
                                <button type="submit" className="absolute right-0 top-0 mt-3 mr-2">
                                    <svg className="text-gray-600 h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 56.966 56.966" style={{ enableBackground: 'new 0 0 56.966 56.966' }} xmlSpace="preserve" width="512px" height="512px">
                                        <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
                                    </svg>
                                </button>
                            </div> */}
                            {/* <div className="w-full max-w-xl xl:px-8 xl:w-5/12">
                                <div className="bg-white rounded shadow-2xl p-7 sm:p-10">
                                    <h3 className="mb-4 text-xl font-semibold sm:text-center sm:mb-6 sm:text-2xl">
                                        Sign up for updates
                                    </h3>
                                    <form>
                                        <div className="mb-1 sm:mb-2">
                                            <label
                                                htmlFor="firstName"
                                                className="inline-block mb-1 font-medium"
                                            >
                                                First name
                                            </label>
                                            <input
                                                placeholder="John"
                                                required
                                                type="text"
                                                className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                                                id="firstName"
                                                name="firstName"
                                            />
                                        </div>
                                        <div className="mb-1 sm:mb-2">
                                            <label
                                                htmlFor="lastName"
                                                className="inline-block mb-1 font-medium"
                                            >
                                                Last name
                                            </label>
                                            <input
                                                placeholder="Doe"
                                                required
                                                type="text"
                                                className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                                                id="lastName"
                                                name="lastName"
                                            />
                                        </div>
                                        <div className="mb-1 sm:mb-2">
                                            <label
                                                htmlFor="email"
                                                className="inline-block mb-1 font-medium"
                                            >
                                                E-mail
                                            </label>
                                            <input
                                                placeholder="john.doe@example.org"
                                                required
                                                type="text"
                                                className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                                                id="email"
                                                name="email"
                                            />
                                        </div>
                                        <div className="mt-4 mb-2 sm:mb-4">
                                            <button
                                                type="submit"
                                                className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-red-600 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                                            >
                                                Subscribe
                                            </button>
                                        </div>
                                        <p className="text-xs text-gray-600 sm:text-sm">
                                            We respect your privacy. Unsubscribe at any time.
                                        </p>
                                    </form>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>


            {/* cards */}
            <div className="grid gap-6 row-gap-5 mb-8 lg:grid-cols-4 sm:row-gap-6 sm:grid-cols-2 py-9 px-4">
                <a href="/" aria-label="View Item">
                    <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
                        <img
                            className="object-cover w-full h-56 md:h-64 xl:h-80"
                            src="https://images.pexels.com/photos/9957549/pexels-photo-9957549.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;w=500"
                            alt=""
                        />
                        <div className="absolute inset-0 px-6 py-4 transition-opacity duration-200 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                            <p className="mb-4 text-lg font-bold text-gray-100">Pizza</p>
                            <p className="text-sm tracking-wide text-gray-300">
                                The largest pizza ever made was created in Rome, Italy, in 2012. It measured 13,580.28 square feet (1,261.65 square meters) and used 19,800 pounds (8,980 kilograms) of flour.
                            </p>
                        </div>
                    </div>
                </a>
                <a href="/" aria-label="View Item">
                    <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
                        <img
                            className="object-cover w-full h-56 md:h-64 xl:h-80"
                            src="https://images.pexels.com/photos/1199957/pexels-photo-1199957.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                            alt=""
                        />
                        <div className="absolute inset-0 px-6 py-4 transition-opacity duration-200 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                            <p className="mb-4 text-lg font-bold text-gray-100">
                                Burger
                            </p>
                            <p className="text-sm tracking-wide text-gray-300">
                                The invention of the cheeseburger is attributed to Lionel Sternberger, who added a slice of cheese to a hamburger in 1926 while working at his father's sandwich shop in Pasadena, California.
                            </p>
                        </div>
                    </div>
                </a>
                <a href="/" aria-label="View Item">
                    <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
                        <img
                            className="object-cover w-full h-56 md:h-64 xl:h-80"
                            src="https://images.pexels.com/photos/7394819/pexels-photo-7394819.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                            alt=""
                        />
                        <div className="absolute inset-0 px-6 py-4 transition-opacity duration-200 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                            <p className="mb-4 text-lg font-bold text-gray-100">Biryani</p>
                            <p className="text-sm tracking-wide text-gray-300">
                                In the Indian city of Hyderabad, biryani is considered a spiritual offering to the deity Sai Baba. Devotees prepare and distribute biryani as "prasad" (blessed food) in the Sai Baba temples.
                            </p>
                        </div>
                    </div>
                </a>
                <a href="/" aria-label="View Item">
                    <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
                        <img
                            className="object-cover w-full h-56 md:h-64 xl:h-80"
                            src="https://images.pexels.com/photos/14477873/pexels-photo-14477873.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                            alt=""
                        />
                        <div className="absolute inset-0 px-6 py-4 transition-opacity duration-200 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                            <p className="mb-4 text-lg font-bold text-gray-100">
                                Samosa
                            </p>
                            <p className="text-sm tracking-wide text-gray-300">
                                September 5th is celebrated as "World Samosa Day" to honor this beloved snack. It's a day dedicated to enjoying and celebrating the flavors and diversity of samosas.
                            </p>
                        </div>
                    </div>
                </a>
            </div>
            <div className="text-center">
                <a
                    href="/ordernow"
                    aria-label=""
                    className="inline-flex items-center font-semibold transition-colors duration-200 text-red-600 hover:text-red-900 text-xl"
                >
                    Order Now
                    <svg
                        className="inline-block w-4 ml-2"
                        fill="currentColor"
                        viewBox="0 0 12 12"
                    >
                        <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
                    </svg>
                </a>
            </div>



            {/* Variety */}
            <div className="px-4 py-10 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                <div className="grid grid-cols-2 gap-7 row-gap-5 sm:grid-cols-3 lg:grid-cols-6">

                    <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl w-24 h-24 rounded-full shadow">
                        <img
                            className="object-cover w-24 h-24 rounded-full shadow"
                            src="https://images.pexels.com/photos/1460872/pexels-photo-1460872.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                            alt="Person"
                        />
                        <div className="absolute inset-0 px-6 py-4 transition-opacity duration-200 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                            <p className="mb-4 text-lg font-bold text-gray-100">
                                Pasta
                            </p>
                        </div>
                    </div>
                    <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl w-24 h-24 rounded-full shadow">
                        <img
                            className="object-cover w-24 h-24 rounded-full shadow"
                            src="https://images.pexels.com/photos/4394612/pexels-photo-4394612.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                            alt="Person"
                        />
                        <div className="absolute inset-0 px-6 py-4 transition-opacity duration-200 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                            <p className="mb-4 text-lg font-bold text-gray-100">
                                Pizza
                            </p>
                        </div>
                    </div>
                    <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl w-24 h-24 rounded-full shadow">
                        <img
                            className="object-cover w-24 h-24 rounded-full shadow"
                            src="https://images.pexels.com/photos/1633578/pexels-photo-1633578.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                            alt="Person"
                        />
                        <div className="absolute inset-0 px-6 py-4 transition-opacity duration-200 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                            <p className="mb-4 text-lg font-bold text-gray-100">
                                Burger
                            </p>
                        </div>
                    </div>
                    <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl w-24 h-24 rounded-full shadow">
                        <img
                            className="object-cover w-24 h-24 rounded-full shadow"
                            src="https://images.pexels.com/photos/4403082/pexels-photo-4403082.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                            alt="Person"
                        />
                        <div className="absolute inset-0 px-6 py-4 transition-opacity duration-200 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                            <p className="mb-4 text-lg font-bold text-gray-100">
                                Cake
                            </p>
                        </div>
                    </div>
                    <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl w-24 h-24 rounded-full shadow">
                        <img
                            className="object-cover w-24 h-24 rounded-full shadow"
                            src="https://images.pexels.com/photos/5560763/pexels-photo-5560763.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                            alt="Person"
                        />
                        <div className="absolute inset-0 px-6 py-4 transition-opacity duration-200 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                            <p className="mb-4 text-lg font-bold text-gray-100">
                                Dosa
                            </p>
                        </div>
                    </div>
                    <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl w-24 h-24 rounded-full shadow">
                        <img
                            className="object-cover w-24 h-24 rounded-full shadow"
                            src="https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                            alt="Person"
                        />
                        <div className="absolute inset-0 px-6 py-4 transition-opacity duration-200 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                            <p className="mb-4 text-lg font-bold text-gray-100">
                                Coffee
                            </p>
                        </div>

                    </div>





                    {/* <div className="text-center">
                        <div className="flex items-center justify-center w-10 h-10 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-12 sm:h-12">
                            <svg
                                className="w-8 h-8 text-deep-purple-accent-400 sm:w-10 sm:h-10"
                                stroke="currentColor"
                                viewBox="0 0 52 52"
                            >
                                <polygon
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    fill="none"
                                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                                />
                            </svg>
                        </div>
                        <h6 className="mb-2 text-sm font-bold leading-5 tracking-wider uppercase">
                            World
                        </h6>
                    </div> */}
                    {/* <div className="text-center">
                        <div className="flex items-center justify-center w-10 h-10 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-12 sm:h-12">
                            <svg
                                className="w-8 h-8 text-deep-purple-accent-400 sm:w-10 sm:h-10"
                                stroke="currentColor"
                                viewBox="0 0 52 52"
                            >
                                <polygon
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    fill="none"
                                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                                />
                            </svg>
                        </div>
                        <h6 className="mb-2 text-sm font-bold leading-5 tracking-wider uppercase">
                            Sport
                        </h6>
                    </div> */}
                    {/* <div className="text-center">
                        <div className="flex items-center justify-center w-10 h-10 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-12 sm:h-12">
                            <svg
                                className="w-8 h-8 text-deep-purple-accent-400 sm:w-10 sm:h-10"
                                stroke="currentColor"
                                viewBox="0 0 52 52"
                            >
                                <polygon
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    fill="none"
                                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                                />
                            </svg>
                        </div>
                        <h6 className="mb-2 text-sm font-bold leading-5 tracking-wider uppercase">
                            Health
                        </h6>
                    </div> */}
                    {/* <div className="text-center">
                        <div className="flex items-center justify-center w-10 h-10 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-12 sm:h-12">
                            <svg
                                className="w-8 h-8 text-deep-purple-accent-400 sm:w-10 sm:h-10"
                                stroke="currentColor"
                                viewBox="0 0 52 52"
                            >
                                <polygon
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    fill="none"
                                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                                />
                            </svg>
                        </div>
                        <h6 className="mb-2 text-sm font-bold leading-5 tracking-wider uppercase">
                            Weather
                        </h6>
                    </div> */}
                    {/* <div className="text-center">
                        <div className="flex items-center justify-center w-10 h-10 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-12 sm:h-12">
                            <svg
                                className="w-8 h-8 text-deep-purple-accent-400 sm:w-10 sm:h-10"
                                stroke="currentColor"
                                viewBox="0 0 52 52"
                            >
                                <polygon
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    fill="none"
                                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                                />
                            </svg>
                        </div>
                        <h6 className="mb-2 text-sm font-bold leading-5 tracking-wider uppercase">
                            Time
                        </h6>
                    </div> */}
                    {/* <div className="text-center">
                        <div className="flex items-center justify-center w-10 h-10 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-12 sm:h-12">
                            <svg
                                className="w-8 h-8 text-deep-purple-accent-400 sm:w-10 sm:h-10"
                                stroke="currentColor"
                                viewBox="0 0 52 52"
                            >
                                <polygon
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    fill="none"
                                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                                />
                            </svg>
                        </div>
                        <h6 className="mb-2 text-sm font-bold leading-5 tracking-wider uppercase">
                            News
                        </h6>
                    </div> */}
                </div>
            </div>
            <Footer />
        </div>

    );
};