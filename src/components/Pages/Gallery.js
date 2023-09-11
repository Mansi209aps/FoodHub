import React from 'react';
import { Navbar } from '../Shared/Navbar';
import { Footer } from '../Shared/Footer';
import Card from './Card';
import { CartItem } from '../Shared/CartItem';
import Menu from '../Shared/Menu';


const Gallery = () => {
    return (
        <div>
            <Navbar />

            <div className='grid gap-6 row-gap-5  lg:grid-cols-4 sm:row-gap-6 sm:grid-cols-2 pt-9 px-4'>
                {Menu.MenuData.map((item, index) => {
                    return (
                        <div key={index} className='mb-6'>
                            <CartItem
                                img={item.img}
                                title={item.title}
                                desc={item.desc}
                                price={item.price}
                                item={item}
                            />
                        </div>
                    );
                })}
            </div>
            <div className='pb-2 flex justify-end px-7'>
                <a
                    href="/cart"
                    className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide transition duration-200 rounded shadow-md text-white bg-red-600 hover:bg-white hover:text-red-800 hover:border-4 border-red-600 focus:shadow-outline focus:outline-none "
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
    );
};

export default Gallery;
