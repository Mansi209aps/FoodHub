import React from 'react';
import { useCart } from 'react-use-cart';

const Cart = () => {
    const {
        isEmpty,
        totalUniqueItems,
        items,
        totalItems,
        cartTotal,
        updateItemQuantity,
        removeItem,
        emptyCart,
    } = useCart();

    if (isEmpty) return <h1 className='text-center'>Your Cart is Empty</h1>;

    return (
        <div className='container mx-auto'>
            <div className='flex items-center justify-between mb-4'>
                <h1 className='text-2xl font-bold'>Item(s) Added ({totalItems})</h1>
                <button
                    className='bg-red-500 hover:bg-red-600 text-white py-2 px-4 mx-4 my-4 rounded'
                    onClick={emptyCart}
                >
                    Empty Cart
                </button>
            </div>

            <table className='mx-auto'>
                <thead>
                    <tr className='bg-gray-200'>
                        <th className='py-2 px-4'>Image</th>
                        <th className='py-2 px-4'>Title</th>
                        <th className='py-2 px-4'>Price</th>
                        <th className='py-2 px-4'>Quantity</th>
                        <th className='py-2 px-4'></th>
                    </tr>
                </thead>
                <tbody>
                    {items.map((item, index) => (
                        <tr key={index} className='border-b'>
                            <td className='flex items-center py-2 px-4'>
                                <img src={item.img} alt={item.title} className='h-12' />
                            </td>
                            <td className='py-2 px-4'>{item.title}</td>
                            <td className='py-2 px-4'>{item.price}</td>
                            <td className='py-2 px-4'>
                                <div className='flex items-center'>
                                    <button
                                        className='bg-red-600 hover:bg-red-300 text-sm px-2 py-1'
                                        onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
                                    >
                                        -
                                    </button>
                                    <input
                                        type='number'
                                        value={item.quantity}
                                        min={1}
                                        className='w-16 px-2 py-1 border mx-2'
                                        onChange={(e) =>
                                            updateItemQuantity(item.id, parseInt(e.target.value, 10))
                                        }
                                    />
                                    <button
                                        className='bg-red-600 hover:bg-red-300 text-sm px-2 py-1'
                                        onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
                                    >
                                        +
                                    </button>
                                </div>
                            </td>
                            <td className='py-2 px-4'>
                                <button
                                    className='bg-red-600 hover:bg-red-300 text-sm'
                                    onClick={() => removeItem(item.id)}
                                >
                                    🗑️
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className='flex items-center justify-between mt-4 mx-5'>
                <div className='items-center'>
                    <h2>Total Price: {cartTotal}</h2>
                </div>
                <a
                    href="/details"
                    className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide transition duration-200 rounded shadow-md text-white bg-red-500 hover:bg-white hover:text-red-800 hover:border-4 border-red-600 focus:shadow-outline focus:outline-none"
                    aria-label="Order now"
                    title="Order now"
                >
                    Order Now
                    <svg
                        className="w-4 ml-2"
                        fill="currentColor"
                        viewBox="0 0 12 12"
                    >
                        <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
                    </svg>
                </a>
            </div>
        </div>
    );
};

export default Cart;
