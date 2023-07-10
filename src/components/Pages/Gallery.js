import React from 'react'
import { Navbar } from '../Shared/Navbar'
import { Footer } from '../Shared/Footer'
import Card from './Card'
import { CartItem } from '../Shared/CartItem';
import Menu from '../Shared/Menu';

const Gallery = () => {
    return (
        <>
            <div>
                <Navbar />

                {/* cards */}
                {/* <div className="grid gap-6 row-gap-5 mb-8 lg:grid-cols-4 sm:row-gap-6 sm:grid-cols-2 pt-9 px-4"> */}

                <div className='h-56 grid grid-cols-4 gap-4 content-start p-6'>
                    {Menu.MenuData.map((item, index) => {
                        return (
                            <div>
                                <CartItem
                                    img={item.img}
                                    title={item.title}
                                    desc={item.desc}
                                    price={item.price}
                                    item={item}
                                    key={index}
                                />

                                {/* <Card price={item.price} key={index} />  */}
                            </div>
                        )
                    })}
                    {/* {Menu.MenuData.map((item, index) => {
                        return (
                            <Card price={item.price} key={index} />
                        )
                    })} */}
                </div>
            </div >

            {/* < a
                href="/cart"
                className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide transition duration-200 rounded shadow-md text-white bg-red-500 hover:bg-white hover:text-red-800 hover:border-4 border-red-600 focus:shadow-outline focus:outline-none "
                aria-label="Order now"
                title="Order now"
            >
                Next
                <svg svg
                    className=" w-4 ml-2"
                    fill="currentColor"
                    viewBox="0 0 12 12"
                >
                    <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
                </svg >
            </a > */}

        </>
    )
}

export default Gallery