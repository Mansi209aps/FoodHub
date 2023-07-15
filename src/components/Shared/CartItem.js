// import React from 'react';
// import { useCart } from 'react-use-cart';

// export const CartItem = (props) => {
//     const { addItem } = useCart();
//     return (
//         <div className='pb-5'>
//             <div a href="/" aria-label="View Item" >
//                 <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
//                     <img
//                         className="object-cover w-full h-56 md:h-64 xl:h-80"
//                         src={props.img}
//                         alt=""
//                     />
//                     <div className="absolute inset-0 px-6 py-4 transition-opacity duration-200 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
//                         <p className="mb-4 text-lg font-bold text-gray-100">
//                             {props.title}
//                         </p>
//                         <p className="text-sm tracking-wide text-gray-300">
//                             {props.desc}
//                             {props.price}
//                         </p>
//                     </div>
//                 </div>
//             </div >
//             <div className="food-card">
//                 <p>{props.price}</p>
//                 <select className='m-2 h-100 rounded'>
//                     <option value="half">Half</option>
//                     <option value="full">Full</option>
//                 </select>

//                 <div className="quantity-container">
//                     {/* <button>-</button>
//                     <span></span> */}
//                     <button
//                         onClick={() => addItem(props.item)}
//                     >
//                         +
//                     </button>
//                 </div>
//             </div>
//         </div >

//     )
// }

import React from 'react';
import { useCart } from 'react-use-cart';

export const CartItem = (props) => {
    const { addItem } = useCart();
    const { removeItem } = useCart();
    return (
        <div className='pb-5'>
            <div a href="/" aria-label="View Item">
                <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
                    <img
                        className="object-cover w-full h-56 md:h-64 xl:h-80"
                        src={props.img}
                        alt=""
                    />
                    <div className="absolute inset-0 px-6 py-4 transition-opacity duration-200 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                        <p className="mb-4 text-lg font-bold text-gray-100">
                            {props.title}
                        </p>
                        <p className="text-sm tracking-wide text-gray-300">
                            {props.desc}
                        </p>
                    </div>
                </div>
            </div>
            <div className="food-card my-3">
                <div className='inline-flex'>
                    <div className='text-2xl'>₹{props.price}</div>
                    <select className='mx-3 h-100 rounded'>
                        <option value="half">Half</option>
                        <option value="full">Full</option>
                    </select>

                    <div className="quantity-container ml-12">

                        {/* <div>{items.quantity}</div> */}
                        <button className='mx-3 px-3.5 py-2 bg-red-600 hover:bg-red-300'
                            onClick={() => removeItem(props.item)}
                        >
                            -
                        </button>
                        <button className='mx-3 px-3 py-2 bg-red-600 hover:bg-red-300'
                            onClick={() => addItem(props.item)}
                        >
                            +
                        </button>
                    </div>
                </div>
            </div>

        </div>
    );
};
