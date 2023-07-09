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
                            <CartItem img={item.img} title={item.title} desc={item.desc} key={index} />
                        )
                    })}
                </div>
            </div>
            {/* <Footer /> */}
        </>
    )
}

export default Gallery