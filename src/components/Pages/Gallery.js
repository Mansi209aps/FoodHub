import React from 'react'
import { Navbar } from '../Shared/Navbar'
import { Footer } from '../Shared/Footer'
import Card from './Card'

const Gallery = () => {
    return (
        <div>
            <Navbar />

            {/* cards */}
            <div className="grid gap-6 row-gap-5 mb-8 lg:grid-cols-4 sm:row-gap-6 sm:grid-cols-2 pt-9 px-4">
                <div>


                    <a href="/" aria-label="View Item">
                        <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
                            <img
                                className="object-cover w-full h-56 md:h-64 xl:h-80"
                                src="https://images.pexels.com/photos/9218754/pexels-photo-9218754.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;w=500"
                                alt=""
                            />
                            <div className="absolute inset-0 px-6 py-4 transition-opacity duration-200 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                                <p className="mb-4 text-lg font-bold text-gray-100">Rice Meal</p>
                                <p className="text-sm tracking-wide text-gray-300">
                                    Although cultures differ, throwing rice at newly wedded couples is regarded as a symbol of good luck, abundance, and fertility. Among the many things’ little girls desire is to have this tradition in their wedding.
                                </p>
                            </div>
                        </div>
                    </a>
                    <Card />
                </div>
                <div>
                    <a href="/" aria-label="View Item">
                        <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
                            <img
                                className="object-cover w-full h-56 md:h-64 xl:h-80"
                                src="https://images.pexels.com/photos/5410400/pexels-photo-5410400.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                                alt=""
                            />
                            <div className="absolute inset-0 px-6 py-4 transition-opacity duration-200 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                                <p className="mb-4 text-lg font-bold text-gray-100">
                                    Pav bhaji
                                </p>
                                <p className="text-sm tracking-wide text-gray-300">
                                    Pav Bhaji originated in the 1850s as a quick and filling lunch option for textile mill workers in Mumbai. It was created by street vendors using leftover vegetables and bread.
                                </p>
                            </div>
                        </div>
                    </a>
                    <Card />
                </div>
                <div>


                    <a href="/" aria-label="View Item">
                        <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
                            <img
                                className="object-cover w-full h-56 md:h-64 xl:h-80"
                                src="https://images.pexels.com/photos/14530314/pexels-photo-14530314.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                                alt=""
                            />
                            <div className="absolute inset-0 px-6 py-4 transition-opacity duration-200 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                                <p className="mb-4 text-lg font-bold text-gray-100">Jalebi</p>
                                <p className="text-sm tracking-wide text-gray-300">
                                    Jalebi is believed to have originated in the Indian subcontinent, with its earliest references dating back to the 13th century. It has since become a cherished dessert in countries like India, Pakistan, Bangladesh, Nepal, and Iran.
                                </p>
                            </div>
                        </div>
                    </a>
                    <Card />
                </div>
                <div>


                    <a href="/" aria-label="View Item">
                        <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
                            <img
                                className="object-cover w-full h-56 md:h-64 xl:h-80"
                                src="https://images.pexels.com/photos/6808666/pexels-photo-6808666.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                                alt=""
                            />
                            <div className="absolute inset-0 px-6 py-4 transition-opacity duration-200 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                                <p className="mb-4 text-lg font-bold text-gray-100">
                                    Lassi
                                </p>
                                <p className="text-sm tracking-wide text-gray-300">
                                    Lassi is not only delicious but also nutritious. It is a good source of calcium, protein, vitamins, and minerals. The yogurt used in lassi contains beneficial bacteria that promote a healthy gut flora.
                                </p>
                            </div>
                        </div>
                    </a>
                    <Card />
                </div>
            </div>

            {/* 2nd row */}
            <div className="grid gap-6 row-gap-5 mb-8 lg:grid-cols-4 sm:row-gap-6 sm:grid-cols-2 pt-7 px-4">
                <div>


                    <a href="/" aria-label="View Item">
                        <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
                            <img
                                className="object-cover w-full h-56 md:h-64 xl:h-80"
                                src="https://images.pexels.com/photos/12912495/pexels-photo-12912495.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;w=500"
                                alt=""
                            />
                            <div className="absolute inset-0 px-6 py-4 transition-opacity duration-200 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                                <p className="mb-4 text-lg font-bold text-gray-100">Tea</p>
                                <p className="text-sm tracking-wide text-gray-300">
                                    It takes around 2,000 tiny leaves to make just one pound of tea. There are around 3,000 different types of tea. It is the second most consumed beverage around the world, after water.
                                </p>
                            </div>
                        </div>
                    </a>
                    <Card />
                </div>
                <div>


                    <a href="/" aria-label="View Item">
                        <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
                            <img
                                className="object-cover w-full h-56 md:h-64 xl:h-80"
                                src="https://images.pexels.com/photos/13063304/pexels-photo-13063304.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                                alt=""
                            />
                            <div className="absolute inset-0 px-6 py-4 transition-opacity duration-200 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                                <p className="mb-4 text-lg font-bold text-gray-100">
                                    Golgappa
                                </p>
                                <p className="text-sm tracking-wide text-gray-300">
                                    Golgappa is known by different names in various parts of India. It is called pani puri in most regions, puchka in West Bengal and Bangladesh, and golgappa in North India.
                                </p>
                            </div>
                        </div>
                    </a>
                    <Card />
                </div>
                <div>


                    <a href="/" aria-label="View Item">
                        <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
                            <img
                                className="object-cover w-full h-56 md:h-64 xl:h-80"
                                src="https://images.pexels.com/photos/8887055/pexels-photo-8887055.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                                alt=""
                            />
                            <div className="absolute inset-0 px-6 py-4 transition-opacity duration-200 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                                <p className="mb-4 text-lg font-bold text-gray-100">Laddu</p>
                                <p className="text-sm tracking-wide text-gray-300">
                                    Laddu comes in various forms and flavors across different regions of India. Some popular varieties include Besan Laddu (made from chickpea flour), Motichoor Laddu (made from fine boondi), Rava Laddu (made from semolina), Coconut Laddu, and Til Laddu (made from sesame seeds).
                                </p>
                            </div>
                        </div>
                    </a>
                    <Card />
                </div>

                <div >
                    <a href="/" aria-label="View Item">
                        <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
                            <img
                                className="object-cover w-full h-56 md:h-64 xl:h-80"
                                src="https://images.pexels.com/photos/5560763/pexels-photo-5560763.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                                alt=""
                            />
                            <div className="absolute inset-0 px-6 py-4 transition-opacity duration-200 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                                <p className="mb-4 text-lg font-bold text-gray-100">
                                    Dosa
                                </p>
                                <p className="text-sm tracking-wide text-gray-300">
                                    In 2014, India set a Guinness World Record for the largest dosa ever made. The dosa measured approximately 16.68 meters (54.72 feet) in length and was cooked in Kerala, India.
                                </p>
                            </div>
                        </div>
                    </a>
                    <Card />
                </div>
            </div>

            {/* 3rd row */}
            <div className="grid gap-6 row-gap-5 mb-8 lg:grid-cols-4 sm:row-gap-6 sm:grid-cols-2 pt-7 px-4">
                <div>
                    <a href="/" aria-label="View Item">
                        <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
                            <img
                                className="object-cover w-full h-56 md:h-64 xl:h-80"
                                src="https://images.pexels.com/photos/12946719/pexels-photo-12946719.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;w=500"
                                alt=""
                            />
                            <div className="absolute inset-0 px-6 py-4 transition-opacity duration-200 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                                <p className="mb-4 text-lg font-bold text-gray-100">French Fries</p>
                                <p className="text-sm tracking-wide text-gray-300">
                                    French fries are popular worldwide and are often prepared and served in various ways. In the United Kingdom, they are known as "chips" and are often served with fish as "fish and chips." In Canada, they are commonly topped with cheese curds and gravy, creating the dish known as poutine.
                                </p>
                            </div>
                        </div>
                    </a>
                    <Card />
                </div>
                <div>
                    <a href="/" aria-label="View Item">
                        <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
                            <img
                                className="object-cover w-full h-56 md:h-64 xl:h-80"
                                src="https://images.pexels.com/photos/3323680/pexels-photo-3323680.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                                alt=""
                            />
                            <div className="absolute inset-0 px-6 py-4 transition-opacity duration-200 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                                <p className="mb-4 text-lg font-bold text-gray-100">
                                    Pancake
                                </p>
                                <p className="text-sm tracking-wide text-gray-300">
                                    Pancakes have their own dedicated day of celebration called "Pancake Day" or "Shrove Tuesday." It falls on the day before the start of Lent in many Christian traditions and is often associated with indulging in pancakes before the fasting period begins.
                                </p>
                            </div>
                        </div>
                    </a>
                    <Card />
                </div>
                <div>
                    <a href="/" aria-label="View Item">
                        <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
                            <img
                                className="object-cover w-full h-56 md:h-64 xl:h-80"
                                src="https://images.pexels.com/photos/3926123/pexels-photo-3926123.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                                alt=""
                            />
                            <div className="absolute inset-0 px-6 py-4 transition-opacity duration-200 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                                <p className="mb-4 text-lg font-bold text-gray-100">Momos</p>
                                <p className="text-sm tracking-wide text-gray-300">
                                    Momos originated in Tibet and were traditionally consumed as a staple food by Tibetans. Over time, they spread to neighboring regions and gained popularity in countries like Nepal, Bhutan, and India.
                                </p>
                            </div>
                        </div>
                    </a>
                    <Card />
                </div>
                <div>


                    <a href="/" aria-label="View Item">
                        <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
                            <img
                                className="object-cover w-full h-56 md:h-64 xl:h-80"
                                src="https://images.pexels.com/photos/913136/pexels-photo-913136.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                                alt=""
                            />
                            <div className="absolute inset-0 px-6 py-4 transition-opacity duration-200 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                                <p className="mb-4 text-lg font-bold text-gray-100">
                                    Cupcake
                                </p>
                                <p className="text-sm tracking-wide text-gray-300">
                                    In the United States, National Cupcake Day is celebrated on December 15th. It's a day to indulge in and appreciate the deliciousness of cupcakes.
                                </p>
                            </div>
                        </div>
                    </a>
                    <Card />
                </div>
            </div>

            {/* cart */}
            <div className="text-end mb-7 mx-10">
                <a
                    href="/ordernow"
                    className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide transition duration-200 rounded shadow-md text-white bg-red-500 hover:bg-white hover:text-red-800 hover:border-4 border-red-600 focus:shadow-outline focus:outline-none "
                    aria-label="Order now"
                    title="Order now"
                >
                    Next
                    <svg
                        className=" w-4 ml-2"
                        fill="currentColor"
                        viewBox="0 0 12 12"
                    >
                        <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
                    </svg>
                </a>
            </div>


            <Footer />
        </div>
    )
}

export default Gallery