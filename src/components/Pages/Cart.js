import React from "react";
import { Navbar } from "../Shared/Navbar";
import Counter from "../Shared/Counter";
import { Footer } from "../Shared/Footer";

const products = [
    {
        id: 1,
        name: 'Throwback Hip Bag',
        href: '#',
        color: 'Salmon',
        price: '$90.00',
        quantity: 1,
        // imageSrc: 'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg',
        // imageAlt: 'Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt.',
    },
    {
        id: 2,
        name: 'Medium Stuff Satchel',
        href: '#',
        color: 'Blue',
        price: '$32.00',
        quantity: 1,
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-02.jpg',
        imageAlt: 'Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.',
    },
    // More products...
]

export const Cart = () => {

    const SummaryItemStyle = "SummaryItem flex justify-between mt-3 w-[100%]";
    const ProductDivStyle = "flex w-[100%] h-auto items-center mobile:flex-col";
    const PriceQuantityStyle =
        "flex-auto flex flex-col justify-center items-center mobile:mt-7 mobile:mb-4";
    return (
        <div>

            <Navbar />
            <div className="p-2">
                <div className="flex justify-center text-5xl"> Your Cart</div>

                {/* upper buttons div */}
                <div className="flex items-center justify-between mt-4 mobile:flex-col">
                    {/* <button className="btn bg-white text-[#8a4af3] mt-0">
                        Continue Shopping
                    </button> */}
                    <a href="/gallery" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500 p-6">
                        Continue Shopping
                    </a>
                    <div className="underline text-lg hover:cursor-pointer mobile:m-5 justify-center">
                        <p>Items in your Cart: 3</p>
                        <p className="ml-5">Whishlist Items: 0</p>
                    </div>
                    {/* <button className="btn mt-0">Checkout Now</button> */}
                </div>

                {/* vertically center parent div */}
                <div className="flex flex-row mt-7 mobile:flex-col">
                    {/* product div */}
                    <div className="flex flex-col flex-1">
                        {/* 1st product div */}
                        <div className={ProductDivStyle}>
                            <div className=" product flex pl-5 self-start">
                                <img
                                    className="product_img w-[7rem]"
                                    src="https://cdn.shopify.com/s/files/1/0240/7285/products/WithinYourselfLongSleeveT-ShirtinElectricBlue04_360x.jpg?v=1642719824"
                                    alt="product_img"
                                />

                                <div className="disc flex items-start justify-between h-auto flex-col ml-6">
                                    <p>
                                        <b className="mr-2">ID:</b>123456789
                                    </p>
                                    <p>
                                        <b className="mr-2">Product:</b>Dazzing Sky Shirt
                                    </p>
                                    <p className="flex items-center justify-center">
                                        <b className="mr-2">Color:</b>
                                        <div className="colorSelect bg-sky-500 ml-1 w-[20px] h-[20px]"></div>
                                    </p>
                                    <p>
                                        <b className="mr-2">Size:</b>M
                                    </p>
                                </div>
                            </div>

                            {/*Price and Quantity Div*/}
                            <div className={PriceQuantityStyle}>
                                <Counter />
                                <p className="flex items-center justify-center text-4xl mt-3">
                                    <b>70$</b>
                                </p>
                            </div>
                        </div>

                        <hr className="mb-7 mt-7 mobile:mt-0" />
                        {/* 2nd product div */}
                        <div className={ProductDivStyle}>
                            <div className=" product flex pl-5 self-start">
                                <img
                                    className="product_img w-[7rem]"
                                    src="https://cdn.shopify.com/s/files/1/0240/7285/products/WithinYourselfLongSleeveT-ShirtinElectricBlue04_360x.jpg?v=1642719824"
                                    alt="product_img"
                                />

                                <div className="disc flex items-start justify-between h-auto flex-col ml-6">
                                    <p>
                                        <b className="mr-2">ID:</b>123456789
                                    </p>
                                    <p>
                                        <b className="mr-2">Product:</b>Dazzing Sky Shirt
                                    </p>
                                    <p className="flex items-center justify-center">
                                        <b className="mr-2">Color:</b>
                                        <div className="colorSelect bg-sky-500 ml-1 w-[20px] h-[20px]"></div>
                                    </p>
                                    <p>
                                        <b className="mr-2">Size:</b>M
                                    </p>
                                </div>
                            </div>

                            {/*Price and Quantity Div*/}
                            <div className={PriceQuantityStyle}>
                                {/* <Counter /> */}
                                <p className="flex items-center justify-center text-4xl mt-3">
                                    <b>70$</b>
                                </p>
                            </div>
                        </div>
                        <hr className="mb-7 mt-7 mobile:mt-0" />

                        {/* 3rd Product */}
                        <div className={ProductDivStyle}>
                            <div className=" product flex pl-5 self-start">
                                <img
                                    className="product_img w-[7rem]"
                                    src="https://cdn.shopify.com/s/files/1/0240/7285/products/WithinYourselfLongSleeveT-ShirtinElectricBlue04_360x.jpg?v=1642719824"
                                    alt="product_img"
                                />

                                <div className="disc flex items-start justify-between h-auto flex-col ml-6">
                                    <p>
                                        <b className="mr-2">ID:</b>123456789
                                    </p>
                                    <p>
                                        <b className="mr-2">Product:</b>Dazzing Sky Shirt
                                    </p>
                                    <p className="flex items-center justify-center">
                                        <b className="mr-2">Color:</b>
                                        <div className="colorSelect bg-sky-500 ml-1 w-[20px] h-[20px]"></div>
                                    </p>
                                    <p>
                                        <b className="mr-2">Size:</b>M
                                    </p>
                                </div>
                            </div>

                            {/*Price and Quantity Div*/}
                            <div className={PriceQuantityStyle}>
                                {/* <Counter /> */}
                                <p className="flex items-center justify-center text-4xl mt-3">
                                    <b>70$</b>
                                </p>
                            </div>
                        </div>
                        <hr className="mb-7 mt-7 mobile:mt-0" />
                    </div>
                    <div className="Summary flex-[0.4] flex flex-col items-center w-auto h-[40vh] border-2 border-red-600 rounded-md shadow-lg p-5 text-lg mobile:mb-6">
                        <h1 className="text-[2rem]">SUMMARY</h1>
                        <div className={SummaryItemStyle}>
                            <p>SubTotal:</p>
                            <p>$140</p>
                        </div>
                        <div className={SummaryItemStyle}>
                            <p>Shipping:</p>
                            <p>$10</p>
                        </div>
                        <div className={SummaryItemStyle}>
                            <p>Shipping Discount:</p>
                            <p>-$10</p>
                        </div>
                        <div className={SummaryItemStyle + " text-3xl font-bold"}>
                            <p>Total:</p>
                            <p>$140</p>
                        </div>
                    </div>
                </div>
                <div className="text-end pb-5 pt-0 pr-12">
                    <a
                        href="/cart"
                        className="inline-flex items-center justify-center h-12 px-3 mx-4 font-medium tracking-wide transition duration-200 rounded shadow-md text-white bg-red-700 hover:bg-white hover:text-red-800 hover:border-4 border-red-600 focus:shadow-outline focus:outline-none "
                        aria-label="checkout now"
                        title="checkout now"
                    >
                        Checkout Now
                        {/* <svg
                            className=" w-4 ml-2"
                            fill="currentColor"
                            viewBox="0 0 12 12"
                        >
                            <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
                        </svg> */}
                    </a>
                </div>
                {/* <NewsLetter /> */}
                <Footer />
            </div>
        </div>


    )
}

export default products
